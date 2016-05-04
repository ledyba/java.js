{-# LANGUAGE OverloadedStrings, GADTs #-}
module Java2js.Gen(compileKlass) where

import Data.List (intercalate)
import qualified Data.Map.Strict as M
import Java2js.Type
import Data.Text.Template (template, render)
import Java2js.GenFun
import Java2js.Mangle
import Java2js.JVM.ClassFile
import qualified Data.Set as S
import qualified Data.Text as T
import qualified Data.Text.Lazy as L
import qualified Data.ByteString.Lazy as BL
import Data.Text.Encoding (decodeUtf8)

klassTemplate = template "\
\Java.registerClass(\"${klassName}\", ${isInterface}, ${superKlassName}, [${interfaces}], function(klass,proto){\n\
\${fields}\n\
\${methods}\n\
\${invokeClinit}\
\});\n\
\"

initValue :: FieldType -> String
initValue SignedByte = "0"
initValue CharByte = "0"
initValue DoubleType = "0"
initValue FloatType = "0"
initValue IntType = "0"
initValue LongInt = "Java.Long.ZERO"
initValue ShortInt = "0"
initValue BoolType = "0"
initValue (ObjectType _) = "null"
initValue (Array _ _) = "null"

compileKlass :: Klass -> String
compileKlass klass = L.unpack $ render klassTemplate ctx
			where
				hasClinit = M.member "<clinit>()V" $ methods klass
				isInterface = S.member ACC_INTERFACE (accessFlags $ klassClass $ klass)
				ctx "interfaces" =  T.intercalate (T.pack ", ") (fmap (\f -> T.concat [T.pack "\"",(decodeUtf8 f),T.pack "\""]) (fmap BL.toStrict $ interfaces (klassClass klass)))
				ctx "klassName" = T.pack (klassName klass)
				ctx "isInterface" = T.pack $ if isInterface then "true" else "false"
				ctx "superKlassName" = T.pack $ if (isInterface || "" == (superKlass klass)) then "null" else concat ["\"",(superKlass klass),"\""]
				ctx "fields" = compileFields klass
				ctx "invokeClinit" = T.pack $ if hasClinit	then "klass[\"<clinit>()V\"].call(null);\n"
																										else ""
				ctx "methods" = T.pack (M.foldlWithKey (\l key (meth,code) -> l++stored meth++"[\""++key++"\"] = "++compileMethod klass (meth,code)++";\n") "" $ methods klass)
												where
													stored meth = if S.member ACC_STATIC maccs then "klass" else "proto"
																				where maccs = methodAccessFlags meth
				ctx s = error (show s)

compileFields klass = T.pack $ intercalate "\n" (fmap (\(name, (fld,constant)) -> stored fld++"[\""++name++"\"] = "++compileConstant' fld constant++";") (fields klass))
												where
													compileConstant' fld Nothing = (initValue (fieldSignature fld))
													compileConstant' _ (Just s) = compileConstant s
													stored fld = if S.member ACC_STATIC (fieldAccessFlags fld) then "klass" else "proto"

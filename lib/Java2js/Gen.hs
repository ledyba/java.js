{-# LANGUAGE OverloadedStrings #-}
module Java2js.Gen(compileKlass) where

import Data.List (intercalate)
import qualified Data.Map.Strict as M
import Java2js.Type
import Data.Text.Template (template, render)
import Java2js.GenFun
import Java2js.JVM.ClassFile
import qualified Data.Set as S
import qualified Data.Text as T
import qualified Data.Text.Lazy as L

klassTemplate = template "\
\(function(){\n\
\var klass = null;\n\
\Java[\"${klassName}\"] = function(){\n\
\if(klass === null){\n\
\klass = function(){};\n\
\var proto = klass.prototype = Object.create(Java[\"${superKlass}\"]().prototype);\n\
\proto.constructor = klass;\n\
\${fields}\n\
\${methods}\n\
\proto[\"__class__\"] = Java.mkClassObj(klass, \"${klassName}\");\n\
\${invokeClinit}\
\}\n\
\return klass;\n\
\}\n\
\})();\n\
\"

initValue :: FieldType -> String
initValue SignedByte = "0"
initValue CharByte = "0"
initValue DoubleType = "0"
initValue FloatType = "0"
initValue IntType = "0"
initValue LongInt = "0"
initValue ShortInt = "0"
initValue BoolType = "0"
initValue (ObjectType _) = "null"
initValue (Array _ _) = "null"

compileKlass :: Klass -> String
compileKlass klass = L.unpack $ render klassTemplate ctx
			where
				hasClinit = M.member "<clinit>()V" $ methods klass
				ctx "klassName" = T.pack (klassName klass)
				ctx "superKlass" = T.pack (superKlass klass)
				ctx "fields" = compileFields klass
				ctx "invokeClinit" = T.pack $ if hasClinit	then "klass[\"<clinit>()V\"].call(null);\n"
																										else ""
				ctx "methods" = T.pack (M.foldlWithKey (\l key (meth,code) -> l++stored meth++"[\""++key++"\"] = "++compileMethod klass (meth,code)++";\n") "" $ methods klass)
												where
													stored meth = if S.member ACC_STATIC maccs then "klass" else "proto"
																				where maccs = methodAccessFlags meth

compileFields klass = T.pack $ intercalate "\n" (fmap (\(name, (fld,constant)) -> stored fld++"[\""++name++"\"] = "++compileConstant' fld constant++";") (fields klass))
												where
													compileConstant' fld Nothing = (initValue (fieldSignature fld))
													compileConstant' _ (Just s) = compileConstant s
													stored fld = if S.member ACC_STATIC (fieldAccessFlags fld) then "klass" else "proto"

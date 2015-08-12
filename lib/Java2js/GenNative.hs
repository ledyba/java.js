{-# LANGUAGE OverloadedStrings #-}
module Java2js.GenNative(generateNativeKlass) where

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
\Java[\"${klassName}\"] = Java.mkNativeClass(function(){\n\
\\tvar klass = function(){};\n\
\\tvar proto = klass.prototype = Object.create(Java[\"${superKlass}\"]().prototype);\n\
\\tproto.constructor = klass;\n\
\klass.classObj = Java.mkClassObj(klass, \"${klassName}\");\n\
\${fields}\n\
\${methods}\n\
\\treturn klass;\n\
\});\n\
\"

methodTemplate = template "function(${args}){\n\t\t\t${self}\n\t\t}"

isVisibleMethod meth = not $ S.member ACC_PRIVATE (methodAccessFlags meth)
isStaticMethod meth = S.member ACC_STATIC (methodAccessFlags meth)

isVisibleField meth = not $ S.member ACC_PRIVATE (fieldAccessFlags meth)
isStaticField fld = S.member ACC_STATIC (fieldAccessFlags fld)

mangleArgs (MethodSignature args _) = map (uncurry mangle) (zip (map show [0..]) args)
														where
															mangle :: String -> ArgumentSignature -> String
															mangle i SignedByte = "sb"++i
															mangle i CharByte = "ch"++i
															mangle i DoubleType = "db"++i
															mangle i FloatType = "flt"++i
															mangle i IntType = "i"++i
															mangle i LongInt = "l"++i
															mangle i ShortInt = "sh"++i
															mangle i BoolType = "b"++i
															mangle i (ObjectType cls) = "ref"++i
															mangle i (Array _ ft) = ("arr_"++mangle i ft)

generateNativeMethod :: (Method Direct, Maybe a) -> String
generateNativeMethod (_, Nothing) = "null"
generateNativeMethod (meth, _) = L.unpack $ render methodTemplate ctx
										where
											ctx "self" = T.pack $ if isStaticMethod meth then "var self = null;"
												                       else "var self = this;"
											ctx "args" = T.pack $ intercalate "," (mangleArgs (methodSignature meth))


generateNativeKlass :: Klass -> String
generateNativeKlass klass = L.unpack $ render klassTemplate ctx
			where
				ctx "klassName" = T.pack (klassName klass)
				ctx "superKlass" = T.pack (superKlass klass)
				ctx "fields" = compileFields klass
				ctx "methods" = T.pack (M.foldlWithKey (\l key (meth,code) -> l++"\t\t"++stored meth++"[\""++key++"\"] = "++generateNativeMethod (meth,code)++";\n") "" visibleMethods)
												where
													visibleMethods = M.filter (isVisibleMethod.fst) (methods klass)
													stored meth = if isStaticMethod meth then "klass" else "proto"

compileFields klass = T.pack $ intercalate "\n" (fmap (\(name, (fld,constant)) -> "\t\t"++stored fld++"[\""++name++"\"] = "++compileConstant' constant++";") $ filter (isVisibleField.fst.snd) $ fields klass)
												where
													compileConstant' Nothing = "null"
													compileConstant' (Just s) = compileConstant s
													stored fld = if isStaticField fld then "klass" else "proto"

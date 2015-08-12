{-# LANGUAGE OverloadedStrings #-}
module Java2js.GenNative(generateNativeKlass) where

import Data.List (intercalate)
import qualified Data.Map.Strict as M
import Java2js.Type
import Data.Text.Template (template, render)
import Java2js.GenFun
import Java2js.Mangle
import Java2js.JVM.ClassFile
import Java2js.JVM.Converter
import qualified Data.Set as S
import qualified Data.Text as T
import Data.Text.Encoding (decodeUtf8)
import qualified Data.Text.Lazy as L
import qualified Data.ByteString as B
import qualified Data.ByteString.Lazy as BL

klassTemplate = template "\
\Java[\"${klassName}\"] = Java.mkNativeClass(function(){\n\
\\tvar klass = function(){};\n\
\\tvar proto = klass.prototype = Object.create(Java[\"${superKlass}\"]().prototype);\n\
\\tproto.constructor = klass;\n\
\\tklass.classObj = Java.mkClassObj(klass, \"${klassName}\");\n\
\${fields}\n\
\${methods}\n\
\\treturn klass;\n\
\});\n\
\"

methodTemplate = template "function(${args}){\n\t\t\t${self}\n${impl}\t\t}"

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

renderMethod meth impl = L.unpack $ render methodTemplate ctx
									where
										ctx "self" = T.pack $ if isStaticMethod meth then "var self = null;"
																						 else "var self = this;"
										ctx "args" = T.pack $ intercalate "," (mangleArgs (methodSignature meth))
										ctx "impl" = T.pack impl
generateNativeMethod :: (Method Direct, Maybe a) -> String
generateNativeMethod (meth, Nothing) =
						if S.member ACC_NATIVE (methodAccessFlags meth) then
							renderMethod meth "\t\t\t/* Native Method */\n\t\t\tthrow 'NotImplemented.';\n"
						else
							"null"
generateNativeMethod (meth, _) = renderMethod meth "\t\t\tthrow 'NotImplemented.';\n"


generateNativeKlass :: Class Direct -> String
generateNativeKlass klass = L.unpack $ render klassTemplate ctx
			where
				ctx "klassName" = decodeUtf8 (BL.toStrict $ thisClass klass)
				ctx "superKlass" = decodeUtf8 (BL.toStrict $ superClass klass)
				ctx "fields" = compileFields klass
				ctx "methods" = T.pack (foldl (\l meth -> l++"\t\t"++stored meth++"[\""++mangleMethod meth++"\"] = "++generateNativeMethod (meth,methodCode klass (methodName meth))++";\n") "" visibleMethods)
												where
													visibleMethods = filter isVisibleMethod (classMethods klass)
													stored meth = if isStaticMethod meth then "klass" else "proto"

compileFields :: Class Direct -> T.Text
compileFields klass = T.pack $ intercalate "\n" (fmap (\fld -> "\t\t"++stored fld++"["++(show (fieldName fld))++"] = "++compileConstant' (fieldConstant klass (fieldName fld))++";") $ filter isVisibleField $ classFields klass)
												where
													compileConstant' Nothing = "null"
													compileConstant' (Just s) = compileConstant s
													stored fld = if isStaticField fld then "klass" else "proto"

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
import qualified Data.ByteString.Char8 as B8
import qualified Data.ByteString as B
import qualified Data.ByteString.Lazy as BL

klassTemplate = template "\
\Java[\"${klassName}\"] = Java.mkNativeClass(function(klass){\n\
\\tvar proto = klass.prototype = ${proto};\n\
\\tproto.constructor = klass;\n\
\\tproto[\"__class__\"] = Java.mkClassObj(klass, \"${klassName}\");\n\
\${fields}\n\
\${methods}\n\
\});\n\
\"

methodTemplate = template "function(${args}){\n\t\t${self}\n${impl}\t}"

isVisibleMethod meth = and [ S.member ACC_PUBLIC (methodAccessFlags meth), methodName meth /= "<clinit>"]
isStaticMethod meth = S.member ACC_STATIC (methodAccessFlags meth)

isVisibleField meth = S.member ACC_PUBLIC (fieldAccessFlags meth)
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
										ctx "impl" = impl

mangleClassMethod cls meth = T.concat [decodeUtf8 $ BL.toStrict $ thisClass cls,T.pack "#",T.pack $ mangleMethod meth]

generateNativeMethod :: Class Direct -> (Method Direct, Maybe a) -> String
generateNativeMethod cls (meth, Nothing) =
						if S.member ACC_NATIVE (methodAccessFlags meth) then
							renderMethod meth $ T.concat [T.pack "\t\t/* Native Method */\n\t\tthrow new Error(\"NotImplemented: ",mangleClassMethod cls meth, T.pack "\");\n"]
						else
							"null"
generateNativeMethod cls (meth, _) = renderMethod meth $ T.concat ["\t\tthrow new Error(\"NotImplemented: ",mangleClassMethod cls meth, "\");\n"]

extractDepsFromType :: FieldType -> [String]
extractDepsFromType (ObjectType cls) = [cls]
extractDepsFromType (Array _ ft) = extractDepsFromType ft
extractDepsFromType _ = []

generateNativeKlass :: Class Direct -> (String, [String])
generateNativeKlass klass = (L.unpack $ render klassTemplate ctx, deps)
			where
				deps = concat [superClassDep, visibleFields >>= extractDepsFromField, classMethods klass >>= extractMethodDeps]
				superClassDep = if name == [] then [] else [name]
					where name = T.unpack superClassName
				visibleFields = filter isVisibleField (classFields klass)
				visibleMethods = filter isVisibleMethod (classMethods klass)
				extractDepsFromField fld = extractDepsFromType $ fieldSignature fld
				extractMethodDeps meth = retDeps ++ (argts >>= extractDepsFromType)
					where
						MethodSignature argts rts = methodSignature meth
						retDeps = case rts of
												ReturnsVoid -> []
												Returns t -> extractDepsFromType t
				superClassName = decodeUtf8 $ BL.toStrict $ superClass klass
				ctx "klassName" = decodeUtf8 (BL.toStrict $ thisClass klass)
				ctx "proto" = T.pack $ if (0 == T.length superClassName) then "{}" else "Object.create(Java["++(show superClassName)++"]().prototype)"
				ctx "fields" = compileFields klass visibleFields
				ctx "methods" = T.pack (foldl (\l meth -> l++"\t"++stored meth++"[\""++mangleMethod meth++"\"] = "++generateNativeMethod klass (meth,methodCode klass (methodName meth))++";\n") "" visibleMethods)
												where
													stored meth = if isStaticMethod meth then "klass" else "proto"

compileFields klass visibleFields = T.pack $ intercalate "\n" (fmap (\fld -> "\t"++stored fld++"["++(show (fieldName fld))++"] = "++compileConstant' (fieldConstant klass (fieldName fld))++";") visibleFields)
												where
													compileConstant' Nothing = "null"
													compileConstant' (Just s) = compileConstant s
													stored fld = if isStaticField fld then "klass" else "proto"

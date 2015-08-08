{-# LANGUAGE OverloadedStrings #-}
module Main where

import JVM.Common ()
import JVM.Converter
import JVM.ClassFile
import JVM.Dump
import Java2js.Convert
import JVM.Assembler
import qualified Data.Map.Strict as M
import qualified Data.Set as S
import Data.ByteString.Lazy.Char8 (unpack)

wrapWithFunJS str = "(function(){\n"++str++"})();\n"

compileFun :: Klass -> (MethodSignature, Maybe Code) -> String
compileFun klass (_, Nothing) = "function(){}";
compileFun klass (_, code) = "function(){}";

tryCompileFun :: Klass -> Maybe(MethodSignature, Maybe Code) -> String
tryCompileFun klass Nothing = "function(){}"
tryCompileFun klass (Just body) = compileFun klass body

toJS :: Klass -> String
toJS klass =
				wrapWithFunJS $
					"var klass = "++tryCompileFun klass (M.lookup "<clinit>" (staticMethods klass))++";\n"++
					"klass.prototype = Java[\""++superKlass klass++"\"];\n"++
					"Java[\""++klassName klass++"\"] = klass;\n"++
					(M.foldlWithKey (\l key meth -> l++"klass[\""++key++"\"] = "++compileFun klass meth++";\n") "" $ M.filterWithKey (\key _ -> not $ key == "<clinit>") (staticMethods klass)) ++
					(foldl (\l f -> l ++ "Java[\""++f++"\"] = null;\n") "" $ staticFields klass) ++
					"(klass[\"<clinit>\"]).call(klass);\n"

data Klass = Klass {
		klassName::String,
		superKlass::String,
		fields :: [String],
		staticFields :: [String],
		methods :: M.Map String (MethodSignature, Maybe Code),
		staticMethods :: M.Map String (MethodSignature, Maybe Code)
	} deriving (Show)

loadKlass cls = Klass {
	klassName = unpack (thisClass cls),
	superKlass = unpack (superClass cls),
	staticFields = map getFieldName $ filter (\m -> isStatic (fieldAccessFlags m)) $ classFields cls,
	fields =  map getFieldName $ filter (\m -> not $ isStatic (fieldAccessFlags m)) $ classFields cls,
	staticMethods = M.fromList $ map extMeth $ filter (\m -> isStatic (methodAccessFlags m)) $ classMethods cls,
	methods = M.fromList $ map extMeth $ filter (\m -> not $ isStatic (methodAccessFlags m)) $ classMethods cls
}
	where
		isStatic accs = S.member ACC_STATIC accs
		getFieldName f = unpack $ fieldName f
		extMeth meth = (unpack $ methodName meth, (methodSignature meth, extCode meth))
		extCode :: Method Direct -> Maybe Code
		extCode meth = fmap decodeMethod (attrByName meth "Code")


main = do
	cls <- parseClassFile "sample/Hello.class"
	let klass = loadKlass cls
	print klass
	putStrLn $ toJS klass

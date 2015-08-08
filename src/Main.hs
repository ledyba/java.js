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

isStaticField :: Klass -> String -> Bool
isStaticField klass m = elem m (staticFields klass)

compileBody :: Klass -> Instruction -> String
compileBody klass (BIPUSH w) = "stack.push("++show w++");"
compileBody klass (PUTSTATIC idx) = "Java[\""++klsName++"\"][\""++fldName++"\"] = stack.pop();"
	where
		pool = constantPool klass
		Just constant = M.lookup idx pool
		CField kls nt = constant
		klsName = unpack kls
		fldName = unpack (ntName nt)

compileBody klass (GETSTATIC idx) = "stack.push(Java[\""++klsName++"\"][\""++fldName++"\"]);";
	where
		pool = constantPool klass
		Just constant = M.lookup idx pool
		CField kls nt = constant
		klsName = unpack kls
		fldName = unpack (ntName nt)
		static = isStaticField klass fldName

compileBody klass RETURN = "return;"
compileBody klass code = (show code)

compileFun :: Klass -> (MethodSignature, Maybe Code) -> String
compileFun klass (_, Nothing) = "function(){}";
compileFun klass (_, (Just code)) = "function(){\nvar stack = [];\nvar local=[this, null, null, null];\n" ++ (foldl (\r i -> r ++ i ++ "\n") "" (fmap (compileBody klass) (codeInstructions code))) ++"}";

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
		staticMethods :: M.Map String (MethodSignature, Maybe Code),
		constantPool :: Pool Direct
	} deriving (Show)

loadKlass cls = Klass {
	klassName = unpack (thisClass cls),
	superKlass = unpack (superClass cls),
	staticFields = map getFieldName $ filter (\m -> isStatic (fieldAccessFlags m)) $ classFields cls,
	fields =  map getFieldName $ filter (\m -> not $ isStatic (fieldAccessFlags m)) $ classFields cls,
	staticMethods = M.fromList $ map extMeth $ filter (\m -> isStatic (methodAccessFlags m)) $ classMethods cls,
	methods = M.fromList $ map extMeth $ filter (\m -> not $ isStatic (methodAccessFlags m)) $ classMethods cls,
	constantPool = constsPool cls
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

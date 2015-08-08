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

compileConstant (CString str) = "Java.mkString(\"" ++ unpack str ++"\")"
popStacks 0 = ("","[]")
popStacks n = (foldl (++) "" $ fmap (\i -> "var i"++show i++"=stack.pop();") [(n-1)..0], "["++(foldl (++) "" $ fmap (\i -> "i"++show i++",") [0..n-1])++"]")
showImm I0 = "0"
showImm I1 = "1"
showImm I2 = "2"
showImm I3 = "3"

compileBody :: Klass -> Instruction -> String
compileBody klass (BIPUSH w) = "stack.push("++show w++");"
compileBody klass (PUTSTATIC idx) = "Java[\""++klsName++"\"][\""++fldName++"\"] = stack.pop();"
	where
		pool = constantPool klass
		Just constant = M.lookup idx pool
		CField kls nt = constant
		klsName = unpack kls
		fldName = unpack (ntName nt)

compileBody klass (GETSTATIC idx) = "stack.push(Java[\""++klsName++"\"][\""++fldName++"\"]);"
	where
		pool = constantPool klass
		Just constant = M.lookup idx pool
		CField kls nt = constant
		klsName = unpack kls
		fldName = unpack (ntName nt)

compileBody klass (INVOKEVIRTUAL idx) = pops++"var self = stack.pop(); stack.push(Java[\""++klsName++"\"][\""++fldName++"\"].apply(self, "++args++"));"
	where
		pool = constantPool klass
		Just constant = M.lookup idx pool
		(pops, args) = popStacks 1
		CMethod kls nt = constant
		klsName = unpack kls
		fldName = unpack (ntName nt)
--
compileBody klass (INVOKESPECIAL idx) = pops++"var self = stack.pop(); stack.push(Java[\""++klsName++"\"][\""++fldName++"\"].apply(self, "++args++"));"
	where
		pool = constantPool klass
		Just constant = M.lookup idx pool
		(pops, args) = popStacks 0
		CMethod kls nt = constant
		klsName = unpack kls
		fldName = unpack (ntName nt)

compileBody klass (LDC1 idx) = "stack.push("++compileConstant constant++");"
	where
		pool = constantPool klass
		Just constant = M.lookup (fromIntegral idx) pool

compileBody klass (ALOAD_ idx) = "stack.push(local["++showImm idx++"]);"
compileBody klass (ILOAD_ idx) = "stack.push(local["++showImm idx++"]);"
compileBody klass (LLOAD_ idx) = "stack.push(local["++showImm idx++"]);"
compileBody klass (FLOAD_ idx) = "stack.push(local["++showImm idx++"]);"
compileBody klass (DLOAD_ idx) = "stack.push(local["++showImm idx++"]);"
compileBody klass (ICONST_0) = "stack.push(0);"
compileBody klass (ICONST_1) = "stack.push(1);"
compileBody klass (ICONST_2) = "stack.push(2);"
compileBody klass (ICONST_3) = "stack.push(3);"
compileBody klass (ICONST_4) = "stack.push(4);"
compileBody klass (ICONST_M1) = "stack.push(-1);"
compileBody klass IRETURN = "return stack.pop();"
compileBody klass RETURN = "return;"
compileBody klass code = show code

compileFun :: Klass -> (MethodSignature, Maybe Code) -> String
compileFun klass (_, Nothing) = "function(){}";
compileFun klass (_, (Just code)) = "function(){\nvar stack = [];\nvar local=[this, null, null, null];\n" ++ (foldl (\r i -> r ++ i ++ "\n") "" (fmap (compileBody klass) (codeInstructions code))) ++"}";

tryCompileFun :: Klass -> Maybe(MethodSignature, Maybe Code) -> String
tryCompileFun klass Nothing = "function(){}"
tryCompileFun klass (Just body) = compileFun klass body

toJS :: Klass -> String
toJS klass =
				wrapWithFunJS $
					"var klass = "++tryCompileFun klass (M.lookup "<init>" (methods klass))++";\n"++
					"klass.prototype = Java[\""++superKlass klass++"\"];\n"++
					"Java[\""++klassName klass++"\"] = klass;\n"++
					(M.foldlWithKey (\l key meth -> l++"klass[\""++key++"\"] = "++compileFun klass meth++";\n") "" $ (staticMethods klass)) ++
					(M.foldlWithKey (\l key meth -> l++"klass[\""++key++"\"] = "++compileFun klass meth++";\n") "" $ M.filterWithKey (\key _ -> not $ key == "<init>") (methods klass)) ++
					(foldl (\l f -> l ++ "klass[\""++f++"\"] = null;\n") "" $ staticFields klass) ++
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

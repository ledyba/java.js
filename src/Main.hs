{-# LANGUAGE OverloadedStrings #-}
module Main where

import Java2js.JVM.Common ()
import Java2js.JVM.Converter
import Java2js.JVM.ClassFile
--import Java2js.Convert
import Java2js.JVM.Assembler
import qualified Data.Map.Strict as M
import qualified Data.Set as S
import Data.List (intercalate)
import Data.ByteString.Lazy.Char8 (unpack)

wrapWithFunJS str = "(function(){\n"++str++"})();\n"

returnsValue :: MethodSignature -> Bool
returnsValue (MethodSignature _ ReturnsVoid) = False
returnsValue (MethodSignature _ _) = True

mangleMethod name (MethodSignature args ret) = (unpack name) ++ "("++(intercalate "," (fmap sigToSym args))++")"++retToSym ret
																								where
																									sigToSym :: FieldType -> String
																									sigToSym SignedByte = "B"
																									sigToSym CharByte = "C"
																									sigToSym DoubleType = "D"
																									sigToSym FloatType = "F"
																									sigToSym IntType = "I"
																									sigToSym LongInt = "J"
																									sigToSym ShortInt = "S"
																									sigToSym BoolType = "Z"
																									sigToSym (ObjectType cls) = 'L':cls++";"
																									sigToSym (Array _ ft) = '[':(sigToSym ft)
																									retToSym :: ReturnSignature -> String
																									retToSym ReturnsVoid = "V"
																									retToSym (Returns v) = sigToSym v

isStaticField :: Klass -> String -> Bool
isStaticField klass m = elem m (staticFields klass)

compileConstant :: Constant Direct -> String
compileConstant (CString str) = "(\"" ++ unpack str ++"\")"
popStacks 0 = ("","[]")
popStacks n = (foldl (++) "" $ fmap (\i -> "var i"++show i++"=stack.pop();") [(n-1)..0], "["++(foldl (++) "" $ fmap (\i -> "i"++show i++",") [0..n-1])++"]")
showImm I0 = "0"
showImm I1 = "1"
showImm I2 = "2"
showImm I3 = "3"

compileInst :: Klass -> Int -> Instruction -> String
compileInst klass _ (BIPUSH w) = "stack.push("++show w++");"
compileInst klass _ (PUTSTATIC idx) = "Java[\""++klsName++"\"][\""++fldName++"\"] = stack.pop();"
	where
		pool = constantPool klass
		Just constant = M.lookup idx pool
		CField kls nt = constant
		klsName = unpack kls
		fldName = unpack (ntName nt)

compileInst klass _ (GETSTATIC idx) = "stack.push(Java[\""++klsName++"\"][\""++fldName++"\"]);"
	where
		pool = constantPool klass
		Just constant = M.lookup idx pool
		CField kls nt = constant
		klsName = unpack kls
		fldName = unpack (ntName nt)

compileInst klass _ (INVOKEVIRTUAL idx) =
					pops++"var self = stack.pop(); "++
					if returns then "stack.push(Java[\""++klsName++"\"][\""++fldName++"\"].apply(self, "++args++"));"
										else "Java[\""++klsName++"\"][\""++fldName++"\"].apply(self, "++args++");"
	where
		pool = constantPool klass
		Just constant = M.lookup idx pool
		MethodSignature margs mret = ntSignature nt
		returns = returnsValue (ntSignature nt)
		(pops, args) = popStacks (length margs)
		CMethod kls nt = constant
		klsName = unpack kls
		fldName = mangleMethod (ntName nt) (ntSignature nt)
--
compileInst klass _ (INVOKESPECIAL idx) =
					pops++"var self = stack.pop(); "++
					if returns then "stack.push(Java[\""++klsName++"\"][\""++fldName++"\"].apply(self, "++args++"));"
										else "Java[\""++klsName++"\"][\""++fldName++"\"].apply(self, "++args++");"
	where
		pool = constantPool klass
		Just constant = M.lookup idx pool
		MethodSignature margs mret = ntSignature nt
		returns = returnsValue (ntSignature nt)
		(pops, args) = popStacks (length margs)
		CMethod kls nt = constant
		klsName = unpack kls
		fldName = unpack (ntName nt)

compileInst klass _ (LDC1 idx) = "stack.push("++compileConstant constant++");"
	where
		pool = constantPool klass
		Just constant = M.lookup (fromIntegral idx) pool

compileInst klass _ (ALOAD_ idx) = "stack.push(local["++showImm idx++"]);"
compileInst klass _ (ILOAD_ idx) = "stack.push(local["++showImm idx++"]);"
compileInst klass _ (LLOAD_ idx) = "stack.push(local["++showImm idx++"]);"
compileInst klass _ (FLOAD_ idx) = "stack.push(local["++showImm idx++"]);"
compileInst klass _ (DLOAD_ idx) = "stack.push(local["++showImm idx++"]);"
compileInst klass _ (ICONST_0) = "stack.push(0);"
compileInst klass _ (ICONST_1) = "stack.push(1);"
compileInst klass _ (ICONST_2) = "stack.push(2);"
compileInst klass _ (ICONST_3) = "stack.push(3);"
compileInst klass _ (ICONST_4) = "stack.push(4);"
compileInst klass _ (ICONST_M1) = "stack.push(-1);"
compileInst klass _ IRETURN = "return stack.pop();"
compileInst klass _ LRETURN = "return stack.pop();"
compileInst klass _ FRETURN = "return stack.pop();"
compileInst klass _ DRETURN = "return stack.pop();"
compileInst klass _ ARETURN = "return stack.pop();"
compileInst klass _ RETURN = "return;"
compileInst klass _ code = show code

compileFun :: Klass -> (MethodSignature, Maybe Code) -> String
compileFun klass (_, Nothing) = "function(){}";
compileFun klass (_, (Just code)) =
													"function(){\n\tvar stack = [];\n\tvar local=[this, null, null, null];\n\tvar pc=0;\n\twhile(true){\n\t\tswitch(pc){\n\t\tcase 0:\n"
													++ (intercalate "\n" (fmap (\(addr,inst) -> "\t\t\t"++compileInst klass addr inst) (codeInstructions code))) ++"\n\t\t}\n\t}\n}";

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

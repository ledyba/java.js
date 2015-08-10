{-# LANGUAGE OverloadedStrings #-}
module Java2js.GenFun(compileMethod) where
--
import Java2js.Type
import Java2js.JVM.Assembler
import Java2js.JVM.ClassFile
import Data.ByteString.Lazy.Char8 (unpack, ByteString)
import Data.Text.Template (template, render, Context(..))
import Data.List (intercalate)
import qualified Data.Map.Strict as M
import qualified Data.Text as T
import qualified Data.Text.Lazy as L

returnsValue :: MethodSignature -> Bool
returnsValue (MethodSignature _ ReturnsVoid) = False
returnsValue (MethodSignature _ _) = True

mangleMethod :: ByteString -> MethodSignature -> String
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
--
isStaticField :: Klass -> String -> Bool
isStaticField klass m = elem m (staticFields klass)

compileConstant :: Constant Direct -> String
compileConstant (CString str) = "(\"" ++ unpack str ++"\")"

popStacks :: Int -> (String, String)
popStacks 0 = ("","[]")
popStacks n = (foldl (++) "" $ fmap (\i -> "var i"++show i++"=stack.pop();") [(n-1)..0], "["++(foldl (++) "" $ fmap (\i -> "i"++show i++",") [0..n-1])++"]")

showImm :: IMM -> String
showImm I0 = "0"
showImm I1 = "1"
showImm I2 = "2"
showImm I3 = "3"
---

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
					if returns then "stack.push(self[\""++fldName++"\"].apply(self, "++args++"));"
										else "self[\""++fldName++"\"].apply(self, "++args++");"
	where
		pool = constantPool klass
		Just constant = M.lookup idx pool
		MethodSignature margs mret = ntSignature nt
		returns = returnsValue (ntSignature nt)
		(pops, args) = popStacks (length margs)
		CMethod kls nt = constant
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
---

methodTemplate = template "\
\function(){\n\
\\tvar stack = [];\n\
\\tvar local=[this, null, null, null];\n\
\\tvar pc=0;\n\
\\twhile(true){\n\
\\t\ttry{\n\
\\t\tswitch(pc){\n\
\${body}\n\
\\t\t}}catch(e){\n\
\\t\t}\n\
\\t}\n\
\}\
\"

compileMethod :: Klass -> (MethodSignature, Maybe Code) -> String
compileMethod klass (_, Nothing) = "function(){}";
compileMethod klass (_, (Just code)) = L.unpack $ render methodTemplate ((T.pack).ctx)
	where
		ctx "body" = (intercalate "\n" (fmap (\(addr,inst) -> "\t\t\tcase "++show addr++": pc = "++show addr++";"++compileInst klass addr inst) (codeInstructions code)))

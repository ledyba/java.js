{-# LANGUAGE OverloadedStrings #-}
module Java2js.GenFun(compileMethod) where
--
import Java2js.Type
import Java2js.Mangle
import Java2js.JVM.Assembler
import Java2js.JVM.ClassFile
import Data.ByteString.Lazy.Char8 (unpack, ByteString)
import Data.Text.Template (template, render)
import Data.List (intercalate)
import qualified Data.Map.Strict as M
import qualified Data.Text as T
import qualified Data.Text.Lazy as L

returnsValue :: MethodSignature -> Bool
returnsValue (MethodSignature _ ReturnsVoid) = False
returnsValue (MethodSignature _ _) = True

--
compileConstant :: Constant Direct -> String
compileConstant (CString str) = "(\"" ++ unpack str ++"\")"
compileConstant (CDouble v) = "(" ++ show v ++")"
compileConstant (CInteger v) =  "(" ++ show v ++")"
compileConstant (CFloat v) =  "(" ++ show v ++")"
compileConstant (CLong v) =  "(" ++ show v ++")"
compileConstant (CDouble v) =  "(" ++ show v ++")"

popStacks :: [FieldType] -> (String, String)
popStacks [] = ("","[]")
popStacks fields = (foldl (++) "" $ fmap (uncurry pop) (reverse $ zip [0..] fields), "["++(foldl (++) "" $ fmap (\i -> "i"++show i++",") [0..(length fields)-1])++"]")
						where
							pop :: Int -> FieldType -> String
							pop i LongInt = "var i"++show i++"=stack.pop();stack.pop();"
							pop i DoubleType = "var i"++show i++"=stack.pop();stack.pop();"
							pop i _ = "var i"++show i++"=stack.pop();"

pushRet :: ReturnSignature -> String
pushRet (Returns LongInt) = "stack.push(null);"
pushRet (Returns DoubleType) = "stack.push(null);"
pushRet _ = ""
showImm :: IMM -> String
showImm I0 = "0"
showImm I1 = "1"
showImm I2 = "2"
showImm I3 = "3"

showCmp C_LT a b = a++"<"++b
showCmp C_LE a b = a++"<="++b
showCmp C_GT a b = a++">"++b
showCmp C_GE a b = a++"<="++b
showCmp C_EQ a b = a++"=="++b
showCmp C_NE a b = a++"!="++b

---

compileInst :: Klass -> Int -> Instruction -> String
compileInst _ _ (BIPUSH w) = "stack.push("++show w++");"
compileInst _ _ (SIPUSH w) = "stack.push("++show w++");"
compileInst klass _ (LDC1 idx) = "stack.push("++compileConstant constant++");"
	where
		pool = constantPool klass
		Just constant = M.lookup (fromIntegral idx) pool
compileInst klass _ (LDC2 idx) = "stack.push(null); stack.push("++compileConstant constant++");"
	where
		pool = constantPool klass
		Just constant = M.lookup (fromIntegral idx) pool
compileInst klass _ (LDC2W idx) = "stack.push(null); stack.push("++compileConstant constant++");"
	where
		pool = constantPool klass
		Just constant = M.lookup (fromIntegral idx) pool
--
compileInst _ _ (ICONST_0) = "stack.push(0);"
compileInst _ _ (ICONST_1) = "stack.push(1);"
compileInst _ _ (ICONST_2) = "stack.push(2);"
compileInst _ _ (ICONST_3) = "stack.push(3);"
compileInst _ _ (ICONST_4) = "stack.push(4);"
compileInst _ _ (ICONST_M1) = "stack.push(-1);"
compileInst _ _ (LCONST_0) = "stack.push(null);stack.push(0);"
compileInst _ _ (LCONST_1) = "stack.push(null);stack.push(1);"
compileInst _ _ (FCONST_0) = "stack.push(0);"
compileInst _ _ (FCONST_1) = "stack.push(1);"
compileInst _ _ (FCONST_2) = "stack.push(2);"
compileInst _ _ (DCONST_0) = "stack.push(null);stack.push(0);"
compileInst _ _ (DCONST_1) = "stack.push(null);stack.push(1);"
compileInst _ _ (ACONST_NULL) = "stack.push(null);"
compileInst _ _ (POP) = "stack.pop();"
compileInst _ _ (POP2) = "stack.pop();"
compileInst _ _ (DUP) = "stack.push(stack[stack.length-1]);"
compileInst _ _ (DUP2) = "stack.push(stack[stack.length-2]);stack.push(stack[stack.length-2]);"
compileInst _ _ (DUP_X1) = "stack.push(stack[stack.length-2]);"
compileInst _ _ (DUP_X2) = "stack.push(stack[stack.length-3]);"
compileInst _ _ (DUP2_X1) = "stack.push(stack[stack.length-3]);stack.push(stack[stack.length-3]);"
compileInst _ _ (DUP2_X2) = "stack.push(stack[stack.length-4]);stack.push(stack[stack.length-4]);"
compileInst _ _ (SWAP) = "var tmp = stack[stack.length-1]; stack[stack.length-1] = stack[stack.length-2]; stack[stack.length-2]=tmp;"

--
compileInst _ _ (ALOAD idx) = "stack.push(local["++show idx++"]);"
compileInst _ _ (ILOAD idx) = "stack.push(local["++show idx++"]);"
compileInst _ _ (LLOAD idx) = "stack.push(null);stack.push(local["++show idx++"]);"
compileInst _ _ (FLOAD idx) = "stack.push(local["++show idx++"]);"
compileInst _ _ (DLOAD idx) = "stack.push(null);stack.push(local["++show idx++"]);"
compileInst _ _ (ALOAD_ idx) = "stack.push(local["++showImm idx++"]);"
compileInst _ _ (ILOAD_ idx) = "stack.push(local["++showImm idx++"]);"
compileInst _ _ (LLOAD_ idx) = "stack.push(null);stack.push(local["++showImm idx++"]);"
compileInst _ _ (FLOAD_ idx) = "stack.push(local["++showImm idx++"]);"
compileInst _ _ (DLOAD_ idx) = "stack.push(null);stack.push(local["++showImm idx++"]);"

compileInst _ _ (ASTORE idx) = "local["++show idx++"]=stack.pop();"
compileInst _ _ (ISTORE idx) = "local["++show idx++"]=stack.pop();"
compileInst _ _ (LSTORE idx) = "local["++show idx++"]=stack.pop();stack.pop();"
compileInst _ _ (FSTORE idx) = "local["++show idx++"]=stack.pop();"
compileInst _ _ (DSTORE idx) = "local["++show idx++"]=stack.pop();stack.pop();"
compileInst _ _ (ASTORE_ idx) = "local["++showImm idx++"]=stack.pop();"
compileInst _ _ (ISTORE_ idx) = "local["++showImm idx++"]=stack.pop();"
compileInst _ _ (LSTORE_ idx) = "local["++showImm idx++"]=stack.pop();stack.pop();"
compileInst _ _ (FSTORE_ idx) = "local["++showImm idx++"]=stack.pop();"
compileInst _ _ (DSTORE_ idx) = "local["++showImm idx++"]=stack.pop();stack.pop();"

---
compileInst _ _ (IINC localNum delta) = "local["++show localNum++"]+="++show delta++";"

compileInst _ _ (IADD) = "stack.push(stack.pop()+stack.pop());"
compileInst _ _ (LADD) = "var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); stack.push(null); stack.push(a+b);"
compileInst _ _ (FADD) = "stack.push(stack.pop()+stack.pop());"
compileInst _ _ (DADD) = "var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); stack.push(null); stack.push(a+b);"

compileInst _ _ (IMUL) = "stack.push(stack.pop()*stack.pop());"
compileInst _ _ (LMUL) = "var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); stack.push(null); stack.push(a*b);"
compileInst _ _ (FMUL) = "stack.push(stack.pop()*stack.pop());"
compileInst _ _ (DMUL) = "var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); stack.push(null); stack.push(a*b);"

compileInst _ _ (ISUB) = "var a = stack.pop(); var b = stack.pop(); stack.push(b-a);"
compileInst _ _ (LSUB) = "var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); stack.push(null); stack.push(b-a);"
compileInst _ _ (FSUB) = "var a = stack.pop(); var b = stack.pop(); stack.push(b-a);"
compileInst _ _ (DSUB) = "var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); stack.push(null); stack.push(b-a);"

compileInst _ _ (IDIV) = "var b = stack.pop(); var a = stack.pop(); stack.push((a/b) | 0);"
compileInst _ _ (LDIV) = "var b = stack.pop(); stack.pop(); var a = stack.pop(); stack.pop(); stack.push(null); stack.push((a/b)|0);"
compileInst _ _ (FDIV) = "var b = stack.pop(); var a = stack.pop(); stack.push(a/b);"
compileInst _ _ (DDIV) = "var b = stack.pop(); stack.pop(); var a = stack.pop(); stack.pop(); stack.push(null); stack.push(a/b);"

compileInst _ _ (IREM) = "var b = stack.pop(); var a = stack.pop(); stack.push(a-((a/b) | 0)*b);"
compileInst _ _ (LREM) = "var b = stack.pop(); stack.pop(); var a = stack.pop(); stack.pop(); stack.push(null); stack.push(a-((a/b) | 0)*b);"
compileInst _ _ (FREM) = "var b = stack.pop(); var a = stack.pop(); stack.push(a-((a/b) | 0)*b);"
compileInst _ _ (DREM) = "var b = stack.pop(); stack.pop(); var a = stack.pop(); stack.pop(); stack.push(null); stack.push(a-((a/b) | 0)*b);"

compileInst _ _ (INEG) = "stack.push(-stack.pop());"
compileInst _ _ (LNEG) = "stack.push(-stack.pop());"
compileInst _ _ (FNEG) = "stack.push(-stack.pop());"
compileInst _ _ (DNEG) = "stack.push(-stack.pop());"
---

compileInst _ _ (I2D) = "var a = stack.pop(); stack.push(null); stack.push(a);"
compileInst _ _ (I2F) = ""
compileInst _ _ (I2B) = ""
compileInst _ _ (I2S) = ""
compileInst _ _ (I2L) = "var a = stack.pop(); stack.push(null); stack.push(a);"

compileInst _ _ (L2I) = "var a = stack.pop(); stack.pop(); stack.push(a);"
compileInst _ _ (L2F) = "var a = stack.pop(); stack.pop(); stack.push(a);"
compileInst _ _ (L2D) = ""

compileInst _ _ (F2I) = ""
compileInst _ _ (F2L) = "var a = stack.pop(); stack.push(null); stack.push(a);"
compileInst _ _ (F2D) = "var a = stack.pop(); stack.push(null); stack.push(a);"

compileInst _ _ (D2I) = "var a = stack.pop(); stack.pop(); stack.push(a);"
compileInst _ _ (D2F) = "var a = stack.pop(); stack.pop(); stack.push(a);"
compileInst _ _ (D2L) = ""

--

compileInst _ _ (GOTO x) = "pc += "++show x++"; break;"
compileInst _ _ (GOTO_W x) = "pc += "++show x++"; break;"

compileInst _ _ (DCMP C_LT) = "var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); if(b > a){stack.push(1);}else if(a < b){stack.push(-1);}else if(a==b){ stack.push(0); }else{ stack.push(1); }"
compileInst _ _ (DCMP C_GT) = "var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); if(b > a){stack.push(1);}else if(a < b){stack.push(-1);}else if(a==b){ stack.push(0); }else{ stack.push(-1); }"
compileInst _ _ (IF cmp x) = "var a = stack.pop(); if("++showCmp cmp "a" "0"++"){pc += "++show x++"; break;}"

---

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
					pops++pushRet mret++"var self = stack.pop(); "++
					if returns then "stack.push(self[\""++fldName++"\"].apply(self, "++args++"));"
										else "self[\""++fldName++"\"].apply(self, "++args++");"
	where
		pool = constantPool klass
		Just constant = M.lookup idx pool
		MethodSignature margs mret = ntSignature nt
		returns = returnsValue (ntSignature nt)
		(pops, args) = popStacks (margs)
		CMethod _ nt = constant
		fldName = mangleMethod nt
--
compileInst klass _ (INVOKESPECIAL idx) =
					pops++pushRet mret++"var self = stack.pop(); "++
					if returns then "stack.push(Java[\""++klsName++"\"][\""++fldName++"\"].apply(self, "++args++"));"
										else "Java[\""++klsName++"\"][\""++fldName++"\"].apply(self, "++args++");"
	where
		pool = constantPool klass
		Just constant = M.lookup idx pool
		MethodSignature margs mret = ntSignature nt
		returns = returnsValue (ntSignature nt)
		(pops, args) = popStacks (margs)
		CMethod kls nt = constant
		klsName = unpack kls
		fldName = mangleMethod nt

compileInst klass _ (INVOKESTATIC idx) =
					pops++pushRet mret++
					if returns then "stack.push(Java[\""++klsName++"\"][\""++fldName++"\"].apply(null, "++args++"));"
										else "Java[\""++klsName++"\"][\""++fldName++"\"].apply(null, "++args++");"
	where
		pool = constantPool klass
		Just constant = M.lookup idx pool
		MethodSignature margs mret = ntSignature nt
		returns = returnsValue (ntSignature nt)
		(pops, args) = popStacks (margs)
		CMethod kls nt = constant
		klsName = unpack kls
		fldName = mangleMethod nt

compileInst _ _ IRETURN = "return stack.pop();"
compileInst _ _ LRETURN = "return stack.pop();"
compileInst _ _ FRETURN = "return stack.pop();"
compileInst _ _ DRETURN = "return stack.pop();"
compileInst _ _ ARETURN = "return stack.pop();"
compileInst _ _ RETURN = "return;"
compileInst _ _ code = show code
---

methodTemplate = template "\
\function(){\n\
\\tvar stack = [];\n\
\\tvar local=new Array(${locals});\n\
\\t${argbinding}\n\
\\tvar pc=0;\n\
\\twhile(true){\n\
\\t\ttry{\n\
\\t\tswitch(pc){\n\
\${body}\n\
\\t\t}}catch(e){\n\
\\t\t\t return; //FIXME\n\
\\t\t}\n\
\\t}\n\
\}\
\"

compileArgumentBind (MethodSignature args _) isStatic =
		if isStatic  then loop args 0 0
			      else "local[0]=this;"++loop args 1 0
	where
		loop [] _ _ = ""
		loop (LongInt:args) aidx idx = "local["++show aidx++"] = arguments["++show idx++"];"++(loop args (aidx+2) (idx+1))
		loop (DoubleType:args) aidx idx = "local["++show aidx++"] = arguments["++show idx++"];"++(loop args (aidx+2) (idx+1))
		loop (_:args) aidx idx = "local["++show aidx++"] = arguments["++show idx++"];"++(loop args (aidx+1) (idx+1))

compileMethod :: Klass -> (MethodSignature, Maybe Code) -> Bool -> String
compileMethod _ (_, Nothing) _ = "function(){}";
compileMethod klass (signature, (Just code)) isStatic = L.unpack $ render methodTemplate ((T.pack).ctx)
	where
		ctx "argbinding" = compileArgumentBind signature isStatic
		ctx "locals" = show (codeMaxLocals code)
		ctx "body" = (intercalate "\n" (fmap (\(addr,inst) -> "\t\t\tcase "++show addr++": pc = "++show addr++"; /* "++(show inst)++" */ "++compileInst klass addr inst) (codeInstructions code)))

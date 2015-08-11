{-# LANGUAGE OverloadedStrings #-}
module Java2js.GenFun(compileMethod, compileConstant) where
--
import Java2js.Type
import Java2js.Mangle
import Java2js.JVM.Assembler
import Java2js.JVM.ClassFile
import Data.ByteString.Lazy.Char8 (unpack, ByteString)
import Data.Text.Template (template, render, substitute)
import Data.List (intercalate)
import Data.String.Utils (replace)
import qualified Data.Map.Strict as M
import qualified Data.Text as T
import qualified Data.Text.Lazy as L

returnsValue :: MethodSignature -> Bool
returnsValue (MethodSignature _ ReturnsVoid) = False
returnsValue (MethodSignature _ _) = True

encodeJavaScriptString x = foldl (\ m f -> f m) x $ fmap (uncurry replace) [("\\", "\\\\"), ("\"","\\\""), ("\n", "\\n"), ("\r", "\\r")]

compileConstant :: Constant Direct -> String
compileConstant (CString str) = "(\"" ++ encodeJavaScriptString (unpack str) ++"\")"
compileConstant (CDouble v) = "(" ++ show v ++")"
compileConstant (CInteger v) =  "(" ++ show v ++")"
compileConstant (CFloat v) =  "(" ++ show v ++")"
compileConstant (CLong v) =  "(" ++ show v ++")"
compileConstant (CDouble v) =  "(" ++ show v ++")"
compileConstant (CClass kls) =  "(Java[" ++ show kls ++"]().classObj)"
compileConstant v =  error $ "(" ++ show v ++")"

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

isWideField :: NameType (Field Direct) -> Bool
isWideField nt = isWide (ntSignature nt)
									where
										isWide LongInt = True
										isWide DoubleType = True
										isWide _ = False

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
compileInst _ _ (ICONST_5) = "stack.push(5);"
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
compileInst _ _ (ALOAD_W idx) = "stack.push(local["++show idx++"]);"
compileInst _ _ (ILOAD_W idx) = "stack.push(local["++show idx++"]);"
compileInst _ _ (LLOAD_W idx) = "stack.push(null);stack.push(local["++show idx++"]);"
compileInst _ _ (FLOAD_W idx) = "stack.push(local["++show idx++"]);"
compileInst _ _ (DLOAD_W idx) = "stack.push(null);stack.push(local["++show idx++"]);"
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
compileInst _ _ (ASTORE_W idx) = "local["++show idx++"]=stack.pop();"
compileInst _ _ (ISTORE_W idx) = "local["++show idx++"]=stack.pop();"
compileInst _ _ (LSTORE_W idx) = "local["++show idx++"]=stack.pop();stack.pop();"
compileInst _ _ (FSTORE_W idx) = "local["++show idx++"]=stack.pop();"
compileInst _ _ (DSTORE_W idx) = "local["++show idx++"]=stack.pop();stack.pop();"
compileInst _ _ (ASTORE_ idx) = "local["++showImm idx++"]=stack.pop();"
compileInst _ _ (ISTORE_ idx) = "local["++showImm idx++"]=stack.pop();"
compileInst _ _ (LSTORE_ idx) = "local["++showImm idx++"]=stack.pop();stack.pop();"
compileInst _ _ (FSTORE_ idx) = "local["++showImm idx++"]=stack.pop();"
compileInst _ _ (DSTORE_ idx) = "local["++showImm idx++"]=stack.pop();stack.pop();"

compileInst _ _ (SALOAD) = "var a = stack.pop(); var b = stack.pop(); stack.push(a[b]);"
compileInst _ _ (SASTORE) = "var a = stack.pop(); var b = stack.pop(); var c = stack.pop(); a[b]=c;"
compileInst _ _ (BALOAD) = "var a = stack.pop(); var b = stack.pop(); stack.push(a[b]);"
compileInst _ _ (BASTORE) = "var a = stack.pop(); var b = stack.pop(); var c = stack.pop(); a[b]=c;"
compileInst _ _ (CALOAD) = "var a = stack.pop(); var b = stack.pop(); stack.push(a[b]);"
compileInst _ _ (CASTORE) = "var a = stack.pop(); var b = stack.pop(); var c = stack.pop(); a[b]=c;"
compileInst _ _ (IALOAD) = "var a = stack.pop(); var b = stack.pop(); stack.push(a[b]);"
compileInst _ _ (IASTORE) = "var a = stack.pop(); var b = stack.pop(); var c = stack.pop(); a[b]=c;"
compileInst _ _ (LALOAD) = "var a = stack.pop(); var b = stack.pop(); stack.push(null); stack.push(a[b]);"
compileInst _ _ (LASTORE) = "var a = stack.pop(); var b = stack.pop(); var c = stack.pop(); stack.pop(); a[b]=c;"
compileInst _ _ (DALOAD) = "var a = stack.pop(); var b = stack.pop(); stack.push(null); stack.push(a[b]);"
compileInst _ _ (DASTORE) = "var a = stack.pop(); var b = stack.pop(); var c = stack.pop(); stack.pop(); a[b]=c;"
compileInst _ _ (AALOAD) = "var a = stack.pop(); var b = stack.pop(); stack.push(a[b]);"
compileInst _ _ (AASTORE) = "var a = stack.pop(); var b = stack.pop(); var c = stack.pop(); a[b]=c;"

compileInst _ _ (ARRAYLENGTH) = "var a = stack.pop(); stack.push(a.length);"

---
compileInst _ _ (IINC localNum delta) = "local["++show localNum++"]+="++show delta++";"
compileInst _ _ (IINC_W localNum delta) = "local["++show localNum++"]+="++show delta++";"

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
compileInst _ _ (IOR) = "stack.push(stack.pop() | stack.pop());"
compileInst _ _ (IAND) = "stack.push(stack.pop() & stack.pop());"
compileInst _ _ (IXOR) = "stack.push(stack.pop() ^ stack.pop());"
compileInst _ _ (IUSHR) = "var a = stack.pop(); var b = stack.pop(); stack.push(a >>> b);"
compileInst _ _ (ISHR) = "var a = stack.pop(); var b = stack.pop(); stack.push(a >> b);"
compileInst _ _ (ISHL) = "var a = stack.pop(); var b = stack.pop(); stack.push(a << b);"
compileInst _ _ (LOR) = "var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); stack.push(null); stack.push(a|b);"
compileInst _ _ (LAND) = "var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); stack.push(null); stack.push(a&b);"
compileInst _ _ (LXOR) = "var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); stack.push(null); stack.push(a^b);"
compileInst _ _ (LUSHR) = "var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.push(null); stack.push(a >>> b);"
compileInst _ _ (LSHR) = "var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.push(null); stack.push(a >> b);"
compileInst _ _ (LSHL) = "var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.push(null); stack.push(a << b);"
compileInst _ _ (LSHL) = "var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.push(null); stack.push(a <<< b);"
---

compileInst _ _ (I2D) = "var a = stack.pop(); stack.push(null); stack.push(a);"
compileInst _ _ (I2C) = "var a = stack.pop(); stack.push(a&0xffff);"
compileInst _ _ (I2F) = ""
compileInst _ _ (I2B) = "var a = stack.pop(); stack.push(a&0xffff);"
compileInst _ _ (I2S) = "var a = stack.pop(); stack.push(a&0xff);"
compileInst _ _ (I2L) = "var a = stack.pop(); stack.push(null); stack.push(a);"

compileInst _ _ (L2I) = "var a = stack.pop(); stack.pop(); stack.push(a & 0xffffffff);"
compileInst _ _ (L2F) = "var a = stack.pop(); stack.pop(); stack.push(a);"
compileInst _ _ (L2D) = ""

compileInst _ _ (F2L) =	"var a = stack.pop(); stack.push(null); stack.push(a);"
compileInst _ _ (F2D) =	"var a = stack.pop(); stack.push(null); stack.push(a);"
compileInst _ _ (F2I) =	""

compileInst _ _ (D2I) = "var a = stack.pop(); stack.pop(); stack.push(a & 0xffffffff);"
compileInst _ _ (D2F) = "var a = stack.pop(); stack.pop(); stack.push(a);"
compileInst _ _ (D2L) = ""

--
---FIXME: 型注釈入れないと共変・反変のチェックできない
compileInst _ _ (ANEWARRAY _) = "stack.push(new Array(stack.pop()));"
compileInst _ _ (NEWARRAY _) = "stack.push(new Array(stack.pop()));"

compileInst _ _ (ATHROW) = "throw (stack.pop());"
compileInst _ _ (GOTO x) = "pc += "++show x++"; break;"
compileInst _ _ (GOTO_W x) = "pc += "++show x++"; break;"
compileInst _ _ (JSR x) = "stack.push(pc+3); pc += "++show x++"; break;"
compileInst _ _ (JSR_W x) = "stack.push(pc+5); pc += "++show x++"; break;"
compileInst _ _ (RET x) = "pc = pc=local["++show x++"]; break;"

compileInst _ _ (DCMP C_LT) = "var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); if(b > a){stack.push(1);}else if(a < b){stack.push(-1);}else if(a==b){ stack.push(0); }else{ stack.push(1); }"
compileInst _ _ (DCMP C_GT) = "var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); if(b > a){stack.push(1);}else if(a < b){stack.push(-1);}else if(a==b){ stack.push(0); }else{ stack.push(-1); }"
compileInst _ _ (LCMP) = "var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); if(b > a){stack.push(1);}else if(a < b){stack.push(-1);}else if(a==b){ stack.push(0); }else{ throw new \"Invalid Arguments\"; }"
compileInst _ _ (IF cmp x) = "var a = stack.pop(); if("++showCmp cmp "a" "0"++"){pc += "++show x++"; break;}"
compileInst _ _ (IF_ICMP cmp x) = "var a = stack.pop(); var b = stack.pop(); if("++showCmp cmp "a" "b"++"){pc += "++show x++"; break;}"
compileInst _ _ (IF_ACMP C_EQ x) = "var a = stack.pop(); var b = stack.pop(); if(a === b){pc += "++show x++"; break;}"
compileInst _ _ (IF_ACMP C_NE x) = "var a = stack.pop(); var b = stack.pop(); if(a !== b){pc += "++show x++"; break;}"
compileInst _ _ (IFNONNULL off) = "if(stack.pop() !== null){pc += "++show off++"; break;}"
compileInst _ _ (IFNULL off) = "if(stack.pop() === null){pc += "++show off++"; break;}"

compileInst _ _ (TABLESWITCH def low high offs) =
														L.unpack $ substitute (T.pack "var a = stack.pop(); if (a < (${low}) || a > (${high})) { pc += ${def};break; }else{ pc+=(${offs})[a-(${low})];break; }") ctx
																where
																	ctx "low" = T.pack (show low)
																	ctx "def" = T.pack (show def)
																	ctx "high" = T.pack (show high)
																	ctx "offs" = T.pack (show offs)
compileInst _ _ (LOOKUPSWITCH def _ offs) =
														L.unpack $ substitute (T.pack "var a = stack.pop(); switch(a){ ${offs} default: pc += ${def};break; }; break;") ctx
																where
																	ctx "def" = T.pack (show def)
																	ctx "offs" = T.pack $ foldl (\ b (v,off) -> b ++ "case "++show v++": pc += "++show off++"; break;") "" offs
---

compileInst klass _ (PUTSTATIC idx) = "Java[\""++klsName++"\"]()[\""++fldName++"\"] = stack.pop();" ++ pops
	where
		pool = constantPool klass
		Just constant = M.lookup idx pool
		CField kls nt = constant
		klsName = unpack kls
		fldName = unpack (ntName nt)
		pops = if isWideField (nt) then "stack.pop();" else ""

compileInst klass _ (GETSTATIC idx) = pushs++"stack.push(Java[\""++klsName++"\"]()[\""++fldName++"\"]);"
	where
		pool = constantPool klass
		Just constant = M.lookup idx pool
		CField kls nt = constant
		klsName = unpack kls
		fldName = unpack (ntName nt)
		pushs = if isWideField (nt) then "stack.push(null);" else ""
--
compileInst klass _ (PUTFIELD idx) = "self[\""++fldName++"\"] = stack.pop();" ++ pops
	where
		pool = constantPool klass
		Just constant = M.lookup idx pool
		CField kls nt = constant
		fldName = unpack (ntName nt)
		pops = if isWideField (nt) then "stack.pop();" else ""

compileInst klass _ (GETFIELD idx) = pushs++"stack.push(self[\""++fldName++"\"]);"
	where
		pool = constantPool klass
		Just constant = M.lookup idx pool
		CField kls nt = constant
		fldName = unpack (ntName nt)
		pushs = if isWideField (nt) then "stack.push(null);" else ""

compileInst klass _ (NEW idx) = "stack.push(new (Java[\""++klsName++"\"]())());"
		where
			pool = constantPool klass
			Just constant = M.lookup idx pool
			CClass kls = constant
			klsName = unpack kls

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
compileInst klass _ (INVOKEINTERFACE idx _) =
					pops++pushRet mret++"var self = stack.pop(); "++
					if returns then "stack.push(self[\""++fldName++"\"].apply(self, "++args++"));"
										else "self[\""++fldName++"\"].apply(self, "++args++");"
	where
		pool = constantPool klass
		Just constant = M.lookup idx pool
		MethodSignature margs mret = ntSignature nt
		returns = returnsValue (ntSignature nt)
		(pops, args) = popStacks (margs)
		CIfaceMethod _ nt = constant
		fldName = mangleMethod nt
compileInst klass _ (INVOKESPECIAL idx) =
					pops++pushRet mret++"var self = stack.pop(); "++
					if returns then "stack.push(Java[\""++klsName++"\"]().prototype[\""++fldName++"\"].apply(self, "++args++"));"
										else "Java[\""++klsName++"\"]().prototype[\""++fldName++"\"].apply(self, "++args++");"
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
					if returns then "stack.push(Java[\""++klsName++"\"]()[\""++fldName++"\"].apply(null, "++args++"));"
										else "Java[\""++klsName++"\"]()[\""++fldName++"\"].apply(null, "++args++");"
	where
		pool = constantPool klass
		Just constant = M.lookup idx pool
		MethodSignature margs mret = ntSignature nt
		returns = returnsValue (ntSignature nt)
		(pops, args) = popStacks (margs)

		CMethod kls nt = constant
		klsName = unpack kls
		fldName = mangleMethod nt
--
compileInst klass _ (CHECKCAST idx) = "Java.checkCast(Java[\""++klsName++"\"](), stack[stack.length-1]);"
	where
		pool = constantPool klass
		Just constant = M.lookup idx pool
		CClass kls = constant
		klsName = unpack kls
compileInst klass _ (INSTANCEOF idx) = "stack.push(Java.instanceOf(Java[\""++klsName++"\"](), stack.pop()));"
	where
		pool = constantPool klass
		Just constant = M.lookup idx pool
		CClass kls = constant
		klsName = unpack kls


compileInst _ _ IRETURN = "return stack.pop();"
compileInst _ _ LRETURN = "return stack.pop();"
compileInst _ _ FRETURN = "return stack.pop();"
compileInst _ _ DRETURN = "return stack.pop();"
compileInst _ _ ARETURN = "return stack.pop();"
compileInst _ _ RETURN = "return;"

compileInst _ _ MONITORENTER = "throw 'MonitorEnter';"
compileInst _ _ MONITOREXIT = "throw 'MonitorExit';"

compileInst _ _ code = error(show code)
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
\\t\t\t console.log(e); throw e; //FIXME\n\
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

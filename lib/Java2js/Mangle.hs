{-# LANGUAGE FlexibleInstances #-}
module Java2js.Mangle ( Manglable(..) ) where

import Java2js.JVM.ClassFile
import Data.ByteString.Lazy.Char8 (unpack, ByteString)
import Data.List (intercalate)

class Manglable a where
	mangleMethod :: a -> String
	mangleMethodReturn :: a -> String
	mangleMethodFull :: a -> String

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

mangleMethod' :: ByteString -> MethodSignature -> String
mangleMethod' name (MethodSignature args _) = (unpack name) ++ "("++(concat (fmap sigToSym args))++")"
																									where
--
mangleReturn' :: ByteString -> MethodSignature -> String
mangleReturn' name (MethodSignature _ ret) = retToSym ret
																								where
																									retToSym :: ReturnSignature -> String
																									retToSym ReturnsVoid = "V"
																									retToSym (Returns v) = sigToSym v

--
instance Manglable (NameType (Method Direct)) where
	mangleMethod nt = mangleMethod' (ntName nt) (ntSignature nt)
	mangleMethodReturn nt = mangleReturn' (ntName nt) (ntSignature nt)
	mangleMethodFull nt = mangleMethod' (ntName nt) (ntSignature nt) ++ mangleReturn' (ntName nt) (ntSignature nt)
--
instance Manglable (Method Direct) where
	mangleMethod meth = mangleMethod' (methodName meth) (methodSignature meth)
	mangleMethodReturn meth = mangleReturn' (methodName meth) (methodSignature meth)
	mangleMethodFull meth = mangleMethod' (methodName meth) (methodSignature meth) ++ mangleReturn' (methodName meth) (methodSignature meth)

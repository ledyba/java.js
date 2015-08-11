{-# LANGUAGE FlexibleInstances #-}
module Java2js.Mangle ( Manglable, mangleMethod ) where

import Java2js.JVM.ClassFile
import Data.ByteString.Lazy.Char8 (unpack, ByteString)
import Data.List (intercalate)

class Manglable a where
	mangleMethod :: a -> String

mangleMethod' :: ByteString -> MethodSignature -> String
mangleMethod' name (MethodSignature args ret) = (unpack name) ++ "("++(intercalate "," (fmap sigToSym args))++")"++retToSym ret
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
instance Manglable (NameType (Method Direct)) where
	mangleMethod nt = mangleMethod' (ntName nt) (ntSignature nt)
--
instance Manglable (Method Direct) where
	mangleMethod meth = mangleMethod' (methodName meth) (methodSignature meth)

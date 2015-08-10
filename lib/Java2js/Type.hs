module Java2js.Type (Klass(..)) where

import Java2js.JVM.Common ()
import qualified Data.Map.Strict as M
import Java2js.JVM.Assembler
import Java2js.JVM.ClassFile

data Klass = Klass {
		klassName::String,
		superKlass::String,
		fields :: [String],
		staticFields :: [String],
		methods :: M.Map String (MethodSignature, Maybe Code),
		staticMethods :: M.Map String (MethodSignature, Maybe Code),
		constantPool :: Pool Direct
	} deriving (Show)

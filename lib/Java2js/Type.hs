module Java2js.Type (Klass(..)) where

import Java2js.JVM.Common ()
import qualified Data.Map.Strict as M
import Java2js.JVM.Assembler
import Java2js.JVM.ClassFile

data Klass = Klass {
		klassClass :: Class Direct,
		klassName::String,
		superKlass::String,
		fields :: [(String, (Field Direct, Maybe (Constant Direct)))],
		methods :: M.Map String (Method Direct, Maybe Code),
		constantPool :: Pool Direct
	} deriving (Show)

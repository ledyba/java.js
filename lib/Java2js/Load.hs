{-# LANGUAGE OverloadedStrings #-}
module Java2js.Load(loadKlass) where
--

import Data.ByteString.Lazy.Char8 (unpack)
import Java2js.Type
import Java2js.JVM.Common ()
import Java2js.JVM.Converter
import Java2js.JVM.ClassFile
import Java2js.JVM.Assembler
import qualified Data.Set as S
import qualified Data.Map.Strict as M

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

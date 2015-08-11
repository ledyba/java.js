{-# LANGUAGE OverloadedStrings #-}
module Java2js.Load(loadKlass, withKlass, loadCPEntry, loadCPEntries) where
--

import Data.ByteString.Lazy.Char8 (unpack)
import Java2js.Type
import Java2js.Mangle
import Java2js.Java.ClassPath
import Java2js.Java.JAR.Archive (readFromJAR)
import Java2js.JVM.Common ()
import Java2js.JVM.Converter
import Java2js.JVM.ClassFile
import Java2js.JVM.Assembler
import qualified Data.Set as S
import qualified Data.Map.Strict as M

loadCPEntries' :: String -> [Tree CPEntry] -> IO [Klass]
loadCPEntries' prefix entries = fmap concat (mapM (loadCPEntry' prefix) entries)

loadCPEntries :: [Tree CPEntry] -> IO [Klass]
loadCPEntries = loadCPEntries' ""

loadCPEntry' :: String -> Tree CPEntry -> IO [Klass]
loadCPEntry' prefix (Directory dir left) = loadCPEntries' (prefix++dir++"/") left
loadCPEntry' _ (File (Loaded _ cls)) = return [loadKlass cls]
loadCPEntry' _ (File (LoadedJAR _ cls)) = return [loadKlass cls]
loadCPEntry' prefix (File (NotLoaded f)) = fmap (\cls -> [loadKlass cls]) (parseClassFile (prefix++f))
loadCPEntry' prefix (File (NotLoadedJAR jarfile path)) = fmap (\cls -> [loadKlass cls]) (readFromJAR jarfile (prefix++path))
loadCPEntry :: Tree CPEntry-> IO [Klass]
loadCPEntry = loadCPEntry' ""

loadKlass :: Class Direct -> Klass
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
		extMeth meth = (mangleMethod meth, (methodSignature meth, extCode meth))
		extCode :: Method Direct -> Maybe Code
		extCode meth = fmap decodeMethod (attrByName meth "Code")

withKlass :: [Tree CPEntry] -> String -> (Klass -> a) -> IO (Maybe a)
withKlass entries klsName fun =
			do
				cls <- getEntry entries klsName
				return $ fmap (fun.loadKlass.extract) cls
			where
				extract (Loaded _ cls) = cls
				extract (LoadedJAR _ cls) = cls
				extract _ = error "[BUG]"

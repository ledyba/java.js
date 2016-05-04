{-# LANGUAGE OverloadedStrings, GADTs #-}
module Java2js.Load(loadKlass, withKlass, loadCPEntry, entry2Direct) where
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

loadCPEntry :: Tree CPEntry -> IO [Klass]
loadCPEntry x = fmap (fmap loadKlass) $ treeCPEntry2Direct x

treeCPEntry2Direct :: Tree CPEntry -> IO [Class Direct]
treeCPEntry2Direct = treeCPEntry2Direct' ""

treeCPEntry2Direct' :: String -> Tree CPEntry -> IO [Class Direct]
treeCPEntry2Direct' prefix (Directory dir left) =  fmap concat (mapM (treeCPEntry2Direct' (prefix++dir++"/")) left)
treeCPEntry2Direct' _ (File (Loaded _ cls)) = return [cls]
treeCPEntry2Direct' _ (File (LoadedJAR _ cls)) = return [cls]
treeCPEntry2Direct' prefix (File (NotLoaded f)) = fmap (\cls -> [cls]) (parseClassFile (prefix++f))
treeCPEntry2Direct' prefix (File (NotLoadedJAR jarfile path)) = fmap (\cls -> [cls]) (readFromJAR jarfile (prefix++path))

entry2Direct :: CPEntry -> IO (Class Direct)
entry2Direct (Loaded _ cls) = return cls
entry2Direct (LoadedJAR _ cls) = return cls
entry2Direct x = fail (show x)

loadKlass :: Class Direct -> Klass
loadKlass cls = Klass{
	klassClass = cls,
	klassName = unpack (thisClass cls),
	superKlass = unpack (superClass cls),
	fields = map extField (classFields cls),
	methods = M.fromList $ map extMeth (classMethods cls),
	constantPool = constsPool cls
}
	where
		isStatic accs = S.member ACC_STATIC accs
		extField f = (unpack $ fieldName f, (f, fieldConstant cls (fieldName f)))
		extMeth meth = (mangleMethod meth, (meth, extCode meth))
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

{-# LANGUAGE TypeFamilies, StandaloneDeriving, FlexibleInstances, FlexibleContexts, UndecidableInstances, RecordWildCards, OverloadedStrings, ScopedTypeVariables #-}
-- | Functions to convert from low-level .class format representation and
-- high-level Java classes, methods etc representation
module Java2js.JVM.Converter
  (parseClass, parseClassFile,
   classFile2Direct,
   methodByName,
   attrByName,
   methodCode,
   fieldConstant
  )
  where

import Control.Monad.Exception
import Data.List
import Data.Word
import Data.Bits
import Data.Binary
import Data.Binary.Get (getWord32be,getWord16be,runGet)
import Data.Default () -- import instances only
import qualified Data.ByteString.Lazy as B
import qualified Data.ByteString.Lazy.Char8 ()
import qualified Data.Set as S
import qualified Data.Map as M

import Java2js.JVM.ClassFile
import Java2js.JVM.Common
import Java2js.JVM.Exceptions

-- | Parse .class file data
parseClass :: B.ByteString -> Class Direct
parseClass bstr = classFile2Direct $ decode bstr

-- | Parse class data from file
parseClassFile :: FilePath -> IO (Class Direct)
parseClassFile path = classFile2Direct `fmap` decodeFile path

classFile2Direct :: Class File -> Class Direct
classFile2Direct (Class {..}) =
  let pool = poolFile2Direct constsPool
      superName = className $ pool ! superClass
      d = defaultClass :: Class Direct
  in d {
      constsPoolSize = fromIntegral (M.size pool),
      constsPool = pool,
      accessFlags = accessFile2Direct accessFlags,
      thisClass = className $ pool ! thisClass,
      superClass = if superClass == 0 then "" else superName,
      interfacesCount = interfacesCount,
      interfaces = map (\i -> className $ pool ! i) interfaces,
      classFieldsCount = classFieldsCount,
      classFields = map (fieldFile2Direct pool) classFields,
      classMethodsCount = classMethodsCount,
      classMethods = map (methodFile2Direct pool) classMethods,
      classAttributesCount = classAttributesCount,
      classAttributes = attributesFile2Direct pool classAttributes }

-- | Find index of given string in the list of constants
poolIndex :: (Throws NoItemInPool e) => Pool File -> B.ByteString -> EM e Word16
poolIndex list name = case mapFindIndex test list of
                        Nothing -> throw (NoItemInPool name)
                        Just i ->  return $ fromIntegral i
  where
    test (CUTF8 s)    | s == name = True
    test (CUnicode s) | s == name = True
    test _                                  = False

-- | Find index of given string in the list of constants
poolClassIndex :: (Throws NoItemInPool e) => Pool File -> B.ByteString -> EM e Word16
poolClassIndex list name = case mapFindIndex checkString list of
                        Nothing -> throw (NoItemInPool name)
                        Just i ->  case mapFindIndex (checkClass $ fromIntegral i) list of
                                     Nothing -> throw (NoItemInPool i)
                                     Just j  -> return $ fromIntegral j
  where
    checkString (CUTF8 s)    | s == name = True
    checkString (CUnicode s) | s == name = True
    checkString _                                  = False

    checkClass i (CClass x) | i == x = True
    checkClass _ _                           = False

poolNTIndex list x@(NameType n t) = do
    ni <- poolIndex list n
    ti <- poolIndex list (byteString t)
    case mapFindIndex (check ni ti) list of
      Nothing -> throw (NoItemInPool x)
      Just i  -> return $ fromIntegral i
  where
    check ni ti (CNameType n' t')
      | (ni == n') && (ti == t') = True
    check _ _ _                  = False

attrInfo :: Pool File -> (B.ByteString, B.ByteString) -> Attribute
attrInfo pool (name, value) = Attribute {
  attributeName = force "attr name" $ poolIndex pool name,
  attributeLength = fromIntegral (B.length value),
  attributeValue = value }

poolFile2Direct :: Pool File -> Pool Direct
poolFile2Direct ps = pool
  where
    pool :: Pool Direct
    pool = M.map convert ps

    n = fromIntegral $ M.size ps

    convertNameType :: (HasSignature a) => Word16 -> NameType a
    convertNameType i =
      case pool ! i of
        CNameType n s -> NameType n (decode s)
        x -> error $ "Unexpected: " ++ show i

    convert (CClass i) = case pool ! i of
                          CUTF8 name -> CClass name
                          x -> error $ "Unexpected class name: " ++ show x ++ " at " ++ show i
    convert (CField i j) = CField (className $ pool ! i) (convertNameType j)
    convert (CMethod i j) = CMethod (className $ pool ! i) (convertNameType j)
    convert (CIfaceMethod i j) = CIfaceMethod (className $ pool ! i) (convertNameType j)
    convert (CString i) = CString $ getString $ pool ! i
    convert (CInteger x) = CInteger x
    convert (CFloat x)   = CFloat x
    convert (CLong x)    = CLong (fromIntegral x)
    convert (CDouble x)  = CDouble x
    convert (CNameType i j) = CNameType (getString $ pool ! i) (getString $ pool ! j)
    convert (CUTF8 bs) = CUTF8 bs
    convert (CUnicode bs) = CUnicode bs

accessFile2Direct :: AccessFlags File -> AccessFlags Direct
accessFile2Direct w = S.fromList $ concat $ zipWith (\i f -> if testBit w i then [f] else []) [0..] $ [
   ACC_PUBLIC,
   ACC_PRIVATE,
   ACC_PROTECTED,
   ACC_STATIC,
   ACC_FINAL,
   ACC_SYNCHRONIZED,
   ACC_VOLATILE,
   ACC_TRANSIENT,
   ACC_NATIVE,
   ACC_INTERFACE,
   ACC_ABSTRACT ]


fieldFile2Direct :: Pool Direct -> Field File -> Field Direct
fieldFile2Direct pool (Field {..}) = Field {
  fieldAccessFlags = accessFile2Direct fieldAccessFlags,
  fieldName = getString $ pool ! fieldName,
  fieldSignature = decode $ getString $ pool ! fieldSignature,
  fieldAttributesCount = fromIntegral (apsize fieldAttributes),
  fieldAttributes = attributesFile2Direct pool fieldAttributes }

methodFile2Direct :: Pool Direct -> Method File -> Method Direct
methodFile2Direct pool (Method {..}) = Method {
  methodAccessFlags = accessFile2Direct methodAccessFlags,
  methodName = getString $ pool ! methodName,
  methodSignature = decode $ getString $ pool ! methodSignature,
  methodAttributesCount = fromIntegral (apsize methodAttributes),
  methodAttributes = attributesFile2Direct pool methodAttributes }

attributesFile2Direct :: Pool Direct -> Attributes File -> Attributes Direct
attributesFile2Direct pool (AP attrs) = AR (M.fromList $ map go attrs)
  where
    go :: Attribute -> (B.ByteString, B.ByteString)
    go (Attribute {..}) = (getString $ pool ! attributeName,
                           attributeValue)

-- | Try to get class method by name
methodByName :: Class Direct -> B.ByteString -> Maybe (Method Direct)
methodByName cls name =
  find (\m -> methodName m == name) (classMethods cls)

-- | Try to get class field by name
fieldByName :: Class Direct -> B.ByteString -> Maybe (Field Direct)
fieldByName cls name =
  find (\m -> fieldName m == name) (classFields cls)

-- | Try to get object attribute by name
attrByName :: (HasAttributes a) => a Direct -> B.ByteString -> Maybe B.ByteString
attrByName x name =
  let (AR m) = attributes x
  in  M.lookup name m

-- | Try to get Code for class method (no Code for interface methods)
methodCode :: Class Direct
           -> B.ByteString       -- ^ Method name
           -> Maybe B.ByteString
methodCode cls name = do
  method <- methodByName cls name
  attrByName method "Code"

fieldConstant :: Class Direct -> B.ByteString -> Maybe (Constant Direct)
fieldConstant cls name = do
  field <- fieldByName cls name
  bytes <- attrByName field "ConstantValue"
  runGet parse bytes
  where
    pool = constsPool cls
    parse = do
      cpoint <- getWord16be
      return (M.lookup (fromIntegral cpoint) pool)

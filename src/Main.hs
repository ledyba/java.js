{-# LANGUAGE OverloadedStrings #-}
module Main where

import JVM.Common ()
import JVM.Converter
import JVM.ClassFile
import JVM.Dump
import Java2js.Convert
import Data.ByteString.Lazy.Char8 (unpack)

data Klass = Klass {
		klassName::String ,
		superKlass::String
	} deriving (Show)

loadKlass cls = Klass {
	klassName = unpack (thisClass cls),
	superKlass = unpack (superClass cls)
}
	where


main = do
	klass <- parseClassFile "sample/Hello.class"
	print $ loadKlass klass
	dumpClass klass

{-# LANGUAGE OverloadedStrings #-}
module Main where
--
import Java2js.JVM.Common()
import Java2js.JVM.ClassFile
import Java2js.JVM.Converter
import Java2js.Java.JAR
import Java2js.Java.ClassPath
import Java2js.Gen
import Java2js.Load
import Java2js.Type
import Data.String.Utils (endswith)

buildClassPath = do
		addJAR "sample/rhino-1.5r4.1.jar"

main = do
	entries <- execClassPath $ buildClassPath
	klasses <- loadCPEntries entries
	let src = fmap compileKlass klasses
	mapM putStrLn src

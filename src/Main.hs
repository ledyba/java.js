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
import System.IO

import Java2js.Java.JAR.Archive
import Java2js.JVM.Assembler

buildClassPath = do
		addJAR "sample/rhino-1.5r4.1.jar"

_main = do
		cls <- readFromJAR "sample/rhino-1.5r4.1.jar" "org/mozilla/javascript/Context.class"
		let meths = classFields cls
		mapM (\m -> putStrLn $ show (fieldName m) ++" "++show (fieldAccessFlags m)++" "++show (fieldAttributes m)) meths

main = do
	entries <- execClassPath $ buildClassPath
	klasses <- loadCPEntries entries
	putStrLn $ show (length klasses) ++ " classes."
	let src = fmap compileKlass klasses
	withFile "out.js" WriteMode (\f -> mapM (hPutStrLn f) src)

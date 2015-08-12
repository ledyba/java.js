{-# LANGUAGE OverloadedStrings #-}
module Main where
--
import Java2js.JVM.Common()
import Java2js.JVM.ClassFile
import Java2js.JVM.Converter
import Java2js.Java.JAR
import Java2js.Java.ClassPath
import Java2js.Gen
import Java2js.GenNative
import Java2js.Load
import Java2js.Type
import Data.String.Utils (endswith)
import System.IO
import System.Environment (getArgs)
import System.FilePath (takeExtension, dropExtension)

import Java2js.Java.JAR.Archive
import Java2js.JVM.Assembler

_main = do
		cls <- readFromJAR "sample/rhino-1.5r4.1.jar" "org/mozilla/javascript/Context.class"
		let meths = classFields cls
		mapM (\m -> putStrLn $ show (fieldName m) ++" "++show (fieldAccessFlags m)++" "++show (fieldAttributes m)) meths

parseArguments args defTargetJS = parseArguments' args (return ()) [] [] defTargetJS
	where
		parseArguments' [] classPath  classFiles targetClass targetJS = (classPath, classFiles, targetClass, targetJS)
		parseArguments' (p:left) classPath classFiles targetClass targetJS | (isClass p) = parseArguments' left (classPath `mergeClassPath` addClassFile (dropExtension p)) (p:classFiles) targetClass targetJS
		parseArguments' (p:left) classPath classFiles targetClass targetJS | (isJAR p) = parseArguments' left (classPath `mergeClassPath` addJAR p) (p:classFiles) targetClass targetJS
		parseArguments' (p:left) classPath classFiles targetClass targetJS | (isJS p)= parseArguments' left classPath classFiles targetClass p
		parseArguments' (p:left) classPath classFiles targetClass targetJS | otherwise = parseArguments' left classPath classFiles (p:targetClass) targetJS
		isClass fname = (takeExtension fname) == ".class"
		isJAR fname = (takeExtension fname) == ".jar"
		isJS fname = (takeExtension fname) == ".js"

build files = do
	let (classPath,classFiles,targetClass,targetJS) = parseArguments files "out.js"
	entries <- execClassPath $ classPath
	klasses <- loadCPEntries entries
	mapM (\fp -> putStrLn $ "Reading: "++fp) classFiles
	putStrLn $ "Total "++show (length klasses) ++ " classes."
	mapM (\fp -> putStrLn $ "Target: "++fp) targetClass
	putStrLn $ "Compile to: "++targetJS
	let src = fmap compileKlass klasses
	withFile targetJS WriteMode (\f -> mapM (hPutStrLn f) src)
	return ()

gen files = do
	let (classPath,classFiles,targetClass,targetJS) = parseArguments files "gen.js"
	entries <- execClassPath $ classPath
	klasses <- loadCPEntries entries
	mapM (\fp -> putStrLn $ "Reading: "++fp) classFiles
	putStrLn $ "Total "++show (length klasses) ++ " classes."
	mapM (\fp -> putStrLn $ "Target: "++fp) targetClass
	putStrLn $ "Compile to: "++targetJS
	let src = fmap generateNativeKlass klasses
	withFile targetJS WriteMode (\f -> mapM (hPutStrLn f) src)
	return ()

usage = do
	putStrLn "<usage>"
	putStrLn "   java.js build <*.jar, *.class>... build.js"
	putStrLn "   java.js gen <*.jar, *.class, java/lang/HogeClass>... rt.js"

main = do
	args <- getArgs
	putStrLn " ** java.js **"
	case args of
		"build":left -> build left
		"gen":left -> gen left
		_ -> usage

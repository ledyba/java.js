{-# LANGUAGE OverloadedStrings #-}
module Main where
--
import Java2js.JVM.Common()
import Java2js.JVM.ClassFile
import Java2js.JVM.Converter
import Java2js.Gen
import Java2js.Load
import Java2js.Type

main = do
	cls <- parseClassFile "sample/Hello.class"
	let klass = loadKlass cls
	print klass
	putStrLn $ compileKlass klass

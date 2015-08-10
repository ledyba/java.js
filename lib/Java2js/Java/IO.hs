{-# LANGUAGE OverloadedStrings #-}
-- | This module exports definitions for some most used classes and methods from standard Java java.io package.
module Java2js.Java.IO where

import Data.String

import Java2js.JVM.Common ()  -- import instances only
import Java2js.JVM.ClassFile

import qualified Java2js.Java.Lang

-- | java.io.PrintStream class name
printStream :: IsString s => s
printStream = "java/io/PrintStream"

-- | java.io.PrintStream class as field type
printStreamClass ::  FieldType
printStreamClass = ObjectType printStream

println :: NameType (Method Direct)
println = NameType "println" $ MethodSignature [Java2js.Java.Lang.stringClass] ReturnsVoid

out :: NameType (Field Direct)
out = NameType "out" printStreamClass

printf :: NameType (Method Direct)
printf =
  NameType "printf" $ MethodSignature [Java2js.Java.Lang.stringClass,
                                       Array Nothing Java2js.Java.Lang.objectClass] (Returns printStreamClass)

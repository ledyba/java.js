{-# LANGUAGE OverloadedStrings #-}
module Java2js.JVM.Dump where

import Control.Monad
import qualified Data.Map as M
import qualified Data.ByteString.Lazy.Char8 as B
import Text.Printf

import Java2js.JVM.Common ()
import Java2js.JVM.ClassFile
import Java2js.JVM.Converter
import Java2js.JVM.Assembler

-- | Dump a class to console.
dumpClass :: Class Direct -> IO ()
dumpClass cls = do
    putStr "Class: "
    B.putStrLn (thisClass cls)
    putStrLn "Constants pool:"
    forM_ (M.assocs $ constsPool cls) $ \(i, c) ->
      putStrLn $ printf "  #%d:\t%s" i (show c)
    putStrLn "Methods:"
    forM_ (classMethods cls) $ \m -> do
      putStr ">> Method "
      B.putStr (methodName m)
      print (methodSignature m)
      case attrByName m "Code" of
        Nothing -> putStrLn "(no code)\n"
        Just bytecode -> let code = decodeMethod bytecode
                         in  forM_ (codeInstructions code) $ \i -> do
                               putStr "  "
                               print i

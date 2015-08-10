
module Java2js.JVM.Builder
  (module JVM.Builder.Monad,
   module JVM.Builder.Instructions,
   arrayOf, sizedArray
  ) where

import Java2js.JVM.ClassFile

import Java2js.JVM.Builder.Monad
import Java2js.JVM.Builder.Instructions

arrayOf :: FieldType -> FieldType
arrayOf t = Array Nothing t

sizedArray :: Int -> FieldType -> FieldType
sizedArray n t = Array (Just n) t

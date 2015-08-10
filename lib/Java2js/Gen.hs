{-# LANGUAGE OverloadedStrings #-}
module Java2js.Gen(compileKlass) where

import Data.List (intercalate)
import qualified Data.Map.Strict as M
import Java2js.Type
import Data.Text.Template (template, render)
import Java2js.GenFun
import qualified Data.Text as T
import qualified Data.Text.Lazy as L

klassTemplate = template "\
\(function(){\n\
\var klass = function(){ this[\"<init>\"].apply(this,arguments); };\n\
\Java[\"${klassName}\"] = klass;\n\
\var proto = klass.prototype = Object.create(Java[\"${superKlass}\"].prototype);\n\
\proto.constructor = klass;\n\
\${staticFields}\n\
\${staticMethods}\n\
\${methods}\n\
\if(klass[\"<clinit>\"]){klass[\"<clinit>\"].call(null)};\n\
\})();\n\
\"

compileKlass :: Klass -> String
compileKlass klass = L.unpack $ render klassTemplate ctx
			where
				ctx "klassName" = T.pack (klassName klass)
				ctx "superKlass" = T.pack (superKlass klass)
				ctx "staticFields" = compileStaticFields klass
				ctx "staticMethods" = T.pack (M.foldlWithKey (\l key meth -> l++"klass[\""++key++"\"] = "++compileMethod klass meth True++";\n") "" $ staticMethods klass)
				ctx "methods" = T.pack (M.foldlWithKey (\l key meth -> l++"proto[\""++key++"\"] = "++compileMethod klass meth False++";\n") "" $ methods klass)

compileStaticFields klass = T.pack $ intercalate "\n" (fmap (\f -> "proto[\""++f++"\"] = null;") $ staticFields klass)

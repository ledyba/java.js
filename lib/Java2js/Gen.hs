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
\var klass = null;\n\
\Java[\"${klassName}\"] = function(){\n\
\if(klass === null){\n\
\klass = function(){ var init = klass[\"<init>()V\"]; if(init){init.apply(this,[]); }{throw \"NoDefaultConstructor\";}};\n\
\var proto = klass.prototype = Object.create(Java[\"${superKlass}\"].prototype);\n\
\proto.constructor = klass;\n\
\${staticFields}\n\
\${staticMethods}\n\
\${methods}\n\
\var clinit = klass[\"<clinit>()V\"];\
\if(clinit){clinit.call(null)};\n\
\}\n\
\return klass;\n\
\}\n\
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

compileStaticFields klass = T.pack $ intercalate "\n" (fmap (\(name, constant) -> "klass[\""++name++"\"] = "++compileConstant' constant++";") $ staticFields klass)
												where
													compileConstant' Nothing = "null"
													compileConstant' (Just s) = compileConstant s

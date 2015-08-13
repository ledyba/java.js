.PHONY: all gen

all:
	cabal run build \
			sample/fesi.jar \
			runtime/out.js

gen:
	cabal run gen \
			sample/rt.jar \
			java/lang/Object \
			java/lang/String \
			java/lang/System \
			java/lang/Integer \
			java/lang/Double \
			java/util/Collections \
			java/text/Collator \
			java/util/GregorianCalendar \
			java/util/regex/Pattern \
			java/util/concurrent/ConcurrentHashMap \
			java/io/StringReader \
			java/lang/Math \
			runtime/rt.js

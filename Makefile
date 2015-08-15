.PHONY: all gen

all:
	cabal run build \
			sample/fesi.jar \
			sample/js_on_java_on_js/out.js

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
			java/util/HashSet \
			java/util/HashMap \
			java/lang/Math \
			java/io/Serializable \
			java/util/Formatter \
			java/lang/NoSuchMethodException \
			java/util/Arrays \
			sample/js_on_java_on_js/rt.js

pi:
	cabal run build \
			sample/pi/Pi.class \
			sample/pi/pi.js
	cabal run gen \
			sample/rt.jar \
			java/lang/Object \
			sample/pi/runtime.js

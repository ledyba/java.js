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
			java/util/concurrent/ConcurrentHashMap \
			runtime/rt.js

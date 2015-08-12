.PHONY: all gen

all:
	cabal run build

gen:
	cabal run gen

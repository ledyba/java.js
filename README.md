# Java.js: Java bytecode to javascript compiler!

 Java.js is a **Java bytecode to JavaScript compiler** ! You can run your Java program in your web browser.

## Requirement

- Haskell Platform: https://www.haskell.org/platform/

## Demonstrations

### PI calculation

[![](https://raw.githubusercontent.com/ledyba/java.js/master/sample/pi/pi.png)](https://cdn.rawgit.com/ledyba/java.js/master/sample/pi/index.html)

### Executing "JavaScript Interpreter" on JavaScript (JS on Java on JS)

[![](https://raw.githubusercontent.com/ledyba/java.js/master/sample/js_on_java_on_js/demo1.png)](https://rawgit.com/ledyba/java.js/master/sample/js_on_java_on_js/index.html)

### Java on JS on Java on JS

We can also run (Java program (compiled to JS)) on (JavaScript Interpreter (written in Java) (compiled to JS)) on (your JavaScript Engine in browser). In other words, executing **Java on JS on Java on JS**!!

[![](https://raw.githubusercontent.com/ledyba/java.js/master/sample/js_on_java_on_js/demo2.png)](https://rawgit.com/ledyba/java.js/master/sample/js_on_java_on_js/index.html)

## How to build

```bash
git clone git@github.com:ledyba/java.js.git
cd java.js
cabal sandbox init
cabal build
```

## How to compile?

For exaple, let's compile a example Java program, [Pi.java](https://github.com/ledyba/java.js/blob/master/sample/pi/Pi.java)!

```bash
# java.js suports .class files for java7 or earlier.
javac -source 1.6 -target 1.6 sample/Pi.java
# compile to JavaScript!
cabal run build \
		sample/pi/Pi.class \
		sample/pi/pi.js
```

You can get "sample/pi/pi.js":

```js
Java.registerClass("Pi", false, "java/lang/Object", [], function(klass,proto){

proto["<init>()V"] = function(){
	var stack = [];
	var local=new Array(1);
	local[0]=this;
	var pc=0;
	while(true){
		try{
		switch(pc){
			case 0: pc = 0; /* ALOAD_ I0 */ stack.push(local[0]);
			case 1: pc = 1; /* INVOKESPECIAL 1 */ var self = stack.pop(); Java["java/lang/Object"]().prototype["<init>()V"].apply(self, []);
			case 4: pc = 4; /* RETURN */ return;
		}}catch(e){
			 stack.push(e);
			 throw e;
		}
	}
};
klass["arcTan(D)D"] = function(){
	var stack = [];
	var local=new Array(9);
	local[0] = arguments[0];
	var pc=0;
	while(true){
		try{
		switch(pc){
			case 0: pc = 0; /* DCONST_0 */ stack.push(null);stack.push(0);
			case 1: pc = 1; /* DSTORE_ I2 */ local[2]=stack.pop();stack.pop();
			case 2: pc = 2; /* DLOAD_ I0 */ stack.push(null);stack.push(local[0] || 0);
			case 3: pc = 3; /* DSTORE 4 */ local[4]=stack.pop();stack.pop();
			case 5: pc = 5; /* DLOAD_ I0 */ stack.push(null);stack.push(local[0] || 0);
			case 6: pc = 6; /* DLOAD_ I0 */ stack.push(null);stack.push(local[0] || 0);
			case 7: pc = 7; /* DMUL */ var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); stack.push(null); stack.push(a*b);
			case 8: pc = 8; /* DSTORE 6 */ local[6]=stack.pop();stack.pop();
			case 10: pc = 10; /* ICONST_0 */ stack.push(0);
			case 11: pc = 11; /* ISTORE 8 */ local[8]=stack.pop();
			case 13: pc = 13; /* DLOAD 4 */ stack.push(null);stack.push(local[4] || 0);
			case 15: pc = 15; /* DCONST_0 */ stack.push(null);stack.push(0);
			case 16: pc = 16; /* DCMP C_LT */ var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); if(b > a){stack.push(1);}else if(b < a){stack.push(-1);}else if(a==b){ stack.push(0); }else{ stack.push(1); }
			case 17: pc = 17; /* IF C_EQ 31 */ var a = stack.pop(); if(a==0){pc += 31; break;}
			/* ... ... ... */
			case 45: pc = 45; /* GOTO (-32) */ pc += -32; break;
			case 48: pc = 48; /* DLOAD_ I2 */ stack.push(null);stack.push(local[2] || 0);
			case 49: pc = 49; /* DRETURN */ return stack.pop();
		}}catch(e){
			 stack.push(e);
			 throw e;
		}
	}
};
klass["calc()D"] = function(){
	var stack = [];
	var local=new Array(2);

	var pc=0;
	while(true){
		try{
		switch(pc){
			case 0: pc = 0; /* LDC2W 2 */ stack.push(null); stack.push((16.0));
			case 3: pc = 3; /* LDC2W 4 */ stack.push(null); stack.push((0.2));
			case 6: pc = 6; /* INVOKESTATIC 6 */ var i0=stack.pop();stack.pop();stack.push(null);stack.push(Java["Pi"]()["arcTan(D)D"].apply(null, [i0,]));
			case 9: pc = 9; /* DMUL */ var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); stack.push(null); stack.push(a*b);
			case 10: pc = 10; /* LDC2W 7 */ stack.push(null); stack.push((4.0));
			case 13: pc = 13; /* LDC2W 9 */ stack.push(null); stack.push((4.1841004184100415e-3));
			case 16: pc = 16; /* INVOKESTATIC 6 */ var i0=stack.pop();stack.pop();stack.push(null);stack.push(Java["Pi"]()["arcTan(D)D"].apply(null, [i0,]));
			case 19: pc = 19; /* DMUL */ var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); stack.push(null); stack.push(a*b);
			case 20: pc = 20; /* DSUB */ var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); stack.push(null); stack.push(b-a);
			case 21: pc = 21; /* DSTORE_ I0 */ local[0]=stack.pop();stack.pop();
			case 22: pc = 22; /* DLOAD_ I0 */ stack.push(null);stack.push(local[0] || 0);
			case 23: pc = 23; /* DRETURN */ return stack.pop();
		}}catch(e){
			 stack.push(e);
			 throw e;
		}
	}
};

});
```

You also need **Runtime Library** . For this example, you are enough to prepare a js code for **"java.lang.Object"**.

You can generate a stab with:

```bash
gen:
	cabal run gen \
			<YOUR JAVA_HOME>/jre/lib/rt.jar \
			java/lang/Object \
			sample/pi/rt.js
```

```js
/*... ... ...*/

//"java/lang/Object"
Java.registerClass("java/lang/Object", false, null, [], function(klass,proto){

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Object#<init>()V");
	};
	proto["getClass()Ljava/lang/Class;"] = function(){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Object#getClass()Ljava/lang/Class;");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Object#hashCode()I");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Object#equals(Ljava/lang/Object;)Z");
	};
	proto["clone()Ljava/lang/Object;"] = function(){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Object#clone()Ljava/lang/Object;");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Object#toString()Ljava/lang/String;");
	};
	proto["notify()V"] = function(){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Object#notify()V");
	};
	proto["notifyAll()V"] = function(){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Object#notifyAll()V");
	};
	proto["wait(J)V"] = function(l0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Object#wait(J)V");
	};
	proto["wait(JI)V"] = null;
	proto["wait()V"] = null;
	proto["finalize()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Object#finalize()V");
	};

});
```

This example program uses "<init>()V" only, so you can implement like this:

```js
/*... ... ...*/

//"java/lang/Object"
Java.registerClass("java/lang/Object", false, null, [], function(klass,proto){

	proto["<init>()V"] = function(){
		// do nothing!
	};
	/*... ... ...*/
});
```

All of the preparation is in order! You can call Pi.calc() method in your js code!!

```html
<script type="text/javascript" src="../../runtime/bigdecimal.js" charset="utf-8"></script>
<script type="text/javascript" src="../../runtime/java.js" charset="utf-8"></script>
<script type="text/javascript" src="./rt.js" charset="utf-8"></script>
<script type="text/javascript" src="./pi.js" charset="utf-8"></script>
<script type="text/javascript">
  (function(){
    window.onload = function(){
      var piClass = Java["Pi"]();
      var pi = piClass["calc()D"]();
      document.getElementById("result").innerText = pi.toString();
    }
  })();
</script>
```
Now you can calculate PI:

[![](https://raw.githubusercontent.com/ledyba/java.js/master/sample/pi/pi.png)](https://cdn.rawgit.com/ledyba/java.js/master/sample/pi/index.html)

## Limitation

- It does not support Java8 classfile(version 52) today.
- Most of Java runtime library are not implemented. But you can.

# Java.js

Javaのバイトコードを変換してJSにすれば30億以上のデバイスで動くんじゃね？？？？

ジャバアプレットが使えなくなったこの世界を……ウッ……ガエダイ!

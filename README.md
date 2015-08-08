# Java.js

a code converter from Java 2 js.

# Java.js

Javaのバイトコードを変換してJSにすれば30億以上のデバイスで動くんじゃね？？？？

ジャバアプレットが使えなくなったこの世界を……ウッ……ガエダイ!

現在、まだHelloWorldが動くというレベルです。

## サンプル

HelloWorldを用意します。

```java
public class Hello{
	public static void main(String[] args){
		System.out.println("Hello world");
	}
}
```

これをコンパイルすると…

```js
(function(){
var klass = function(){
var stack = [];
var local=[this, null, null, null];
stack.push(local[0]);
var i0=stack.pop();var i1=stack.pop();var self = stack.pop(); stack.push(Java["java/lang/Object"]["<init>"].apply(self, []));
return;
};
klass.prototype = Java["java/lang/Object"];
Java["Hello"] = klass;
klass["main"] = function(){
var stack = [];
var local=[this, null, null, null];
stack.push(Java["java/lang/System"]["out"]);
stack.push(Java.mkString("Hello world"));
var i1=stack.pop();var self = stack.pop(); stack.push(Java["java/io/PrintStream"]["println"].apply(self, [i1,]));
return;
};
(klass["<clinit>"]).call(klass);
})();
```

こうなります。

これをJSから呼ぶには、

```js
Java["Hello"].main();
```

として呼び出します。

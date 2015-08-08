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
klass["<clinit>"] = function(){
var stack = [];
var local=[this, null, null, null];
stack.push(123);
Java["Hello"]["value"] = stack.pop();
return;
};
klass["main"] = function(){
var stack = [];
var local=[this, null, null, null];
stack.push(Java["java/lang/System"]["out"]);
stack.push(Java.mkString("Hello world"));
var i1=stack.pop();var self = stack.pop(); stack.push(Java["java/io/PrintStream"]["println"].apply(self, [i1,]));
return;
};
klass["test"] = function(){
var stack = [];
var local=[this, null, null, null];
stack.push(0);
return stack.pop();
};
klass["value"] = null;
(klass["<clinit>"]).call(klass);
})();

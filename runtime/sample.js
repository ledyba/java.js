(function(){
var klass = function(){
var stack = [];
var local=[this, null, null, null];
var pc=0;
while(true){switch(pc){
case 0:
stack.push(local[0]);
var self = stack.pop(); Java["java/lang/Object"]["<init>"].apply(self, []);
return;
}}};
klass.prototype = Java["java/lang/Object"];
Java["Hello"] = klass;
klass["<clinit>"] = function(){
var stack = [];
var local=[this, null, null, null];
var pc=0;
while(true){switch(pc){
case 0:
stack.push(123);
Java["Hello"]["value"] = stack.pop();
return;
}}};
klass["main"] = function(){
var stack = [];
var local=[this, null, null, null];
var pc=0;
while(true){switch(pc){
case 0:
stack.push(Java["java/lang/System"]["out"]);
stack.push(("Hello world"));
var i0=stack.pop();var self = stack.pop(); Java["java/io/PrintStream"]["println(Ljava/lang/String;)V"].apply(self, [i0,]);
return;
}}};
klass["test"] = function(){
var stack = [];
var local=[this, null, null, null];
var pc=0;
while(true){switch(pc){
case 0:
stack.push(0);
return stack.pop();
}}};
klass["value"] = null;
(klass["<clinit>"]).call(klass);
})();

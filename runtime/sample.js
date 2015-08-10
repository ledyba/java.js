(function(){
var klass = function(){ this["<init>"].apply(this,arguments); };
Java["Hello"] = klass;
var proto = klass.prototype = Object.create(Java["java/lang/Object"].prototype);
proto.constructor = klass;
proto["value"] = null;
klass["<clinit>"] = function(){
	return;
	var stack = [];
	var local=[this, null, null, null];
	var pc=0;
	while(true){
		try{
		switch(pc){
			case 0: pc = 0;stack.push(123);
			case 2: pc = 2;Java["Hello"]["value"] = stack.pop();
			case 5: pc = 5;return;
		}}catch(e){
			console.log(e);
		}
	}
};
klass["main"] = function(){
	var stack = [];
	var local=[this, null, null, null];
	var pc=0;
	while(true){
		try{
		switch(pc){
			case 0: pc = 0;stack.push(Java["java/lang/System"]["out"]);
			case 3: pc = 3;stack.push(("Hello world"));
			case 5: pc = 5;var i0=stack.pop();var self = stack.pop(); self["println(Ljava/lang/String;)V"].apply(self, [i0,]);
			case 8: pc = 8;return;
		}}catch(e){
		}
	}
};

proto["<init>"] = function(){
	var stack = [];
	var local=[this, null, null, null];
	var pc=0;
	while(true){
		try{
		switch(pc){
			case 0: pc = 0;stack.push(local[0]);
			case 1: pc = 1;var self = stack.pop(); Java["java/lang/Object"]["<init>"].apply(self, []);
			case 4: pc = 4;return;
		}}catch(e){
		}
	}
};
proto["test"] = function(){
	var stack = [];
	var local=[this, null, null, null];
	var pc=0;
	while(true){
		try{
		switch(pc){
			case 0: pc = 0;stack.push(0);
			case 1: pc = 1;return stack.pop();
		}}catch(e){
		}
	}
};

klass["<clinit>"].call(null);
})();

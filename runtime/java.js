var Java = {};
(function(){
	var log = Function.prototype.bind.call(console.log, console);
	Java.mkString = function(str){
		return str;
	};
	Java["java/lang/Object"] = (function(){
		var klass = function(){};
		var proto = klass.prototype;
		proto["<init>"] = function(){};
		return klass;
	})();
	Java["java/io/PrintStream"] = (function(){
		var klass = function(){};
		var proto = klass.prototype;
		proto["<init>"] = function(){};
		proto["println(Ljava/lang/String;)V"] = function(){
			log.apply(console, arguments);
		};
		return klass;
	})();
	Java["java/lang/System"] = (function(){
		var klass = function(){};
		var proto = klass.prototype;
		proto["<init>"] = function(){};
		klass.out = new Java["java/io/PrintStream"]();
		return klass;
	})();
})();

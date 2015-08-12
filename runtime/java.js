var Java = {};
(function(){
	var log = Function.prototype.bind.call(console.log, console);
	Java.mkString = function(str){
		return str;
	};
	Java.mkClassObj = function(klass, name){
		return new (Java["java/lang/Class"]())(klass, name);
	};
	Java.mkNativeClass = function(genF){
		var kls = null;
		return function(){
			if(kls === null){
				kls = genF();
			}
			return kls;
		};
	}
	Java.instanceOf = function(kls, obj){
		// FIXME: チェックしよう
	};
	Java.checkCast = function(kls, obj){
		// FIXME: チェックしよう
	};
	Java["java/lang/Object"] = Java.mkNativeClass(function(){
		var klass = function(){};
		var proto = klass.prototype;
		proto["<init>()V"] = function(){};
		return klass;
	});
	Java["java/io/PrintStream"] = Java.mkNativeClass(function(){
		var klass = function(){};
		var proto = klass.prototype;
		proto["<init>()V"] = function(){};
		proto["println(Ljava/lang/String;)V"] = function(){
			log.apply(console, arguments);
		};
		proto["println(D)V"] = function(){
			log.apply(console, arguments);
		};
		return klass;
	});
	Java["java/lang/System"] = Java.mkNativeClass(function(){
		var klass = function(){};
		var proto = klass.prototype;
		proto["<init>()V"] = function(){};
		klass.out = (new Java["java/io/PrintStream"]())();
		return klass;
	});
	Java["java/lang/Class"] = Java.mkNativeClass(function(){
		var klass = function(kls, name){
			this.name = name;
		};
		var proto = klass.prototype;
		proto["getName()Ljava/lang/String;"] = function(){ return this.name; };
		proto["<init>()V"] = function(){};
		return klass;
	});
})();

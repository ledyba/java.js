var Java = {};
(function(){
	var log = Function.prototype.bind.call(console.log, console);
	Java.mkString = function(str){
		return str;
	};
	Java.mkClassObj = function(klass, name){
		var classClass =Java["java/lang/Class"]();
		var obj = new classClass();
		obj.init(klass, name);
		return obj;
	};
	Java.mkNativeClass = function(genF){
		var kls = null;
		return function(){
			if(kls === null){
				kls = function(){};
				genF(kls);
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
})();

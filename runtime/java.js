var Java = {};
(function(){
	var log = Function.prototype.bind.call(console.log, console);
	Java.mkString = function(str){
		var kls = Java["java/lang/String"]();
		var obj = new kls();
		obj.val = str;
		return obj;
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
	};
	Java.makeAAray = function(len){
		var array = new Array(len);
		var i=len; while (i) array[--i] = null;
		return array;
	}
	Java.instanceOf = function(kls, obj){
		// FIXME: チェックしよう
	};
	Java.checkCast = function(kls, obj){
		// FIXME: チェックしよう
	};
})();

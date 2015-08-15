var Java = {};
(function(){
	var log = Function.prototype.bind.call(console.log, console);
	Java.mkString = function(str){
		var kls = Java["java/lang/String"]();
		var obj = new kls();
		obj.val = str;
		return obj;
	};
	Java.Long = {
		MASK: new BigInteger("18446744073709551615"),
		MAX: new BigInteger("9223372036854775807"),
		MIN: new BigInteger("-9223372036854775808"),
		ZERO: new BigInteger("0"),
		ONE: new BigInteger("1")
	};
	Java.mkLong = function(v){
		return new BigInteger(v.toString());
	};
	Java.mkLongFromDouble = function(v){
		if(v <= -9223372036854775808){
			return Java.Long.MIN;
		}else if(v >= 9223372036854775807){
			return Java.Long.MAX;
		}else if(v === v){
			return new BigDecimal(v.toString()).toBigInteger();
		}else{
			return Java.Long.ZERO;
		}
	};
	Java.mkNativeClass = function(clinit){
		var kls = null;
		return function(){
			if(kls === null){
				kls = function(){};
				clinit(kls);
				kls.prototype.__is_java__ = true;
			}
			return kls;
		};
	};
	Java.mkClass = function(clinit){
		var kls = null;
		return function(){
			if(kls === null){
				kls = function(){};
				clinit(kls);
				kls.prototype.__is_java__ = true;
			}
			return kls;
		};
	};
	Java.classObjectOf = function (name) {
		if(Java.hasOwnProperty(name)){
			var cls = Java[name]();
			return (cls["$classObject"])();
		}
		throw new Error("Unknown Class: "+name);
	}
	Java.registerClass = function(name, isInterface, superClassName, implements, clinit){
		var cls = null;
		Java[name] = function(){
			if(cls === null){
				cls = function(){};
				if(isInterface || superClassName === null){
					cls.prototype = {};
				}else{
					var superClass = Java[superClassName]();
					cls.__proto__ = superClass;
					cls.prototype = Object.create(superClass.prototype);
				}
				var proto = cls.prototype;
				proto.constructor = cls;
				proto["$isJava"] = true;
				proto["$className"] = name;
				cls["$super"] = superClassName;
				cls["$isInterface"] = isInterface;
				cls["$interfaces"] = implements;
				cls["$class"] = cls;
				var clsObj = null;
				cls["$classObject"] = function(){
					if(clsObj === null){
						var classClass =Java["java/lang/Class"]();
						clsObj = new classClass();
						clsObj["class"] = cls;
						clsObj["name"] = name;
					}
					return clsObj;
				};
				clinit(cls, proto);
			}
			return cls;
		};
	};
	Java.Array = function(){};
	Java.makeAAray = function(len){
		var array = new Array(len);
		var i=len; while (i) array[--i] = null;
		return array;
	};
	Java.mkIterator=function(list){
		var it = new (Java["java/util/Iterator"]())();
		var pt = 0;
		it["hasNext()Z"] = function(){
			return pt < list.length;
		};
		it["next()Ljava/lang/Object;"] = function(){
			return list[pt++];
		};
		it["remove()V"] = function(){
			throw Error("Iterator#remove is not supported");
		};
		return it;
	};
	Java.instanceOf = function(klsName, obj){
		if(!obj || !obj["$isJava"]){
			return 0;
		}
		// more accurate!!
		if(!Java.hasOwnProperty(klsName)){
			throw new Error("Unknown class: ["+klsName+"]");
		}
		var kls = Java[klsName]();
		if(klsName[0] === "["){
			throw new Error("[TODO] Support array cast");
		}
		if(!kls["$isInterface"]){
			return (obj instanceof kls)?1:0;
		}else{
			console.log("[TODO] Support interface cast");
			throw new Error("[TODO] Support interface cast");
		}
	};
	Java.checkCast = function(klsName, obj){
		// FIXME: チェックしよう
	};
})();

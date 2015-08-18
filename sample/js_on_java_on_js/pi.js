var Java = {};
(function(){
	Java.mkString = function(str){
		var kls = Java["java/lang/String"]();
		var obj = new kls();
		obj.val = str;
		return obj;
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
				cls["$name"] = name;
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

//"java/lang/Object"
Java.registerClass("java/lang/Object", false, null, [], function(klass,proto){
	proto["<init>()V"] = function(){
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
	var i0,a,b;
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
			case 20: pc = 20; /* DLOAD_ I2 */ stack.push(null);stack.push(local[2] || 0);
			case 21: pc = 21; /* DLOAD 4 */ stack.push(null);stack.push(local[4] || 0);
			case 23: pc = 23; /* ILOAD 8 */ stack.push(local[8] || 0);
			case 25: pc = 25; /* ILOAD 8 */ stack.push(local[8] || 0);
			case 27: pc = 27; /* IADD */ stack.push((stack.pop()+stack.pop())|0);
			case 28: pc = 28; /* ICONST_1 */ stack.push(1);
			case 29: pc = 29; /* IADD */ stack.push((stack.pop()+stack.pop())|0);
			case 30: pc = 30; /* I2D */ var a = stack.pop(); stack.push(null); stack.push(a);
			case 31: pc = 31; /* DDIV */ var b = stack.pop(); stack.pop(); var a = stack.pop(); stack.pop(); stack.push(null); stack.push(a/b);
			case 32: pc = 32; /* DADD */ var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); stack.push(null); stack.push(a+b);
			case 33: pc = 33; /* DSTORE_ I2 */ local[2]=stack.pop();stack.pop();
			case 34: pc = 34; /* DLOAD 4 */ stack.push(null);stack.push(local[4] || 0);
			case 36: pc = 36; /* DNEG */ stack.push(-stack.pop());
			case 37: pc = 37; /* DLOAD 6 */ stack.push(null);stack.push(local[6] || 0);
			case 39: pc = 39; /* DMUL */ var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); stack.push(null); stack.push(a*b);
			case 40: pc = 40; /* DSTORE 4 */ local[4]=stack.pop();stack.pop();
			case 42: pc = 42; /* IINC 8 1 */ local[8]+=1;
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
	var i0,a,b;
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

Java["Pi"]()["calc()D"]();
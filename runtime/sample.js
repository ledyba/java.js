(function(){
var klass = function(){ this["<init>"].apply(this,arguments); };
Java["Pi"] = klass;
var proto = klass.prototype = Object.create(Java["java/lang/Object"].prototype);
proto.constructor = klass;

klass["arcTan"] = function(){
	var stack = [];
	var local=new Array(9);
	local[0] = arguments[0];
	var pc=0;
	while(true){
		try{
		switch(pc){
			case 0: pc = 0; /* DCONST_0 */ stack.push(null);stack.push(0);
			case 1: pc = 1; /* DSTORE_ I2 */ local[2]=stack.pop();stack.pop();
			case 2: pc = 2; /* DLOAD_ I0 */ stack.push(null);stack.push(local[0]);
			case 3: pc = 3; /* DSTORE 4 */ local[4]=stack.pop();stack.pop();
			case 5: pc = 5; /* DLOAD_ I0 */ stack.push(null);stack.push(local[0]);
			case 6: pc = 6; /* DLOAD_ I0 */ stack.push(null);stack.push(local[0]);
			case 7: pc = 7; /* DMUL */ var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); stack.push(null); stack.push(a*b);
			case 8: pc = 8; /* DSTORE 6 */ local[6]=stack.pop();stack.pop();
			case 10: pc = 10; /* ICONST_0 */ stack.push(0);
			case 11: pc = 11; /* ISTORE 8 */ local[8]=stack.pop();
			case 13: pc = 13; /* DLOAD 4 */ stack.push(null);stack.push(local[4]);
			case 15: pc = 15; /* DCONST_0 */ stack.push(null);stack.push(0);
			case 16: pc = 16; /* DCMP C_LT */ var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); if(b > a){stack.push(1);}else if(a < b){stack.push(-1);}else if(a==b){ stack.push(0); }else{ stack.push(1); }
			case 17: pc = 17; /* IF C_EQ 31 */ var a = stack.pop(); if(a==0){pc += 31; break;}
			case 20: pc = 20; /* DLOAD_ I2 */ stack.push(null);stack.push(local[2]);
			case 21: pc = 21; /* DLOAD 4 */ stack.push(null);stack.push(local[4]);
			case 23: pc = 23; /* ILOAD 8 */ stack.push(local[8]);
			case 25: pc = 25; /* ILOAD 8 */ stack.push(local[8]);
			case 27: pc = 27; /* IADD */ stack.push(stack.pop()+stack.pop());
			case 28: pc = 28; /* ICONST_1 */ stack.push(1);
			case 29: pc = 29; /* IADD */ stack.push(stack.pop()+stack.pop());
			case 30: pc = 30; /* I2D */ var a = stack.pop(); stack.push(null); stack.push(a);
			case 31: pc = 31; /* DDIV */ var b = stack.pop(); stack.pop(); var a = stack.pop(); stack.pop(); stack.push(null); stack.push(a/b);
			case 32: pc = 32; /* DADD */ var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); stack.push(null); stack.push(a+b);
			case 33: pc = 33; /* DSTORE_ I2 */ local[2]=stack.pop();stack.pop();
			case 34: pc = 34; /* DLOAD 4 */ stack.push(null);stack.push(local[4]);
			case 36: pc = 36; /* DNEG */ stack.push(-stack.pop());
			case 37: pc = 37; /* DLOAD 6 */ stack.push(null);stack.push(local[6]);
			case 39: pc = 39; /* DMUL */ var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); stack.push(null); stack.push(a*b);
			case 40: pc = 40; /* DSTORE 4 */ local[4]=stack.pop();stack.pop();
			case 42: pc = 42; /* IINC 8 1 */ local[8]+=1;
			case 45: pc = 45; /* GOTO (-32) */ pc += -32; break;
			case 48: pc = 48; /* DLOAD_ I2 */ stack.push(null);stack.push(local[2]);
			case 49: pc = 49; /* DRETURN */ return stack.pop();
		}}catch(e){
		}
	}
};
klass["main"] = function(){
	var stack = [];
	var local=new Array(3);
	local[0] = arguments[0];
	var pc=0;
	while(true){
		try{
		switch(pc){
			case 0: pc = 0; /* LDC2W 2 */ stack.push(null); stack.push((16.0));
			case 3: pc = 3; /* LDC2W 4 */ stack.push(null); stack.push((0.2));
			case 6: pc = 6; /* INVOKESTATIC 6 */ var i0=stack.pop();stack.pop();stack.push(null);stack.push(Java["Pi"]["arcTan"].apply(null, [i0,]));
			case 9: pc = 9; /* DMUL */ var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); stack.push(null); stack.push(a*b);
			case 10: pc = 10; /* LDC2W 7 */ stack.push(null); stack.push((4.0));
			case 13: pc = 13; /* LDC2W 9 */ stack.push(null); stack.push((4.1841004184100415e-3));
			case 16: pc = 16; /* INVOKESTATIC 6 */ var i0=stack.pop();stack.pop();stack.push(null);stack.push(Java["Pi"]["arcTan"].apply(null, [i0,]));
			case 19: pc = 19; /* DMUL */ var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); stack.push(null); stack.push(a*b);
			case 20: pc = 20; /* DSUB */ var a = stack.pop(); stack.pop(); var b = stack.pop(); stack.pop(); stack.push(null); stack.push(b-a);
			case 21: pc = 21; /* DSTORE_ I1 */ local[1]=stack.pop();stack.pop();
			case 22: pc = 22; /* GETSTATIC 11 */ stack.push(Java["java/lang/System"]["out"]);
			case 25: pc = 25; /* DLOAD_ I1 */ stack.push(null);stack.push(local[1]);
			case 26: pc = 26; /* INVOKEVIRTUAL 12 */ var i0=stack.pop();stack.pop();var self = stack.pop(); self["println(D)V"].apply(self, [i0,]);
			case 29: pc = 29; /* RETURN */ return;
		}}catch(e){
		}
	}
};

proto["<init>"] = function(){
	var stack = [];
	var local=new Array(1);
	local[0]=this;
	var pc=0;
	while(true){
		try{
		switch(pc){
			case 0: pc = 0; /* ALOAD_ I0 */ stack.push(local[0]);
			case 1: pc = 1; /* INVOKESPECIAL 1 */ var self = stack.pop(); Java["java/lang/Object"]["<init>"].apply(self, []);
			case 4: pc = 4; /* RETURN */ return;
		}}catch(e){
		}
	}
};

if(klass["<clinit>"]){klass["<clinit>"].call(null)};
})();

Java["java/lang/Object"] = Java.mkNativeClass(function(){
	var klass = function(){};
	var proto = klass.prototype = Object.create(Java[""]().prototype);
	proto.constructor = klass;
	klass.classObj = Java.mkClassObj(klass, "java/lang/Object");

		proto["<init>()V"] = function(){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["getClass()Ljava/lang/Class;"] = function(){
			var self = this;
			/* Native Method */
			throw 'NotImplemented.';
		};
		proto["hashCode()I"] = function(){
			var self = this;
			/* Native Method */
			throw 'NotImplemented.';
		};
		proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["clone()Ljava/lang/Object;"] = function(){
			var self = this;
			/* Native Method */
			throw 'NotImplemented.';
		};
		proto["toString()Ljava/lang/String;"] = function(){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["notify()V"] = function(){
			var self = this;
			/* Native Method */
			throw 'NotImplemented.';
		};
		proto["notifyAll()V"] = function(){
			var self = this;
			/* Native Method */
			throw 'NotImplemented.';
		};
		proto["wait(J)V"] = function(l0){
			var self = this;
			/* Native Method */
			throw 'NotImplemented.';
		};
		proto["wait(JI)V"] = null;
		proto["wait()V"] = null;
		proto["finalize()V"] = function(){
			var self = this;
			throw 'NotImplemented.';
		};
		klass["<clinit>()V"] = function(){
			var self = null;
			throw 'NotImplemented.';
		};

	return klass;
});

Java["java/lang/String"] = Java.mkNativeClass(function(){
	var klass = function(){};
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	klass.classObj = Java.mkClassObj(klass, "java/lang/String");
		klass["CASE_INSENSITIVE_ORDER"] = null;
		proto["<init>()V"] = function(){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["<init>(Ljava/lang/String;)V"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["<init>([C)V"] = function(arr_ch0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["<init>([CII)V"] = function(arr_ch0,i1,i2){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["<init>([III)V"] = function(arr_i0,i1,i2){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["<init>([BIII)V"] = function(arr_sb0,i1,i2,i3){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["<init>([BI)V"] = function(arr_sb0,i1){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["<init>([BIILjava/lang/String;)V"] = function(arr_sb0,i1,i2,ref3){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["<init>([BIILjava/nio/charset/Charset;)V"] = function(arr_sb0,i1,i2,ref3){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["<init>([BLjava/lang/String;)V"] = function(arr_sb0,ref1){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["<init>([BLjava/nio/charset/Charset;)V"] = function(arr_sb0,ref1){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["<init>([BII)V"] = function(arr_sb0,i1,i2){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["<init>([B)V"] = function(arr_sb0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["<init>(Ljava/lang/StringBuffer;)V"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["<init>(Ljava/lang/StringBuilder;)V"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["<init>([CZ)V"] = function(arr_ch0,b1){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["<init>(II[C)V"] = function(i0,i1,arr_ch2){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["length()I"] = function(){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["isEmpty()Z"] = function(){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["charAt(I)C"] = function(i0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["codePointAt(I)I"] = function(i0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["codePointBefore(I)I"] = function(i0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["codePointCount(II)I"] = function(i0,i1){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["offsetByCodePoints(II)I"] = function(i0,i1){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["getChars([CI)V"] = function(arr_ch0,i1){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["getChars(II[CI)V"] = function(i0,i1,arr_ch2,i3){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["getBytes(II[BI)V"] = function(i0,i1,arr_sb2,i3){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["getBytes(Ljava/lang/String;)[B"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["getBytes(Ljava/nio/charset/Charset;)[B"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["getBytes()[B"] = function(){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["contentEquals(Ljava/lang/StringBuffer;)Z"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["contentEquals(Ljava/lang/CharSequence;)Z"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["equalsIgnoreCase(Ljava/lang/String;)Z"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["compareTo(Ljava/lang/String;)I"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["compareToIgnoreCase(Ljava/lang/String;)I"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["regionMatches(ILjava/lang/String;II)Z"] = function(i0,ref1,i2,i3){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["regionMatches(ZILjava/lang/String;II)Z"] = function(b0,i1,ref2,i3,i4){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["startsWith(Ljava/lang/String;I)Z"] = function(ref0,i1){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["startsWith(Ljava/lang/String;)Z"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["endsWith(Ljava/lang/String;)Z"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["hashCode()I"] = function(){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["indexOf(I)I"] = function(i0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["indexOf(II)I"] = function(i0,i1){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["lastIndexOf(I)I"] = function(i0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["lastIndexOf(II)I"] = function(i0,i1){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["indexOf(Ljava/lang/String;)I"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["indexOf(Ljava/lang/String;I)I"] = function(ref0,i1){
			var self = this;
			throw 'NotImplemented.';
		};
		klass["indexOf([CII[CIII)I"] = function(arr_ch0,i1,i2,arr_ch3,i4,i5,i6){
			var self = null;
			throw 'NotImplemented.';
		};
		proto["lastIndexOf(Ljava/lang/String;)I"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["lastIndexOf(Ljava/lang/String;I)I"] = function(ref0,i1){
			var self = this;
			throw 'NotImplemented.';
		};
		klass["lastIndexOf([CII[CIII)I"] = function(arr_ch0,i1,i2,arr_ch3,i4,i5,i6){
			var self = null;
			throw 'NotImplemented.';
		};
		proto["substring(I)Ljava/lang/String;"] = function(i0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["substring(II)Ljava/lang/String;"] = function(i0,i1){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["subSequence(II)Ljava/lang/CharSequence;"] = function(i0,i1){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["concat(Ljava/lang/String;)Ljava/lang/String;"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["replace(CC)Ljava/lang/String;"] = function(ch0,ch1){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["matches(Ljava/lang/String;)Z"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["contains(Ljava/lang/CharSequence;)Z"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["replaceFirst(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;"] = function(ref0,ref1){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["replaceAll(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;"] = function(ref0,ref1){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["replace(Ljava/lang/CharSequence;Ljava/lang/CharSequence;)Ljava/lang/String;"] = function(ref0,ref1){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["split(Ljava/lang/String;I)[Ljava/lang/String;"] = function(ref0,i1){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["split(Ljava/lang/String;)[Ljava/lang/String;"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["toLowerCase(Ljava/util/Locale;)Ljava/lang/String;"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["toLowerCase()Ljava/lang/String;"] = function(){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["toUpperCase(Ljava/util/Locale;)Ljava/lang/String;"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["toUpperCase()Ljava/lang/String;"] = function(){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["trim()Ljava/lang/String;"] = function(){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["toString()Ljava/lang/String;"] = function(){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["toCharArray()[C"] = function(){
			var self = this;
			throw 'NotImplemented.';
		};
		klass["format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;"] = function(ref0,arr_ref1){
			var self = null;
			throw 'NotImplemented.';
		};
		klass["format(Ljava/util/Locale;Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;"] = function(ref0,ref1,arr_ref2){
			var self = null;
			throw 'NotImplemented.';
		};
		klass["valueOf(Ljava/lang/Object;)Ljava/lang/String;"] = function(ref0){
			var self = null;
			throw 'NotImplemented.';
		};
		klass["valueOf([C)Ljava/lang/String;"] = function(arr_ch0){
			var self = null;
			throw 'NotImplemented.';
		};
		klass["valueOf([CII)Ljava/lang/String;"] = function(arr_ch0,i1,i2){
			var self = null;
			throw 'NotImplemented.';
		};
		klass["copyValueOf([CII)Ljava/lang/String;"] = function(arr_ch0,i1,i2){
			var self = null;
			throw 'NotImplemented.';
		};
		klass["copyValueOf([C)Ljava/lang/String;"] = function(arr_ch0){
			var self = null;
			throw 'NotImplemented.';
		};
		klass["valueOf(Z)Ljava/lang/String;"] = function(b0){
			var self = null;
			throw 'NotImplemented.';
		};
		klass["valueOf(C)Ljava/lang/String;"] = function(ch0){
			var self = null;
			throw 'NotImplemented.';
		};
		klass["valueOf(I)Ljava/lang/String;"] = function(i0){
			var self = null;
			throw 'NotImplemented.';
		};
		klass["valueOf(J)Ljava/lang/String;"] = function(l0){
			var self = null;
			throw 'NotImplemented.';
		};
		klass["valueOf(F)Ljava/lang/String;"] = function(flt0){
			var self = null;
			throw 'NotImplemented.';
		};
		klass["valueOf(D)Ljava/lang/String;"] = function(db0){
			var self = null;
			throw 'NotImplemented.';
		};
		proto["intern()Ljava/lang/String;"] = function(){
			var self = this;
			/* Native Method */
			throw 'NotImplemented.';
		};
		proto["hash32()I"] = function(){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["compareTo(Ljava/lang/Object;)I"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		klass["<clinit>()V"] = function(){
			var self = null;
			throw 'NotImplemented.';
		};

	return klass;
});

Java["java/util/concurrent/ConcurrentHashMap"] = Java.mkNativeClass(function(){
	var klass = function(){};
	var proto = klass.prototype = Object.create(Java["java/util/AbstractMap"]().prototype);
	proto.constructor = klass;
	klass.classObj = Java.mkClassObj(klass, "java/util/concurrent/ConcurrentHashMap");
		klass["DEFAULT_INITIAL_CAPACITY"] = (16);
		klass["DEFAULT_LOAD_FACTOR"] = (0.75);
		klass["DEFAULT_CONCURRENCY_LEVEL"] = (16);
		klass["MAXIMUM_CAPACITY"] = (1073741824);
		klass["MIN_SEGMENT_TABLE_CAPACITY"] = (2);
		klass["MAX_SEGMENTS"] = (65536);
		klass["RETRIES_BEFORE_LOCK"] = (2);
		proto["segmentMask"] = null;
		proto["segmentShift"] = null;
		proto["segments"] = null;
		proto["keySet"] = null;
		proto["entrySet"] = null;
		proto["values"] = null;
		klass["entryAt([Ljava/util/concurrent/ConcurrentHashMap$HashEntry;I)Ljava/util/concurrent/ConcurrentHashMap$HashEntry;"] = function(arr_ref0,i1){
			var self = null;
			throw 'NotImplemented.';
		};
		klass["setEntryAt([Ljava/util/concurrent/ConcurrentHashMap$HashEntry;ILjava/util/concurrent/ConcurrentHashMap$HashEntry;)V"] = function(arr_ref0,i1,ref2){
			var self = null;
			throw 'NotImplemented.';
		};
		klass["segmentAt([Ljava/util/concurrent/ConcurrentHashMap$Segment;I)Ljava/util/concurrent/ConcurrentHashMap$Segment;"] = function(arr_ref0,i1){
			var self = null;
			throw 'NotImplemented.';
		};
		klass["entryForHash(Ljava/util/concurrent/ConcurrentHashMap$Segment;I)Ljava/util/concurrent/ConcurrentHashMap$HashEntry;"] = function(ref0,i1){
			var self = null;
			throw 'NotImplemented.';
		};
		proto["<init>(IFI)V"] = function(i0,flt1,i2){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["<init>(IF)V"] = function(i0,flt1){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["<init>(I)V"] = function(i0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["<init>()V"] = function(){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["<init>(Ljava/util/Map;)V"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["isEmpty()Z"] = function(){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["size()I"] = function(){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["get(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["containsKey(Ljava/lang/Object;)Z"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["containsValue(Ljava/lang/Object;)Z"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["contains(Ljava/lang/Object;)Z"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0,ref1){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["putIfAbsent(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0,ref1){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["putAll(Ljava/util/Map;)V"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["remove(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["remove(Ljava/lang/Object;Ljava/lang/Object;)Z"] = function(ref0,ref1){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["replace(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Z"] = function(ref0,ref1,ref2){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["replace(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0,ref1){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["clear()V"] = function(){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["keySet()Ljava/util/Set;"] = function(){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["values()Ljava/util/Collection;"] = function(){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["entrySet()Ljava/util/Set;"] = function(){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["keys()Ljava/util/Enumeration;"] = function(){
			var self = this;
			throw 'NotImplemented.';
		};
		proto["elements()Ljava/util/Enumeration;"] = function(){
			var self = this;
			throw 'NotImplemented.';
		};
		klass["<clinit>()V"] = function(){
			var self = null;
			throw 'NotImplemented.';
		};

	return klass;
});


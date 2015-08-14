//"sun/util/calendar/Gregorian$Date"
Java["sun/util/calendar/Gregorian$Date"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["sun/util/calendar/BaseCalendar$Date"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/util/calendar/Gregorian$Date");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Gregorian$Date#<init>()V");
	};
	proto["<init>(Ljava/util/TimeZone;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Gregorian$Date#<init>(Ljava/util/TimeZone;)V");
	};
	proto["getNormalizedYear()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Gregorian$Date#getNormalizedYear()I");
	};
	proto["setNormalizedYear(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Gregorian$Date#setNormalizedYear(I)V");
	};

});

//"java/nio/file/attribute/FileTime$DaysAndNanos"
Java["java/nio/file/attribute/FileTime$DaysAndNanos"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/attribute/FileTime$DaysAndNanos");

	proto["<init>(JLjava/util/concurrent/TimeUnit;)V"] = function(l0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/attribute/FileTime$DaysAndNanos#<init>(JLjava/util/concurrent/TimeUnit;)V");
	};
	proto["fractionOfSecondInNanos()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/attribute/FileTime$DaysAndNanos#fractionOfSecondInNanos()J");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/attribute/FileTime$DaysAndNanos#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/attribute/FileTime$DaysAndNanos#hashCode()I");
	};
	proto["compareTo(Ljava/nio/file/attribute/FileTime$DaysAndNanos;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/attribute/FileTime$DaysAndNanos#compareTo(Ljava/nio/file/attribute/FileTime$DaysAndNanos;)I");
	};
	proto["compareTo(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/attribute/FileTime$DaysAndNanos#compareTo(Ljava/lang/Object;)I");
	};

});

//"sun/util/calendar/Gregorian"
Java["sun/util/calendar/Gregorian"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["sun/util/calendar/BaseCalendar"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/util/calendar/Gregorian");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Gregorian#<init>()V");
	};
	proto["getName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Gregorian#getName()Ljava/lang/String;");
	};
	proto["getCalendarDate()Lsun/util/calendar/Gregorian$Date;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Gregorian#getCalendarDate()Lsun/util/calendar/Gregorian$Date;");
	};
	proto["getCalendarDate(J)Lsun/util/calendar/Gregorian$Date;"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Gregorian#getCalendarDate(J)Lsun/util/calendar/Gregorian$Date;");
	};
	proto["getCalendarDate(JLsun/util/calendar/CalendarDate;)Lsun/util/calendar/Gregorian$Date;"] = function(l0,ref1){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Gregorian#getCalendarDate(JLsun/util/calendar/CalendarDate;)Lsun/util/calendar/Gregorian$Date;");
	};
	proto["getCalendarDate(JLjava/util/TimeZone;)Lsun/util/calendar/Gregorian$Date;"] = function(l0,ref1){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Gregorian#getCalendarDate(JLjava/util/TimeZone;)Lsun/util/calendar/Gregorian$Date;");
	};
	proto["newCalendarDate()Lsun/util/calendar/Gregorian$Date;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Gregorian#newCalendarDate()Lsun/util/calendar/Gregorian$Date;");
	};
	proto["newCalendarDate(Ljava/util/TimeZone;)Lsun/util/calendar/Gregorian$Date;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Gregorian#newCalendarDate(Ljava/util/TimeZone;)Lsun/util/calendar/Gregorian$Date;");
	};
	proto["getCalendarDate(JLsun/util/calendar/CalendarDate;)Lsun/util/calendar/CalendarDate;"] = function(l0,ref1){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Gregorian#getCalendarDate(JLsun/util/calendar/CalendarDate;)Lsun/util/calendar/CalendarDate;");
	};
	proto["getCalendarDate(JLjava/util/TimeZone;)Lsun/util/calendar/CalendarDate;"] = function(l0,ref1){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Gregorian#getCalendarDate(JLjava/util/TimeZone;)Lsun/util/calendar/CalendarDate;");
	};
	proto["getCalendarDate(J)Lsun/util/calendar/CalendarDate;"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Gregorian#getCalendarDate(J)Lsun/util/calendar/CalendarDate;");
	};
	proto["getCalendarDate()Lsun/util/calendar/CalendarDate;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Gregorian#getCalendarDate()Lsun/util/calendar/CalendarDate;");
	};
	proto["newCalendarDate(Ljava/util/TimeZone;)Lsun/util/calendar/CalendarDate;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Gregorian#newCalendarDate(Ljava/util/TimeZone;)Lsun/util/calendar/CalendarDate;");
	};
	proto["newCalendarDate()Lsun/util/calendar/CalendarDate;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Gregorian#newCalendarDate()Lsun/util/calendar/CalendarDate;");
	};

});

//"java/util/concurrent/Callable"
Java["java/util/concurrent/Callable"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/concurrent/Callable");

	proto["call()Ljava/lang/Object;"] = null;

});

//"java/nio/file/attribute/FileTime"
Java["java/nio/file/attribute/FileTime"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/attribute/FileTime");

	klass["from(JLjava/util/concurrent/TimeUnit;)Ljava/nio/file/attribute/FileTime;"] = function(l0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/nio/file/attribute/FileTime#from(JLjava/util/concurrent/TimeUnit;)Ljava/nio/file/attribute/FileTime;");
	};
	klass["fromMillis(J)Ljava/nio/file/attribute/FileTime;"] = function(l0){
		var self = null;
		throw new Error("NotImplemented: java/nio/file/attribute/FileTime#fromMillis(J)Ljava/nio/file/attribute/FileTime;");
	};
	proto["to(Ljava/util/concurrent/TimeUnit;)J"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/attribute/FileTime#to(Ljava/util/concurrent/TimeUnit;)J");
	};
	proto["toMillis()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/attribute/FileTime#toMillis()J");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/attribute/FileTime#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/attribute/FileTime#hashCode()I");
	};
	proto["compareTo(Ljava/nio/file/attribute/FileTime;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/attribute/FileTime#compareTo(Ljava/nio/file/attribute/FileTime;)I");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/attribute/FileTime#toString()Ljava/lang/String;");
	};
	proto["compareTo(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/attribute/FileTime#compareTo(Ljava/lang/Object;)I");
	};

});

//"java/nio/file/attribute/FileStoreAttributeView"
Java["java/nio/file/attribute/FileStoreAttributeView"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/attribute/FileStoreAttributeView");


});

//"java/nio/channels/spi/AbstractInterruptibleChannel"
Java["java/nio/channels/spi/AbstractInterruptibleChannel"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/channels/spi/AbstractInterruptibleChannel");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/channels/spi/AbstractInterruptibleChannel#<init>()V");
	};
	proto["close()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/channels/spi/AbstractInterruptibleChannel#close()V");
	};
	proto["implCloseChannel()V"] = null;
	proto["isOpen()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/channels/spi/AbstractInterruptibleChannel#isOpen()Z");
	};
	proto["begin()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/channels/spi/AbstractInterruptibleChannel#begin()V");
	};
	proto["end(Z)V"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/nio/channels/spi/AbstractInterruptibleChannel#end(Z)V");
	};
	klass["blockedOn(Lsun/nio/ch/Interruptible;)V"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/nio/channels/spi/AbstractInterruptibleChannel#blockedOn(Lsun/nio/ch/Interruptible;)V");
	};
	klass["access$000(Ljava/nio/channels/spi/AbstractInterruptibleChannel;)Ljava/lang/Object;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/nio/channels/spi/AbstractInterruptibleChannel#access$000(Ljava/nio/channels/spi/AbstractInterruptibleChannel;)Ljava/lang/Object;");
	};
	klass["access$100(Ljava/nio/channels/spi/AbstractInterruptibleChannel;)Z"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/nio/channels/spi/AbstractInterruptibleChannel#access$100(Ljava/nio/channels/spi/AbstractInterruptibleChannel;)Z");
	};
	klass["access$102(Ljava/nio/channels/spi/AbstractInterruptibleChannel;Z)Z"] = function(ref0,b1){
		var self = null;
		throw new Error("NotImplemented: java/nio/channels/spi/AbstractInterruptibleChannel#access$102(Ljava/nio/channels/spi/AbstractInterruptibleChannel;Z)Z");
	};
	klass["access$202(Ljava/nio/channels/spi/AbstractInterruptibleChannel;Ljava/lang/Thread;)Ljava/lang/Thread;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/nio/channels/spi/AbstractInterruptibleChannel#access$202(Ljava/nio/channels/spi/AbstractInterruptibleChannel;Ljava/lang/Thread;)Ljava/lang/Thread;");
	};

});

//"java/nio/channels/WritableByteChannel"
Java["java/nio/channels/WritableByteChannel"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/channels/WritableByteChannel");

	proto["write(Ljava/nio/ByteBuffer;)I"] = null;

});

//"java/nio/channels/ReadableByteChannel"
Java["java/nio/channels/ReadableByteChannel"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/channels/ReadableByteChannel");

	proto["read(Ljava/nio/ByteBuffer;)I"] = null;

});

//"java/nio/channels/FileChannel$MapMode"
Java["java/nio/channels/FileChannel$MapMode"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/channels/FileChannel$MapMode");
	klass["READ_ONLY"] = null;
	klass["READ_WRITE"] = null;
	klass["PRIVATE"] = null;
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/channels/FileChannel$MapMode#toString()Ljava/lang/String;");
	};

});

//"java/nio/MappedByteBuffer"
Java["java/nio/MappedByteBuffer"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/nio/ByteBuffer"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/MappedByteBuffer");

	proto["<init>(IIIILjava/io/FileDescriptor;)V"] = function(i0,i1,i2,i3,ref4){
		var self = this;
		throw new Error("NotImplemented: java/nio/MappedByteBuffer#<init>(IIIILjava/io/FileDescriptor;)V");
	};
	proto["<init>(IIII)V"] = function(i0,i1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: java/nio/MappedByteBuffer#<init>(IIII)V");
	};
	proto["isLoaded()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/MappedByteBuffer#isLoaded()Z");
	};
	proto["load()Ljava/nio/MappedByteBuffer;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/MappedByteBuffer#load()Ljava/nio/MappedByteBuffer;");
	};
	proto["force()Ljava/nio/MappedByteBuffer;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/MappedByteBuffer#force()Ljava/nio/MappedByteBuffer;");
	};

});

//"java/util/concurrent/Future"
Java["java/util/concurrent/Future"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/concurrent/Future");

	proto["cancel(Z)Z"] = null;
	proto["isCancelled()Z"] = null;
	proto["isDone()Z"] = null;
	proto["get()Ljava/lang/Object;"] = null;
	proto["get(JLjava/util/concurrent/TimeUnit;)Ljava/lang/Object;"] = null;

});

//"java/nio/channels/FileLock"
Java["java/nio/channels/FileLock"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/channels/FileLock");

	proto["<init>(Ljava/nio/channels/FileChannel;JJZ)V"] = function(ref0,l1,l2,b3){
		var self = this;
		throw new Error("NotImplemented: java/nio/channels/FileLock#<init>(Ljava/nio/channels/FileChannel;JJZ)V");
	};
	proto["<init>(Ljava/nio/channels/AsynchronousFileChannel;JJZ)V"] = function(ref0,l1,l2,b3){
		var self = this;
		throw new Error("NotImplemented: java/nio/channels/FileLock#<init>(Ljava/nio/channels/AsynchronousFileChannel;JJZ)V");
	};
	proto["channel()Ljava/nio/channels/FileChannel;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/channels/FileLock#channel()Ljava/nio/channels/FileChannel;");
	};
	proto["acquiredBy()Ljava/nio/channels/Channel;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/channels/FileLock#acquiredBy()Ljava/nio/channels/Channel;");
	};
	proto["position()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/channels/FileLock#position()J");
	};
	proto["size()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/channels/FileLock#size()J");
	};
	proto["isShared()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/channels/FileLock#isShared()Z");
	};
	proto["overlaps(JJ)Z"] = function(l0,l1){
		var self = this;
		throw new Error("NotImplemented: java/nio/channels/FileLock#overlaps(JJ)Z");
	};
	proto["isValid()Z"] = null;
	proto["release()V"] = null;
	proto["close()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/channels/FileLock#close()V");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/channels/FileLock#toString()Ljava/lang/String;");
	};

});

//"java/nio/channels/CompletionHandler"
Java["java/nio/channels/CompletionHandler"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/channels/CompletionHandler");

	proto["completed(Ljava/lang/Object;Ljava/lang/Object;)V"] = null;
	proto["failed(Ljava/lang/Throwable;Ljava/lang/Object;)V"] = null;

});

//"sun/util/calendar/Era"
Java["sun/util/calendar/Era"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/util/calendar/Era");

	proto["<init>(Ljava/lang/String;Ljava/lang/String;JZ)V"] = function(ref0,ref1,l2,b3){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Era#<init>(Ljava/lang/String;Ljava/lang/String;JZ)V");
	};
	proto["getName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Era#getName()Ljava/lang/String;");
	};
	proto["getDisplayName(Ljava/util/Locale;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Era#getDisplayName(Ljava/util/Locale;)Ljava/lang/String;");
	};
	proto["getAbbreviation()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Era#getAbbreviation()Ljava/lang/String;");
	};
	proto["getDiaplayAbbreviation(Ljava/util/Locale;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Era#getDiaplayAbbreviation(Ljava/util/Locale;)Ljava/lang/String;");
	};
	proto["getSince(Ljava/util/TimeZone;)J"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Era#getSince(Ljava/util/TimeZone;)J");
	};
	proto["getSinceDate()Lsun/util/calendar/CalendarDate;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Era#getSinceDate()Lsun/util/calendar/CalendarDate;");
	};
	proto["isLocalTime()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Era#isLocalTime()Z");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Era#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Era#hashCode()I");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/Era#toString()Ljava/lang/String;");
	};

});

//"sun/util/calendar/CalendarSystem"
Java["sun/util/calendar/CalendarSystem"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/util/calendar/CalendarSystem");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarSystem#<init>()V");
	};
	klass["getGregorianCalendar()Lsun/util/calendar/Gregorian;"] = function(){
		var self = null;
		throw new Error("NotImplemented: sun/util/calendar/CalendarSystem#getGregorianCalendar()Lsun/util/calendar/Gregorian;");
	};
	klass["forName(Ljava/lang/String;)Lsun/util/calendar/CalendarSystem;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: sun/util/calendar/CalendarSystem#forName(Ljava/lang/String;)Lsun/util/calendar/CalendarSystem;");
	};
	proto["getName()Ljava/lang/String;"] = null;
	proto["getCalendarDate()Lsun/util/calendar/CalendarDate;"] = null;
	proto["getCalendarDate(J)Lsun/util/calendar/CalendarDate;"] = null;
	proto["getCalendarDate(JLsun/util/calendar/CalendarDate;)Lsun/util/calendar/CalendarDate;"] = null;
	proto["getCalendarDate(JLjava/util/TimeZone;)Lsun/util/calendar/CalendarDate;"] = null;
	proto["newCalendarDate()Lsun/util/calendar/CalendarDate;"] = null;
	proto["newCalendarDate(Ljava/util/TimeZone;)Lsun/util/calendar/CalendarDate;"] = null;
	proto["getTime(Lsun/util/calendar/CalendarDate;)J"] = null;
	proto["getYearLength(Lsun/util/calendar/CalendarDate;)I"] = null;
	proto["getYearLengthInMonths(Lsun/util/calendar/CalendarDate;)I"] = null;
	proto["getMonthLength(Lsun/util/calendar/CalendarDate;)I"] = null;
	proto["getWeekLength()I"] = null;
	proto["getEra(Ljava/lang/String;)Lsun/util/calendar/Era;"] = null;
	proto["getEras()[Lsun/util/calendar/Era;"] = null;
	proto["setEra(Lsun/util/calendar/CalendarDate;Ljava/lang/String;)V"] = null;
	proto["getNthDayOfWeek(IILsun/util/calendar/CalendarDate;)Lsun/util/calendar/CalendarDate;"] = null;
	proto["setTimeOfDay(Lsun/util/calendar/CalendarDate;I)Lsun/util/calendar/CalendarDate;"] = null;
	proto["validate(Lsun/util/calendar/CalendarDate;)Z"] = null;
	proto["normalize(Lsun/util/calendar/CalendarDate;)Z"] = null;

});

//"sun/reflect/generics/tree/Wildcard"
Java["sun/reflect/generics/tree/Wildcard"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/tree/Wildcard");

	klass["make([Lsun/reflect/generics/tree/FieldTypeSignature;[Lsun/reflect/generics/tree/FieldTypeSignature;)Lsun/reflect/generics/tree/Wildcard;"] = function(arr_ref0,arr_ref1){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/generics/tree/Wildcard#make([Lsun/reflect/generics/tree/FieldTypeSignature;[Lsun/reflect/generics/tree/FieldTypeSignature;)Lsun/reflect/generics/tree/Wildcard;");
	};
	proto["getUpperBounds()[Lsun/reflect/generics/tree/FieldTypeSignature;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/Wildcard#getUpperBounds()[Lsun/reflect/generics/tree/FieldTypeSignature;");
	};
	proto["getLowerBounds()[Lsun/reflect/generics/tree/FieldTypeSignature;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/Wildcard#getLowerBounds()[Lsun/reflect/generics/tree/FieldTypeSignature;");
	};
	proto["accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/Wildcard#accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V");
	};

});

//"sun/reflect/generics/tree/VoidDescriptor"
Java["sun/reflect/generics/tree/VoidDescriptor"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/tree/VoidDescriptor");

	klass["make()Lsun/reflect/generics/tree/VoidDescriptor;"] = function(){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/generics/tree/VoidDescriptor#make()Lsun/reflect/generics/tree/VoidDescriptor;");
	};
	proto["accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/VoidDescriptor#accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V");
	};

});

//"sun/reflect/generics/tree/TypeVariableSignature"
Java["sun/reflect/generics/tree/TypeVariableSignature"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/tree/TypeVariableSignature");

	klass["make(Ljava/lang/String;)Lsun/reflect/generics/tree/TypeVariableSignature;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/generics/tree/TypeVariableSignature#make(Ljava/lang/String;)Lsun/reflect/generics/tree/TypeVariableSignature;");
	};
	proto["getIdentifier()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/TypeVariableSignature#getIdentifier()Ljava/lang/String;");
	};
	proto["accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/TypeVariableSignature#accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V");
	};

});

//"sun/reflect/generics/tree/TypeArgument"
Java["sun/reflect/generics/tree/TypeArgument"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/tree/TypeArgument");


});

//"sun/reflect/generics/tree/SimpleClassTypeSignature"
Java["sun/reflect/generics/tree/SimpleClassTypeSignature"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/tree/SimpleClassTypeSignature");

	klass["make(Ljava/lang/String;Z[Lsun/reflect/generics/tree/TypeArgument;)Lsun/reflect/generics/tree/SimpleClassTypeSignature;"] = function(ref0,b1,arr_ref2){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/generics/tree/SimpleClassTypeSignature#make(Ljava/lang/String;Z[Lsun/reflect/generics/tree/TypeArgument;)Lsun/reflect/generics/tree/SimpleClassTypeSignature;");
	};
	proto["getDollar()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/SimpleClassTypeSignature#getDollar()Z");
	};
	proto["getName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/SimpleClassTypeSignature#getName()Ljava/lang/String;");
	};
	proto["getTypeArguments()[Lsun/reflect/generics/tree/TypeArgument;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/SimpleClassTypeSignature#getTypeArguments()[Lsun/reflect/generics/tree/TypeArgument;");
	};
	proto["accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/SimpleClassTypeSignature#accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V");
	};

});

//"sun/reflect/generics/tree/ShortSignature"
Java["sun/reflect/generics/tree/ShortSignature"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/tree/ShortSignature");

	klass["make()Lsun/reflect/generics/tree/ShortSignature;"] = function(){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/generics/tree/ShortSignature#make()Lsun/reflect/generics/tree/ShortSignature;");
	};
	proto["accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/ShortSignature#accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V");
	};

});

//"sun/reflect/generics/tree/LongSignature"
Java["sun/reflect/generics/tree/LongSignature"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/tree/LongSignature");

	klass["make()Lsun/reflect/generics/tree/LongSignature;"] = function(){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/generics/tree/LongSignature#make()Lsun/reflect/generics/tree/LongSignature;");
	};
	proto["accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/LongSignature#accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V");
	};

});

//"sun/reflect/generics/tree/IntSignature"
Java["sun/reflect/generics/tree/IntSignature"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/tree/IntSignature");

	klass["make()Lsun/reflect/generics/tree/IntSignature;"] = function(){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/generics/tree/IntSignature#make()Lsun/reflect/generics/tree/IntSignature;");
	};
	proto["accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/IntSignature#accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V");
	};

});

//"sun/reflect/generics/tree/FloatSignature"
Java["sun/reflect/generics/tree/FloatSignature"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/tree/FloatSignature");

	klass["make()Lsun/reflect/generics/tree/FloatSignature;"] = function(){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/generics/tree/FloatSignature#make()Lsun/reflect/generics/tree/FloatSignature;");
	};
	proto["accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/FloatSignature#accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V");
	};

});

//"sun/reflect/generics/tree/DoubleSignature"
Java["sun/reflect/generics/tree/DoubleSignature"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/tree/DoubleSignature");

	klass["make()Lsun/reflect/generics/tree/DoubleSignature;"] = function(){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/generics/tree/DoubleSignature#make()Lsun/reflect/generics/tree/DoubleSignature;");
	};
	proto["accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/DoubleSignature#accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V");
	};

});

//"sun/reflect/generics/tree/CharSignature"
Java["sun/reflect/generics/tree/CharSignature"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/tree/CharSignature");

	klass["make()Lsun/reflect/generics/tree/CharSignature;"] = function(){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/generics/tree/CharSignature#make()Lsun/reflect/generics/tree/CharSignature;");
	};
	proto["accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/CharSignature#accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V");
	};

});

//"sun/reflect/generics/tree/ByteSignature"
Java["sun/reflect/generics/tree/ByteSignature"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/tree/ByteSignature");

	klass["make()Lsun/reflect/generics/tree/ByteSignature;"] = function(){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/generics/tree/ByteSignature#make()Lsun/reflect/generics/tree/ByteSignature;");
	};
	proto["accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/ByteSignature#accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V");
	};

});

//"sun/reflect/generics/tree/BottomSignature"
Java["sun/reflect/generics/tree/BottomSignature"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/tree/BottomSignature");

	klass["make()Lsun/reflect/generics/tree/BottomSignature;"] = function(){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/generics/tree/BottomSignature#make()Lsun/reflect/generics/tree/BottomSignature;");
	};
	proto["accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/BottomSignature#accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V");
	};

});

//"sun/reflect/generics/tree/BooleanSignature"
Java["sun/reflect/generics/tree/BooleanSignature"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/tree/BooleanSignature");

	klass["make()Lsun/reflect/generics/tree/BooleanSignature;"] = function(){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/generics/tree/BooleanSignature#make()Lsun/reflect/generics/tree/BooleanSignature;");
	};
	proto["accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/BooleanSignature#accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V");
	};

});

//"sun/reflect/generics/tree/ArrayTypeSignature"
Java["sun/reflect/generics/tree/ArrayTypeSignature"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/tree/ArrayTypeSignature");

	klass["make(Lsun/reflect/generics/tree/TypeSignature;)Lsun/reflect/generics/tree/ArrayTypeSignature;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/generics/tree/ArrayTypeSignature#make(Lsun/reflect/generics/tree/TypeSignature;)Lsun/reflect/generics/tree/ArrayTypeSignature;");
	};
	proto["getComponentType()Lsun/reflect/generics/tree/TypeSignature;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/ArrayTypeSignature#getComponentType()Lsun/reflect/generics/tree/TypeSignature;");
	};
	proto["accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/ArrayTypeSignature#accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V");
	};

});

//"java/io/FilterInputStream"
Java["java/io/FilterInputStream"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/io/InputStream"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/FilterInputStream");
	proto["in"] = null;
	proto["<init>(Ljava/io/InputStream;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/FilterInputStream#<init>(Ljava/io/InputStream;)V");
	};
	proto["read()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/FilterInputStream#read()I");
	};
	proto["read([B)I"] = function(arr_sb0){
		var self = this;
		throw new Error("NotImplemented: java/io/FilterInputStream#read([B)I");
	};
	proto["read([BII)I"] = function(arr_sb0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/FilterInputStream#read([BII)I");
	};
	proto["skip(J)J"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/io/FilterInputStream#skip(J)J");
	};
	proto["available()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/FilterInputStream#available()I");
	};
	proto["close()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/FilterInputStream#close()V");
	};
	proto["mark(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/FilterInputStream#mark(I)V");
	};
	proto["reset()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/FilterInputStream#reset()V");
	};
	proto["markSupported()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/FilterInputStream#markSupported()Z");
	};

});

//"java/io/DataOutput"
Java["java/io/DataOutput"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/DataOutput");

	proto["write(I)V"] = null;
	proto["write([B)V"] = null;
	proto["write([BII)V"] = null;
	proto["writeBoolean(Z)V"] = null;
	proto["writeByte(I)V"] = null;
	proto["writeShort(I)V"] = null;
	proto["writeChar(I)V"] = null;
	proto["writeInt(I)V"] = null;
	proto["writeLong(J)V"] = null;
	proto["writeFloat(F)V"] = null;
	proto["writeDouble(D)V"] = null;
	proto["writeBytes(Ljava/lang/String;)V"] = null;
	proto["writeChars(Ljava/lang/String;)V"] = null;
	proto["writeUTF(Ljava/lang/String;)V"] = null;

});

//"java/util/Random"
Java["java/util/Random"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/Random");
	klass["serialVersionUID"] = (3905348978240129619);
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Random#<init>()V");
	};
	proto["<init>(J)V"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/util/Random#<init>(J)V");
	};
	proto["setSeed(J)V"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/util/Random#setSeed(J)V");
	};
	proto["next(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Random#next(I)I");
	};
	proto["nextBytes([B)V"] = function(arr_sb0){
		var self = this;
		throw new Error("NotImplemented: java/util/Random#nextBytes([B)V");
	};
	proto["nextInt()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Random#nextInt()I");
	};
	proto["nextInt(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Random#nextInt(I)I");
	};
	proto["nextLong()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Random#nextLong()J");
	};
	proto["nextBoolean()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Random#nextBoolean()Z");
	};
	proto["nextFloat()F"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Random#nextFloat()F");
	};
	proto["nextDouble()D"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Random#nextDouble()D");
	};
	proto["nextGaussian()D"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Random#nextGaussian()D");
	};

});

//"java/util/concurrent/ExecutorService"
Java["java/util/concurrent/ExecutorService"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/concurrent/ExecutorService");

	proto["shutdown()V"] = null;
	proto["shutdownNow()Ljava/util/List;"] = null;
	proto["isShutdown()Z"] = null;
	proto["isTerminated()Z"] = null;
	proto["awaitTermination(JLjava/util/concurrent/TimeUnit;)Z"] = null;
	proto["submit(Ljava/util/concurrent/Callable;)Ljava/util/concurrent/Future;"] = null;
	proto["submit(Ljava/lang/Runnable;Ljava/lang/Object;)Ljava/util/concurrent/Future;"] = null;
	proto["submit(Ljava/lang/Runnable;)Ljava/util/concurrent/Future;"] = null;
	proto["invokeAll(Ljava/util/Collection;)Ljava/util/List;"] = null;
	proto["invokeAll(Ljava/util/Collection;JLjava/util/concurrent/TimeUnit;)Ljava/util/List;"] = null;
	proto["invokeAny(Ljava/util/Collection;)Ljava/lang/Object;"] = null;
	proto["invokeAny(Ljava/util/Collection;JLjava/util/concurrent/TimeUnit;)Ljava/lang/Object;"] = null;

});

//"java/nio/file/attribute/FileAttributeView"
Java["java/nio/file/attribute/FileAttributeView"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/attribute/FileAttributeView");


});

//"java/nio/file/attribute/FileAttribute"
Java["java/nio/file/attribute/FileAttribute"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/attribute/FileAttribute");

	proto["name()Ljava/lang/String;"] = null;
	proto["value()Ljava/lang/Object;"] = null;

});

//"java/nio/file/attribute/BasicFileAttributes"
Java["java/nio/file/attribute/BasicFileAttributes"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/attribute/BasicFileAttributes");

	proto["lastModifiedTime()Ljava/nio/file/attribute/FileTime;"] = null;
	proto["lastAccessTime()Ljava/nio/file/attribute/FileTime;"] = null;
	proto["creationTime()Ljava/nio/file/attribute/FileTime;"] = null;
	proto["isRegularFile()Z"] = null;
	proto["isDirectory()Z"] = null;
	proto["isSymbolicLink()Z"] = null;
	proto["isOther()Z"] = null;
	proto["size()J"] = null;
	proto["fileKey()Ljava/lang/Object;"] = null;

});

//"java/nio/file/OpenOption"
Java["java/nio/file/OpenOption"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/OpenOption");


});

//"java/nio/file/FileStore"
Java["java/nio/file/FileStore"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/FileStore");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/FileStore#<init>()V");
	};
	proto["name()Ljava/lang/String;"] = null;
	proto["type()Ljava/lang/String;"] = null;
	proto["isReadOnly()Z"] = null;
	proto["getTotalSpace()J"] = null;
	proto["getUsableSpace()J"] = null;
	proto["getUnallocatedSpace()J"] = null;
	proto["supportsFileAttributeView(Ljava/lang/Class;)Z"] = null;
	proto["supportsFileAttributeView(Ljava/lang/String;)Z"] = null;
	proto["getFileStoreAttributeView(Ljava/lang/Class;)Ljava/nio/file/attribute/FileStoreAttributeView;"] = null;
	proto["getAttribute(Ljava/lang/String;)Ljava/lang/Object;"] = null;

});

//"java/nio/file/DirectoryStream$Filter"
Java["java/nio/file/DirectoryStream$Filter"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/DirectoryStream$Filter");

	proto["accept(Ljava/lang/Object;)Z"] = null;

});

//"java/nio/file/DirectoryStream"
Java["java/nio/file/DirectoryStream"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/DirectoryStream");

	proto["iterator()Ljava/util/Iterator;"] = null;

});

//"java/nio/file/CopyOption"
Java["java/nio/file/CopyOption"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/CopyOption");


});

//"java/nio/file/AccessMode"
Java["java/nio/file/AccessMode"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Enum"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/AccessMode");
	klass["READ"] = null;
	klass["WRITE"] = null;
	klass["EXECUTE"] = null;
	klass["values()[Ljava/nio/file/AccessMode;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/nio/file/AccessMode#values()[Ljava/nio/file/AccessMode;");
	};
	klass["valueOf(Ljava/lang/String;)Ljava/nio/file/AccessMode;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/nio/file/AccessMode#valueOf(Ljava/lang/String;)Ljava/nio/file/AccessMode;");
	};

});

//"java/nio/channels/SeekableByteChannel"
Java["java/nio/channels/SeekableByteChannel"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/channels/SeekableByteChannel");

	proto["read(Ljava/nio/ByteBuffer;)I"] = null;
	proto["write(Ljava/nio/ByteBuffer;)I"] = null;
	proto["position()J"] = null;
	proto["position(J)Ljava/nio/channels/SeekableByteChannel;"] = null;
	proto["size()J"] = null;
	proto["truncate(J)Ljava/nio/channels/SeekableByteChannel;"] = null;

});

//"java/nio/channels/FileChannel"
Java["java/nio/channels/FileChannel"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/nio/channels/spi/AbstractInterruptibleChannel"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/channels/FileChannel");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/channels/FileChannel#<init>()V");
	};
	klass["open(Ljava/nio/file/Path;Ljava/util/Set;[Ljava/nio/file/attribute/FileAttribute;)Ljava/nio/channels/FileChannel;"] = function(ref0,ref1,arr_ref2){
		var self = null;
		throw new Error("NotImplemented: java/nio/channels/FileChannel#open(Ljava/nio/file/Path;Ljava/util/Set;[Ljava/nio/file/attribute/FileAttribute;)Ljava/nio/channels/FileChannel;");
	};
	klass["open(Ljava/nio/file/Path;[Ljava/nio/file/OpenOption;)Ljava/nio/channels/FileChannel;"] = function(ref0,arr_ref1){
		var self = null;
		throw new Error("NotImplemented: java/nio/channels/FileChannel#open(Ljava/nio/file/Path;[Ljava/nio/file/OpenOption;)Ljava/nio/channels/FileChannel;");
	};
	proto["read(Ljava/nio/ByteBuffer;)I"] = null;
	proto["read([Ljava/nio/ByteBuffer;II)J"] = null;
	proto["read([Ljava/nio/ByteBuffer;)J"] = null;
	proto["write(Ljava/nio/ByteBuffer;)I"] = null;
	proto["write([Ljava/nio/ByteBuffer;II)J"] = null;
	proto["write([Ljava/nio/ByteBuffer;)J"] = null;
	proto["position()J"] = null;
	proto["position(J)Ljava/nio/channels/FileChannel;"] = null;
	proto["size()J"] = null;
	proto["truncate(J)Ljava/nio/channels/FileChannel;"] = null;
	proto["force(Z)V"] = null;
	proto["transferTo(JJLjava/nio/channels/WritableByteChannel;)J"] = null;
	proto["transferFrom(Ljava/nio/channels/ReadableByteChannel;JJ)J"] = null;
	proto["read(Ljava/nio/ByteBuffer;J)I"] = null;
	proto["write(Ljava/nio/ByteBuffer;J)I"] = null;
	proto["map(Ljava/nio/channels/FileChannel$MapMode;JJ)Ljava/nio/MappedByteBuffer;"] = null;
	proto["lock(JJZ)Ljava/nio/channels/FileLock;"] = null;
	proto["lock()Ljava/nio/channels/FileLock;"] = null;
	proto["tryLock(JJZ)Ljava/nio/channels/FileLock;"] = null;
	proto["tryLock()Ljava/nio/channels/FileLock;"] = null;
	proto["truncate(J)Ljava/nio/channels/SeekableByteChannel;"] = null;
	proto["position(J)Ljava/nio/channels/SeekableByteChannel;"] = null;

});

//"java/nio/channels/AsynchronousFileChannel"
Java["java/nio/channels/AsynchronousFileChannel"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/channels/AsynchronousFileChannel");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/channels/AsynchronousFileChannel#<init>()V");
	};
	klass["open(Ljava/nio/file/Path;Ljava/util/Set;Ljava/util/concurrent/ExecutorService;[Ljava/nio/file/attribute/FileAttribute;)Ljava/nio/channels/AsynchronousFileChannel;"] = function(ref0,ref1,ref2,arr_ref3){
		var self = null;
		throw new Error("NotImplemented: java/nio/channels/AsynchronousFileChannel#open(Ljava/nio/file/Path;Ljava/util/Set;Ljava/util/concurrent/ExecutorService;[Ljava/nio/file/attribute/FileAttribute;)Ljava/nio/channels/AsynchronousFileChannel;");
	};
	klass["open(Ljava/nio/file/Path;[Ljava/nio/file/OpenOption;)Ljava/nio/channels/AsynchronousFileChannel;"] = function(ref0,arr_ref1){
		var self = null;
		throw new Error("NotImplemented: java/nio/channels/AsynchronousFileChannel#open(Ljava/nio/file/Path;[Ljava/nio/file/OpenOption;)Ljava/nio/channels/AsynchronousFileChannel;");
	};
	proto["size()J"] = null;
	proto["truncate(J)Ljava/nio/channels/AsynchronousFileChannel;"] = null;
	proto["force(Z)V"] = null;
	proto["lock(JJZLjava/lang/Object;Ljava/nio/channels/CompletionHandler;)V"] = null;
	proto["lock(Ljava/lang/Object;Ljava/nio/channels/CompletionHandler;)V"] = null;
	proto["lock(JJZ)Ljava/util/concurrent/Future;"] = null;
	proto["lock()Ljava/util/concurrent/Future;"] = null;
	proto["tryLock(JJZ)Ljava/nio/channels/FileLock;"] = null;
	proto["tryLock()Ljava/nio/channels/FileLock;"] = null;
	proto["read(Ljava/nio/ByteBuffer;JLjava/lang/Object;Ljava/nio/channels/CompletionHandler;)V"] = null;
	proto["read(Ljava/nio/ByteBuffer;J)Ljava/util/concurrent/Future;"] = null;
	proto["write(Ljava/nio/ByteBuffer;JLjava/lang/Object;Ljava/nio/channels/CompletionHandler;)V"] = null;
	proto["write(Ljava/nio/ByteBuffer;J)Ljava/util/concurrent/Future;"] = null;

});

//"java/nio/file/attribute/UserPrincipal"
Java["java/nio/file/attribute/UserPrincipal"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/attribute/UserPrincipal");


});

//"java/nio/file/attribute/GroupPrincipal"
Java["java/nio/file/attribute/GroupPrincipal"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/attribute/GroupPrincipal");


});

//"java/util/TimeZone"
Java["java/util/TimeZone"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/TimeZone");
	klass["SHORT"] = (0);
	klass["LONG"] = (1);
	klass["serialVersionUID"] = (3581463369166924961);
	klass["NO_TIMEZONE"] = null;
	klass["GMT_ID"] = ("GMT");
	klass["$assertionsDisabled"] = null;
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/TimeZone#<init>()V");
	};
	proto["getOffset(IIIIII)I"] = null;
	proto["getOffset(J)I"] = null;
	proto["getOffsets(J[I)I"] = function(l0,arr_i1){
		var self = this;
		throw new Error("NotImplemented: java/util/TimeZone#getOffsets(J[I)I");
	};
	proto["setRawOffset(I)V"] = null;
	proto["getRawOffset()I"] = null;
	proto["getID()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/TimeZone#getID()Ljava/lang/String;");
	};
	proto["setID(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/TimeZone#setID(Ljava/lang/String;)V");
	};
	proto["getDisplayName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/TimeZone#getDisplayName()Ljava/lang/String;");
	};
	proto["getDisplayName(Ljava/util/Locale;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/TimeZone#getDisplayName(Ljava/util/Locale;)Ljava/lang/String;");
	};
	proto["getDisplayName(ZI)Ljava/lang/String;"] = function(b0,i1){
		var self = this;
		throw new Error("NotImplemented: java/util/TimeZone#getDisplayName(ZI)Ljava/lang/String;");
	};
	proto["getDisplayName(ZILjava/util/Locale;)Ljava/lang/String;"] = function(b0,i1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/util/TimeZone#getDisplayName(ZILjava/util/Locale;)Ljava/lang/String;");
	};
	proto["getDSTSavings()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/TimeZone#getDSTSavings()I");
	};
	proto["useDaylightTime()Z"] = null;
	proto["observesDaylightTime()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/TimeZone#observesDaylightTime()Z");
	};
	proto["inDaylightTime(Ljava/util/Date;)Z"] = null;
	var def = new klass();
	klass["getTimeZone(Ljava/lang/String;)Ljava/util/TimeZone;"] = function(ref0){
		return def;
	};
	klass["getAvailableIDs(I)[Ljava/lang/String;"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/util/TimeZone#getAvailableIDs(I)[Ljava/lang/String;");
	};
	klass["getAvailableIDs()[Ljava/lang/String;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/util/TimeZone#getAvailableIDs()[Ljava/lang/String;");
	};
	klass["getDefault()Ljava/util/TimeZone;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/util/TimeZone#getDefault()Ljava/util/TimeZone;");
	};
	klass["getDefaultRef()Ljava/util/TimeZone;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/util/TimeZone#getDefaultRef()Ljava/util/TimeZone;");
	};
	klass["setDefault(Ljava/util/TimeZone;)V"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/TimeZone#setDefault(Ljava/util/TimeZone;)V");
	};
	proto["hasSameRules(Ljava/util/TimeZone;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/TimeZone#hasSameRules(Ljava/util/TimeZone;)Z");
	};
	proto["clone()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/TimeZone#clone()Ljava/lang/Object;");
	};

});

//"sun/util/calendar/CalendarDate"
Java["sun/util/calendar/CalendarDate"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/util/calendar/CalendarDate");
	klass["FIELD_UNDEFINED"] = (-2147483648);
	klass["TIME_UNDEFINED"] = (-9223372036854775808);
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#<init>()V");
	};
	proto["<init>(Ljava/util/TimeZone;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#<init>(Ljava/util/TimeZone;)V");
	};
	proto["getEra()Lsun/util/calendar/Era;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#getEra()Lsun/util/calendar/Era;");
	};
	proto["setEra(Lsun/util/calendar/Era;)Lsun/util/calendar/CalendarDate;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#setEra(Lsun/util/calendar/Era;)Lsun/util/calendar/CalendarDate;");
	};
	proto["getYear()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#getYear()I");
	};
	proto["setYear(I)Lsun/util/calendar/CalendarDate;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#setYear(I)Lsun/util/calendar/CalendarDate;");
	};
	proto["addYear(I)Lsun/util/calendar/CalendarDate;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#addYear(I)Lsun/util/calendar/CalendarDate;");
	};
	proto["isLeapYear()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#isLeapYear()Z");
	};
	proto["setLeapYear(Z)V"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#setLeapYear(Z)V");
	};
	proto["getMonth()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#getMonth()I");
	};
	proto["setMonth(I)Lsun/util/calendar/CalendarDate;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#setMonth(I)Lsun/util/calendar/CalendarDate;");
	};
	proto["addMonth(I)Lsun/util/calendar/CalendarDate;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#addMonth(I)Lsun/util/calendar/CalendarDate;");
	};
	proto["getDayOfMonth()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#getDayOfMonth()I");
	};
	proto["setDayOfMonth(I)Lsun/util/calendar/CalendarDate;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#setDayOfMonth(I)Lsun/util/calendar/CalendarDate;");
	};
	proto["addDayOfMonth(I)Lsun/util/calendar/CalendarDate;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#addDayOfMonth(I)Lsun/util/calendar/CalendarDate;");
	};
	proto["getDayOfWeek()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#getDayOfWeek()I");
	};
	proto["getHours()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#getHours()I");
	};
	proto["setHours(I)Lsun/util/calendar/CalendarDate;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#setHours(I)Lsun/util/calendar/CalendarDate;");
	};
	proto["addHours(I)Lsun/util/calendar/CalendarDate;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#addHours(I)Lsun/util/calendar/CalendarDate;");
	};
	proto["getMinutes()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#getMinutes()I");
	};
	proto["setMinutes(I)Lsun/util/calendar/CalendarDate;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#setMinutes(I)Lsun/util/calendar/CalendarDate;");
	};
	proto["addMinutes(I)Lsun/util/calendar/CalendarDate;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#addMinutes(I)Lsun/util/calendar/CalendarDate;");
	};
	proto["getSeconds()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#getSeconds()I");
	};
	proto["setSeconds(I)Lsun/util/calendar/CalendarDate;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#setSeconds(I)Lsun/util/calendar/CalendarDate;");
	};
	proto["addSeconds(I)Lsun/util/calendar/CalendarDate;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#addSeconds(I)Lsun/util/calendar/CalendarDate;");
	};
	proto["getMillis()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#getMillis()I");
	};
	proto["setMillis(I)Lsun/util/calendar/CalendarDate;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#setMillis(I)Lsun/util/calendar/CalendarDate;");
	};
	proto["addMillis(I)Lsun/util/calendar/CalendarDate;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#addMillis(I)Lsun/util/calendar/CalendarDate;");
	};
	proto["getTimeOfDay()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#getTimeOfDay()J");
	};
	proto["setDate(III)Lsun/util/calendar/CalendarDate;"] = function(i0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#setDate(III)Lsun/util/calendar/CalendarDate;");
	};
	proto["addDate(III)Lsun/util/calendar/CalendarDate;"] = function(i0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#addDate(III)Lsun/util/calendar/CalendarDate;");
	};
	proto["setTimeOfDay(IIII)Lsun/util/calendar/CalendarDate;"] = function(i0,i1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#setTimeOfDay(IIII)Lsun/util/calendar/CalendarDate;");
	};
	proto["addTimeOfDay(IIII)Lsun/util/calendar/CalendarDate;"] = function(i0,i1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#addTimeOfDay(IIII)Lsun/util/calendar/CalendarDate;");
	};
	proto["setTimeOfDay(J)V"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#setTimeOfDay(J)V");
	};
	proto["isNormalized()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#isNormalized()Z");
	};
	proto["isStandardTime()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#isStandardTime()Z");
	};
	proto["setStandardTime(Z)V"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#setStandardTime(Z)V");
	};
	proto["isDaylightTime()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#isDaylightTime()Z");
	};
	proto["setLocale(Ljava/util/Locale;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#setLocale(Ljava/util/Locale;)V");
	};
	proto["getZone()Ljava/util/TimeZone;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#getZone()Ljava/util/TimeZone;");
	};
	proto["setZone(Ljava/util/TimeZone;)Lsun/util/calendar/CalendarDate;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#setZone(Ljava/util/TimeZone;)Lsun/util/calendar/CalendarDate;");
	};
	proto["isSameDate(Lsun/util/calendar/CalendarDate;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#isSameDate(Lsun/util/calendar/CalendarDate;)Z");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#hashCode()I");
	};
	proto["clone()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#clone()Ljava/lang/Object;");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#toString()Ljava/lang/String;");
	};
	proto["setDayOfWeek(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#setDayOfWeek(I)V");
	};
	proto["setNormalized(Z)V"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#setNormalized(Z)V");
	};
	proto["getZoneOffset()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#getZoneOffset()I");
	};
	proto["setZoneOffset(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#setZoneOffset(I)V");
	};
	proto["getDaylightSaving()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#getDaylightSaving()I");
	};
	proto["setDaylightSaving(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/CalendarDate#setDaylightSaving(I)V");
	};

});

//"sun/util/calendar/AbstractCalendar"
Java["sun/util/calendar/AbstractCalendar"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["sun/util/calendar/CalendarSystem"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/util/calendar/AbstractCalendar");
	klass["SECOND_IN_MILLIS"] = (1000);
	klass["MINUTE_IN_MILLIS"] = (60000);
	klass["HOUR_IN_MILLIS"] = (3600000);
	klass["DAY_IN_MILLIS"] = (86400000);
	klass["EPOCH_OFFSET"] = (719163);
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/AbstractCalendar#<init>()V");
	};
	proto["getEra(Ljava/lang/String;)Lsun/util/calendar/Era;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/AbstractCalendar#getEra(Ljava/lang/String;)Lsun/util/calendar/Era;");
	};
	proto["getEras()[Lsun/util/calendar/Era;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/AbstractCalendar#getEras()[Lsun/util/calendar/Era;");
	};
	proto["setEra(Lsun/util/calendar/CalendarDate;Ljava/lang/String;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/AbstractCalendar#setEra(Lsun/util/calendar/CalendarDate;Ljava/lang/String;)V");
	};
	proto["setEras([Lsun/util/calendar/Era;)V"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/AbstractCalendar#setEras([Lsun/util/calendar/Era;)V");
	};
	proto["getCalendarDate()Lsun/util/calendar/CalendarDate;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/AbstractCalendar#getCalendarDate()Lsun/util/calendar/CalendarDate;");
	};
	proto["getCalendarDate(J)Lsun/util/calendar/CalendarDate;"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/AbstractCalendar#getCalendarDate(J)Lsun/util/calendar/CalendarDate;");
	};
	proto["getCalendarDate(JLjava/util/TimeZone;)Lsun/util/calendar/CalendarDate;"] = function(l0,ref1){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/AbstractCalendar#getCalendarDate(JLjava/util/TimeZone;)Lsun/util/calendar/CalendarDate;");
	};
	proto["getCalendarDate(JLsun/util/calendar/CalendarDate;)Lsun/util/calendar/CalendarDate;"] = function(l0,ref1){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/AbstractCalendar#getCalendarDate(JLsun/util/calendar/CalendarDate;)Lsun/util/calendar/CalendarDate;");
	};
	proto["getTime(Lsun/util/calendar/CalendarDate;)J"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/AbstractCalendar#getTime(Lsun/util/calendar/CalendarDate;)J");
	};
	proto["getTimeOfDay(Lsun/util/calendar/CalendarDate;)J"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/AbstractCalendar#getTimeOfDay(Lsun/util/calendar/CalendarDate;)J");
	};
	proto["getTimeOfDayValue(Lsun/util/calendar/CalendarDate;)J"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/AbstractCalendar#getTimeOfDayValue(Lsun/util/calendar/CalendarDate;)J");
	};
	proto["setTimeOfDay(Lsun/util/calendar/CalendarDate;I)Lsun/util/calendar/CalendarDate;"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/AbstractCalendar#setTimeOfDay(Lsun/util/calendar/CalendarDate;I)Lsun/util/calendar/CalendarDate;");
	};
	proto["getWeekLength()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/AbstractCalendar#getWeekLength()I");
	};
	proto["isLeapYear(Lsun/util/calendar/CalendarDate;)Z"] = null;
	proto["getNthDayOfWeek(IILsun/util/calendar/CalendarDate;)Lsun/util/calendar/CalendarDate;"] = function(i0,i1,ref2){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/AbstractCalendar#getNthDayOfWeek(IILsun/util/calendar/CalendarDate;)Lsun/util/calendar/CalendarDate;");
	};
	klass["getDayOfWeekDateBefore(JI)J"] = function(l0,i1){
		var self = null;
		throw new Error("NotImplemented: sun/util/calendar/AbstractCalendar#getDayOfWeekDateBefore(JI)J");
	};
	klass["getDayOfWeekDateAfter(JI)J"] = function(l0,i1){
		var self = null;
		throw new Error("NotImplemented: sun/util/calendar/AbstractCalendar#getDayOfWeekDateAfter(JI)J");
	};
	klass["getDayOfWeekDateOnOrBefore(JI)J"] = function(l0,i1){
		var self = null;
		throw new Error("NotImplemented: sun/util/calendar/AbstractCalendar#getDayOfWeekDateOnOrBefore(JI)J");
	};
	proto["getFixedDate(Lsun/util/calendar/CalendarDate;)J"] = null;
	proto["getCalendarDateFromFixedDate(Lsun/util/calendar/CalendarDate;J)V"] = null;
	proto["validateTime(Lsun/util/calendar/CalendarDate;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/AbstractCalendar#validateTime(Lsun/util/calendar/CalendarDate;)Z");
	};
	proto["normalizeTime(Lsun/util/calendar/CalendarDate;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/AbstractCalendar#normalizeTime(Lsun/util/calendar/CalendarDate;)I");
	};

});

//"sun/reflect/generics/visitor/TypeTreeVisitor"
Java["sun/reflect/generics/visitor/TypeTreeVisitor"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/visitor/TypeTreeVisitor");

	proto["getResult()Ljava/lang/Object;"] = null;
	proto["visitFormalTypeParameter(Lsun/reflect/generics/tree/FormalTypeParameter;)V"] = null;
	proto["visitClassTypeSignature(Lsun/reflect/generics/tree/ClassTypeSignature;)V"] = null;
	proto["visitArrayTypeSignature(Lsun/reflect/generics/tree/ArrayTypeSignature;)V"] = null;
	proto["visitTypeVariableSignature(Lsun/reflect/generics/tree/TypeVariableSignature;)V"] = null;
	proto["visitWildcard(Lsun/reflect/generics/tree/Wildcard;)V"] = null;
	proto["visitSimpleClassTypeSignature(Lsun/reflect/generics/tree/SimpleClassTypeSignature;)V"] = null;
	proto["visitBottomSignature(Lsun/reflect/generics/tree/BottomSignature;)V"] = null;
	proto["visitByteSignature(Lsun/reflect/generics/tree/ByteSignature;)V"] = null;
	proto["visitBooleanSignature(Lsun/reflect/generics/tree/BooleanSignature;)V"] = null;
	proto["visitShortSignature(Lsun/reflect/generics/tree/ShortSignature;)V"] = null;
	proto["visitCharSignature(Lsun/reflect/generics/tree/CharSignature;)V"] = null;
	proto["visitIntSignature(Lsun/reflect/generics/tree/IntSignature;)V"] = null;
	proto["visitLongSignature(Lsun/reflect/generics/tree/LongSignature;)V"] = null;
	proto["visitFloatSignature(Lsun/reflect/generics/tree/FloatSignature;)V"] = null;
	proto["visitDoubleSignature(Lsun/reflect/generics/tree/DoubleSignature;)V"] = null;
	proto["visitVoidDescriptor(Lsun/reflect/generics/tree/VoidDescriptor;)V"] = null;

});

//"sun/reflect/generics/visitor/Reifier"
Java["sun/reflect/generics/visitor/Reifier"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/visitor/Reifier");
	klass["$assertionsDisabled"] = null;
	klass["make(Lsun/reflect/generics/factory/GenericsFactory;)Lsun/reflect/generics/visitor/Reifier;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/generics/visitor/Reifier#make(Lsun/reflect/generics/factory/GenericsFactory;)Lsun/reflect/generics/visitor/Reifier;");
	};
	proto["getResult()Ljava/lang/reflect/Type;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/visitor/Reifier#getResult()Ljava/lang/reflect/Type;");
	};
	proto["visitFormalTypeParameter(Lsun/reflect/generics/tree/FormalTypeParameter;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/visitor/Reifier#visitFormalTypeParameter(Lsun/reflect/generics/tree/FormalTypeParameter;)V");
	};
	proto["visitClassTypeSignature(Lsun/reflect/generics/tree/ClassTypeSignature;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/visitor/Reifier#visitClassTypeSignature(Lsun/reflect/generics/tree/ClassTypeSignature;)V");
	};
	proto["visitArrayTypeSignature(Lsun/reflect/generics/tree/ArrayTypeSignature;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/visitor/Reifier#visitArrayTypeSignature(Lsun/reflect/generics/tree/ArrayTypeSignature;)V");
	};
	proto["visitTypeVariableSignature(Lsun/reflect/generics/tree/TypeVariableSignature;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/visitor/Reifier#visitTypeVariableSignature(Lsun/reflect/generics/tree/TypeVariableSignature;)V");
	};
	proto["visitWildcard(Lsun/reflect/generics/tree/Wildcard;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/visitor/Reifier#visitWildcard(Lsun/reflect/generics/tree/Wildcard;)V");
	};
	proto["visitSimpleClassTypeSignature(Lsun/reflect/generics/tree/SimpleClassTypeSignature;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/visitor/Reifier#visitSimpleClassTypeSignature(Lsun/reflect/generics/tree/SimpleClassTypeSignature;)V");
	};
	proto["visitBottomSignature(Lsun/reflect/generics/tree/BottomSignature;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/visitor/Reifier#visitBottomSignature(Lsun/reflect/generics/tree/BottomSignature;)V");
	};
	proto["visitByteSignature(Lsun/reflect/generics/tree/ByteSignature;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/visitor/Reifier#visitByteSignature(Lsun/reflect/generics/tree/ByteSignature;)V");
	};
	proto["visitBooleanSignature(Lsun/reflect/generics/tree/BooleanSignature;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/visitor/Reifier#visitBooleanSignature(Lsun/reflect/generics/tree/BooleanSignature;)V");
	};
	proto["visitShortSignature(Lsun/reflect/generics/tree/ShortSignature;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/visitor/Reifier#visitShortSignature(Lsun/reflect/generics/tree/ShortSignature;)V");
	};
	proto["visitCharSignature(Lsun/reflect/generics/tree/CharSignature;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/visitor/Reifier#visitCharSignature(Lsun/reflect/generics/tree/CharSignature;)V");
	};
	proto["visitIntSignature(Lsun/reflect/generics/tree/IntSignature;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/visitor/Reifier#visitIntSignature(Lsun/reflect/generics/tree/IntSignature;)V");
	};
	proto["visitLongSignature(Lsun/reflect/generics/tree/LongSignature;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/visitor/Reifier#visitLongSignature(Lsun/reflect/generics/tree/LongSignature;)V");
	};
	proto["visitFloatSignature(Lsun/reflect/generics/tree/FloatSignature;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/visitor/Reifier#visitFloatSignature(Lsun/reflect/generics/tree/FloatSignature;)V");
	};
	proto["visitDoubleSignature(Lsun/reflect/generics/tree/DoubleSignature;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/visitor/Reifier#visitDoubleSignature(Lsun/reflect/generics/tree/DoubleSignature;)V");
	};
	proto["visitVoidDescriptor(Lsun/reflect/generics/tree/VoidDescriptor;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/visitor/Reifier#visitVoidDescriptor(Lsun/reflect/generics/tree/VoidDescriptor;)V");
	};
	proto["getResult()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/visitor/Reifier#getResult()Ljava/lang/Object;");
	};

});

//"sun/reflect/generics/tree/ReturnType"
Java["sun/reflect/generics/tree/ReturnType"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/tree/ReturnType");


});

//"java/lang/ref/Reference$1"
Java["java/lang/ref/Reference$1"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/ref/Reference$1");


});

//"java/util/jar/Manifest$FastInputStream"
Java["java/util/jar/Manifest$FastInputStream"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/io/FilterInputStream"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/jar/Manifest$FastInputStream");

	proto["<init>(Ljava/io/InputStream;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Manifest$FastInputStream#<init>(Ljava/io/InputStream;)V");
	};
	proto["<init>(Ljava/io/InputStream;I)V"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Manifest$FastInputStream#<init>(Ljava/io/InputStream;I)V");
	};
	proto["read()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Manifest$FastInputStream#read()I");
	};
	proto["read([BII)I"] = function(arr_sb0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Manifest$FastInputStream#read([BII)I");
	};
	proto["readLine([BII)I"] = function(arr_sb0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Manifest$FastInputStream#readLine([BII)I");
	};
	proto["peek()B"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Manifest$FastInputStream#peek()B");
	};
	proto["readLine([B)I"] = function(arr_sb0){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Manifest$FastInputStream#readLine([B)I");
	};
	proto["skip(J)J"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Manifest$FastInputStream#skip(J)J");
	};
	proto["available()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Manifest$FastInputStream#available()I");
	};
	proto["close()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Manifest$FastInputStream#close()V");
	};

});

//"java/util/jar/Attributes$Name"
Java["java/util/jar/Attributes$Name"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/jar/Attributes$Name");
	klass["MANIFEST_VERSION"] = null;
	klass["SIGNATURE_VERSION"] = null;
	klass["CONTENT_TYPE"] = null;
	klass["CLASS_PATH"] = null;
	klass["MAIN_CLASS"] = null;
	klass["SEALED"] = null;
	klass["EXTENSION_LIST"] = null;
	klass["EXTENSION_NAME"] = null;
	klass["EXTENSION_INSTALLATION"] = null;
	klass["IMPLEMENTATION_TITLE"] = null;
	klass["IMPLEMENTATION_VERSION"] = null;
	klass["IMPLEMENTATION_VENDOR"] = null;
	klass["IMPLEMENTATION_VENDOR_ID"] = null;
	klass["IMPLEMENTATION_URL"] = null;
	klass["SPECIFICATION_TITLE"] = null;
	klass["SPECIFICATION_VERSION"] = null;
	klass["SPECIFICATION_VENDOR"] = null;
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes$Name#<init>(Ljava/lang/String;)V");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes$Name#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes$Name#hashCode()I");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes$Name#toString()Ljava/lang/String;");
	};

});

//"java/io/DataOutputStream"
Java["java/io/DataOutputStream"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/io/FilterOutputStream"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/DataOutputStream");
	proto["written"] = null;
	proto["<init>(Ljava/io/OutputStream;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/DataOutputStream#<init>(Ljava/io/OutputStream;)V");
	};
	proto["write(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/DataOutputStream#write(I)V");
	};
	proto["write([BII)V"] = function(arr_sb0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/DataOutputStream#write([BII)V");
	};
	proto["flush()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/DataOutputStream#flush()V");
	};
	proto["writeBoolean(Z)V"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/io/DataOutputStream#writeBoolean(Z)V");
	};
	proto["writeByte(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/DataOutputStream#writeByte(I)V");
	};
	proto["writeShort(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/DataOutputStream#writeShort(I)V");
	};
	proto["writeChar(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/DataOutputStream#writeChar(I)V");
	};
	proto["writeInt(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/DataOutputStream#writeInt(I)V");
	};
	proto["writeLong(J)V"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/io/DataOutputStream#writeLong(J)V");
	};
	proto["writeFloat(F)V"] = function(flt0){
		var self = this;
		throw new Error("NotImplemented: java/io/DataOutputStream#writeFloat(F)V");
	};
	proto["writeDouble(D)V"] = function(db0){
		var self = this;
		throw new Error("NotImplemented: java/io/DataOutputStream#writeDouble(D)V");
	};
	proto["writeBytes(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/DataOutputStream#writeBytes(Ljava/lang/String;)V");
	};
	proto["writeChars(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/DataOutputStream#writeChars(Ljava/lang/String;)V");
	};
	proto["writeUTF(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/DataOutputStream#writeUTF(Ljava/lang/String;)V");
	};
	klass["writeUTF(Ljava/lang/String;Ljava/io/DataOutput;)I"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/io/DataOutputStream#writeUTF(Ljava/lang/String;Ljava/io/DataOutput;)I");
	};
	proto["size()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/DataOutputStream#size()I");
	};

});

//"java/nio/charset/CoderResult$Cache"
Java["java/nio/charset/CoderResult$Cache"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/charset/CoderResult$Cache");

	proto["create(I)Ljava/nio/charset/CoderResult;"] = null;
	proto["<init>(Ljava/nio/charset/CoderResult$1;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CoderResult$Cache#<init>(Ljava/nio/charset/CoderResult$1;)V");
	};
	klass["access$200(Ljava/nio/charset/CoderResult$Cache;I)Ljava/nio/charset/CoderResult;"] = function(ref0,i1){
		var self = null;
		throw new Error("NotImplemented: java/nio/charset/CoderResult$Cache#access$200(Ljava/nio/charset/CoderResult$Cache;I)Ljava/nio/charset/CoderResult;");
	};

});

//"java/math/BigInteger"
Java["java/math/BigInteger"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Number"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/math/BigInteger");
	proto["signum"] = null;
	proto["mag"] = null;
	klass["LONG_MASK"] = (4294967295);
	klass["ZERO"] = null;
	klass["ONE"] = null;
	klass["TEN"] = null;
	klass["bnExpModThreshTable"] = null;
	klass["$assertionsDisabled"] = null;
	proto["<init>([B)V"] = function(arr_sb0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#<init>([B)V");
	};
	proto["<init>(I[B)V"] = function(i0,arr_sb1){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#<init>(I[B)V");
	};
	proto["<init>(Ljava/lang/String;I)V"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#<init>(Ljava/lang/String;I)V");
	};
	proto["<init>([C)V"] = function(arr_ch0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#<init>([C)V");
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#<init>(Ljava/lang/String;)V");
	};
	proto["<init>(ILjava/util/Random;)V"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#<init>(ILjava/util/Random;)V");
	};
	proto["<init>(IILjava/util/Random;)V"] = function(i0,i1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#<init>(IILjava/util/Random;)V");
	};
	klass["probablePrime(ILjava/util/Random;)Ljava/math/BigInteger;"] = function(i0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/math/BigInteger#probablePrime(ILjava/util/Random;)Ljava/math/BigInteger;");
	};
	proto["nextProbablePrime()Ljava/math/BigInteger;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#nextProbablePrime()Ljava/math/BigInteger;");
	};
	proto["primeToCertainty(ILjava/util/Random;)Z"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#primeToCertainty(ILjava/util/Random;)Z");
	};
	proto["<init>([II)V"] = function(arr_i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#<init>([II)V");
	};
	klass["valueOf(J)Ljava/math/BigInteger;"] = function(l0){
		var self = null;
		throw new Error("NotImplemented: java/math/BigInteger#valueOf(J)Ljava/math/BigInteger;");
	};
	proto["add(Ljava/math/BigInteger;)Ljava/math/BigInteger;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#add(Ljava/math/BigInteger;)Ljava/math/BigInteger;");
	};
	proto["subtract(Ljava/math/BigInteger;)Ljava/math/BigInteger;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#subtract(Ljava/math/BigInteger;)Ljava/math/BigInteger;");
	};
	proto["multiply(Ljava/math/BigInteger;)Ljava/math/BigInteger;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#multiply(Ljava/math/BigInteger;)Ljava/math/BigInteger;");
	};
	proto["multiply(J)Ljava/math/BigInteger;"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#multiply(J)Ljava/math/BigInteger;");
	};
	proto["divide(Ljava/math/BigInteger;)Ljava/math/BigInteger;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#divide(Ljava/math/BigInteger;)Ljava/math/BigInteger;");
	};
	proto["divideAndRemainder(Ljava/math/BigInteger;)[Ljava/math/BigInteger;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#divideAndRemainder(Ljava/math/BigInteger;)[Ljava/math/BigInteger;");
	};
	proto["remainder(Ljava/math/BigInteger;)Ljava/math/BigInteger;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#remainder(Ljava/math/BigInteger;)Ljava/math/BigInteger;");
	};
	proto["pow(I)Ljava/math/BigInteger;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#pow(I)Ljava/math/BigInteger;");
	};
	proto["gcd(Ljava/math/BigInteger;)Ljava/math/BigInteger;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#gcd(Ljava/math/BigInteger;)Ljava/math/BigInteger;");
	};
	klass["bitLengthForInt(I)I"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/math/BigInteger#bitLengthForInt(I)I");
	};
	klass["primitiveRightShift([III)V"] = function(arr_i0,i1,i2){
		var self = null;
		throw new Error("NotImplemented: java/math/BigInteger#primitiveRightShift([III)V");
	};
	klass["primitiveLeftShift([III)V"] = function(arr_i0,i1,i2){
		var self = null;
		throw new Error("NotImplemented: java/math/BigInteger#primitiveLeftShift([III)V");
	};
	proto["abs()Ljava/math/BigInteger;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#abs()Ljava/math/BigInteger;");
	};
	proto["negate()Ljava/math/BigInteger;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#negate()Ljava/math/BigInteger;");
	};
	proto["signum()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#signum()I");
	};
	proto["mod(Ljava/math/BigInteger;)Ljava/math/BigInteger;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#mod(Ljava/math/BigInteger;)Ljava/math/BigInteger;");
	};
	proto["modPow(Ljava/math/BigInteger;Ljava/math/BigInteger;)Ljava/math/BigInteger;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#modPow(Ljava/math/BigInteger;Ljava/math/BigInteger;)Ljava/math/BigInteger;");
	};
	klass["mulAdd([I[IIII)I"] = function(arr_i0,arr_i1,i2,i3,i4){
		var self = null;
		throw new Error("NotImplemented: java/math/BigInteger#mulAdd([I[IIII)I");
	};
	klass["addOne([IIII)I"] = function(arr_i0,i1,i2,i3){
		var self = null;
		throw new Error("NotImplemented: java/math/BigInteger#addOne([IIII)I");
	};
	proto["modInverse(Ljava/math/BigInteger;)Ljava/math/BigInteger;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#modInverse(Ljava/math/BigInteger;)Ljava/math/BigInteger;");
	};
	proto["shiftLeft(I)Ljava/math/BigInteger;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#shiftLeft(I)Ljava/math/BigInteger;");
	};
	proto["shiftRight(I)Ljava/math/BigInteger;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#shiftRight(I)Ljava/math/BigInteger;");
	};
	proto["javaIncrement([I)[I"] = function(arr_i0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#javaIncrement([I)[I");
	};
	proto["and(Ljava/math/BigInteger;)Ljava/math/BigInteger;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#and(Ljava/math/BigInteger;)Ljava/math/BigInteger;");
	};
	proto["or(Ljava/math/BigInteger;)Ljava/math/BigInteger;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#or(Ljava/math/BigInteger;)Ljava/math/BigInteger;");
	};
	proto["xor(Ljava/math/BigInteger;)Ljava/math/BigInteger;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#xor(Ljava/math/BigInteger;)Ljava/math/BigInteger;");
	};
	proto["not()Ljava/math/BigInteger;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#not()Ljava/math/BigInteger;");
	};
	proto["andNot(Ljava/math/BigInteger;)Ljava/math/BigInteger;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#andNot(Ljava/math/BigInteger;)Ljava/math/BigInteger;");
	};
	proto["testBit(I)Z"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#testBit(I)Z");
	};
	proto["setBit(I)Ljava/math/BigInteger;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#setBit(I)Ljava/math/BigInteger;");
	};
	proto["clearBit(I)Ljava/math/BigInteger;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#clearBit(I)Ljava/math/BigInteger;");
	};
	proto["flipBit(I)Ljava/math/BigInteger;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#flipBit(I)Ljava/math/BigInteger;");
	};
	proto["getLowestSetBit()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#getLowestSetBit()I");
	};
	proto["bitLength()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#bitLength()I");
	};
	proto["bitCount()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#bitCount()I");
	};
	proto["isProbablePrime(I)Z"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#isProbablePrime(I)Z");
	};
	proto["compareTo(Ljava/math/BigInteger;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#compareTo(Ljava/math/BigInteger;)I");
	};
	proto["compareMagnitude(Ljava/math/BigInteger;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#compareMagnitude(Ljava/math/BigInteger;)I");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#equals(Ljava/lang/Object;)Z");
	};
	proto["min(Ljava/math/BigInteger;)Ljava/math/BigInteger;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#min(Ljava/math/BigInteger;)Ljava/math/BigInteger;");
	};
	proto["max(Ljava/math/BigInteger;)Ljava/math/BigInteger;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#max(Ljava/math/BigInteger;)Ljava/math/BigInteger;");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#hashCode()I");
	};
	proto["toString(I)Ljava/lang/String;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#toString(I)Ljava/lang/String;");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#toString()Ljava/lang/String;");
	};
	proto["toByteArray()[B"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#toByteArray()[B");
	};
	proto["intValue()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#intValue()I");
	};
	proto["longValue()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#longValue()J");
	};
	proto["floatValue()F"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#floatValue()F");
	};
	proto["doubleValue()D"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#doubleValue()D");
	};
	proto["compareTo(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/math/BigInteger#compareTo(Ljava/lang/Object;)I");
	};

});

//"java/nio/file/Watchable"
Java["java/nio/file/Watchable"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/Watchable");

	proto["register(Ljava/nio/file/WatchService;[Ljava/nio/file/WatchEvent$Kind;[Ljava/nio/file/WatchEvent$Modifier;)Ljava/nio/file/WatchKey;"] = null;
	proto["register(Ljava/nio/file/WatchService;[Ljava/nio/file/WatchEvent$Kind;)Ljava/nio/file/WatchKey;"] = null;

});

//"java/nio/file/spi/FileSystemProvider"
Java["java/nio/file/spi/FileSystemProvider"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/spi/FileSystemProvider");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/spi/FileSystemProvider#<init>()V");
	};
	klass["installedProviders()Ljava/util/List;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/nio/file/spi/FileSystemProvider#installedProviders()Ljava/util/List;");
	};
	proto["getScheme()Ljava/lang/String;"] = null;
	proto["newFileSystem(Ljava/net/URI;Ljava/util/Map;)Ljava/nio/file/FileSystem;"] = null;
	proto["getFileSystem(Ljava/net/URI;)Ljava/nio/file/FileSystem;"] = null;
	proto["getPath(Ljava/net/URI;)Ljava/nio/file/Path;"] = null;
	proto["newFileSystem(Ljava/nio/file/Path;Ljava/util/Map;)Ljava/nio/file/FileSystem;"] = null;
	proto["newInputStream(Ljava/nio/file/Path;[Ljava/nio/file/OpenOption;)Ljava/io/InputStream;"] = function(ref0,arr_ref1){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/spi/FileSystemProvider#newInputStream(Ljava/nio/file/Path;[Ljava/nio/file/OpenOption;)Ljava/io/InputStream;");
	};
	proto["newOutputStream(Ljava/nio/file/Path;[Ljava/nio/file/OpenOption;)Ljava/io/OutputStream;"] = function(ref0,arr_ref1){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/spi/FileSystemProvider#newOutputStream(Ljava/nio/file/Path;[Ljava/nio/file/OpenOption;)Ljava/io/OutputStream;");
	};
	proto["newFileChannel(Ljava/nio/file/Path;Ljava/util/Set;[Ljava/nio/file/attribute/FileAttribute;)Ljava/nio/channels/FileChannel;"] = function(ref0,ref1,arr_ref2){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/spi/FileSystemProvider#newFileChannel(Ljava/nio/file/Path;Ljava/util/Set;[Ljava/nio/file/attribute/FileAttribute;)Ljava/nio/channels/FileChannel;");
	};
	proto["newAsynchronousFileChannel(Ljava/nio/file/Path;Ljava/util/Set;Ljava/util/concurrent/ExecutorService;[Ljava/nio/file/attribute/FileAttribute;)Ljava/nio/channels/AsynchronousFileChannel;"] = function(ref0,ref1,ref2,arr_ref3){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/spi/FileSystemProvider#newAsynchronousFileChannel(Ljava/nio/file/Path;Ljava/util/Set;Ljava/util/concurrent/ExecutorService;[Ljava/nio/file/attribute/FileAttribute;)Ljava/nio/channels/AsynchronousFileChannel;");
	};
	proto["newByteChannel(Ljava/nio/file/Path;Ljava/util/Set;[Ljava/nio/file/attribute/FileAttribute;)Ljava/nio/channels/SeekableByteChannel;"] = null;
	proto["newDirectoryStream(Ljava/nio/file/Path;Ljava/nio/file/DirectoryStream$Filter;)Ljava/nio/file/DirectoryStream;"] = null;
	proto["createDirectory(Ljava/nio/file/Path;[Ljava/nio/file/attribute/FileAttribute;)V"] = null;
	proto["createSymbolicLink(Ljava/nio/file/Path;Ljava/nio/file/Path;[Ljava/nio/file/attribute/FileAttribute;)V"] = function(ref0,ref1,arr_ref2){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/spi/FileSystemProvider#createSymbolicLink(Ljava/nio/file/Path;Ljava/nio/file/Path;[Ljava/nio/file/attribute/FileAttribute;)V");
	};
	proto["createLink(Ljava/nio/file/Path;Ljava/nio/file/Path;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/spi/FileSystemProvider#createLink(Ljava/nio/file/Path;Ljava/nio/file/Path;)V");
	};
	proto["delete(Ljava/nio/file/Path;)V"] = null;
	proto["deleteIfExists(Ljava/nio/file/Path;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/spi/FileSystemProvider#deleteIfExists(Ljava/nio/file/Path;)Z");
	};
	proto["readSymbolicLink(Ljava/nio/file/Path;)Ljava/nio/file/Path;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/spi/FileSystemProvider#readSymbolicLink(Ljava/nio/file/Path;)Ljava/nio/file/Path;");
	};
	proto["copy(Ljava/nio/file/Path;Ljava/nio/file/Path;[Ljava/nio/file/CopyOption;)V"] = null;
	proto["move(Ljava/nio/file/Path;Ljava/nio/file/Path;[Ljava/nio/file/CopyOption;)V"] = null;
	proto["isSameFile(Ljava/nio/file/Path;Ljava/nio/file/Path;)Z"] = null;
	proto["isHidden(Ljava/nio/file/Path;)Z"] = null;
	proto["getFileStore(Ljava/nio/file/Path;)Ljava/nio/file/FileStore;"] = null;
	proto["checkAccess(Ljava/nio/file/Path;[Ljava/nio/file/AccessMode;)V"] = null;
	proto["getFileAttributeView(Ljava/nio/file/Path;Ljava/lang/Class;[Ljava/nio/file/LinkOption;)Ljava/nio/file/attribute/FileAttributeView;"] = null;
	proto["readAttributes(Ljava/nio/file/Path;Ljava/lang/Class;[Ljava/nio/file/LinkOption;)Ljava/nio/file/attribute/BasicFileAttributes;"] = null;
	proto["readAttributes(Ljava/nio/file/Path;Ljava/lang/String;[Ljava/nio/file/LinkOption;)Ljava/util/Map;"] = null;
	proto["setAttribute(Ljava/nio/file/Path;Ljava/lang/String;Ljava/lang/Object;[Ljava/nio/file/LinkOption;)V"] = null;
	klass["access$000()Ljava/util/List;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/nio/file/spi/FileSystemProvider#access$000()Ljava/util/List;");
	};

});

//"java/nio/file/attribute/UserPrincipalLookupService"
Java["java/nio/file/attribute/UserPrincipalLookupService"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/attribute/UserPrincipalLookupService");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/attribute/UserPrincipalLookupService#<init>()V");
	};
	proto["lookupPrincipalByName(Ljava/lang/String;)Ljava/nio/file/attribute/UserPrincipal;"] = null;
	proto["lookupPrincipalByGroupName(Ljava/lang/String;)Ljava/nio/file/attribute/GroupPrincipal;"] = null;

});

//"java/nio/file/PathMatcher"
Java["java/nio/file/PathMatcher"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/PathMatcher");

	proto["matches(Ljava/nio/file/Path;)Z"] = null;

});

//"java/lang/Iterable"
Java["java/lang/Iterable"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Iterable");

	proto["iterator()Ljava/util/Iterator;"] = null;

});

//"sun/util/calendar/BaseCalendar$Date"
Java["sun/util/calendar/BaseCalendar$Date"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["sun/util/calendar/CalendarDate"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/util/calendar/BaseCalendar$Date");
	proto["cachedYear"] = null;
	proto["cachedFixedDateJan1"] = null;
	proto["cachedFixedDateNextJan1"] = null;
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar$Date#<init>()V");
	};
	proto["<init>(Ljava/util/TimeZone;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar$Date#<init>(Ljava/util/TimeZone;)V");
	};
	proto["setNormalizedDate(III)Lsun/util/calendar/BaseCalendar$Date;"] = function(i0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar$Date#setNormalizedDate(III)Lsun/util/calendar/BaseCalendar$Date;");
	};
	proto["getNormalizedYear()I"] = null;
	proto["setNormalizedYear(I)V"] = null;
	proto["hit(I)Z"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar$Date#hit(I)Z");
	};
	proto["hit(J)Z"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar$Date#hit(J)Z");
	};
	proto["getCachedYear()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar$Date#getCachedYear()I");
	};
	proto["getCachedJan1()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar$Date#getCachedJan1()J");
	};
	proto["setCache(IJI)V"] = function(i0,l1,i2){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar$Date#setCache(IJI)V");
	};

});

//"sun/util/calendar/BaseCalendar"
Java["sun/util/calendar/BaseCalendar"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["sun/util/calendar/AbstractCalendar"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/util/calendar/BaseCalendar");
	klass["JANUARY"] = (1);
	klass["FEBRUARY"] = (2);
	klass["MARCH"] = (3);
	klass["APRIL"] = (4);
	klass["MAY"] = (5);
	klass["JUNE"] = (6);
	klass["JULY"] = (7);
	klass["AUGUST"] = (8);
	klass["SEPTEMBER"] = (9);
	klass["OCTOBER"] = (10);
	klass["NOVEMBER"] = (11);
	klass["DECEMBER"] = (12);
	klass["SUNDAY"] = (1);
	klass["MONDAY"] = (2);
	klass["TUESDAY"] = (3);
	klass["WEDNESDAY"] = (4);
	klass["THURSDAY"] = (5);
	klass["FRIDAY"] = (6);
	klass["SATURDAY"] = (7);
	klass["DAYS_IN_MONTH"] = null;
	klass["ACCUMULATED_DAYS_IN_MONTH"] = null;
	klass["ACCUMULATED_DAYS_IN_MONTH_LEAP"] = null;
	klass["$assertionsDisabled"] = null;
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar#<init>()V");
	};
	proto["validate(Lsun/util/calendar/CalendarDate;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar#validate(Lsun/util/calendar/CalendarDate;)Z");
	};
	proto["normalize(Lsun/util/calendar/CalendarDate;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar#normalize(Lsun/util/calendar/CalendarDate;)Z");
	};
	proto["normalizeMonth(Lsun/util/calendar/CalendarDate;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar#normalizeMonth(Lsun/util/calendar/CalendarDate;)V");
	};
	proto["getYearLength(Lsun/util/calendar/CalendarDate;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar#getYearLength(Lsun/util/calendar/CalendarDate;)I");
	};
	proto["getYearLengthInMonths(Lsun/util/calendar/CalendarDate;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar#getYearLengthInMonths(Lsun/util/calendar/CalendarDate;)I");
	};
	proto["getMonthLength(Lsun/util/calendar/CalendarDate;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar#getMonthLength(Lsun/util/calendar/CalendarDate;)I");
	};
	proto["getDayOfYear(Lsun/util/calendar/CalendarDate;)J"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar#getDayOfYear(Lsun/util/calendar/CalendarDate;)J");
	};
	proto["getDayOfYear(III)J"] = function(i0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar#getDayOfYear(III)J");
	};
	proto["getFixedDate(Lsun/util/calendar/CalendarDate;)J"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar#getFixedDate(Lsun/util/calendar/CalendarDate;)J");
	};
	proto["getFixedDate(IIILsun/util/calendar/BaseCalendar$Date;)J"] = function(i0,i1,i2,ref3){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar#getFixedDate(IIILsun/util/calendar/BaseCalendar$Date;)J");
	};
	proto["getCalendarDateFromFixedDate(Lsun/util/calendar/CalendarDate;J)V"] = function(ref0,l1){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar#getCalendarDateFromFixedDate(Lsun/util/calendar/CalendarDate;J)V");
	};
	proto["getDayOfWeek(Lsun/util/calendar/CalendarDate;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar#getDayOfWeek(Lsun/util/calendar/CalendarDate;)I");
	};
	klass["getDayOfWeekFromFixedDate(J)I"] = function(l0){
		var self = null;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar#getDayOfWeekFromFixedDate(J)I");
	};
	proto["getYearFromFixedDate(J)I"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar#getYearFromFixedDate(J)I");
	};
	proto["getGregorianYearFromFixedDate(J)I"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar#getGregorianYearFromFixedDate(J)I");
	};
	proto["isLeapYear(Lsun/util/calendar/CalendarDate;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar#isLeapYear(Lsun/util/calendar/CalendarDate;)Z");
	};
	proto["isLeapYear(I)Z"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/util/calendar/BaseCalendar#isLeapYear(I)Z");
	};

});

//"java/util/HashMap$Entry"
Java["java/util/HashMap$Entry"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/HashMap$Entry");
	proto["key"] = null;
	proto["value"] = null;
	proto["next"] = null;
	proto["hash"] = null;
	proto["<init>(ILjava/lang/Object;Ljava/lang/Object;Ljava/util/HashMap$Entry;)V"] = function(i0,ref1,ref2,ref3){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap$Entry#<init>(ILjava/lang/Object;Ljava/lang/Object;Ljava/util/HashMap$Entry;)V");
	};
	proto["getKey()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap$Entry#getKey()Ljava/lang/Object;");
	};
	proto["getValue()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap$Entry#getValue()Ljava/lang/Object;");
	};
	proto["setValue(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap$Entry#setValue(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap$Entry#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap$Entry#hashCode()I");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap$Entry#toString()Ljava/lang/String;");
	};
	proto["recordAccess(Ljava/util/HashMap;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap$Entry#recordAccess(Ljava/util/HashMap;)V");
	};
	proto["recordRemoval(Ljava/util/HashMap;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap$Entry#recordRemoval(Ljava/util/HashMap;)V");
	};

});

//"java/util/AbstractCollection"
Java["java/util/AbstractCollection"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/AbstractCollection");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractCollection#<init>()V");
	};
	proto["iterator()Ljava/util/Iterator;"] = null;
	proto["size()I"] = null;
	proto["isEmpty()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractCollection#isEmpty()Z");
	};
	proto["contains(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractCollection#contains(Ljava/lang/Object;)Z");
	};
	proto["toArray()[Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractCollection#toArray()[Ljava/lang/Object;");
	};
	proto["toArray([Ljava/lang/Object;)[Ljava/lang/Object;"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractCollection#toArray([Ljava/lang/Object;)[Ljava/lang/Object;");
	};
	proto["add(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractCollection#add(Ljava/lang/Object;)Z");
	};
	proto["remove(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractCollection#remove(Ljava/lang/Object;)Z");
	};
	proto["containsAll(Ljava/util/Collection;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractCollection#containsAll(Ljava/util/Collection;)Z");
	};
	proto["addAll(Ljava/util/Collection;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractCollection#addAll(Ljava/util/Collection;)Z");
	};
	proto["removeAll(Ljava/util/Collection;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractCollection#removeAll(Ljava/util/Collection;)Z");
	};
	proto["retainAll(Ljava/util/Collection;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractCollection#retainAll(Ljava/util/Collection;)Z");
	};
	proto["clear()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractCollection#clear()V");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractCollection#toString()Ljava/lang/String;");
	};

});

//"java/security/cert/CertPath"
Java["java/security/cert/CertPath"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/security/cert/CertPath");

	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/security/cert/CertPath#<init>(Ljava/lang/String;)V");
	};
	proto["getType()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/cert/CertPath#getType()Ljava/lang/String;");
	};
	proto["getEncodings()Ljava/util/Iterator;"] = null;
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/security/cert/CertPath#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/cert/CertPath#hashCode()I");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/cert/CertPath#toString()Ljava/lang/String;");
	};
	proto["getEncoded()[B"] = null;
	proto["getEncoded(Ljava/lang/String;)[B"] = null;
	proto["getCertificates()Ljava/util/List;"] = null;
	proto["writeReplace()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/cert/CertPath#writeReplace()Ljava/lang/Object;");
	};

});

//"java/security/Timestamp"
Java["java/security/Timestamp"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/security/Timestamp");

	proto["<init>(Ljava/util/Date;Ljava/security/cert/CertPath;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/security/Timestamp#<init>(Ljava/util/Date;Ljava/security/cert/CertPath;)V");
	};
	proto["getTimestamp()Ljava/util/Date;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/Timestamp#getTimestamp()Ljava/util/Date;");
	};
	proto["getSignerCertPath()Ljava/security/cert/CertPath;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/Timestamp#getSignerCertPath()Ljava/security/cert/CertPath;");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/Timestamp#hashCode()I");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/security/Timestamp#equals(Ljava/lang/Object;)Z");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/Timestamp#toString()Ljava/lang/String;");
	};

});

//"java/lang/Error"
Java["java/lang/Error"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Throwable"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Error");
	klass["serialVersionUID"] = (4980196508277280342);
	proto["<init>()V"] = function(){
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		this.msg = ref0.val;
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/Throwable;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/Error#<init>(Ljava/lang/String;Ljava/lang/Throwable;)V");
	};
	proto["<init>(Ljava/lang/Throwable;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Error#<init>(Ljava/lang/Throwable;)V");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/Throwable;ZZ)V"] = function(ref0,ref1,b2,b3){
		var self = this;
		throw new Error("NotImplemented: java/lang/Error#<init>(Ljava/lang/String;Ljava/lang/Throwable;ZZ)V");
	};

});

//"java/io/ObjectStreamException"
Java["java/io/ObjectStreamException"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/io/IOException"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/ObjectStreamException");

	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamException#<init>(Ljava/lang/String;)V");
	};
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamException#<init>()V");
	};

});

//"java/lang/Throwable$1"
Java["java/lang/Throwable$1"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Throwable$1");


});

//"sun/reflect/generics/visitor/Visitor"
Java["sun/reflect/generics/visitor/Visitor"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/visitor/Visitor");

	proto["visitClassSignature(Lsun/reflect/generics/tree/ClassSignature;)V"] = null;
	proto["visitMethodTypeSignature(Lsun/reflect/generics/tree/MethodTypeSignature;)V"] = null;

});

//"sun/reflect/generics/tree/FormalTypeParameter"
Java["sun/reflect/generics/tree/FormalTypeParameter"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/tree/FormalTypeParameter");

	klass["make(Ljava/lang/String;[Lsun/reflect/generics/tree/FieldTypeSignature;)Lsun/reflect/generics/tree/FormalTypeParameter;"] = function(ref0,arr_ref1){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/generics/tree/FormalTypeParameter#make(Ljava/lang/String;[Lsun/reflect/generics/tree/FieldTypeSignature;)Lsun/reflect/generics/tree/FormalTypeParameter;");
	};
	proto["getBounds()[Lsun/reflect/generics/tree/FieldTypeSignature;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/FormalTypeParameter#getBounds()[Lsun/reflect/generics/tree/FieldTypeSignature;");
	};
	proto["getName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/FormalTypeParameter#getName()Ljava/lang/String;");
	};
	proto["accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/FormalTypeParameter#accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V");
	};

});

//"sun/reflect/generics/tree/ClassTypeSignature"
Java["sun/reflect/generics/tree/ClassTypeSignature"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/tree/ClassTypeSignature");

	klass["make(Ljava/util/List;)Lsun/reflect/generics/tree/ClassTypeSignature;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/generics/tree/ClassTypeSignature#make(Ljava/util/List;)Lsun/reflect/generics/tree/ClassTypeSignature;");
	};
	proto["getPath()Ljava/util/List;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/ClassTypeSignature#getPath()Ljava/util/List;");
	};
	proto["accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/ClassTypeSignature#accept(Lsun/reflect/generics/visitor/TypeTreeVisitor;)V");
	};

});

//"java/net/FileNameMap"
Java["java/net/FileNameMap"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/net/FileNameMap");

	proto["getContentTypeFor(Ljava/lang/String;)Ljava/lang/String;"] = null;

});

//"java/net/ContentHandlerFactory"
Java["java/net/ContentHandlerFactory"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/net/ContentHandlerFactory");

	proto["createContentHandler(Ljava/lang/String;)Ljava/net/ContentHandler;"] = null;

});

//"java/net/ContentHandler"
Java["java/net/ContentHandler"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/net/ContentHandler");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/ContentHandler#<init>()V");
	};
	proto["getContent(Ljava/net/URLConnection;)Ljava/lang/Object;"] = null;
	proto["getContent(Ljava/net/URLConnection;[Ljava/lang/Class;)Ljava/lang/Object;"] = null;

});

//"java/net/SocketAddress"
Java["java/net/SocketAddress"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/net/SocketAddress");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/SocketAddress#<init>()V");
	};

});

//"java/net/Proxy$Type"
Java["java/net/Proxy$Type"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Enum"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/net/Proxy$Type");
	klass["DIRECT"] = null;
	klass["HTTP"] = null;
	klass["SOCKS"] = null;
	klass["values()[Ljava/net/Proxy$Type;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/Proxy$Type#values()[Ljava/net/Proxy$Type;");
	};
	klass["valueOf(Ljava/lang/String;)Ljava/net/Proxy$Type;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/net/Proxy$Type#valueOf(Ljava/lang/String;)Ljava/net/Proxy$Type;");
	};

});

//"sun/reflect/generics/tree/TypeSignature"
Java["sun/reflect/generics/tree/TypeSignature"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/tree/TypeSignature");


});

//"sun/reflect/generics/repository/AbstractRepository"
Java["sun/reflect/generics/repository/AbstractRepository"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/repository/AbstractRepository");

	proto["getTree()Lsun/reflect/generics/tree/Tree;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/repository/AbstractRepository#getTree()Lsun/reflect/generics/tree/Tree;");
	};
	proto["getReifier()Lsun/reflect/generics/visitor/Reifier;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/repository/AbstractRepository#getReifier()Lsun/reflect/generics/visitor/Reifier;");
	};
	proto["<init>(Ljava/lang/String;Lsun/reflect/generics/factory/GenericsFactory;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/repository/AbstractRepository#<init>(Ljava/lang/String;Lsun/reflect/generics/factory/GenericsFactory;)V");
	};
	proto["parse(Ljava/lang/String;)Lsun/reflect/generics/tree/Tree;"] = null;

});

//"sun/reflect/generics/tree/MethodTypeSignature"
Java["sun/reflect/generics/tree/MethodTypeSignature"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/tree/MethodTypeSignature");

	klass["make([Lsun/reflect/generics/tree/FormalTypeParameter;[Lsun/reflect/generics/tree/TypeSignature;Lsun/reflect/generics/tree/ReturnType;[Lsun/reflect/generics/tree/FieldTypeSignature;)Lsun/reflect/generics/tree/MethodTypeSignature;"] = function(arr_ref0,arr_ref1,ref2,arr_ref3){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/generics/tree/MethodTypeSignature#make([Lsun/reflect/generics/tree/FormalTypeParameter;[Lsun/reflect/generics/tree/TypeSignature;Lsun/reflect/generics/tree/ReturnType;[Lsun/reflect/generics/tree/FieldTypeSignature;)Lsun/reflect/generics/tree/MethodTypeSignature;");
	};
	proto["getFormalTypeParameters()[Lsun/reflect/generics/tree/FormalTypeParameter;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/MethodTypeSignature#getFormalTypeParameters()[Lsun/reflect/generics/tree/FormalTypeParameter;");
	};
	proto["getParameterTypes()[Lsun/reflect/generics/tree/TypeSignature;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/MethodTypeSignature#getParameterTypes()[Lsun/reflect/generics/tree/TypeSignature;");
	};
	proto["getReturnType()Lsun/reflect/generics/tree/ReturnType;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/MethodTypeSignature#getReturnType()Lsun/reflect/generics/tree/ReturnType;");
	};
	proto["getExceptionTypes()[Lsun/reflect/generics/tree/FieldTypeSignature;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/MethodTypeSignature#getExceptionTypes()[Lsun/reflect/generics/tree/FieldTypeSignature;");
	};
	proto["accept(Lsun/reflect/generics/visitor/Visitor;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/MethodTypeSignature#accept(Lsun/reflect/generics/visitor/Visitor;)V");
	};

});

//"java/lang/ref/Reference$Lock"
Java["java/lang/ref/Reference$Lock"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/ref/Reference$Lock");

	proto["<init>(Ljava/lang/ref/Reference$1;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ref/Reference$Lock#<init>(Ljava/lang/ref/Reference$1;)V");
	};

});

//"java/util/jar/Attributes"
Java["java/util/jar/Attributes"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/jar/Attributes");
	proto["map"] = null;
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#<init>()V");
	};
	proto["<init>(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#<init>(I)V");
	};
	proto["<init>(Ljava/util/jar/Attributes;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#<init>(Ljava/util/jar/Attributes;)V");
	};
	proto["get(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#get(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["getValue(Ljava/lang/String;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#getValue(Ljava/lang/String;)Ljava/lang/String;");
	};
	proto["getValue(Ljava/util/jar/Attributes$Name;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#getValue(Ljava/util/jar/Attributes$Name;)Ljava/lang/String;");
	};
	proto["put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["putValue(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#putValue(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;");
	};
	proto["remove(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#remove(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["containsValue(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#containsValue(Ljava/lang/Object;)Z");
	};
	proto["containsKey(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#containsKey(Ljava/lang/Object;)Z");
	};
	proto["putAll(Ljava/util/Map;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#putAll(Ljava/util/Map;)V");
	};
	proto["clear()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#clear()V");
	};
	proto["size()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#size()I");
	};
	proto["isEmpty()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#isEmpty()Z");
	};
	proto["keySet()Ljava/util/Set;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#keySet()Ljava/util/Set;");
	};
	proto["values()Ljava/util/Collection;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#values()Ljava/util/Collection;");
	};
	proto["entrySet()Ljava/util/Set;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#entrySet()Ljava/util/Set;");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#hashCode()I");
	};
	proto["clone()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#clone()Ljava/lang/Object;");
	};
	proto["write(Ljava/io/DataOutputStream;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#write(Ljava/io/DataOutputStream;)V");
	};
	proto["writeMain(Ljava/io/DataOutputStream;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#writeMain(Ljava/io/DataOutputStream;)V");
	};
	proto["read(Ljava/util/jar/Manifest$FastInputStream;[B)V"] = function(ref0,arr_sb1){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Attributes#read(Ljava/util/jar/Manifest$FastInputStream;[B)V");
	};

});

//"java/util/WeakHashMap$Entry"
Java["java/util/WeakHashMap$Entry"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/ref/WeakReference"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/WeakHashMap$Entry");
	proto["value"] = null;
	proto["hash"] = null;
	proto["next"] = null;
	proto["<init>(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/ref/ReferenceQueue;ILjava/util/WeakHashMap$Entry;)V"] = function(ref0,ref1,ref2,i3,ref4){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap$Entry#<init>(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/ref/ReferenceQueue;ILjava/util/WeakHashMap$Entry;)V");
	};
	proto["getKey()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap$Entry#getKey()Ljava/lang/Object;");
	};
	proto["getValue()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap$Entry#getValue()Ljava/lang/Object;");
	};
	proto["setValue(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap$Entry#setValue(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap$Entry#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap$Entry#hashCode()I");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap$Entry#toString()Ljava/lang/String;");
	};

});

//"java/lang/ref/WeakReference"
Java["java/lang/ref/WeakReference"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/ref/Reference"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/ref/WeakReference");

	proto["<init>(Ljava/lang/Object;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ref/WeakReference#<init>(Ljava/lang/Object;)V");
	};
	proto["<init>(Ljava/lang/Object;Ljava/lang/ref/ReferenceQueue;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/ref/WeakReference#<init>(Ljava/lang/Object;Ljava/lang/ref/ReferenceQueue;)V");
	};

});

//"java/lang/ClassValue$Version"
Java["java/lang/ClassValue$Version"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/ClassValue$Version");

	proto["<init>(Ljava/lang/ClassValue;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue$Version#<init>(Ljava/lang/ClassValue;)V");
	};
	proto["classValue()Ljava/lang/ClassValue;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue$Version#classValue()Ljava/lang/ClassValue;");
	};
	proto["promise()Ljava/lang/ClassValue$Entry;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue$Version#promise()Ljava/lang/ClassValue$Entry;");
	};
	proto["isLive()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue$Version#isLive()Z");
	};

});

//"java/lang/ClassValue$Identity"
Java["java/lang/ClassValue$Identity"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/ClassValue$Identity");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue$Identity#<init>()V");
	};

});

//"java/util/ResourceBundle$Control"
Java["java/util/ResourceBundle$Control"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/ResourceBundle$Control");
	klass["FORMAT_DEFAULT"] = null;
	klass["FORMAT_CLASS"] = null;
	klass["FORMAT_PROPERTIES"] = null;
	klass["TTL_DONT_CACHE"] = (-1);
	klass["TTL_NO_EXPIRATION_CONTROL"] = (-2);
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle$Control#<init>()V");
	};
	klass["getControl(Ljava/util/List;)Ljava/util/ResourceBundle$Control;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/ResourceBundle$Control#getControl(Ljava/util/List;)Ljava/util/ResourceBundle$Control;");
	};
	klass["getNoFallbackControl(Ljava/util/List;)Ljava/util/ResourceBundle$Control;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/ResourceBundle$Control#getNoFallbackControl(Ljava/util/List;)Ljava/util/ResourceBundle$Control;");
	};
	proto["getFormats(Ljava/lang/String;)Ljava/util/List;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle$Control#getFormats(Ljava/lang/String;)Ljava/util/List;");
	};
	proto["getCandidateLocales(Ljava/lang/String;Ljava/util/Locale;)Ljava/util/List;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle$Control#getCandidateLocales(Ljava/lang/String;Ljava/util/Locale;)Ljava/util/List;");
	};
	proto["getFallbackLocale(Ljava/lang/String;Ljava/util/Locale;)Ljava/util/Locale;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle$Control#getFallbackLocale(Ljava/lang/String;Ljava/util/Locale;)Ljava/util/Locale;");
	};
	proto["newBundle(Ljava/lang/String;Ljava/util/Locale;Ljava/lang/String;Ljava/lang/ClassLoader;Z)Ljava/util/ResourceBundle;"] = function(ref0,ref1,ref2,ref3,b4){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle$Control#newBundle(Ljava/lang/String;Ljava/util/Locale;Ljava/lang/String;Ljava/lang/ClassLoader;Z)Ljava/util/ResourceBundle;");
	};
	proto["getTimeToLive(Ljava/lang/String;Ljava/util/Locale;)J"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle$Control#getTimeToLive(Ljava/lang/String;Ljava/util/Locale;)J");
	};
	proto["needsReload(Ljava/lang/String;Ljava/util/Locale;Ljava/lang/String;Ljava/lang/ClassLoader;Ljava/util/ResourceBundle;J)Z"] = function(ref0,ref1,ref2,ref3,ref4,l5){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle$Control#needsReload(Ljava/lang/String;Ljava/util/Locale;Ljava/lang/String;Ljava/lang/ClassLoader;Ljava/util/ResourceBundle;J)Z");
	};
	proto["toBundleName(Ljava/lang/String;Ljava/util/Locale;)Ljava/lang/String;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle$Control#toBundleName(Ljava/lang/String;Ljava/util/Locale;)Ljava/lang/String;");
	};
	proto["toResourceName(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle$Control#toResourceName(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;");
	};
	klass["access$300()Ljava/util/ResourceBundle$Control;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/util/ResourceBundle$Control#access$300()Ljava/util/ResourceBundle$Control;");
	};

});

//"java/util/ResourceBundle$CacheKey"
Java["java/util/ResourceBundle$CacheKey"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/ResourceBundle$CacheKey");

	proto["<init>(Ljava/lang/String;Ljava/util/Locale;Ljava/lang/ClassLoader;)V"] = function(ref0,ref1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle$CacheKey#<init>(Ljava/lang/String;Ljava/util/Locale;Ljava/lang/ClassLoader;)V");
	};
	proto["getName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle$CacheKey#getName()Ljava/lang/String;");
	};
	proto["setName(Ljava/lang/String;)Ljava/util/ResourceBundle$CacheKey;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle$CacheKey#setName(Ljava/lang/String;)Ljava/util/ResourceBundle$CacheKey;");
	};
	proto["getLocale()Ljava/util/Locale;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle$CacheKey#getLocale()Ljava/util/Locale;");
	};
	proto["setLocale(Ljava/util/Locale;)Ljava/util/ResourceBundle$CacheKey;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle$CacheKey#setLocale(Ljava/util/Locale;)Ljava/util/ResourceBundle$CacheKey;");
	};
	proto["getLoader()Ljava/lang/ClassLoader;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle$CacheKey#getLoader()Ljava/lang/ClassLoader;");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle$CacheKey#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle$CacheKey#hashCode()I");
	};
	proto["clone()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle$CacheKey#clone()Ljava/lang/Object;");
	};
	proto["getFormat()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle$CacheKey#getFormat()Ljava/lang/String;");
	};
	proto["setFormat(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle$CacheKey#setFormat(Ljava/lang/String;)V");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle$CacheKey#toString()Ljava/lang/String;");
	};
	klass["access$400(Ljava/util/ResourceBundle$CacheKey;)Ljava/lang/Throwable;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/ResourceBundle$CacheKey#access$400(Ljava/util/ResourceBundle$CacheKey;)Ljava/lang/Throwable;");
	};
	klass["access$500(Ljava/util/ResourceBundle$CacheKey;Ljava/lang/Throwable;)V"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/ResourceBundle$CacheKey#access$500(Ljava/util/ResourceBundle$CacheKey;Ljava/lang/Throwable;)V");
	};
	klass["access$600(Ljava/util/ResourceBundle$CacheKey;)J"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/ResourceBundle$CacheKey#access$600(Ljava/util/ResourceBundle$CacheKey;)J");
	};
	klass["access$700(Ljava/util/ResourceBundle$CacheKey;)J"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/ResourceBundle$CacheKey#access$700(Ljava/util/ResourceBundle$CacheKey;)J");
	};
	klass["access$702(Ljava/util/ResourceBundle$CacheKey;J)J"] = function(ref0,l1){
		var self = null;
		throw new Error("NotImplemented: java/util/ResourceBundle$CacheKey#access$702(Ljava/util/ResourceBundle$CacheKey;J)J");
	};
	klass["access$602(Ljava/util/ResourceBundle$CacheKey;J)J"] = function(ref0,l1){
		var self = null;
		throw new Error("NotImplemented: java/util/ResourceBundle$CacheKey#access$602(Ljava/util/ResourceBundle$CacheKey;J)J");
	};

});

//"java/text/Format$FieldDelegate"
Java["java/text/Format$FieldDelegate"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/text/Format$FieldDelegate");

	proto["formatted(Ljava/text/Format$Field;Ljava/lang/Object;IILjava/lang/StringBuffer;)V"] = null;
	proto["formatted(ILjava/text/Format$Field;Ljava/lang/Object;IILjava/lang/StringBuffer;)V"] = null;

});

//"java/text/Format$Field"
Java["java/text/Format$Field"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/text/AttributedCharacterIterator$Attribute"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/text/Format$Field");

	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/Format$Field#<init>(Ljava/lang/String;)V");
	};

});

//"java/text/AttributedCharacterIterator$Attribute"
Java["java/text/AttributedCharacterIterator$Attribute"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/text/AttributedCharacterIterator$Attribute");
	klass["LANGUAGE"] = null;
	klass["READING"] = null;
	klass["INPUT_METHOD_SEGMENT"] = null;
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/AttributedCharacterIterator$Attribute#<init>(Ljava/lang/String;)V");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/AttributedCharacterIterator$Attribute#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/AttributedCharacterIterator$Attribute#hashCode()I");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/AttributedCharacterIterator$Attribute#toString()Ljava/lang/String;");
	};
	proto["getName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/AttributedCharacterIterator$Attribute#getName()Ljava/lang/String;");
	};
	proto["readResolve()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/AttributedCharacterIterator$Attribute#readResolve()Ljava/lang/Object;");
	};

});

//"java/nio/charset/CoderResult$1"
Java["java/nio/charset/CoderResult$1"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/nio/charset/CoderResult$Cache"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/charset/CoderResult$1");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CoderResult$1#<init>()V");
	};
	proto["create(I)Ljava/nio/charset/CoderResult;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CoderResult$1#create(I)Ljava/nio/charset/CoderResult;");
	};

});

//"sun/security/util/Debug"
Java["sun/security/util/Debug"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/security/util/Debug");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/security/util/Debug#<init>()V");
	};
	klass["Help()V"] = function(){
		var self = null;
		throw new Error("NotImplemented: sun/security/util/Debug#Help()V");
	};
	klass["getInstance(Ljava/lang/String;)Lsun/security/util/Debug;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: sun/security/util/Debug#getInstance(Ljava/lang/String;)Lsun/security/util/Debug;");
	};
	klass["getInstance(Ljava/lang/String;Ljava/lang/String;)Lsun/security/util/Debug;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: sun/security/util/Debug#getInstance(Ljava/lang/String;Ljava/lang/String;)Lsun/security/util/Debug;");
	};
	klass["isOn(Ljava/lang/String;)Z"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: sun/security/util/Debug#isOn(Ljava/lang/String;)Z");
	};
	proto["println(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/security/util/Debug#println(Ljava/lang/String;)V");
	};
	proto["println()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/security/util/Debug#println()V");
	};
	klass["println(Ljava/lang/String;Ljava/lang/String;)V"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: sun/security/util/Debug#println(Ljava/lang/String;Ljava/lang/String;)V");
	};
	klass["toHexString(Ljava/math/BigInteger;)Ljava/lang/String;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: sun/security/util/Debug#toHexString(Ljava/math/BigInteger;)Ljava/lang/String;");
	};
	klass["toString([B)Ljava/lang/String;"] = function(arr_sb0){
		var self = null;
		throw new Error("NotImplemented: sun/security/util/Debug#toString([B)Ljava/lang/String;");
	};

});

//"java/security/DomainCombiner"
Java["java/security/DomainCombiner"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/security/DomainCombiner");

	proto["combine([Ljava/security/ProtectionDomain;[Ljava/security/ProtectionDomain;)[Ljava/security/ProtectionDomain;"] = null;

});

//"java/lang/ThreadLocal$ThreadLocalMap$Entry"
Java["java/lang/ThreadLocal$ThreadLocalMap$Entry"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/ref/WeakReference"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/ThreadLocal$ThreadLocalMap$Entry");
	proto["value"] = null;
	proto["<init>(Ljava/lang/ThreadLocal;Ljava/lang/Object;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadLocal$ThreadLocalMap$Entry#<init>(Ljava/lang/ThreadLocal;Ljava/lang/Object;)V");
	};

});

//"java/lang/ThreadLocal$1"
Java["java/lang/ThreadLocal$1"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/ThreadLocal$1");


});

//"java/lang/ThreadLocal"
Java["java/lang/ThreadLocal"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/ThreadLocal");

	proto["initialValue()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadLocal#initialValue()Ljava/lang/Object;");
	};
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadLocal#<init>()V");
	};
	proto["get()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadLocal#get()Ljava/lang/Object;");
	};
	proto["set(Ljava/lang/Object;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadLocal#set(Ljava/lang/Object;)V");
	};
	proto["remove()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadLocal#remove()V");
	};
	proto["getMap(Ljava/lang/Thread;)Ljava/lang/ThreadLocal$ThreadLocalMap;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadLocal#getMap(Ljava/lang/Thread;)Ljava/lang/ThreadLocal$ThreadLocalMap;");
	};
	proto["createMap(Ljava/lang/Thread;Ljava/lang/Object;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadLocal#createMap(Ljava/lang/Thread;Ljava/lang/Object;)V");
	};
	klass["createInheritedMap(Ljava/lang/ThreadLocal$ThreadLocalMap;)Ljava/lang/ThreadLocal$ThreadLocalMap;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/ThreadLocal#createInheritedMap(Ljava/lang/ThreadLocal$ThreadLocalMap;)Ljava/lang/ThreadLocal$ThreadLocalMap;");
	};
	proto["childValue(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadLocal#childValue(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	klass["access$400(Ljava/lang/ThreadLocal;)I"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/ThreadLocal#access$400(Ljava/lang/ThreadLocal;)I");
	};

});

//"java/nio/file/WatchService"
Java["java/nio/file/WatchService"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/WatchService");

	proto["close()V"] = null;
	proto["poll()Ljava/nio/file/WatchKey;"] = null;
	proto["poll(JLjava/util/concurrent/TimeUnit;)Ljava/nio/file/WatchKey;"] = null;
	proto["take()Ljava/nio/file/WatchKey;"] = null;

});

//"java/nio/file/WatchKey"
Java["java/nio/file/WatchKey"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/WatchKey");

	proto["isValid()Z"] = null;
	proto["pollEvents()Ljava/util/List;"] = null;
	proto["reset()Z"] = null;
	proto["cancel()V"] = null;
	proto["watchable()Ljava/nio/file/Watchable;"] = null;

});

//"java/nio/file/WatchEvent$Modifier"
Java["java/nio/file/WatchEvent$Modifier"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/WatchEvent$Modifier");

	proto["name()Ljava/lang/String;"] = null;

});

//"java/nio/file/WatchEvent$Kind"
Java["java/nio/file/WatchEvent$Kind"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/WatchEvent$Kind");

	proto["name()Ljava/lang/String;"] = null;
	proto["type()Ljava/lang/Class;"] = null;

});

//"java/nio/file/LinkOption"
Java["java/nio/file/LinkOption"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Enum"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/LinkOption");
	klass["NOFOLLOW_LINKS"] = null;
	klass["values()[Ljava/nio/file/LinkOption;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/nio/file/LinkOption#values()[Ljava/nio/file/LinkOption;");
	};
	klass["valueOf(Ljava/lang/String;)Ljava/nio/file/LinkOption;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/nio/file/LinkOption#valueOf(Ljava/lang/String;)Ljava/nio/file/LinkOption;");
	};

});

//"java/nio/file/FileSystem"
Java["java/nio/file/FileSystem"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/FileSystem");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/file/FileSystem#<init>()V");
	};
	proto["provider()Ljava/nio/file/spi/FileSystemProvider;"] = null;
	proto["close()V"] = null;
	proto["isOpen()Z"] = null;
	proto["isReadOnly()Z"] = null;
	proto["getSeparator()Ljava/lang/String;"] = null;
	proto["getRootDirectories()Ljava/lang/Iterable;"] = null;
	proto["getFileStores()Ljava/lang/Iterable;"] = null;
	proto["supportedFileAttributeViews()Ljava/util/Set;"] = null;
	proto["getPath(Ljava/lang/String;[Ljava/lang/String;)Ljava/nio/file/Path;"] = null;
	proto["getPathMatcher(Ljava/lang/String;)Ljava/nio/file/PathMatcher;"] = null;
	proto["getUserPrincipalLookupService()Ljava/nio/file/attribute/UserPrincipalLookupService;"] = null;
	proto["newWatchService()Ljava/nio/file/WatchService;"] = null;

});

//"java/util/Date"
Java["java/util/Date"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/Date");

	proto["<init>()V"] = function(){
		this.val = new Date();
	};
	proto["<init>(J)V"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#<init>(J)V");
	};
	proto["<init>(III)V"] = function(i0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#<init>(III)V");
	};
	proto["<init>(IIIII)V"] = function(i0,i1,i2,i3,i4){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#<init>(IIIII)V");
	};
	proto["<init>(IIIIII)V"] = function(i0,i1,i2,i3,i4,i5){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#<init>(IIIIII)V");
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#<init>(Ljava/lang/String;)V");
	};
	proto["clone()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#clone()Ljava/lang/Object;");
	};
	klass["UTC(IIIIII)J"] = function(i0,i1,i2,i3,i4,i5){
		var self = null;
		throw new Error("NotImplemented: java/util/Date#UTC(IIIIII)J");
	};
	klass["parse(Ljava/lang/String;)J"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Date#parse(Ljava/lang/String;)J");
	};
	proto["getYear()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#getYear()I");
	};
	proto["setYear(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#setYear(I)V");
	};
	proto["getMonth()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#getMonth()I");
	};
	proto["setMonth(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#setMonth(I)V");
	};
	proto["getDate()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#getDate()I");
	};
	proto["setDate(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#setDate(I)V");
	};
	proto["getDay()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#getDay()I");
	};
	proto["getHours()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#getHours()I");
	};
	proto["setHours(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#setHours(I)V");
	};
	proto["getMinutes()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#getMinutes()I");
	};
	proto["setMinutes(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#setMinutes(I)V");
	};
	proto["getSeconds()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#getSeconds()I");
	};
	proto["setSeconds(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#setSeconds(I)V");
	};
	proto["getTime()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#getTime()J");
	};
	proto["setTime(J)V"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#setTime(J)V");
	};
	proto["before(Ljava/util/Date;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#before(Ljava/util/Date;)Z");
	};
	proto["after(Ljava/util/Date;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#after(Ljava/util/Date;)Z");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#equals(Ljava/lang/Object;)Z");
	};
	klass["getMillisOf(Ljava/util/Date;)J"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Date#getMillisOf(Ljava/util/Date;)J");
	};
	proto["compareTo(Ljava/util/Date;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#compareTo(Ljava/util/Date;)I");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#hashCode()I");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#toString()Ljava/lang/String;");
	};
	proto["toLocaleString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#toLocaleString()Ljava/lang/String;");
	};
	proto["toGMTString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#toGMTString()Ljava/lang/String;");
	};
	proto["getTimezoneOffset()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#getTimezoneOffset()I");
	};
	proto["compareTo(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Date#compareTo(Ljava/lang/Object;)I");
	};

});

//"java/util/concurrent/TimeUnit$1"
Java["java/util/concurrent/TimeUnit$1"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/util/concurrent/TimeUnit"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/concurrent/TimeUnit$1");

	proto["<init>(Ljava/lang/String;I)V"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit$1#<init>(Ljava/lang/String;I)V");
	};
	proto["toNanos(J)J"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit$1#toNanos(J)J");
	};
	proto["toMicros(J)J"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit$1#toMicros(J)J");
	};
	proto["toMillis(J)J"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit$1#toMillis(J)J");
	};
	proto["toSeconds(J)J"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit$1#toSeconds(J)J");
	};
	proto["toMinutes(J)J"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit$1#toMinutes(J)J");
	};
	proto["toHours(J)J"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit$1#toHours(J)J");
	};
	proto["toDays(J)J"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit$1#toDays(J)J");
	};
	proto["convert(JLjava/util/concurrent/TimeUnit;)J"] = function(l0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit$1#convert(JLjava/util/concurrent/TimeUnit;)J");
	};
	proto["excessNanos(JJ)I"] = function(l0,l1){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit$1#excessNanos(JJ)I");
	};

});

//"sun/misc/URLClassPath$Loader"
Java["sun/misc/URLClassPath$Loader"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/misc/URLClassPath$Loader");

	proto["<init>(Ljava/net/URL;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/misc/URLClassPath$Loader#<init>(Ljava/net/URL;)V");
	};
	proto["getBaseURL()Ljava/net/URL;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/misc/URLClassPath$Loader#getBaseURL()Ljava/net/URL;");
	};
	proto["findResource(Ljava/lang/String;Z)Ljava/net/URL;"] = function(ref0,b1){
		var self = this;
		throw new Error("NotImplemented: sun/misc/URLClassPath$Loader#findResource(Ljava/lang/String;Z)Ljava/net/URL;");
	};
	proto["getResource(Ljava/lang/String;Z)Lsun/misc/Resource;"] = function(ref0,b1){
		var self = this;
		throw new Error("NotImplemented: sun/misc/URLClassPath$Loader#getResource(Ljava/lang/String;Z)Lsun/misc/Resource;");
	};
	proto["getResource(Ljava/lang/String;)Lsun/misc/Resource;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/misc/URLClassPath$Loader#getResource(Ljava/lang/String;)Lsun/misc/Resource;");
	};
	proto["close()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/misc/URLClassPath$Loader#close()V");
	};
	proto["getClassPath()[Ljava/net/URL;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/misc/URLClassPath$Loader#getClassPath()[Ljava/net/URL;");
	};
	klass["access$200(Lsun/misc/URLClassPath$Loader;)Ljava/net/URL;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: sun/misc/URLClassPath$Loader#access$200(Lsun/misc/URLClassPath$Loader;)Ljava/net/URL;");
	};

});

//"sun/misc/Resource"
Java["sun/misc/Resource"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/misc/Resource");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/misc/Resource#<init>()V");
	};
	proto["getName()Ljava/lang/String;"] = null;
	proto["getURL()Ljava/net/URL;"] = null;
	proto["getCodeSourceURL()Ljava/net/URL;"] = null;
	proto["getInputStream()Ljava/io/InputStream;"] = null;
	proto["getContentLength()I"] = null;
	proto["getBytes()[B"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/misc/Resource#getBytes()[B");
	};
	proto["getByteBuffer()Ljava/nio/ByteBuffer;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/misc/Resource#getByteBuffer()Ljava/nio/ByteBuffer;");
	};
	proto["getManifest()Ljava/util/jar/Manifest;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/misc/Resource#getManifest()Ljava/util/jar/Manifest;");
	};
	proto["getCertificates()[Ljava/security/cert/Certificate;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/misc/Resource#getCertificates()[Ljava/security/cert/Certificate;");
	};
	proto["getCodeSigners()[Ljava/security/CodeSigner;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/misc/Resource#getCodeSigners()[Ljava/security/CodeSigner;");
	};

});

//"java/util/HashMap"
Java["java/util/HashMap"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/util/AbstractMap"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/HashMap");
	klass["DEFAULT_INITIAL_CAPACITY"] = (16);
	klass["MAXIMUM_CAPACITY"] = (1073741824);
	klass["DEFAULT_LOAD_FACTOR"] = (0.75);
	klass["EMPTY_TABLE"] = null;
	proto["table"] = null;
	proto["size"] = null;
	proto["threshold"] = null;
	proto["loadFactor"] = null;
	proto["modCount"] = null;
	klass["ALTERNATIVE_HASHING_THRESHOLD_DEFAULT"] = (2147483647);
	proto["hashSeed"] = null;
	proto.init = function(){
		this.dict = {};
		this.size = 0;
	};
	proto["<init>(IF)V"] = function(i0,flt1){
		this.init();
	};
	proto["<init>(I)V"] = function(i0){
		this.init();
	};
	proto["<init>()V"] = function(){
		this.init();
	};
	proto["<init>(Ljava/util/Map;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#<init>(Ljava/util/Map;)V");
	};
	proto["init()V"] = function(){
		this.init();
	};
	proto["initHashSeedAsNeeded(I)Z"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#initHashSeedAsNeeded(I)Z");
	};
	proto["hash(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#hash(Ljava/lang/Object;)I");
	};
	klass["indexFor(II)I"] = function(i0,i1){
		var self = null;
		throw new Error("NotImplemented: java/util/HashMap#indexFor(II)I");
	};
	proto["size()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#size()I");
	};
	proto["isEmpty()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#isEmpty()Z");
	};
	proto["get(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		if(this.dict.hasOwnProperty(ref0)){
			return this.dict[ref0];
		}else{
			return null;
		}
	};
	proto["containsKey(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#containsKey(Ljava/lang/Object;)Z");
	};
	proto["getEntry(Ljava/lang/Object;)Ljava/util/HashMap$Entry;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#getEntry(Ljava/lang/Object;)Ljava/util/HashMap$Entry;");
	};
	proto["put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0,ref1){
		var self = this;
		var old = null;
		if(this.dict.hasOwnProperty(ref0)){
			old = this.dict[ref0];
		}
		this.dict[ref0] = ref1;
		return old;
	};
	proto["resize(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#resize(I)V");
	};
	proto["transfer([Ljava/util/HashMap$Entry;Z)V"] = function(arr_ref0,b1){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#transfer([Ljava/util/HashMap$Entry;Z)V");
	};
	proto["putAll(Ljava/util/Map;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#putAll(Ljava/util/Map;)V");
	};
	proto["remove(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#remove(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["removeEntryForKey(Ljava/lang/Object;)Ljava/util/HashMap$Entry;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#removeEntryForKey(Ljava/lang/Object;)Ljava/util/HashMap$Entry;");
	};
	proto["removeMapping(Ljava/lang/Object;)Ljava/util/HashMap$Entry;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#removeMapping(Ljava/lang/Object;)Ljava/util/HashMap$Entry;");
	};
	proto["clear()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#clear()V");
	};
	proto["containsValue(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#containsValue(Ljava/lang/Object;)Z");
	};
	proto["clone()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#clone()Ljava/lang/Object;");
	};
	proto["addEntry(ILjava/lang/Object;Ljava/lang/Object;I)V"] = function(i0,ref1,ref2,i3){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#addEntry(ILjava/lang/Object;Ljava/lang/Object;I)V");
	};
	proto["createEntry(ILjava/lang/Object;Ljava/lang/Object;I)V"] = function(i0,ref1,ref2,i3){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#createEntry(ILjava/lang/Object;Ljava/lang/Object;I)V");
	};
	proto["newKeyIterator()Ljava/util/Iterator;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#newKeyIterator()Ljava/util/Iterator;");
	};
	proto["newValueIterator()Ljava/util/Iterator;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#newValueIterator()Ljava/util/Iterator;");
	};
	proto["newEntryIterator()Ljava/util/Iterator;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#newEntryIterator()Ljava/util/Iterator;");
	};
	proto["keySet()Ljava/util/Set;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#keySet()Ljava/util/Set;");
	};
	proto["values()Ljava/util/Collection;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#values()Ljava/util/Collection;");
	};
	proto["entrySet()Ljava/util/Set;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#entrySet()Ljava/util/Set;");
	};
	proto["capacity()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#capacity()I");
	};
	proto["loadFactor()F"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/HashMap#loadFactor()F");
	};

});

//"java/util/ArrayList"
Java["java/util/ArrayList"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/util/AbstractList"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/ArrayList");

	proto["<init>(I)V"] = function(i0){
		this.list = new Array(i0);
	};
	proto["<init>()V"] = function(){
		this.list = new Array();
	};
	proto["<init>(Ljava/util/Collection;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/ArrayList#<init>(Ljava/util/Collection;)V");
	};
	proto["trimToSize()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/ArrayList#trimToSize()V");
	};
	proto["ensureCapacity(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/ArrayList#ensureCapacity(I)V");
	};
	proto["size()I"] = function(){
		return this.list.length;
	};
	proto["isEmpty()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/ArrayList#isEmpty()Z");
	};
	proto["contains(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/ArrayList#contains(Ljava/lang/Object;)Z");
	};
	proto["indexOf(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/ArrayList#indexOf(Ljava/lang/Object;)I");
	};
	proto["lastIndexOf(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/ArrayList#lastIndexOf(Ljava/lang/Object;)I");
	};
	proto["clone()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/ArrayList#clone()Ljava/lang/Object;");
	};
	proto["toArray()[Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/ArrayList#toArray()[Ljava/lang/Object;");
	};
	proto["toArray([Ljava/lang/Object;)[Ljava/lang/Object;"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/ArrayList#toArray([Ljava/lang/Object;)[Ljava/lang/Object;");
	};
	proto["elementData(I)Ljava/lang/Object;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/ArrayList#elementData(I)Ljava/lang/Object;");
	};
	proto["get(I)Ljava/lang/Object;"] = function(i0){
		return this.list[i0];
	};
	proto["set(ILjava/lang/Object;)Ljava/lang/Object;"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/ArrayList#set(ILjava/lang/Object;)Ljava/lang/Object;");
	};
	proto["add(Ljava/lang/Object;)Z"] = function(ref0){
		this.list.push(ref0);
		return true;
	};
	proto["add(ILjava/lang/Object;)V"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/ArrayList#add(ILjava/lang/Object;)V");
	};
	proto["remove(I)Ljava/lang/Object;"] = function(i0){
		var obj = this.list[i0];
		this.list.splice(i0,1);
		return obj;
	};
	proto["remove(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/ArrayList#remove(Ljava/lang/Object;)Z");
	};
	proto["clear()V"] = function(){
		this.list = [];
		this.size = 0;
	};
	proto["addAll(Ljava/util/Collection;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/ArrayList#addAll(Ljava/util/Collection;)Z");
	};
	proto["addAll(ILjava/util/Collection;)Z"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/ArrayList#addAll(ILjava/util/Collection;)Z");
	};
	proto["removeRange(II)V"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/util/ArrayList#removeRange(II)V");
	};
	proto["removeAll(Ljava/util/Collection;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/ArrayList#removeAll(Ljava/util/Collection;)Z");
	};
	proto["retainAll(Ljava/util/Collection;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/ArrayList#retainAll(Ljava/util/Collection;)Z");
	};
	proto["listIterator(I)Ljava/util/ListIterator;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/ArrayList#listIterator(I)Ljava/util/ListIterator;");
	};
	proto["listIterator()Ljava/util/ListIterator;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/ArrayList#listIterator()Ljava/util/ListIterator;");
	};
	proto["iterator()Ljava/util/Iterator;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/ArrayList#iterator()Ljava/util/Iterator;");
	};
	proto["subList(II)Ljava/util/List;"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/util/ArrayList#subList(II)Ljava/util/List;");
	};
	klass["subListRangeCheck(III)V"] = function(i0,i1,i2){
		var self = null;
		throw new Error("NotImplemented: java/util/ArrayList#subListRangeCheck(III)V");
	};
	klass["access$100(Ljava/util/ArrayList;)I"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/ArrayList#access$100(Ljava/util/ArrayList;)I");
	};
	klass["access$200(Ljava/util/ArrayList;)[Ljava/lang/Object;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/ArrayList#access$200(Ljava/util/ArrayList;)[Ljava/lang/Object;");
	};

});

//"java/util/ListIterator"
Java["java/util/ListIterator"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/ListIterator");

	proto["hasNext()Z"] = null;
	proto["next()Ljava/lang/Object;"] = null;
	proto["hasPrevious()Z"] = null;
	proto["previous()Ljava/lang/Object;"] = null;
	proto["nextIndex()I"] = null;
	proto["previousIndex()I"] = null;
	proto["remove()V"] = null;
	proto["set(Ljava/lang/Object;)V"] = null;
	proto["add(Ljava/lang/Object;)V"] = null;

});

//"java/util/AbstractList"
Java["java/util/AbstractList"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/util/AbstractCollection"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/AbstractList");
	proto["modCount"] = null;
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractList#<init>()V");
	};
	proto["add(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractList#add(Ljava/lang/Object;)Z");
	};
	proto["get(I)Ljava/lang/Object;"] = null;
	proto["set(ILjava/lang/Object;)Ljava/lang/Object;"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractList#set(ILjava/lang/Object;)Ljava/lang/Object;");
	};
	proto["add(ILjava/lang/Object;)V"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractList#add(ILjava/lang/Object;)V");
	};
	proto["remove(I)Ljava/lang/Object;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractList#remove(I)Ljava/lang/Object;");
	};
	proto["indexOf(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractList#indexOf(Ljava/lang/Object;)I");
	};
	proto["lastIndexOf(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractList#lastIndexOf(Ljava/lang/Object;)I");
	};
	proto["clear()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractList#clear()V");
	};
	proto["addAll(ILjava/util/Collection;)Z"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractList#addAll(ILjava/util/Collection;)Z");
	};
	proto["iterator()Ljava/util/Iterator;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractList#iterator()Ljava/util/Iterator;");
	};
	proto["listIterator()Ljava/util/ListIterator;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractList#listIterator()Ljava/util/ListIterator;");
	};
	proto["listIterator(I)Ljava/util/ListIterator;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractList#listIterator(I)Ljava/util/ListIterator;");
	};
	proto["subList(II)Ljava/util/List;"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractList#subList(II)Ljava/util/List;");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractList#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractList#hashCode()I");
	};
	proto["removeRange(II)V"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractList#removeRange(II)V");
	};

});

//"java/security/PublicKey"
Java["java/security/PublicKey"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/security/PublicKey");
	klass["serialVersionUID"] = (7187392471159151072);

});

//"java/security/CodeSigner"
Java["java/security/CodeSigner"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/security/CodeSigner");

	proto["<init>(Ljava/security/cert/CertPath;Ljava/security/Timestamp;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/security/CodeSigner#<init>(Ljava/security/cert/CertPath;Ljava/security/Timestamp;)V");
	};
	proto["getSignerCertPath()Ljava/security/cert/CertPath;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/CodeSigner#getSignerCertPath()Ljava/security/cert/CertPath;");
	};
	proto["getTimestamp()Ljava/security/Timestamp;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/CodeSigner#getTimestamp()Ljava/security/Timestamp;");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/CodeSigner#hashCode()I");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/security/CodeSigner#equals(Ljava/lang/Object;)Z");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/CodeSigner#toString()Ljava/lang/String;");
	};

});

//"java/lang/LinkageError"
Java["java/lang/LinkageError"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Error"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/LinkageError");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/LinkageError#<init>()V");
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/LinkageError#<init>(Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/Throwable;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/LinkageError#<init>(Ljava/lang/String;Ljava/lang/Throwable;)V");
	};

});

//"java/lang/Number"
Java["java/lang/Number"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Number");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Number#<init>()V");
	};
	proto["intValue()I"] = null;
	proto["longValue()J"] = null;
	proto["floatValue()F"] = null;
	proto["doubleValue()D"] = null;
	proto["byteValue()B"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Number#byteValue()B");
	};
	proto["shortValue()S"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Number#shortValue()S");
	};

});

//"java/io/InvalidClassException"
Java["java/io/InvalidClassException"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/io/ObjectStreamException"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/InvalidClassException");
	proto["classname"] = null;
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/InvalidClassException#<init>(Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/String;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/InvalidClassException#<init>(Ljava/lang/String;Ljava/lang/String;)V");
	};
	proto["getMessage()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/InvalidClassException#getMessage()Ljava/lang/String;");
	};

});

//"java/lang/ReflectiveOperationException"
Java["java/lang/ReflectiveOperationException"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Exception"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/ReflectiveOperationException");
	klass["serialVersionUID"] = (123456789);
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ReflectiveOperationException#<init>()V");
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ReflectiveOperationException#<init>(Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/Throwable;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/ReflectiveOperationException#<init>(Ljava/lang/String;Ljava/lang/Throwable;)V");
	};
	proto["<init>(Ljava/lang/Throwable;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ReflectiveOperationException#<init>(Ljava/lang/Throwable;)V");
	};

});

//"java/lang/Throwable$PrintStreamOrWriter"
Java["java/lang/Throwable$PrintStreamOrWriter"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Throwable$PrintStreamOrWriter");

	proto["lock()Ljava/lang/Object;"] = null;
	proto["println(Ljava/lang/Object;)V"] = null;
	proto["<init>(Ljava/lang/Throwable$1;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Throwable$PrintStreamOrWriter#<init>(Ljava/lang/Throwable$1;)V");
	};

});

//"sun/reflect/generics/tree/Tree"
Java["sun/reflect/generics/tree/Tree"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/tree/Tree");


});

//"sun/reflect/generics/tree/ClassSignature"
Java["sun/reflect/generics/tree/ClassSignature"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/tree/ClassSignature");

	klass["make([Lsun/reflect/generics/tree/FormalTypeParameter;Lsun/reflect/generics/tree/ClassTypeSignature;[Lsun/reflect/generics/tree/ClassTypeSignature;)Lsun/reflect/generics/tree/ClassSignature;"] = function(arr_ref0,ref1,arr_ref2){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/generics/tree/ClassSignature#make([Lsun/reflect/generics/tree/FormalTypeParameter;Lsun/reflect/generics/tree/ClassTypeSignature;[Lsun/reflect/generics/tree/ClassTypeSignature;)Lsun/reflect/generics/tree/ClassSignature;");
	};
	proto["getFormalTypeParameters()[Lsun/reflect/generics/tree/FormalTypeParameter;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/ClassSignature#getFormalTypeParameters()[Lsun/reflect/generics/tree/FormalTypeParameter;");
	};
	proto["getSuperclass()Lsun/reflect/generics/tree/ClassTypeSignature;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/ClassSignature#getSuperclass()Lsun/reflect/generics/tree/ClassTypeSignature;");
	};
	proto["getSuperInterfaces()[Lsun/reflect/generics/tree/ClassTypeSignature;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/ClassSignature#getSuperInterfaces()[Lsun/reflect/generics/tree/ClassTypeSignature;");
	};
	proto["accept(Lsun/reflect/generics/visitor/Visitor;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/tree/ClassSignature#accept(Lsun/reflect/generics/visitor/Visitor;)V");
	};

});

//"sun/reflect/generics/repository/GenericDeclRepository"
Java["sun/reflect/generics/repository/GenericDeclRepository"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["sun/reflect/generics/repository/AbstractRepository"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/repository/GenericDeclRepository");

	proto["<init>(Ljava/lang/String;Lsun/reflect/generics/factory/GenericsFactory;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/repository/GenericDeclRepository#<init>(Ljava/lang/String;Lsun/reflect/generics/factory/GenericsFactory;)V");
	};
	proto["getTypeParameters()[Ljava/lang/reflect/TypeVariable;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/repository/GenericDeclRepository#getTypeParameters()[Ljava/lang/reflect/TypeVariable;");
	};

});

//"sun/reflect/generics/tree/FieldTypeSignature"
Java["sun/reflect/generics/tree/FieldTypeSignature"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/tree/FieldTypeSignature");


});

//"java/lang/reflect/WildcardType"
Java["java/lang/reflect/WildcardType"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/reflect/WildcardType");

	proto["getUpperBounds()[Ljava/lang/reflect/Type;"] = null;
	proto["getLowerBounds()[Ljava/lang/reflect/Type;"] = null;

});

//"java/lang/reflect/ParameterizedType"
Java["java/lang/reflect/ParameterizedType"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/reflect/ParameterizedType");

	proto["getActualTypeArguments()[Ljava/lang/reflect/Type;"] = null;
	proto["getRawType()Ljava/lang/reflect/Type;"] = null;
	proto["getOwnerType()Ljava/lang/reflect/Type;"] = null;

});

//"java/lang/annotation/RetentionPolicy"
Java["java/lang/annotation/RetentionPolicy"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Enum"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/annotation/RetentionPolicy");
	klass["SOURCE"] = null;
	klass["CLASS"] = null;
	klass["RUNTIME"] = null;
	klass["values()[Ljava/lang/annotation/RetentionPolicy;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/annotation/RetentionPolicy#values()[Ljava/lang/annotation/RetentionPolicy;");
	};
	klass["valueOf(Ljava/lang/String;)Ljava/lang/annotation/RetentionPolicy;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/annotation/RetentionPolicy#valueOf(Ljava/lang/String;)Ljava/lang/annotation/RetentionPolicy;");
	};

});

//"sun/reflect/LangReflectAccess"
Java["sun/reflect/LangReflectAccess"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/LangReflectAccess");

	proto["newField(Ljava/lang/Class;Ljava/lang/String;Ljava/lang/Class;IILjava/lang/String;[B)Ljava/lang/reflect/Field;"] = null;
	proto["newMethod(Ljava/lang/Class;Ljava/lang/String;[Ljava/lang/Class;Ljava/lang/Class;[Ljava/lang/Class;IILjava/lang/String;[B[B[B)Ljava/lang/reflect/Method;"] = null;
	proto["newConstructor(Ljava/lang/Class;[Ljava/lang/Class;[Ljava/lang/Class;IILjava/lang/String;[B[B)Ljava/lang/reflect/Constructor;"] = null;
	proto["getMethodAccessor(Ljava/lang/reflect/Method;)Lsun/reflect/MethodAccessor;"] = null;
	proto["setMethodAccessor(Ljava/lang/reflect/Method;Lsun/reflect/MethodAccessor;)V"] = null;
	proto["getConstructorAccessor(Ljava/lang/reflect/Constructor;)Lsun/reflect/ConstructorAccessor;"] = null;
	proto["setConstructorAccessor(Ljava/lang/reflect/Constructor;Lsun/reflect/ConstructorAccessor;)V"] = null;
	proto["getConstructorSlot(Ljava/lang/reflect/Constructor;)I"] = null;
	proto["getConstructorSignature(Ljava/lang/reflect/Constructor;)Ljava/lang/String;"] = null;
	proto["getConstructorAnnotations(Ljava/lang/reflect/Constructor;)[B"] = null;
	proto["getConstructorParameterAnnotations(Ljava/lang/reflect/Constructor;)[B"] = null;
	proto["copyMethod(Ljava/lang/reflect/Method;)Ljava/lang/reflect/Method;"] = null;
	proto["copyField(Ljava/lang/reflect/Field;)Ljava/lang/reflect/Field;"] = null;
	proto["copyConstructor(Ljava/lang/reflect/Constructor;)Ljava/lang/reflect/Constructor;"] = null;

});

//"java/lang/reflect/Member"
Java["java/lang/reflect/Member"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/reflect/Member");
	klass["PUBLIC"] = (0);
	klass["DECLARED"] = (1);
	proto["getDeclaringClass()Ljava/lang/Class;"] = null;
	proto["getName()Ljava/lang/String;"] = null;
	proto["getModifiers()I"] = null;
	proto["isSynthetic()Z"] = null;

});

//"java/security/ProtectionDomain$Key"
Java["java/security/ProtectionDomain$Key"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/security/ProtectionDomain$Key");
	proto["this$0"] = null;
	proto["<init>(Ljava/security/ProtectionDomain;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/security/ProtectionDomain$Key#<init>(Ljava/security/ProtectionDomain;)V");
	};

});

//"java/security/Principal"
Java["java/security/Principal"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/security/Principal");

	proto["equals(Ljava/lang/Object;)Z"] = null;
	proto["toString()Ljava/lang/String;"] = null;
	proto["hashCode()I"] = null;
	proto["getName()Ljava/lang/String;"] = null;

});

//"java/net/URLStreamHandlerFactory"
Java["java/net/URLStreamHandlerFactory"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/net/URLStreamHandlerFactory");

	proto["createURLStreamHandler(Ljava/lang/String;)Ljava/net/URLStreamHandler;"] = null;

});

//"java/net/URLStreamHandler"
Java["java/net/URLStreamHandler"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/net/URLStreamHandler");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLStreamHandler#<init>()V");
	};
	proto["openConnection(Ljava/net/URL;)Ljava/net/URLConnection;"] = null;
	proto["openConnection(Ljava/net/URL;Ljava/net/Proxy;)Ljava/net/URLConnection;"] = null;
	proto["parseURL(Ljava/net/URL;Ljava/lang/String;II)V"] = function(ref0,ref1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: java/net/URLStreamHandler#parseURL(Ljava/net/URL;Ljava/lang/String;II)V");
	};
	proto["getDefaultPort()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLStreamHandler#getDefaultPort()I");
	};
	proto["equals(Ljava/net/URL;Ljava/net/URL;)Z"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/net/URLStreamHandler#equals(Ljava/net/URL;Ljava/net/URL;)Z");
	};
	proto["hashCode(Ljava/net/URL;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/net/URLStreamHandler#hashCode(Ljava/net/URL;)I");
	};
	proto["sameFile(Ljava/net/URL;Ljava/net/URL;)Z"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/net/URLStreamHandler#sameFile(Ljava/net/URL;Ljava/net/URL;)Z");
	};
	proto["getHostAddress(Ljava/net/URL;)Ljava/net/InetAddress;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/net/URLStreamHandler#getHostAddress(Ljava/net/URL;)Ljava/net/InetAddress;");
	};
	proto["hostsEqual(Ljava/net/URL;Ljava/net/URL;)Z"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/net/URLStreamHandler#hostsEqual(Ljava/net/URL;Ljava/net/URL;)Z");
	};
	proto["toExternalForm(Ljava/net/URL;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/net/URLStreamHandler#toExternalForm(Ljava/net/URL;)Ljava/lang/String;");
	};
	proto["setURL(Ljava/net/URL;Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V"] = function(ref0,ref1,ref2,i3,ref4,ref5,ref6,ref7,ref8){
		var self = this;
		throw new Error("NotImplemented: java/net/URLStreamHandler#setURL(Ljava/net/URL;Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V");
	};
	proto["setURL(Ljava/net/URL;Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/lang/String;)V"] = function(ref0,ref1,ref2,i3,ref4,ref5){
		var self = this;
		throw new Error("NotImplemented: java/net/URLStreamHandler#setURL(Ljava/net/URL;Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/lang/String;)V");
	};

});

//"java/net/URLConnection"
Java["java/net/URLConnection"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/net/URLConnection");
	proto["url"] = null;
	proto["doInput"] = null;
	proto["doOutput"] = null;
	proto["allowUserInteraction"] = null;
	proto["useCaches"] = null;
	proto["ifModifiedSince"] = null;
	proto["connected"] = null;
	klass["factory"] = null;
	klass["getFileNameMap()Ljava/net/FileNameMap;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URLConnection#getFileNameMap()Ljava/net/FileNameMap;");
	};
	klass["setFileNameMap(Ljava/net/FileNameMap;)V"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/net/URLConnection#setFileNameMap(Ljava/net/FileNameMap;)V");
	};
	proto["connect()V"] = null;
	proto["setConnectTimeout(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#setConnectTimeout(I)V");
	};
	proto["getConnectTimeout()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getConnectTimeout()I");
	};
	proto["setReadTimeout(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#setReadTimeout(I)V");
	};
	proto["getReadTimeout()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getReadTimeout()I");
	};
	proto["<init>(Ljava/net/URL;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#<init>(Ljava/net/URL;)V");
	};
	proto["getURL()Ljava/net/URL;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getURL()Ljava/net/URL;");
	};
	proto["getContentLength()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getContentLength()I");
	};
	proto["getContentLengthLong()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getContentLengthLong()J");
	};
	proto["getContentType()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getContentType()Ljava/lang/String;");
	};
	proto["getContentEncoding()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getContentEncoding()Ljava/lang/String;");
	};
	proto["getExpiration()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getExpiration()J");
	};
	proto["getDate()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getDate()J");
	};
	proto["getLastModified()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getLastModified()J");
	};
	proto["getHeaderField(Ljava/lang/String;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getHeaderField(Ljava/lang/String;)Ljava/lang/String;");
	};
	proto["getHeaderFields()Ljava/util/Map;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getHeaderFields()Ljava/util/Map;");
	};
	proto["getHeaderFieldInt(Ljava/lang/String;I)I"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getHeaderFieldInt(Ljava/lang/String;I)I");
	};
	proto["getHeaderFieldLong(Ljava/lang/String;J)J"] = function(ref0,l1){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getHeaderFieldLong(Ljava/lang/String;J)J");
	};
	proto["getHeaderFieldDate(Ljava/lang/String;J)J"] = function(ref0,l1){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getHeaderFieldDate(Ljava/lang/String;J)J");
	};
	proto["getHeaderFieldKey(I)Ljava/lang/String;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getHeaderFieldKey(I)Ljava/lang/String;");
	};
	proto["getHeaderField(I)Ljava/lang/String;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getHeaderField(I)Ljava/lang/String;");
	};
	proto["getContent()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getContent()Ljava/lang/Object;");
	};
	proto["getContent([Ljava/lang/Class;)Ljava/lang/Object;"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getContent([Ljava/lang/Class;)Ljava/lang/Object;");
	};
	proto["getPermission()Ljava/security/Permission;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getPermission()Ljava/security/Permission;");
	};
	proto["getInputStream()Ljava/io/InputStream;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getInputStream()Ljava/io/InputStream;");
	};
	proto["getOutputStream()Ljava/io/OutputStream;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getOutputStream()Ljava/io/OutputStream;");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#toString()Ljava/lang/String;");
	};
	proto["setDoInput(Z)V"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#setDoInput(Z)V");
	};
	proto["getDoInput()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getDoInput()Z");
	};
	proto["setDoOutput(Z)V"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#setDoOutput(Z)V");
	};
	proto["getDoOutput()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getDoOutput()Z");
	};
	proto["setAllowUserInteraction(Z)V"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#setAllowUserInteraction(Z)V");
	};
	proto["getAllowUserInteraction()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getAllowUserInteraction()Z");
	};
	klass["setDefaultAllowUserInteraction(Z)V"] = function(b0){
		var self = null;
		throw new Error("NotImplemented: java/net/URLConnection#setDefaultAllowUserInteraction(Z)V");
	};
	klass["getDefaultAllowUserInteraction()Z"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URLConnection#getDefaultAllowUserInteraction()Z");
	};
	proto["setUseCaches(Z)V"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#setUseCaches(Z)V");
	};
	proto["getUseCaches()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getUseCaches()Z");
	};
	proto["setIfModifiedSince(J)V"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#setIfModifiedSince(J)V");
	};
	proto["getIfModifiedSince()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getIfModifiedSince()J");
	};
	proto["getDefaultUseCaches()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getDefaultUseCaches()Z");
	};
	proto["setDefaultUseCaches(Z)V"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#setDefaultUseCaches(Z)V");
	};
	proto["setRequestProperty(Ljava/lang/String;Ljava/lang/String;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#setRequestProperty(Ljava/lang/String;Ljava/lang/String;)V");
	};
	proto["addRequestProperty(Ljava/lang/String;Ljava/lang/String;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#addRequestProperty(Ljava/lang/String;Ljava/lang/String;)V");
	};
	proto["getRequestProperty(Ljava/lang/String;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getRequestProperty(Ljava/lang/String;)Ljava/lang/String;");
	};
	proto["getRequestProperties()Ljava/util/Map;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getRequestProperties()Ljava/util/Map;");
	};
	klass["setDefaultRequestProperty(Ljava/lang/String;Ljava/lang/String;)V"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/net/URLConnection#setDefaultRequestProperty(Ljava/lang/String;Ljava/lang/String;)V");
	};
	klass["getDefaultRequestProperty(Ljava/lang/String;)Ljava/lang/String;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/net/URLConnection#getDefaultRequestProperty(Ljava/lang/String;)Ljava/lang/String;");
	};
	klass["setContentHandlerFactory(Ljava/net/ContentHandlerFactory;)V"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/net/URLConnection#setContentHandlerFactory(Ljava/net/ContentHandlerFactory;)V");
	};
	proto["getContentHandler()Ljava/net/ContentHandler;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URLConnection#getContentHandler()Ljava/net/ContentHandler;");
	};
	klass["guessContentTypeFromName(Ljava/lang/String;)Ljava/lang/String;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/net/URLConnection#guessContentTypeFromName(Ljava/lang/String;)Ljava/lang/String;");
	};
	klass["guessContentTypeFromStream(Ljava/io/InputStream;)Ljava/lang/String;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/net/URLConnection#guessContentTypeFromStream(Ljava/io/InputStream;)Ljava/lang/String;");
	};
	klass["access$000()Ljava/net/FileNameMap;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URLConnection#access$000()Ljava/net/FileNameMap;");
	};

});

//"java/net/Proxy"
Java["java/net/Proxy"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/net/Proxy");
	klass["NO_PROXY"] = null;
	proto["<init>(Ljava/net/Proxy$Type;Ljava/net/SocketAddress;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/net/Proxy#<init>(Ljava/net/Proxy$Type;Ljava/net/SocketAddress;)V");
	};
	proto["type()Ljava/net/Proxy$Type;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/Proxy#type()Ljava/net/Proxy$Type;");
	};
	proto["address()Ljava/net/SocketAddress;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/Proxy#address()Ljava/net/SocketAddress;");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/Proxy#toString()Ljava/lang/String;");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/net/Proxy#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/Proxy#hashCode()I");
	};

});

//"java/lang/reflect/GenericDeclaration"
Java["java/lang/reflect/GenericDeclaration"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/reflect/GenericDeclaration");

	proto["getTypeParameters()[Ljava/lang/reflect/TypeVariable;"] = null;

});

//"sun/reflect/generics/repository/MethodRepository"
Java["sun/reflect/generics/repository/MethodRepository"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["sun/reflect/generics/repository/ConstructorRepository"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/repository/MethodRepository");

	klass["make(Ljava/lang/String;Lsun/reflect/generics/factory/GenericsFactory;)Lsun/reflect/generics/repository/MethodRepository;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/generics/repository/MethodRepository#make(Ljava/lang/String;Lsun/reflect/generics/factory/GenericsFactory;)Lsun/reflect/generics/repository/MethodRepository;");
	};
	proto["getReturnType()Ljava/lang/reflect/Type;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/repository/MethodRepository#getReturnType()Ljava/lang/reflect/Type;");
	};

});

//"sun/reflect/MethodAccessor"
Java["sun/reflect/MethodAccessor"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/MethodAccessor");

	proto["invoke(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;"] = null;

});

//"sun/reflect/generics/repository/FieldRepository"
Java["sun/reflect/generics/repository/FieldRepository"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["sun/reflect/generics/repository/AbstractRepository"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/repository/FieldRepository");

	proto["<init>(Ljava/lang/String;Lsun/reflect/generics/factory/GenericsFactory;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/repository/FieldRepository#<init>(Ljava/lang/String;Lsun/reflect/generics/factory/GenericsFactory;)V");
	};
	proto["parse(Ljava/lang/String;)Lsun/reflect/generics/tree/TypeSignature;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/repository/FieldRepository#parse(Ljava/lang/String;)Lsun/reflect/generics/tree/TypeSignature;");
	};
	klass["make(Ljava/lang/String;Lsun/reflect/generics/factory/GenericsFactory;)Lsun/reflect/generics/repository/FieldRepository;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/generics/repository/FieldRepository#make(Ljava/lang/String;Lsun/reflect/generics/factory/GenericsFactory;)Lsun/reflect/generics/repository/FieldRepository;");
	};
	proto["getGenericType()Ljava/lang/reflect/Type;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/repository/FieldRepository#getGenericType()Ljava/lang/reflect/Type;");
	};
	proto["parse(Ljava/lang/String;)Lsun/reflect/generics/tree/Tree;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/repository/FieldRepository#parse(Ljava/lang/String;)Lsun/reflect/generics/tree/Tree;");
	};

});

//"sun/reflect/FieldAccessor"
Java["sun/reflect/FieldAccessor"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/FieldAccessor");

	proto["get(Ljava/lang/Object;)Ljava/lang/Object;"] = null;
	proto["getBoolean(Ljava/lang/Object;)Z"] = null;
	proto["getByte(Ljava/lang/Object;)B"] = null;
	proto["getChar(Ljava/lang/Object;)C"] = null;
	proto["getShort(Ljava/lang/Object;)S"] = null;
	proto["getInt(Ljava/lang/Object;)I"] = null;
	proto["getLong(Ljava/lang/Object;)J"] = null;
	proto["getFloat(Ljava/lang/Object;)F"] = null;
	proto["getDouble(Ljava/lang/Object;)D"] = null;
	proto["set(Ljava/lang/Object;Ljava/lang/Object;)V"] = null;
	proto["setBoolean(Ljava/lang/Object;Z)V"] = null;
	proto["setByte(Ljava/lang/Object;B)V"] = null;
	proto["setChar(Ljava/lang/Object;C)V"] = null;
	proto["setShort(Ljava/lang/Object;S)V"] = null;
	proto["setInt(Ljava/lang/Object;I)V"] = null;
	proto["setLong(Ljava/lang/Object;J)V"] = null;
	proto["setFloat(Ljava/lang/Object;F)V"] = null;
	proto["setDouble(Ljava/lang/Object;D)V"] = null;

});

//"sun/reflect/generics/repository/ConstructorRepository"
Java["sun/reflect/generics/repository/ConstructorRepository"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["sun/reflect/generics/repository/GenericDeclRepository"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/repository/ConstructorRepository");

	proto["<init>(Ljava/lang/String;Lsun/reflect/generics/factory/GenericsFactory;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/repository/ConstructorRepository#<init>(Ljava/lang/String;Lsun/reflect/generics/factory/GenericsFactory;)V");
	};
	proto["parse(Ljava/lang/String;)Lsun/reflect/generics/tree/MethodTypeSignature;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/repository/ConstructorRepository#parse(Ljava/lang/String;)Lsun/reflect/generics/tree/MethodTypeSignature;");
	};
	klass["make(Ljava/lang/String;Lsun/reflect/generics/factory/GenericsFactory;)Lsun/reflect/generics/repository/ConstructorRepository;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/generics/repository/ConstructorRepository#make(Ljava/lang/String;Lsun/reflect/generics/factory/GenericsFactory;)Lsun/reflect/generics/repository/ConstructorRepository;");
	};
	proto["getParameterTypes()[Ljava/lang/reflect/Type;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/repository/ConstructorRepository#getParameterTypes()[Ljava/lang/reflect/Type;");
	};
	proto["getExceptionTypes()[Ljava/lang/reflect/Type;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/repository/ConstructorRepository#getExceptionTypes()[Ljava/lang/reflect/Type;");
	};
	proto["parse(Ljava/lang/String;)Lsun/reflect/generics/tree/Tree;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/repository/ConstructorRepository#parse(Ljava/lang/String;)Lsun/reflect/generics/tree/Tree;");
	};

});

//"sun/reflect/ConstructorAccessor"
Java["sun/reflect/ConstructorAccessor"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/ConstructorAccessor");

	proto["newInstance([Ljava/lang/Object;)Ljava/lang/Object;"] = null;

});

//"java/lang/reflect/AccessibleObject"
Java["java/lang/reflect/AccessibleObject"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/reflect/AccessibleObject");
	proto["override"] = null;
	klass["reflectionFactory"] = null;
	proto["securityCheckCache"] = null;
	klass["setAccessible([Ljava/lang/reflect/AccessibleObject;Z)V"] = function(arr_ref0,b1){
		var self = null;
		throw new Error("NotImplemented: java/lang/reflect/AccessibleObject#setAccessible([Ljava/lang/reflect/AccessibleObject;Z)V");
	};
	proto["setAccessible(Z)V"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/AccessibleObject#setAccessible(Z)V");
	};
	proto["isAccessible()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/AccessibleObject#isAccessible()Z");
	};
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/AccessibleObject#<init>()V");
	};
	proto["getAnnotation(Ljava/lang/Class;)Ljava/lang/annotation/Annotation;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/AccessibleObject#getAnnotation(Ljava/lang/Class;)Ljava/lang/annotation/Annotation;");
	};
	proto["isAnnotationPresent(Ljava/lang/Class;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/AccessibleObject#isAnnotationPresent(Ljava/lang/Class;)Z");
	};
	proto["getAnnotations()[Ljava/lang/annotation/Annotation;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/AccessibleObject#getAnnotations()[Ljava/lang/annotation/Annotation;");
	};
	proto["getDeclaredAnnotations()[Ljava/lang/annotation/Annotation;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/AccessibleObject#getDeclaredAnnotations()[Ljava/lang/annotation/Annotation;");
	};
	proto["checkAccess(Ljava/lang/Class;Ljava/lang/Class;Ljava/lang/Object;I)V"] = function(ref0,ref1,ref2,i3){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/AccessibleObject#checkAccess(Ljava/lang/Class;Ljava/lang/Class;Ljava/lang/Object;I)V");
	};
	proto["slowCheckMemberAccess(Ljava/lang/Class;Ljava/lang/Class;Ljava/lang/Object;ILjava/lang/Class;)V"] = function(ref0,ref1,ref2,i3,ref4){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/AccessibleObject#slowCheckMemberAccess(Ljava/lang/Class;Ljava/lang/Class;Ljava/lang/Object;ILjava/lang/Class;)V");
	};

});

//"java/lang/ref/Reference"
Java["java/lang/ref/Reference"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/ref/Reference");
	proto["queue"] = null;
	proto["next"] = null;
	proto["get()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ref/Reference#get()Ljava/lang/Object;");
	};
	proto["clear()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ref/Reference#clear()V");
	};
	proto["isEnqueued()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ref/Reference#isEnqueued()Z");
	};
	proto["enqueue()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ref/Reference#enqueue()Z");
	};
	proto["<init>(Ljava/lang/Object;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ref/Reference#<init>(Ljava/lang/Object;)V");
	};
	proto["<init>(Ljava/lang/Object;Ljava/lang/ref/ReferenceQueue;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/ref/Reference#<init>(Ljava/lang/Object;Ljava/lang/ref/ReferenceQueue;)V");
	};
	klass["access$100()Ljava/lang/ref/Reference$Lock;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/ref/Reference#access$100()Ljava/lang/ref/Reference$Lock;");
	};
	klass["access$200()Ljava/lang/ref/Reference;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/ref/Reference#access$200()Ljava/lang/ref/Reference;");
	};
	klass["access$202(Ljava/lang/ref/Reference;)Ljava/lang/ref/Reference;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/ref/Reference#access$202(Ljava/lang/ref/Reference;)Ljava/lang/ref/Reference;");
	};

});

//"java/util/jar/Manifest"
Java["java/util/jar/Manifest"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/jar/Manifest");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Manifest#<init>()V");
	};
	proto["<init>(Ljava/io/InputStream;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Manifest#<init>(Ljava/io/InputStream;)V");
	};
	proto["<init>(Ljava/util/jar/Manifest;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Manifest#<init>(Ljava/util/jar/Manifest;)V");
	};
	proto["getMainAttributes()Ljava/util/jar/Attributes;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Manifest#getMainAttributes()Ljava/util/jar/Attributes;");
	};
	proto["getEntries()Ljava/util/Map;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Manifest#getEntries()Ljava/util/Map;");
	};
	proto["getAttributes(Ljava/lang/String;)Ljava/util/jar/Attributes;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Manifest#getAttributes(Ljava/lang/String;)Ljava/util/jar/Attributes;");
	};
	proto["clear()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Manifest#clear()V");
	};
	proto["write(Ljava/io/OutputStream;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Manifest#write(Ljava/io/OutputStream;)V");
	};
	klass["make72Safe(Ljava/lang/StringBuffer;)V"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/jar/Manifest#make72Safe(Ljava/lang/StringBuffer;)V");
	};
	proto["read(Ljava/io/InputStream;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Manifest#read(Ljava/io/InputStream;)V");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Manifest#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Manifest#hashCode()I");
	};
	proto["clone()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/jar/Manifest#clone()Ljava/lang/Object;");
	};

});

//"java/lang/Package$1"
Java["java/lang/Package$1"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Package$1");
	proto["val$iname"] = null;
	proto["val$fn"] = null;
	proto["<init>(Ljava/lang/String;Ljava/lang/String;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/Package$1#<init>(Ljava/lang/String;Ljava/lang/String;)V");
	};
	proto["run()Ljava/lang/Package;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Package$1#run()Ljava/lang/Package;");
	};
	proto["run()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Package$1#run()Ljava/lang/Object;");
	};

});

//"java/util/WeakHashMap"
Java["java/util/WeakHashMap"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/util/AbstractMap"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/WeakHashMap");
	proto["table"] = null;
	proto["modCount"] = null;
	klass["ALTERNATIVE_HASHING_THRESHOLD_DEFAULT"] = (2147483647);
	proto["useAltHashing"] = null;
	proto["hashSeed"] = null;
	proto["<init>(IF)V"] = function(i0,flt1){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap#<init>(IF)V");
	};
	proto["<init>(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap#<init>(I)V");
	};
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap#<init>()V");
	};
	proto["<init>(Ljava/util/Map;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap#<init>(Ljava/util/Map;)V");
	};
	klass["unmaskNull(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/WeakHashMap#unmaskNull(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["hash(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap#hash(Ljava/lang/Object;)I");
	};
	proto["size()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap#size()I");
	};
	proto["isEmpty()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap#isEmpty()Z");
	};
	proto["get(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap#get(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["containsKey(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap#containsKey(Ljava/lang/Object;)Z");
	};
	proto["getEntry(Ljava/lang/Object;)Ljava/util/WeakHashMap$Entry;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap#getEntry(Ljava/lang/Object;)Ljava/util/WeakHashMap$Entry;");
	};
	proto["put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap#put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["resize(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap#resize(I)V");
	};
	proto["putAll(Ljava/util/Map;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap#putAll(Ljava/util/Map;)V");
	};
	proto["remove(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap#remove(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["removeMapping(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap#removeMapping(Ljava/lang/Object;)Z");
	};
	proto["clear()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap#clear()V");
	};
	proto["containsValue(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap#containsValue(Ljava/lang/Object;)Z");
	};
	proto["keySet()Ljava/util/Set;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap#keySet()Ljava/util/Set;");
	};
	proto["values()Ljava/util/Collection;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap#values()Ljava/util/Collection;");
	};
	proto["entrySet()Ljava/util/Set;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/WeakHashMap#entrySet()Ljava/util/Set;");
	};

});

//"java/lang/ClassValue$Entry"
Java["java/lang/ClassValue$Entry"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/ref/WeakReference"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/ClassValue$Entry");
	proto["value"] = null;
	klass["DEAD_ENTRY"] = null;
	klass["$assertionsDisabled"] = null;
	proto["<init>(Ljava/lang/ClassValue$Version;Ljava/lang/Object;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue$Entry#<init>(Ljava/lang/ClassValue$Version;Ljava/lang/Object;)V");
	};
	proto["<init>(Ljava/lang/ClassValue$Version;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue$Entry#<init>(Ljava/lang/ClassValue$Version;)V");
	};
	proto["value()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue$Entry#value()Ljava/lang/Object;");
	};
	proto["isPromise()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue$Entry#isPromise()Z");
	};
	proto["version()Ljava/lang/ClassValue$Version;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue$Entry#version()Ljava/lang/ClassValue$Version;");
	};
	proto["classValueOrNull()Ljava/lang/ClassValue;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue$Entry#classValueOrNull()Ljava/lang/ClassValue;");
	};
	proto["isLive()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue$Entry#isLive()Z");
	};
	proto["refreshVersion(Ljava/lang/ClassValue$Version;)Ljava/lang/ClassValue$Entry;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue$Entry#refreshVersion(Ljava/lang/ClassValue$Version;)Ljava/lang/ClassValue$Entry;");
	};

});

//"java/lang/ClassValue"
Java["java/lang/ClassValue"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/ClassValue");
	proto["hashCodeForCache"] = null;
	klass["HASH_MASK"] = (1073741823);
	proto["identity"] = null;
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue#<init>()V");
	};
	proto["computeValue(Ljava/lang/Class;)Ljava/lang/Object;"] = null;
	proto["get(Ljava/lang/Class;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue#get(Ljava/lang/Class;)Ljava/lang/Object;");
	};
	proto["remove(Ljava/lang/Class;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue#remove(Ljava/lang/Class;)V");
	};
	proto["put(Ljava/lang/Class;Ljava/lang/Object;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue#put(Ljava/lang/Class;Ljava/lang/Object;)V");
	};
	proto["castEntry(Ljava/lang/ClassValue$Entry;)Ljava/lang/ClassValue$Entry;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue#castEntry(Ljava/lang/ClassValue$Entry;)Ljava/lang/ClassValue$Entry;");
	};
	proto["match(Ljava/lang/ClassValue$Entry;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue#match(Ljava/lang/ClassValue$Entry;)Z");
	};
	proto["version()Ljava/lang/ClassValue$Version;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue#version()Ljava/lang/ClassValue$Version;");
	};
	proto["bumpVersion()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue#bumpVersion()V");
	};
	klass["makeEntry(Ljava/lang/ClassValue$Version;Ljava/lang/Object;)Ljava/lang/ClassValue$Entry;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/lang/ClassValue#makeEntry(Ljava/lang/ClassValue$Version;Ljava/lang/Object;)Ljava/lang/ClassValue$Entry;");
	};

});

//"java/lang/Class$1"
Java["java/lang/Class$1"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Class$1");
	proto["val$c"] = null;
	proto["this$0"] = null;
	proto["<init>(Ljava/lang/Class;Ljava/lang/reflect/Constructor;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class$1#<init>(Ljava/lang/Class;Ljava/lang/reflect/Constructor;)V");
	};
	proto["run()Ljava/lang/Void;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class$1#run()Ljava/lang/Void;");
	};
	proto["run()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class$1#run()Ljava/lang/Object;");
	};

});

//"java/util/ResourceBundle"
Java["java/util/ResourceBundle"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/ResourceBundle");
	proto["parent"] = null;
	klass["$assertionsDisabled"] = null;
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle#<init>()V");
	};
	proto["getString(Ljava/lang/String;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle#getString(Ljava/lang/String;)Ljava/lang/String;");
	};
	proto["getStringArray(Ljava/lang/String;)[Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle#getStringArray(Ljava/lang/String;)[Ljava/lang/String;");
	};
	proto["getObject(Ljava/lang/String;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle#getObject(Ljava/lang/String;)Ljava/lang/Object;");
	};
	proto["getLocale()Ljava/util/Locale;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle#getLocale()Ljava/util/Locale;");
	};
	proto["setParent(Ljava/util/ResourceBundle;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle#setParent(Ljava/util/ResourceBundle;)V");
	};
	klass["getBundle(Ljava/lang/String;)Ljava/util/ResourceBundle;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/ResourceBundle#getBundle(Ljava/lang/String;)Ljava/util/ResourceBundle;");
	};
	klass["getBundle(Ljava/lang/String;Ljava/util/ResourceBundle$Control;)Ljava/util/ResourceBundle;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/ResourceBundle#getBundle(Ljava/lang/String;Ljava/util/ResourceBundle$Control;)Ljava/util/ResourceBundle;");
	};
	klass["getBundle(Ljava/lang/String;Ljava/util/Locale;)Ljava/util/ResourceBundle;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/ResourceBundle#getBundle(Ljava/lang/String;Ljava/util/Locale;)Ljava/util/ResourceBundle;");
	};
	klass["getBundle(Ljava/lang/String;Ljava/util/Locale;Ljava/util/ResourceBundle$Control;)Ljava/util/ResourceBundle;"] = function(ref0,ref1,ref2){
		var self = null;
		throw new Error("NotImplemented: java/util/ResourceBundle#getBundle(Ljava/lang/String;Ljava/util/Locale;Ljava/util/ResourceBundle$Control;)Ljava/util/ResourceBundle;");
	};
	klass["getBundle(Ljava/lang/String;Ljava/util/Locale;Ljava/lang/ClassLoader;)Ljava/util/ResourceBundle;"] = function(ref0,ref1,ref2){
		var self = null;
		throw new Error("NotImplemented: java/util/ResourceBundle#getBundle(Ljava/lang/String;Ljava/util/Locale;Ljava/lang/ClassLoader;)Ljava/util/ResourceBundle;");
	};
	klass["getBundle(Ljava/lang/String;Ljava/util/Locale;Ljava/lang/ClassLoader;Ljava/util/ResourceBundle$Control;)Ljava/util/ResourceBundle;"] = function(ref0,ref1,ref2,ref3){
		var self = null;
		throw new Error("NotImplemented: java/util/ResourceBundle#getBundle(Ljava/lang/String;Ljava/util/Locale;Ljava/lang/ClassLoader;Ljava/util/ResourceBundle$Control;)Ljava/util/ResourceBundle;");
	};
	klass["clearCache()V"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/util/ResourceBundle#clearCache()V");
	};
	klass["clearCache(Ljava/lang/ClassLoader;)V"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/ResourceBundle#clearCache(Ljava/lang/ClassLoader;)V");
	};
	proto["handleGetObject(Ljava/lang/String;)Ljava/lang/Object;"] = null;
	proto["getKeys()Ljava/util/Enumeration;"] = null;
	proto["containsKey(Ljava/lang/String;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle#containsKey(Ljava/lang/String;)Z");
	};
	proto["keySet()Ljava/util/Set;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle#keySet()Ljava/util/Set;");
	};
	proto["handleKeySet()Ljava/util/Set;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/ResourceBundle#handleKeySet()Ljava/util/Set;");
	};
	klass["access$200()Ljava/lang/ref/ReferenceQueue;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/util/ResourceBundle#access$200()Ljava/lang/ref/ReferenceQueue;");
	};

});

//"sun/util/locale/Extension"
Java["sun/util/locale/Extension"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/util/locale/Extension");

	proto["<init>(C)V"] = function(ch0){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/Extension#<init>(C)V");
	};
	proto["<init>(CLjava/lang/String;)V"] = function(ch0,ref1){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/Extension#<init>(CLjava/lang/String;)V");
	};
	proto["setValue(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/Extension#setValue(Ljava/lang/String;)V");
	};
	proto["getKey()C"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/Extension#getKey()C");
	};
	proto["getValue()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/Extension#getValue()Ljava/lang/String;");
	};
	proto["getID()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/Extension#getID()Ljava/lang/String;");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/Extension#toString()Ljava/lang/String;");
	};

});

//"java/lang/Character"
Java["java/lang/Character"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Character");
	klass["MIN_RADIX"] = (2);
	klass["MAX_RADIX"] = (36);
	klass["MIN_VALUE"] = (0);
	klass["MAX_VALUE"] = (65535);
	klass["TYPE"] = null;
	klass["UNASSIGNED"] = (0);
	klass["UPPERCASE_LETTER"] = (1);
	klass["LOWERCASE_LETTER"] = (2);
	klass["TITLECASE_LETTER"] = (3);
	klass["MODIFIER_LETTER"] = (4);
	klass["OTHER_LETTER"] = (5);
	klass["NON_SPACING_MARK"] = (6);
	klass["ENCLOSING_MARK"] = (7);
	klass["COMBINING_SPACING_MARK"] = (8);
	klass["DECIMAL_DIGIT_NUMBER"] = (9);
	klass["LETTER_NUMBER"] = (10);
	klass["OTHER_NUMBER"] = (11);
	klass["SPACE_SEPARATOR"] = (12);
	klass["LINE_SEPARATOR"] = (13);
	klass["PARAGRAPH_SEPARATOR"] = (14);
	klass["CONTROL"] = (15);
	klass["FORMAT"] = (16);
	klass["PRIVATE_USE"] = (18);
	klass["SURROGATE"] = (19);
	klass["DASH_PUNCTUATION"] = (20);
	klass["START_PUNCTUATION"] = (21);
	klass["END_PUNCTUATION"] = (22);
	klass["CONNECTOR_PUNCTUATION"] = (23);
	klass["OTHER_PUNCTUATION"] = (24);
	klass["MATH_SYMBOL"] = (25);
	klass["CURRENCY_SYMBOL"] = (26);
	klass["MODIFIER_SYMBOL"] = (27);
	klass["OTHER_SYMBOL"] = (28);
	klass["INITIAL_QUOTE_PUNCTUATION"] = (29);
	klass["FINAL_QUOTE_PUNCTUATION"] = (30);
	klass["ERROR"] = (-1);
	klass["DIRECTIONALITY_UNDEFINED"] = (-1);
	klass["DIRECTIONALITY_LEFT_TO_RIGHT"] = (0);
	klass["DIRECTIONALITY_RIGHT_TO_LEFT"] = (1);
	klass["DIRECTIONALITY_RIGHT_TO_LEFT_ARABIC"] = (2);
	klass["DIRECTIONALITY_EUROPEAN_NUMBER"] = (3);
	klass["DIRECTIONALITY_EUROPEAN_NUMBER_SEPARATOR"] = (4);
	klass["DIRECTIONALITY_EUROPEAN_NUMBER_TERMINATOR"] = (5);
	klass["DIRECTIONALITY_ARABIC_NUMBER"] = (6);
	klass["DIRECTIONALITY_COMMON_NUMBER_SEPARATOR"] = (7);
	klass["DIRECTIONALITY_NONSPACING_MARK"] = (8);
	klass["DIRECTIONALITY_BOUNDARY_NEUTRAL"] = (9);
	klass["DIRECTIONALITY_PARAGRAPH_SEPARATOR"] = (10);
	klass["DIRECTIONALITY_SEGMENT_SEPARATOR"] = (11);
	klass["DIRECTIONALITY_WHITESPACE"] = (12);
	klass["DIRECTIONALITY_OTHER_NEUTRALS"] = (13);
	klass["DIRECTIONALITY_LEFT_TO_RIGHT_EMBEDDING"] = (14);
	klass["DIRECTIONALITY_LEFT_TO_RIGHT_OVERRIDE"] = (15);
	klass["DIRECTIONALITY_RIGHT_TO_LEFT_EMBEDDING"] = (16);
	klass["DIRECTIONALITY_RIGHT_TO_LEFT_OVERRIDE"] = (17);
	klass["DIRECTIONALITY_POP_DIRECTIONAL_FORMAT"] = (18);
	klass["MIN_HIGH_SURROGATE"] = (55296);
	klass["MAX_HIGH_SURROGATE"] = (56319);
	klass["MIN_LOW_SURROGATE"] = (56320);
	klass["MAX_LOW_SURROGATE"] = (57343);
	klass["MIN_SURROGATE"] = (55296);
	klass["MAX_SURROGATE"] = (57343);
	klass["MIN_SUPPLEMENTARY_CODE_POINT"] = (65536);
	klass["MIN_CODE_POINT"] = (0);
	klass["MAX_CODE_POINT"] = (1114111);
	klass["SIZE"] = (16);
	klass["$assertionsDisabled"] = null;
	proto["<init>(C)V"] = function(ch0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Character#<init>(C)V");
	};
	klass["valueOf(C)Ljava/lang/Character;"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#valueOf(C)Ljava/lang/Character;");
	};
	proto["charValue()C"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Character#charValue()C");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Character#hashCode()I");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Character#equals(Ljava/lang/Object;)Z");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Character#toString()Ljava/lang/String;");
	};
	klass["toString(C)Ljava/lang/String;"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#toString(C)Ljava/lang/String;");
	};
	klass["isValidCodePoint(I)Z"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isValidCodePoint(I)Z");
	};
	klass["isBmpCodePoint(I)Z"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isBmpCodePoint(I)Z");
	};
	klass["isSupplementaryCodePoint(I)Z"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isSupplementaryCodePoint(I)Z");
	};
	klass["isHighSurrogate(C)Z"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isHighSurrogate(C)Z");
	};
	klass["isLowSurrogate(C)Z"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isLowSurrogate(C)Z");
	};
	klass["isSurrogate(C)Z"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isSurrogate(C)Z");
	};
	klass["isSurrogatePair(CC)Z"] = function(ch0,ch1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isSurrogatePair(CC)Z");
	};
	klass["charCount(I)I"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#charCount(I)I");
	};
	klass["toCodePoint(CC)I"] = function(ch0,ch1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#toCodePoint(CC)I");
	};
	klass["codePointAt(Ljava/lang/CharSequence;I)I"] = function(ref0,i1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#codePointAt(Ljava/lang/CharSequence;I)I");
	};
	klass["codePointAt([CI)I"] = function(arr_ch0,i1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#codePointAt([CI)I");
	};
	klass["codePointAt([CII)I"] = function(arr_ch0,i1,i2){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#codePointAt([CII)I");
	};
	klass["codePointAtImpl([CII)I"] = function(arr_ch0,i1,i2){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#codePointAtImpl([CII)I");
	};
	klass["codePointBefore(Ljava/lang/CharSequence;I)I"] = function(ref0,i1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#codePointBefore(Ljava/lang/CharSequence;I)I");
	};
	klass["codePointBefore([CI)I"] = function(arr_ch0,i1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#codePointBefore([CI)I");
	};
	klass["codePointBefore([CII)I"] = function(arr_ch0,i1,i2){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#codePointBefore([CII)I");
	};
	klass["codePointBeforeImpl([CII)I"] = function(arr_ch0,i1,i2){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#codePointBeforeImpl([CII)I");
	};
	klass["highSurrogate(I)C"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#highSurrogate(I)C");
	};
	klass["lowSurrogate(I)C"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#lowSurrogate(I)C");
	};
	klass["toChars(I[CI)I"] = function(i0,arr_ch1,i2){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#toChars(I[CI)I");
	};
	klass["toChars(I)[C"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#toChars(I)[C");
	};
	klass["toSurrogates(I[CI)V"] = function(i0,arr_ch1,i2){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#toSurrogates(I[CI)V");
	};
	klass["codePointCount(Ljava/lang/CharSequence;II)I"] = function(ref0,i1,i2){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#codePointCount(Ljava/lang/CharSequence;II)I");
	};
	klass["codePointCount([CII)I"] = function(arr_ch0,i1,i2){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#codePointCount([CII)I");
	};
	klass["codePointCountImpl([CII)I"] = function(arr_ch0,i1,i2){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#codePointCountImpl([CII)I");
	};
	klass["offsetByCodePoints(Ljava/lang/CharSequence;II)I"] = function(ref0,i1,i2){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#offsetByCodePoints(Ljava/lang/CharSequence;II)I");
	};
	klass["offsetByCodePoints([CIIII)I"] = function(arr_ch0,i1,i2,i3,i4){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#offsetByCodePoints([CIIII)I");
	};
	klass["offsetByCodePointsImpl([CIIII)I"] = function(arr_ch0,i1,i2,i3,i4){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#offsetByCodePointsImpl([CIIII)I");
	};
	klass["isLowerCase(C)Z"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isLowerCase(C)Z");
	};
	klass["isLowerCase(I)Z"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isLowerCase(I)Z");
	};
	klass["isUpperCase(C)Z"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isUpperCase(C)Z");
	};
	klass["isUpperCase(I)Z"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isUpperCase(I)Z");
	};
	klass["isTitleCase(C)Z"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isTitleCase(C)Z");
	};
	klass["isTitleCase(I)Z"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isTitleCase(I)Z");
	};
	klass["isDigit(C)Z"] = function(ch0){
		return this["isDigit(I)Z"](ch0);
	};
	klass["isDigit(I)Z"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isDigit(I)Z");
	};
	klass["isDefined(C)Z"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isDefined(C)Z");
	};
	klass["isDefined(I)Z"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isDefined(I)Z");
	};
	klass["isLetter(C)Z"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isLetter(C)Z");
	};
	klass["isLetter(I)Z"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isLetter(I)Z");
	};
	klass["isLetterOrDigit(C)Z"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isLetterOrDigit(C)Z");
	};
	klass["isLetterOrDigit(I)Z"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isLetterOrDigit(I)Z");
	};
	klass["isJavaLetter(C)Z"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isJavaLetter(C)Z");
	};
	klass["isJavaLetterOrDigit(C)Z"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isJavaLetterOrDigit(C)Z");
	};
	klass["isAlphabetic(I)Z"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isAlphabetic(I)Z");
	};
	klass["isIdeographic(I)Z"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isIdeographic(I)Z");
	};
	klass["isJavaIdentifierStart(C)Z"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isJavaIdentifierStart(C)Z");
	};
	klass["isJavaIdentifierStart(I)Z"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isJavaIdentifierStart(I)Z");
	};
	klass["isJavaIdentifierPart(C)Z"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isJavaIdentifierPart(C)Z");
	};
	klass["isJavaIdentifierPart(I)Z"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isJavaIdentifierPart(I)Z");
	};
	klass["isUnicodeIdentifierStart(C)Z"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isUnicodeIdentifierStart(C)Z");
	};
	klass["isUnicodeIdentifierStart(I)Z"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isUnicodeIdentifierStart(I)Z");
	};
	klass["isUnicodeIdentifierPart(C)Z"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isUnicodeIdentifierPart(C)Z");
	};
	klass["isUnicodeIdentifierPart(I)Z"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isUnicodeIdentifierPart(I)Z");
	};
	klass["isIdentifierIgnorable(C)Z"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isIdentifierIgnorable(C)Z");
	};
	klass["isIdentifierIgnorable(I)Z"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isIdentifierIgnorable(I)Z");
	};
	klass["toLowerCase(C)C"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#toLowerCase(C)C");
	};
	klass["toLowerCase(I)I"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#toLowerCase(I)I");
	};
	klass["toUpperCase(C)C"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#toUpperCase(C)C");
	};
	klass["toUpperCase(I)I"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#toUpperCase(I)I");
	};
	klass["toTitleCase(C)C"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#toTitleCase(C)C");
	};
	klass["toTitleCase(I)I"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#toTitleCase(I)I");
	};
	klass["digit(CI)I"] = function(ch0,i1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#digit(CI)I");
	};
	klass["digit(II)I"] = function(i0,i1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#digit(II)I");
	};
	klass["getNumericValue(C)I"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#getNumericValue(C)I");
	};
	klass["getNumericValue(I)I"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#getNumericValue(I)I");
	};
	klass["isSpace(C)Z"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isSpace(C)Z");
	};
	klass["isSpaceChar(C)Z"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isSpaceChar(C)Z");
	};
	klass["isSpaceChar(I)Z"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isSpaceChar(I)Z");
	};
	klass["isWhitespace(C)Z"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isWhitespace(C)Z");
	};
	klass["isWhitespace(I)Z"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isWhitespace(I)Z");
	};
	klass["isISOControl(C)Z"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isISOControl(C)Z");
	};
	klass["isISOControl(I)Z"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isISOControl(I)Z");
	};
	klass["getType(C)I"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#getType(C)I");
	};
	klass["getType(I)I"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#getType(I)I");
	};
	klass["forDigit(II)C"] = function(i0,i1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#forDigit(II)C");
	};
	klass["getDirectionality(C)B"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#getDirectionality(C)B");
	};
	klass["getDirectionality(I)B"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#getDirectionality(I)B");
	};
	klass["isMirrored(C)Z"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isMirrored(C)Z");
	};
	klass["isMirrored(I)Z"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#isMirrored(I)Z");
	};
	proto["compareTo(Ljava/lang/Character;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Character#compareTo(Ljava/lang/Character;)I");
	};
	klass["compare(CC)I"] = function(ch0,ch1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#compare(CC)I");
	};
	klass["toUpperCaseEx(I)I"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#toUpperCaseEx(I)I");
	};
	klass["toUpperCaseCharArray(I)[C"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#toUpperCaseCharArray(I)[C");
	};
	klass["reverseBytes(C)C"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#reverseBytes(C)C");
	};
	klass["getName(I)Ljava/lang/String;"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Character#getName(I)Ljava/lang/String;");
	};
	proto["compareTo(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Character#compareTo(Ljava/lang/Object;)I");
	};

});

//"sun/util/locale/BaseLocale$1"
Java["sun/util/locale/BaseLocale$1"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/util/locale/BaseLocale$1");


});

//"java/util/List"
Java["java/util/List"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/List");

	proto["size()I"] = null;
	proto["isEmpty()Z"] = null;
	proto["contains(Ljava/lang/Object;)Z"] = null;
	proto["iterator()Ljava/util/Iterator;"] = null;
	proto["toArray()[Ljava/lang/Object;"] = null;
	proto["toArray([Ljava/lang/Object;)[Ljava/lang/Object;"] = null;
	proto["add(Ljava/lang/Object;)Z"] = null;
	proto["remove(Ljava/lang/Object;)Z"] = null;
	proto["containsAll(Ljava/util/Collection;)Z"] = null;
	proto["addAll(Ljava/util/Collection;)Z"] = null;
	proto["addAll(ILjava/util/Collection;)Z"] = null;
	proto["removeAll(Ljava/util/Collection;)Z"] = null;
	proto["retainAll(Ljava/util/Collection;)Z"] = null;
	proto["clear()V"] = null;
	proto["equals(Ljava/lang/Object;)Z"] = null;
	proto["hashCode()I"] = null;
	proto["get(I)Ljava/lang/Object;"] = null;
	proto["set(ILjava/lang/Object;)Ljava/lang/Object;"] = null;
	proto["add(ILjava/lang/Object;)V"] = null;
	proto["remove(I)Ljava/lang/Object;"] = null;
	proto["indexOf(Ljava/lang/Object;)I"] = null;
	proto["lastIndexOf(Ljava/lang/Object;)I"] = null;
	proto["listIterator()Ljava/util/ListIterator;"] = null;
	proto["listIterator(I)Ljava/util/ListIterator;"] = null;
	proto["subList(II)Ljava/util/List;"] = null;

});

//"java/text/ParsePosition"
Java["java/text/ParsePosition"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/text/ParsePosition");
	proto["index"] = null;
	proto["errorIndex"] = null;
	proto["getIndex()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/ParsePosition#getIndex()I");
	};
	proto["setIndex(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/text/ParsePosition#setIndex(I)V");
	};
	proto["<init>(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/text/ParsePosition#<init>(I)V");
	};
	proto["setErrorIndex(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/text/ParsePosition#setErrorIndex(I)V");
	};
	proto["getErrorIndex()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/ParsePosition#getErrorIndex()I");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/ParsePosition#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/ParsePosition#hashCode()I");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/ParsePosition#toString()Ljava/lang/String;");
	};

});

//"java/text/Format"
Java["java/text/Format"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/text/Format");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/Format#<init>()V");
	};
	proto["format(Ljava/lang/Object;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/Format#format(Ljava/lang/Object;)Ljava/lang/String;");
	};
	proto["format(Ljava/lang/Object;Ljava/lang/StringBuffer;Ljava/text/FieldPosition;)Ljava/lang/StringBuffer;"] = function(ref0,ref1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/text/Format#format(Ljava/lang/Object;Ljava/lang/StringBuffer;Ljava/text/FieldPosition;)Ljava/lang/StringBuffer;");
	};
	proto["formatToCharacterIterator(Ljava/lang/Object;)Ljava/text/AttributedCharacterIterator;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/Format#formatToCharacterIterator(Ljava/lang/Object;)Ljava/text/AttributedCharacterIterator;");
	};
	proto["parseObject(Ljava/lang/String;Ljava/text/ParsePosition;)Ljava/lang/Object;"] = null;
	proto["parseObject(Ljava/lang/String;)Ljava/lang/Object;"] = null;
	proto["clone()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/Format#clone()Ljava/lang/Object;");
	};
	proto["createAttributedCharacterIterator(Ljava/lang/String;)Ljava/text/AttributedCharacterIterator;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/Format#createAttributedCharacterIterator(Ljava/lang/String;)Ljava/text/AttributedCharacterIterator;");
	};
	proto["createAttributedCharacterIterator([Ljava/text/AttributedCharacterIterator;)Ljava/text/AttributedCharacterIterator;"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/Format#createAttributedCharacterIterator([Ljava/text/AttributedCharacterIterator;)Ljava/text/AttributedCharacterIterator;");
	};
	proto["createAttributedCharacterIterator(Ljava/lang/String;Ljava/text/AttributedCharacterIterator$Attribute;Ljava/lang/Object;)Ljava/text/AttributedCharacterIterator;"] = function(ref0,ref1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/text/Format#createAttributedCharacterIterator(Ljava/lang/String;Ljava/text/AttributedCharacterIterator$Attribute;Ljava/lang/Object;)Ljava/text/AttributedCharacterIterator;");
	};
	proto["createAttributedCharacterIterator(Ljava/text/AttributedCharacterIterator;Ljava/text/AttributedCharacterIterator$Attribute;Ljava/lang/Object;)Ljava/text/AttributedCharacterIterator;"] = function(ref0,ref1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/text/Format#createAttributedCharacterIterator(Ljava/text/AttributedCharacterIterator;Ljava/text/AttributedCharacterIterator$Attribute;Ljava/lang/Object;)Ljava/text/AttributedCharacterIterator;");
	};

});

//"java/text/FieldPosition"
Java["java/text/FieldPosition"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/text/FieldPosition");
	proto["field"] = null;
	proto["endIndex"] = null;
	proto["beginIndex"] = null;
	proto["<init>(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/text/FieldPosition#<init>(I)V");
	};
	proto["<init>(Ljava/text/Format$Field;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/FieldPosition#<init>(Ljava/text/Format$Field;)V");
	};
	proto["<init>(Ljava/text/Format$Field;I)V"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/text/FieldPosition#<init>(Ljava/text/Format$Field;I)V");
	};
	proto["getFieldAttribute()Ljava/text/Format$Field;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/FieldPosition#getFieldAttribute()Ljava/text/Format$Field;");
	};
	proto["getField()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/FieldPosition#getField()I");
	};
	proto["getBeginIndex()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/FieldPosition#getBeginIndex()I");
	};
	proto["getEndIndex()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/FieldPosition#getEndIndex()I");
	};
	proto["setBeginIndex(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/text/FieldPosition#setBeginIndex(I)V");
	};
	proto["setEndIndex(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/text/FieldPosition#setEndIndex(I)V");
	};
	proto["getFieldDelegate()Ljava/text/Format$FieldDelegate;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/FieldPosition#getFieldDelegate()Ljava/text/Format$FieldDelegate;");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/FieldPosition#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/FieldPosition#hashCode()I");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/FieldPosition#toString()Ljava/lang/String;");
	};
	klass["access$100(Ljava/text/FieldPosition;Ljava/text/Format$Field;)Z"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/text/FieldPosition#access$100(Ljava/text/FieldPosition;Ljava/text/Format$Field;)Z");
	};
	klass["access$200(Ljava/text/FieldPosition;Ljava/text/Format$Field;I)Z"] = function(ref0,ref1,i2){
		var self = null;
		throw new Error("NotImplemented: java/text/FieldPosition#access$200(Ljava/text/FieldPosition;Ljava/text/Format$Field;I)Z");
	};

});

//"java/text/CharacterIterator"
Java["java/text/CharacterIterator"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/text/CharacterIterator");
	klass["DONE"] = (65535);
	proto["first()C"] = null;
	proto["last()C"] = null;
	proto["current()C"] = null;
	proto["next()C"] = null;
	proto["previous()C"] = null;
	proto["setIndex(I)C"] = null;
	proto["getBeginIndex()I"] = null;
	proto["getEndIndex()I"] = null;
	proto["getIndex()I"] = null;
	proto["clone()Ljava/lang/Object;"] = null;

});

//"java/text/AttributedCharacterIterator"
Java["java/text/AttributedCharacterIterator"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/text/AttributedCharacterIterator");

	proto["getRunStart()I"] = null;
	proto["getRunStart(Ljava/text/AttributedCharacterIterator$Attribute;)I"] = null;
	proto["getRunStart(Ljava/util/Set;)I"] = null;
	proto["getRunLimit()I"] = null;
	proto["getRunLimit(Ljava/text/AttributedCharacterIterator$Attribute;)I"] = null;
	proto["getRunLimit(Ljava/util/Set;)I"] = null;
	proto["getAttributes()Ljava/util/Map;"] = null;
	proto["getAttribute(Ljava/text/AttributedCharacterIterator$Attribute;)Ljava/lang/Object;"] = null;
	proto["getAllAttributeKeys()Ljava/util/Set;"] = null;

});

//"java/nio/charset/CodingErrorAction"
Java["java/nio/charset/CodingErrorAction"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/charset/CodingErrorAction");
	klass["IGNORE"] = null;
	klass["REPLACE"] = null;
	klass["REPORT"] = null;
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CodingErrorAction#toString()Ljava/lang/String;");
	};

});

//"java/nio/charset/CoderResult"
Java["java/nio/charset/CoderResult"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/charset/CoderResult");
	klass["UNDERFLOW"] = null;
	klass["OVERFLOW"] = null;
	klass["$assertionsDisabled"] = null;
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CoderResult#toString()Ljava/lang/String;");
	};
	proto["isUnderflow()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CoderResult#isUnderflow()Z");
	};
	proto["isOverflow()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CoderResult#isOverflow()Z");
	};
	proto["isError()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CoderResult#isError()Z");
	};
	proto["isMalformed()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CoderResult#isMalformed()Z");
	};
	proto["isUnmappable()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CoderResult#isUnmappable()Z");
	};
	proto["length()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CoderResult#length()I");
	};
	klass["malformedForLength(I)Ljava/nio/charset/CoderResult;"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/nio/charset/CoderResult#malformedForLength(I)Ljava/nio/charset/CoderResult;");
	};
	klass["unmappableForLength(I)Ljava/nio/charset/CoderResult;"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/nio/charset/CoderResult#unmappableForLength(I)Ljava/nio/charset/CoderResult;");
	};
	proto["throwException()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CoderResult#throwException()V");
	};
	proto["<init>(IILjava/nio/charset/CoderResult$1;)V"] = function(i0,i1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CoderResult#<init>(IILjava/nio/charset/CoderResult$1;)V");
	};

});

//"java/nio/ShortBuffer"
Java["java/nio/ShortBuffer"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/nio/Buffer"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/ShortBuffer");
	proto["hb"] = null;
	proto["offset"] = null;
	proto["isReadOnly"] = null;
	proto["<init>(IIII[SI)V"] = function(i0,i1,i2,i3,arr_sh4,i5){
		var self = this;
		throw new Error("NotImplemented: java/nio/ShortBuffer#<init>(IIII[SI)V");
	};
	proto["<init>(IIII)V"] = function(i0,i1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: java/nio/ShortBuffer#<init>(IIII)V");
	};
	klass["allocate(I)Ljava/nio/ShortBuffer;"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/nio/ShortBuffer#allocate(I)Ljava/nio/ShortBuffer;");
	};
	klass["wrap([SII)Ljava/nio/ShortBuffer;"] = function(arr_sh0,i1,i2){
		var self = null;
		throw new Error("NotImplemented: java/nio/ShortBuffer#wrap([SII)Ljava/nio/ShortBuffer;");
	};
	klass["wrap([S)Ljava/nio/ShortBuffer;"] = function(arr_sh0){
		var self = null;
		throw new Error("NotImplemented: java/nio/ShortBuffer#wrap([S)Ljava/nio/ShortBuffer;");
	};
	proto["slice()Ljava/nio/ShortBuffer;"] = null;
	proto["duplicate()Ljava/nio/ShortBuffer;"] = null;
	proto["asReadOnlyBuffer()Ljava/nio/ShortBuffer;"] = null;
	proto["get()S"] = null;
	proto["put(S)Ljava/nio/ShortBuffer;"] = null;
	proto["get(I)S"] = null;
	proto["put(IS)Ljava/nio/ShortBuffer;"] = null;
	proto["get([SII)Ljava/nio/ShortBuffer;"] = null;
	proto["get([S)Ljava/nio/ShortBuffer;"] = null;
	proto["put(Ljava/nio/ShortBuffer;)Ljava/nio/ShortBuffer;"] = null;
	proto["put([SII)Ljava/nio/ShortBuffer;"] = null;
	proto["put([S)Ljava/nio/ShortBuffer;"] = null;
	proto["hasArray()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/ShortBuffer#hasArray()Z");
	};
	proto["array()[S"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/ShortBuffer#array()[S");
	};
	proto["arrayOffset()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/ShortBuffer#arrayOffset()I");
	};
	proto["compact()Ljava/nio/ShortBuffer;"] = null;
	proto["isDirect()Z"] = null;
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/ShortBuffer#toString()Ljava/lang/String;");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/ShortBuffer#hashCode()I");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/ShortBuffer#equals(Ljava/lang/Object;)Z");
	};
	proto["compareTo(Ljava/nio/ShortBuffer;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/ShortBuffer#compareTo(Ljava/nio/ShortBuffer;)I");
	};
	proto["order()Ljava/nio/ByteOrder;"] = null;
	proto["array()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/ShortBuffer#array()Ljava/lang/Object;");
	};
	proto["compareTo(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/ShortBuffer#compareTo(Ljava/lang/Object;)I");
	};

});

//"java/nio/LongBuffer"
Java["java/nio/LongBuffer"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/nio/Buffer"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/LongBuffer");
	proto["hb"] = null;
	proto["offset"] = null;
	proto["isReadOnly"] = null;
	proto["<init>(IIII[JI)V"] = function(i0,i1,i2,i3,arr_l4,i5){
		var self = this;
		throw new Error("NotImplemented: java/nio/LongBuffer#<init>(IIII[JI)V");
	};
	proto["<init>(IIII)V"] = function(i0,i1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: java/nio/LongBuffer#<init>(IIII)V");
	};
	klass["allocate(I)Ljava/nio/LongBuffer;"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/nio/LongBuffer#allocate(I)Ljava/nio/LongBuffer;");
	};
	klass["wrap([JII)Ljava/nio/LongBuffer;"] = function(arr_l0,i1,i2){
		var self = null;
		throw new Error("NotImplemented: java/nio/LongBuffer#wrap([JII)Ljava/nio/LongBuffer;");
	};
	klass["wrap([J)Ljava/nio/LongBuffer;"] = function(arr_l0){
		var self = null;
		throw new Error("NotImplemented: java/nio/LongBuffer#wrap([J)Ljava/nio/LongBuffer;");
	};
	proto["slice()Ljava/nio/LongBuffer;"] = null;
	proto["duplicate()Ljava/nio/LongBuffer;"] = null;
	proto["asReadOnlyBuffer()Ljava/nio/LongBuffer;"] = null;
	proto["get()J"] = null;
	proto["put(J)Ljava/nio/LongBuffer;"] = null;
	proto["get(I)J"] = null;
	proto["put(IJ)Ljava/nio/LongBuffer;"] = null;
	proto["get([JII)Ljava/nio/LongBuffer;"] = null;
	proto["get([J)Ljava/nio/LongBuffer;"] = null;
	proto["put(Ljava/nio/LongBuffer;)Ljava/nio/LongBuffer;"] = null;
	proto["put([JII)Ljava/nio/LongBuffer;"] = null;
	proto["put([J)Ljava/nio/LongBuffer;"] = null;
	proto["hasArray()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/LongBuffer#hasArray()Z");
	};
	proto["array()[J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/LongBuffer#array()[J");
	};
	proto["arrayOffset()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/LongBuffer#arrayOffset()I");
	};
	proto["compact()Ljava/nio/LongBuffer;"] = null;
	proto["isDirect()Z"] = null;
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/LongBuffer#toString()Ljava/lang/String;");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/LongBuffer#hashCode()I");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/LongBuffer#equals(Ljava/lang/Object;)Z");
	};
	proto["compareTo(Ljava/nio/LongBuffer;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/LongBuffer#compareTo(Ljava/nio/LongBuffer;)I");
	};
	proto["order()Ljava/nio/ByteOrder;"] = null;
	proto["array()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/LongBuffer#array()Ljava/lang/Object;");
	};
	proto["compareTo(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/LongBuffer#compareTo(Ljava/lang/Object;)I");
	};

});

//"java/nio/IntBuffer"
Java["java/nio/IntBuffer"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/nio/Buffer"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/IntBuffer");
	proto["hb"] = null;
	proto["offset"] = null;
	proto["isReadOnly"] = null;
	proto["<init>(IIII[II)V"] = function(i0,i1,i2,i3,arr_i4,i5){
		var self = this;
		throw new Error("NotImplemented: java/nio/IntBuffer#<init>(IIII[II)V");
	};
	proto["<init>(IIII)V"] = function(i0,i1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: java/nio/IntBuffer#<init>(IIII)V");
	};
	klass["allocate(I)Ljava/nio/IntBuffer;"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/nio/IntBuffer#allocate(I)Ljava/nio/IntBuffer;");
	};
	klass["wrap([III)Ljava/nio/IntBuffer;"] = function(arr_i0,i1,i2){
		var self = null;
		throw new Error("NotImplemented: java/nio/IntBuffer#wrap([III)Ljava/nio/IntBuffer;");
	};
	klass["wrap([I)Ljava/nio/IntBuffer;"] = function(arr_i0){
		var self = null;
		throw new Error("NotImplemented: java/nio/IntBuffer#wrap([I)Ljava/nio/IntBuffer;");
	};
	proto["slice()Ljava/nio/IntBuffer;"] = null;
	proto["duplicate()Ljava/nio/IntBuffer;"] = null;
	proto["asReadOnlyBuffer()Ljava/nio/IntBuffer;"] = null;
	proto["get()I"] = null;
	proto["put(I)Ljava/nio/IntBuffer;"] = null;
	proto["get(I)I"] = null;
	proto["put(II)Ljava/nio/IntBuffer;"] = null;
	proto["get([III)Ljava/nio/IntBuffer;"] = null;
	proto["get([I)Ljava/nio/IntBuffer;"] = null;
	proto["put(Ljava/nio/IntBuffer;)Ljava/nio/IntBuffer;"] = null;
	proto["put([III)Ljava/nio/IntBuffer;"] = null;
	proto["put([I)Ljava/nio/IntBuffer;"] = null;
	proto["hasArray()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/IntBuffer#hasArray()Z");
	};
	proto["array()[I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/IntBuffer#array()[I");
	};
	proto["arrayOffset()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/IntBuffer#arrayOffset()I");
	};
	proto["compact()Ljava/nio/IntBuffer;"] = null;
	proto["isDirect()Z"] = null;
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/IntBuffer#toString()Ljava/lang/String;");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/IntBuffer#hashCode()I");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/IntBuffer#equals(Ljava/lang/Object;)Z");
	};
	proto["compareTo(Ljava/nio/IntBuffer;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/IntBuffer#compareTo(Ljava/nio/IntBuffer;)I");
	};
	proto["order()Ljava/nio/ByteOrder;"] = null;
	proto["array()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/IntBuffer#array()Ljava/lang/Object;");
	};
	proto["compareTo(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/IntBuffer#compareTo(Ljava/lang/Object;)I");
	};

});

//"java/nio/FloatBuffer"
Java["java/nio/FloatBuffer"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/nio/Buffer"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/FloatBuffer");
	proto["hb"] = null;
	proto["offset"] = null;
	proto["isReadOnly"] = null;
	proto["<init>(IIII[FI)V"] = function(i0,i1,i2,i3,arr_flt4,i5){
		var self = this;
		throw new Error("NotImplemented: java/nio/FloatBuffer#<init>(IIII[FI)V");
	};
	proto["<init>(IIII)V"] = function(i0,i1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: java/nio/FloatBuffer#<init>(IIII)V");
	};
	klass["allocate(I)Ljava/nio/FloatBuffer;"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/nio/FloatBuffer#allocate(I)Ljava/nio/FloatBuffer;");
	};
	klass["wrap([FII)Ljava/nio/FloatBuffer;"] = function(arr_flt0,i1,i2){
		var self = null;
		throw new Error("NotImplemented: java/nio/FloatBuffer#wrap([FII)Ljava/nio/FloatBuffer;");
	};
	klass["wrap([F)Ljava/nio/FloatBuffer;"] = function(arr_flt0){
		var self = null;
		throw new Error("NotImplemented: java/nio/FloatBuffer#wrap([F)Ljava/nio/FloatBuffer;");
	};
	proto["slice()Ljava/nio/FloatBuffer;"] = null;
	proto["duplicate()Ljava/nio/FloatBuffer;"] = null;
	proto["asReadOnlyBuffer()Ljava/nio/FloatBuffer;"] = null;
	proto["get()F"] = null;
	proto["put(F)Ljava/nio/FloatBuffer;"] = null;
	proto["get(I)F"] = null;
	proto["put(IF)Ljava/nio/FloatBuffer;"] = null;
	proto["get([FII)Ljava/nio/FloatBuffer;"] = null;
	proto["get([F)Ljava/nio/FloatBuffer;"] = null;
	proto["put(Ljava/nio/FloatBuffer;)Ljava/nio/FloatBuffer;"] = null;
	proto["put([FII)Ljava/nio/FloatBuffer;"] = null;
	proto["put([F)Ljava/nio/FloatBuffer;"] = null;
	proto["hasArray()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/FloatBuffer#hasArray()Z");
	};
	proto["array()[F"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/FloatBuffer#array()[F");
	};
	proto["arrayOffset()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/FloatBuffer#arrayOffset()I");
	};
	proto["compact()Ljava/nio/FloatBuffer;"] = null;
	proto["isDirect()Z"] = null;
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/FloatBuffer#toString()Ljava/lang/String;");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/FloatBuffer#hashCode()I");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/FloatBuffer#equals(Ljava/lang/Object;)Z");
	};
	proto["compareTo(Ljava/nio/FloatBuffer;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/FloatBuffer#compareTo(Ljava/nio/FloatBuffer;)I");
	};
	proto["order()Ljava/nio/ByteOrder;"] = null;
	proto["array()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/FloatBuffer#array()Ljava/lang/Object;");
	};
	proto["compareTo(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/FloatBuffer#compareTo(Ljava/lang/Object;)I");
	};

});

//"java/nio/DoubleBuffer"
Java["java/nio/DoubleBuffer"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/nio/Buffer"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/DoubleBuffer");
	proto["hb"] = null;
	proto["offset"] = null;
	proto["isReadOnly"] = null;
	proto["<init>(IIII[DI)V"] = function(i0,i1,i2,i3,arr_db4,i5){
		var self = this;
		throw new Error("NotImplemented: java/nio/DoubleBuffer#<init>(IIII[DI)V");
	};
	proto["<init>(IIII)V"] = function(i0,i1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: java/nio/DoubleBuffer#<init>(IIII)V");
	};
	klass["allocate(I)Ljava/nio/DoubleBuffer;"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/nio/DoubleBuffer#allocate(I)Ljava/nio/DoubleBuffer;");
	};
	klass["wrap([DII)Ljava/nio/DoubleBuffer;"] = function(arr_db0,i1,i2){
		var self = null;
		throw new Error("NotImplemented: java/nio/DoubleBuffer#wrap([DII)Ljava/nio/DoubleBuffer;");
	};
	klass["wrap([D)Ljava/nio/DoubleBuffer;"] = function(arr_db0){
		var self = null;
		throw new Error("NotImplemented: java/nio/DoubleBuffer#wrap([D)Ljava/nio/DoubleBuffer;");
	};
	proto["slice()Ljava/nio/DoubleBuffer;"] = null;
	proto["duplicate()Ljava/nio/DoubleBuffer;"] = null;
	proto["asReadOnlyBuffer()Ljava/nio/DoubleBuffer;"] = null;
	proto["get()D"] = null;
	proto["put(D)Ljava/nio/DoubleBuffer;"] = null;
	proto["get(I)D"] = null;
	proto["put(ID)Ljava/nio/DoubleBuffer;"] = null;
	proto["get([DII)Ljava/nio/DoubleBuffer;"] = null;
	proto["get([D)Ljava/nio/DoubleBuffer;"] = null;
	proto["put(Ljava/nio/DoubleBuffer;)Ljava/nio/DoubleBuffer;"] = null;
	proto["put([DII)Ljava/nio/DoubleBuffer;"] = null;
	proto["put([D)Ljava/nio/DoubleBuffer;"] = null;
	proto["hasArray()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/DoubleBuffer#hasArray()Z");
	};
	proto["array()[D"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/DoubleBuffer#array()[D");
	};
	proto["arrayOffset()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/DoubleBuffer#arrayOffset()I");
	};
	proto["compact()Ljava/nio/DoubleBuffer;"] = null;
	proto["isDirect()Z"] = null;
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/DoubleBuffer#toString()Ljava/lang/String;");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/DoubleBuffer#hashCode()I");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/DoubleBuffer#equals(Ljava/lang/Object;)Z");
	};
	proto["compareTo(Ljava/nio/DoubleBuffer;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/DoubleBuffer#compareTo(Ljava/nio/DoubleBuffer;)I");
	};
	proto["order()Ljava/nio/ByteOrder;"] = null;
	proto["array()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/DoubleBuffer#array()Ljava/lang/Object;");
	};
	proto["compareTo(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/DoubleBuffer#compareTo(Ljava/lang/Object;)I");
	};

});

//"java/nio/ByteOrder"
Java["java/nio/ByteOrder"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/ByteOrder");
	klass["BIG_ENDIAN"] = null;
	klass["LITTLE_ENDIAN"] = null;
	klass["nativeOrder()Ljava/nio/ByteOrder;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/nio/ByteOrder#nativeOrder()Ljava/nio/ByteOrder;");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/ByteOrder#toString()Ljava/lang/String;");
	};

});

//"java/nio/Buffer"
Java["java/nio/Buffer"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/Buffer");
	proto["address"] = null;
	proto["<init>(IIII)V"] = function(i0,i1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: java/nio/Buffer#<init>(IIII)V");
	};
	proto["capacity()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/Buffer#capacity()I");
	};
	proto["position()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/Buffer#position()I");
	};
	proto["position(I)Ljava/nio/Buffer;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/nio/Buffer#position(I)Ljava/nio/Buffer;");
	};
	proto["limit()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/Buffer#limit()I");
	};
	proto["limit(I)Ljava/nio/Buffer;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/nio/Buffer#limit(I)Ljava/nio/Buffer;");
	};
	proto["mark()Ljava/nio/Buffer;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/Buffer#mark()Ljava/nio/Buffer;");
	};
	proto["reset()Ljava/nio/Buffer;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/Buffer#reset()Ljava/nio/Buffer;");
	};
	proto["clear()Ljava/nio/Buffer;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/Buffer#clear()Ljava/nio/Buffer;");
	};
	proto["flip()Ljava/nio/Buffer;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/Buffer#flip()Ljava/nio/Buffer;");
	};
	proto["rewind()Ljava/nio/Buffer;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/Buffer#rewind()Ljava/nio/Buffer;");
	};
	proto["remaining()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/Buffer#remaining()I");
	};
	proto["hasRemaining()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/Buffer#hasRemaining()Z");
	};
	proto["isReadOnly()Z"] = null;
	proto["hasArray()Z"] = null;
	proto["array()Ljava/lang/Object;"] = null;
	proto["arrayOffset()I"] = null;
	proto["isDirect()Z"] = null;
	proto["nextGetIndex()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/Buffer#nextGetIndex()I");
	};
	proto["nextGetIndex(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/nio/Buffer#nextGetIndex(I)I");
	};
	proto["nextPutIndex()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/Buffer#nextPutIndex()I");
	};
	proto["nextPutIndex(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/nio/Buffer#nextPutIndex(I)I");
	};
	proto["checkIndex(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/nio/Buffer#checkIndex(I)I");
	};
	proto["checkIndex(II)I"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/nio/Buffer#checkIndex(II)I");
	};
	proto["markValue()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/Buffer#markValue()I");
	};
	proto["truncate()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/Buffer#truncate()V");
	};
	proto["discardMark()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/Buffer#discardMark()V");
	};
	klass["checkBounds(III)V"] = function(i0,i1,i2){
		var self = null;
		throw new Error("NotImplemented: java/nio/Buffer#checkBounds(III)V");
	};

});

//"java/util/Hashtable$Entry"
Java["java/util/Hashtable$Entry"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/Hashtable$Entry");
	proto["hash"] = null;
	proto["key"] = null;
	proto["value"] = null;
	proto["next"] = null;
	proto["<init>(ILjava/lang/Object;Ljava/lang/Object;Ljava/util/Hashtable$Entry;)V"] = function(i0,ref1,ref2,ref3){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable$Entry#<init>(ILjava/lang/Object;Ljava/lang/Object;Ljava/util/Hashtable$Entry;)V");
	};
	proto["clone()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable$Entry#clone()Ljava/lang/Object;");
	};
	proto["getKey()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable$Entry#getKey()Ljava/lang/Object;");
	};
	proto["getValue()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable$Entry#getValue()Ljava/lang/Object;");
	};
	proto["setValue(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable$Entry#setValue(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable$Entry#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable$Entry#hashCode()I");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable$Entry#toString()Ljava/lang/String;");
	};

});

//"java/util/Dictionary"
Java["java/util/Dictionary"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/Dictionary");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Dictionary#<init>()V");
	};
	proto["size()I"] = null;
	proto["isEmpty()Z"] = null;
	proto["keys()Ljava/util/Enumeration;"] = null;
	proto["elements()Ljava/util/Enumeration;"] = null;
	proto["get(Ljava/lang/Object;)Ljava/lang/Object;"] = null;
	proto["put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;"] = null;
	proto["remove(Ljava/lang/Object;)Ljava/lang/Object;"] = null;

});

//"java/security/PermissionCollection"
Java["java/security/PermissionCollection"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/security/PermissionCollection");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/PermissionCollection#<init>()V");
	};
	proto["add(Ljava/security/Permission;)V"] = null;
	proto["implies(Ljava/security/Permission;)Z"] = null;
	proto["elements()Ljava/util/Enumeration;"] = null;
	proto["setReadOnly()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/PermissionCollection#setReadOnly()V");
	};
	proto["isReadOnly()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/PermissionCollection#isReadOnly()Z");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/PermissionCollection#toString()Ljava/lang/String;");
	};

});

//"sun/net/spi/nameservice/NameService"
Java["sun/net/spi/nameservice/NameService"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/net/spi/nameservice/NameService");

	proto["lookupAllHostAddr(Ljava/lang/String;)[Ljava/net/InetAddress;"] = null;
	proto["getHostByAddr([B)Ljava/lang/String;"] = null;

});

//"java/net/NetworkInterface"
Java["java/net/NetworkInterface"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/net/NetworkInterface");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/NetworkInterface#<init>()V");
	};
	proto["<init>(Ljava/lang/String;I[Ljava/net/InetAddress;)V"] = function(ref0,i1,arr_ref2){
		var self = this;
		throw new Error("NotImplemented: java/net/NetworkInterface#<init>(Ljava/lang/String;I[Ljava/net/InetAddress;)V");
	};
	proto["getName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/NetworkInterface#getName()Ljava/lang/String;");
	};
	proto["getInetAddresses()Ljava/util/Enumeration;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/NetworkInterface#getInetAddresses()Ljava/util/Enumeration;");
	};
	proto["getInterfaceAddresses()Ljava/util/List;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/NetworkInterface#getInterfaceAddresses()Ljava/util/List;");
	};
	proto["getSubInterfaces()Ljava/util/Enumeration;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/NetworkInterface#getSubInterfaces()Ljava/util/Enumeration;");
	};
	proto["getParent()Ljava/net/NetworkInterface;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/NetworkInterface#getParent()Ljava/net/NetworkInterface;");
	};
	proto["getIndex()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/NetworkInterface#getIndex()I");
	};
	proto["getDisplayName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/NetworkInterface#getDisplayName()Ljava/lang/String;");
	};
	klass["getByName(Ljava/lang/String;)Ljava/net/NetworkInterface;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/net/NetworkInterface#getByName(Ljava/lang/String;)Ljava/net/NetworkInterface;");
	};
	klass["getByIndex(I)Ljava/net/NetworkInterface;"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/net/NetworkInterface#getByIndex(I)Ljava/net/NetworkInterface;");
	};
	klass["getByInetAddress(Ljava/net/InetAddress;)Ljava/net/NetworkInterface;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/net/NetworkInterface#getByInetAddress(Ljava/net/InetAddress;)Ljava/net/NetworkInterface;");
	};
	klass["getNetworkInterfaces()Ljava/util/Enumeration;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/NetworkInterface#getNetworkInterfaces()Ljava/util/Enumeration;");
	};
	proto["isUp()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/NetworkInterface#isUp()Z");
	};
	proto["isLoopback()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/NetworkInterface#isLoopback()Z");
	};
	proto["isPointToPoint()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/NetworkInterface#isPointToPoint()Z");
	};
	proto["supportsMulticast()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/NetworkInterface#supportsMulticast()Z");
	};
	proto["getHardwareAddress()[B"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/NetworkInterface#getHardwareAddress()[B");
	};
	proto["getMTU()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/NetworkInterface#getMTU()I");
	};
	proto["isVirtual()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/NetworkInterface#isVirtual()Z");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/net/NetworkInterface#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/NetworkInterface#hashCode()I");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/NetworkInterface#toString()Ljava/lang/String;");
	};
	klass["getDefault()Ljava/net/NetworkInterface;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/NetworkInterface#getDefault()Ljava/net/NetworkInterface;");
	};
	klass["access$000(Ljava/net/NetworkInterface;)[Ljava/net/InetAddress;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/net/NetworkInterface#access$000(Ljava/net/NetworkInterface;)[Ljava/net/InetAddress;");
	};
	klass["access$100(Ljava/net/NetworkInterface;)[Ljava/net/NetworkInterface;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/net/NetworkInterface#access$100(Ljava/net/NetworkInterface;)[Ljava/net/NetworkInterface;");
	};

});

//"java/net/InetAddressImpl"
Java["java/net/InetAddressImpl"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/net/InetAddressImpl");

	proto["getLocalHostName()Ljava/lang/String;"] = null;
	proto["lookupAllHostAddr(Ljava/lang/String;)[Ljava/net/InetAddress;"] = null;
	proto["getHostByAddr([B)Ljava/lang/String;"] = null;
	proto["anyLocalAddress()Ljava/net/InetAddress;"] = null;
	proto["loopbackAddress()Ljava/net/InetAddress;"] = null;
	proto["isReachable(Ljava/net/InetAddress;ILjava/net/NetworkInterface;I)Z"] = null;

});

//"java/net/InetAddress$InetAddressHolder"
Java["java/net/InetAddress$InetAddressHolder"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/net/InetAddress$InetAddressHolder");
	proto["hostName"] = null;
	proto["address"] = null;
	proto["family"] = null;
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress$InetAddressHolder#<init>()V");
	};
	proto["<init>(Ljava/lang/String;II)V"] = function(ref0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress$InetAddressHolder#<init>(Ljava/lang/String;II)V");
	};
	proto["init(Ljava/lang/String;I)V"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress$InetAddressHolder#init(Ljava/lang/String;I)V");
	};
	proto["getHostName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress$InetAddressHolder#getHostName()Ljava/lang/String;");
	};
	proto["getOriginalHostName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress$InetAddressHolder#getOriginalHostName()Ljava/lang/String;");
	};
	proto["getAddress()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress$InetAddressHolder#getAddress()I");
	};
	proto["getFamily()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress$InetAddressHolder#getFamily()I");
	};

});

//"sun/nio/ch/Interruptible"
Java["sun/nio/ch/Interruptible"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/nio/ch/Interruptible");

	proto["interrupt(Ljava/lang/Thread;)V"] = null;

});

//"java/security/AccessControlContext"
Java["java/security/AccessControlContext"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/security/AccessControlContext");

	klass["getDebug()Lsun/security/util/Debug;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/security/AccessControlContext#getDebug()Lsun/security/util/Debug;");
	};
	proto["<init>([Ljava/security/ProtectionDomain;)V"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/security/AccessControlContext#<init>([Ljava/security/ProtectionDomain;)V");
	};
	proto["<init>(Ljava/security/AccessControlContext;Ljava/security/DomainCombiner;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/security/AccessControlContext#<init>(Ljava/security/AccessControlContext;Ljava/security/DomainCombiner;)V");
	};
	proto["<init>([Ljava/security/ProtectionDomain;Ljava/security/DomainCombiner;)V"] = function(arr_ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/security/AccessControlContext#<init>([Ljava/security/ProtectionDomain;Ljava/security/DomainCombiner;)V");
	};
	proto["<init>([Ljava/security/ProtectionDomain;Z)V"] = function(arr_ref0,b1){
		var self = this;
		throw new Error("NotImplemented: java/security/AccessControlContext#<init>([Ljava/security/ProtectionDomain;Z)V");
	};
	proto["<init>([Ljava/security/ProtectionDomain;Ljava/security/AccessControlContext;)V"] = function(arr_ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/security/AccessControlContext#<init>([Ljava/security/ProtectionDomain;Ljava/security/AccessControlContext;)V");
	};
	proto["getContext()[Ljava/security/ProtectionDomain;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/AccessControlContext#getContext()[Ljava/security/ProtectionDomain;");
	};
	proto["isPrivileged()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/AccessControlContext#isPrivileged()Z");
	};
	proto["getAssignedCombiner()Ljava/security/DomainCombiner;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/AccessControlContext#getAssignedCombiner()Ljava/security/DomainCombiner;");
	};
	proto["getDomainCombiner()Ljava/security/DomainCombiner;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/AccessControlContext#getDomainCombiner()Ljava/security/DomainCombiner;");
	};
	proto["checkPermission(Ljava/security/Permission;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/security/AccessControlContext#checkPermission(Ljava/security/Permission;)V");
	};
	proto["optimize()Ljava/security/AccessControlContext;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/AccessControlContext#optimize()Ljava/security/AccessControlContext;");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/security/AccessControlContext#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/AccessControlContext#hashCode()I");
	};

});

//"java/lang/ThreadLocal$ThreadLocalMap"
Java["java/lang/ThreadLocal$ThreadLocalMap"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/ThreadLocal$ThreadLocalMap");

	proto["<init>(Ljava/lang/ThreadLocal;Ljava/lang/Object;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadLocal$ThreadLocalMap#<init>(Ljava/lang/ThreadLocal;Ljava/lang/Object;)V");
	};
	klass["access$000(Ljava/lang/ThreadLocal$ThreadLocalMap;Ljava/lang/ThreadLocal;)Ljava/lang/ThreadLocal$ThreadLocalMap$Entry;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/lang/ThreadLocal$ThreadLocalMap#access$000(Ljava/lang/ThreadLocal$ThreadLocalMap;Ljava/lang/ThreadLocal;)Ljava/lang/ThreadLocal$ThreadLocalMap$Entry;");
	};
	klass["access$100(Ljava/lang/ThreadLocal$ThreadLocalMap;Ljava/lang/ThreadLocal;Ljava/lang/Object;)V"] = function(ref0,ref1,ref2){
		var self = null;
		throw new Error("NotImplemented: java/lang/ThreadLocal$ThreadLocalMap#access$100(Ljava/lang/ThreadLocal$ThreadLocalMap;Ljava/lang/ThreadLocal;Ljava/lang/Object;)V");
	};
	klass["access$200(Ljava/lang/ThreadLocal$ThreadLocalMap;Ljava/lang/ThreadLocal;)V"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/lang/ThreadLocal$ThreadLocalMap#access$200(Ljava/lang/ThreadLocal$ThreadLocalMap;Ljava/lang/ThreadLocal;)V");
	};
	proto["<init>(Ljava/lang/ThreadLocal$ThreadLocalMap;Ljava/lang/ThreadLocal$1;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadLocal$ThreadLocalMap#<init>(Ljava/lang/ThreadLocal$ThreadLocalMap;Ljava/lang/ThreadLocal$1;)V");
	};

});

//"java/lang/Thread$UncaughtExceptionHandler"
Java["java/lang/Thread$UncaughtExceptionHandler"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Thread$UncaughtExceptionHandler");

	proto["uncaughtException(Ljava/lang/Thread;Ljava/lang/Throwable;)V"] = null;

});

//"java/lang/Thread$State"
Java["java/lang/Thread$State"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Enum"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Thread$State");
	klass["NEW"] = null;
	klass["RUNNABLE"] = null;
	klass["BLOCKED"] = null;
	klass["WAITING"] = null;
	klass["TIMED_WAITING"] = null;
	klass["TERMINATED"] = null;
	klass["values()[Ljava/lang/Thread$State;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/Thread$State#values()[Ljava/lang/Thread$State;");
	};
	klass["valueOf(Ljava/lang/String;)Ljava/lang/Thread$State;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Thread$State#valueOf(Ljava/lang/String;)Ljava/lang/Thread$State;");
	};

});

//"java/lang/StackTraceElement"
Java["java/lang/StackTraceElement"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/StackTraceElement");

	proto["<init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;I)V"] = function(ref0,ref1,ref2,i3){
		var self = this;
		throw new Error("NotImplemented: java/lang/StackTraceElement#<init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;I)V");
	};
	proto["getFileName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/StackTraceElement#getFileName()Ljava/lang/String;");
	};
	proto["getLineNumber()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/StackTraceElement#getLineNumber()I");
	};
	proto["getClassName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/StackTraceElement#getClassName()Ljava/lang/String;");
	};
	proto["getMethodName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/StackTraceElement#getMethodName()Ljava/lang/String;");
	};
	proto["isNativeMethod()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/StackTraceElement#isNativeMethod()Z");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/StackTraceElement#toString()Ljava/lang/String;");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StackTraceElement#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/StackTraceElement#hashCode()I");
	};

});

//"java/lang/Runnable"
Java["java/lang/Runnable"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Runnable");

	proto["run()V"] = null;

});

//"java/nio/file/Path"
Java["java/nio/file/Path"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/file/Path");

	proto["getFileSystem()Ljava/nio/file/FileSystem;"] = null;
	proto["isAbsolute()Z"] = null;
	proto["getRoot()Ljava/nio/file/Path;"] = null;
	proto["getFileName()Ljava/nio/file/Path;"] = null;
	proto["getParent()Ljava/nio/file/Path;"] = null;
	proto["getNameCount()I"] = null;
	proto["getName(I)Ljava/nio/file/Path;"] = null;
	proto["subpath(II)Ljava/nio/file/Path;"] = null;
	proto["startsWith(Ljava/nio/file/Path;)Z"] = null;
	proto["startsWith(Ljava/lang/String;)Z"] = null;
	proto["endsWith(Ljava/nio/file/Path;)Z"] = null;
	proto["endsWith(Ljava/lang/String;)Z"] = null;
	proto["normalize()Ljava/nio/file/Path;"] = null;
	proto["resolve(Ljava/nio/file/Path;)Ljava/nio/file/Path;"] = null;
	proto["resolve(Ljava/lang/String;)Ljava/nio/file/Path;"] = null;
	proto["resolveSibling(Ljava/nio/file/Path;)Ljava/nio/file/Path;"] = null;
	proto["resolveSibling(Ljava/lang/String;)Ljava/nio/file/Path;"] = null;
	proto["relativize(Ljava/nio/file/Path;)Ljava/nio/file/Path;"] = null;
	proto["toUri()Ljava/net/URI;"] = null;
	proto["toAbsolutePath()Ljava/nio/file/Path;"] = null;
	proto["toRealPath([Ljava/nio/file/LinkOption;)Ljava/nio/file/Path;"] = null;
	proto["toFile()Ljava/io/File;"] = null;
	proto["register(Ljava/nio/file/WatchService;[Ljava/nio/file/WatchEvent$Kind;[Ljava/nio/file/WatchEvent$Modifier;)Ljava/nio/file/WatchKey;"] = null;
	proto["register(Ljava/nio/file/WatchService;[Ljava/nio/file/WatchEvent$Kind;)Ljava/nio/file/WatchKey;"] = null;
	proto["iterator()Ljava/util/Iterator;"] = null;
	proto["compareTo(Ljava/nio/file/Path;)I"] = null;
	proto["equals(Ljava/lang/Object;)Z"] = null;
	proto["hashCode()I"] = null;
	proto["toString()Ljava/lang/String;"] = null;

});

//"java/net/URI"
Java["java/net/URI"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/net/URI");
	klass["serialVersionUID"] = (-6052424284110960213);
	klass["$assertionsDisabled"] = null;
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#<init>(Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;)V"] = function(ref0,ref1,ref2,i3,ref4,ref5,ref6){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#<init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V"] = function(ref0,ref1,ref2,ref3,ref4){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#<init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V"] = function(ref0,ref1,ref2,ref3){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#<init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V"] = function(ref0,ref1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#<init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V");
	};
	klass["create(Ljava/lang/String;)Ljava/net/URI;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#create(Ljava/lang/String;)Ljava/net/URI;");
	};
	proto["parseServerAuthority()Ljava/net/URI;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#parseServerAuthority()Ljava/net/URI;");
	};
	proto["normalize()Ljava/net/URI;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#normalize()Ljava/net/URI;");
	};
	proto["resolve(Ljava/net/URI;)Ljava/net/URI;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#resolve(Ljava/net/URI;)Ljava/net/URI;");
	};
	proto["resolve(Ljava/lang/String;)Ljava/net/URI;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#resolve(Ljava/lang/String;)Ljava/net/URI;");
	};
	proto["relativize(Ljava/net/URI;)Ljava/net/URI;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#relativize(Ljava/net/URI;)Ljava/net/URI;");
	};
	proto["toURL()Ljava/net/URL;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#toURL()Ljava/net/URL;");
	};
	proto["getScheme()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#getScheme()Ljava/lang/String;");
	};
	proto["isAbsolute()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#isAbsolute()Z");
	};
	proto["isOpaque()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#isOpaque()Z");
	};
	proto["getRawSchemeSpecificPart()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#getRawSchemeSpecificPart()Ljava/lang/String;");
	};
	proto["getSchemeSpecificPart()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#getSchemeSpecificPart()Ljava/lang/String;");
	};
	proto["getRawAuthority()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#getRawAuthority()Ljava/lang/String;");
	};
	proto["getAuthority()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#getAuthority()Ljava/lang/String;");
	};
	proto["getRawUserInfo()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#getRawUserInfo()Ljava/lang/String;");
	};
	proto["getUserInfo()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#getUserInfo()Ljava/lang/String;");
	};
	proto["getHost()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#getHost()Ljava/lang/String;");
	};
	proto["getPort()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#getPort()I");
	};
	proto["getRawPath()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#getRawPath()Ljava/lang/String;");
	};
	proto["getPath()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#getPath()Ljava/lang/String;");
	};
	proto["getRawQuery()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#getRawQuery()Ljava/lang/String;");
	};
	proto["getQuery()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#getQuery()Ljava/lang/String;");
	};
	proto["getRawFragment()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#getRawFragment()Ljava/lang/String;");
	};
	proto["getFragment()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#getFragment()Ljava/lang/String;");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#hashCode()I");
	};
	proto["compareTo(Ljava/net/URI;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#compareTo(Ljava/net/URI;)I");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#toString()Ljava/lang/String;");
	};
	proto["toASCIIString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#toASCIIString()Ljava/lang/String;");
	};
	proto["compareTo(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/net/URI#compareTo(Ljava/lang/Object;)I");
	};
	klass["access$002(Ljava/net/URI;Ljava/lang/String;)Ljava/lang/String;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$002(Ljava/net/URI;Ljava/lang/String;)Ljava/lang/String;");
	};
	klass["access$100()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$100()J");
	};
	klass["access$200()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$200()J");
	};
	klass["access$300(CJJ)Z"] = function(ch0,l1,l2){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$300(CJJ)Z");
	};
	klass["access$400()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$400()J");
	};
	klass["access$500()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$500()J");
	};
	klass["access$600()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$600()J");
	};
	klass["access$702(Ljava/net/URI;Ljava/lang/String;)Ljava/lang/String;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$702(Ljava/net/URI;Ljava/lang/String;)Ljava/lang/String;");
	};
	klass["access$800()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$800()J");
	};
	klass["access$900()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$900()J");
	};
	klass["access$1002(Ljava/net/URI;Ljava/lang/String;)Ljava/lang/String;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$1002(Ljava/net/URI;Ljava/lang/String;)Ljava/lang/String;");
	};
	klass["access$1102(Ljava/net/URI;Ljava/lang/String;)Ljava/lang/String;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$1102(Ljava/net/URI;Ljava/lang/String;)Ljava/lang/String;");
	};
	klass["access$1200()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$1200()J");
	};
	klass["access$1300()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$1300()J");
	};
	klass["access$1402(Ljava/net/URI;Ljava/lang/String;)Ljava/lang/String;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$1402(Ljava/net/URI;Ljava/lang/String;)Ljava/lang/String;");
	};
	klass["access$1502(Ljava/net/URI;Ljava/lang/String;)Ljava/lang/String;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$1502(Ljava/net/URI;Ljava/lang/String;)Ljava/lang/String;");
	};
	klass["access$1600()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$1600()J");
	};
	klass["access$1700()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$1700()J");
	};
	klass["access$1800()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$1800()J");
	};
	klass["access$1900()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$1900()J");
	};
	klass["access$2000()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$2000()J");
	};
	klass["access$2100()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$2100()J");
	};
	klass["access$2202(Ljava/net/URI;Ljava/lang/String;)Ljava/lang/String;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$2202(Ljava/net/URI;Ljava/lang/String;)Ljava/lang/String;");
	};
	klass["access$2302(Ljava/net/URI;Ljava/lang/String;)Ljava/lang/String;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$2302(Ljava/net/URI;Ljava/lang/String;)Ljava/lang/String;");
	};
	klass["access$2402(Ljava/net/URI;Ljava/lang/String;)Ljava/lang/String;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$2402(Ljava/net/URI;Ljava/lang/String;)Ljava/lang/String;");
	};
	klass["access$2502(Ljava/net/URI;I)I"] = function(ref0,i1){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$2502(Ljava/net/URI;I)I");
	};
	klass["access$2600()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$2600()J");
	};
	klass["access$2700()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$2700()J");
	};
	klass["access$2800()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$2800()J");
	};
	klass["access$2900()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$2900()J");
	};
	klass["access$3000()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$3000()J");
	};
	klass["access$3100()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$3100()J");
	};
	klass["access$3200()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$3200()J");
	};
	klass["access$3300()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$3300()J");
	};
	klass["access$3400()J"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/URI#access$3400()J");
	};

});

//"java/io/FilenameFilter"
Java["java/io/FilenameFilter"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/FilenameFilter");

	proto["accept(Ljava/io/File;Ljava/lang/String;)Z"] = null;

});

//"java/io/FileFilter"
Java["java/io/FileFilter"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/FileFilter");

	proto["accept(Ljava/io/File;)Z"] = null;

});

//"java/util/concurrent/locks/Condition"
Java["java/util/concurrent/locks/Condition"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/concurrent/locks/Condition");

	proto["await()V"] = null;
	proto["awaitUninterruptibly()V"] = null;
	proto["awaitNanos(J)J"] = null;
	proto["await(JLjava/util/concurrent/TimeUnit;)Z"] = null;
	proto["awaitUntil(Ljava/util/Date;)Z"] = null;
	proto["signal()V"] = null;
	proto["signalAll()V"] = null;

});

//"java/util/concurrent/TimeUnit"
Java["java/util/concurrent/TimeUnit"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Enum"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/concurrent/TimeUnit");
	klass["NANOSECONDS"] = null;
	klass["MICROSECONDS"] = null;
	klass["MILLISECONDS"] = null;
	klass["SECONDS"] = null;
	klass["MINUTES"] = null;
	klass["HOURS"] = null;
	klass["DAYS"] = null;
	klass["C0"] = (1);
	klass["C1"] = (1000);
	klass["C2"] = (1000000);
	klass["C3"] = (1000000000);
	klass["C4"] = (60000000000);
	klass["C5"] = (3600000000000);
	klass["C6"] = (86400000000000);
	klass["MAX"] = (9223372036854775807);
	klass["values()[Ljava/util/concurrent/TimeUnit;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit#values()[Ljava/util/concurrent/TimeUnit;");
	};
	klass["valueOf(Ljava/lang/String;)Ljava/util/concurrent/TimeUnit;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit#valueOf(Ljava/lang/String;)Ljava/util/concurrent/TimeUnit;");
	};
	klass["x(JJJ)J"] = function(l0,l1,l2){
		var self = null;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit#x(JJJ)J");
	};
	proto["convert(JLjava/util/concurrent/TimeUnit;)J"] = function(l0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit#convert(JLjava/util/concurrent/TimeUnit;)J");
	};
	proto["toNanos(J)J"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit#toNanos(J)J");
	};
	proto["toMicros(J)J"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit#toMicros(J)J");
	};
	proto["toMillis(J)J"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit#toMillis(J)J");
	};
	proto["toSeconds(J)J"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit#toSeconds(J)J");
	};
	proto["toMinutes(J)J"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit#toMinutes(J)J");
	};
	proto["toHours(J)J"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit#toHours(J)J");
	};
	proto["toDays(J)J"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit#toDays(J)J");
	};
	proto["excessNanos(JJ)I"] = null;
	proto["timedWait(Ljava/lang/Object;J)V"] = function(ref0,l1){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit#timedWait(Ljava/lang/Object;J)V");
	};
	proto["timedJoin(Ljava/lang/Thread;J)V"] = function(ref0,l1){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit#timedJoin(Ljava/lang/Thread;J)V");
	};
	proto["sleep(J)V"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit#sleep(J)V");
	};
	proto["<init>(Ljava/lang/String;ILjava/util/concurrent/TimeUnit$1;)V"] = function(ref0,i1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/TimeUnit#<init>(Ljava/lang/String;ILjava/util/concurrent/TimeUnit$1;)V");
	};

});

//"sun/misc/URLClassPath"
Java["sun/misc/URLClassPath"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/misc/URLClassPath");
	klass["USER_AGENT_JAVA_VERSION"] = ("UA-Java-Version");
	klass["JAVA_VERSION"] = null;
	proto["urls"] = null;
	proto["loaders"] = null;
	proto["lmap"] = null;
	proto["<init>([Ljava/net/URL;Ljava/net/URLStreamHandlerFactory;)V"] = function(arr_ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: sun/misc/URLClassPath#<init>([Ljava/net/URL;Ljava/net/URLStreamHandlerFactory;)V");
	};
	proto["<init>([Ljava/net/URL;)V"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: sun/misc/URLClassPath#<init>([Ljava/net/URL;)V");
	};
	proto["closeLoaders()Ljava/util/List;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/misc/URLClassPath#closeLoaders()Ljava/util/List;");
	};
	proto["addURL(Ljava/net/URL;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/misc/URLClassPath#addURL(Ljava/net/URL;)V");
	};
	proto["getURLs()[Ljava/net/URL;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/misc/URLClassPath#getURLs()[Ljava/net/URL;");
	};
	proto["findResource(Ljava/lang/String;Z)Ljava/net/URL;"] = function(ref0,b1){
		var self = this;
		throw new Error("NotImplemented: sun/misc/URLClassPath#findResource(Ljava/lang/String;Z)Ljava/net/URL;");
	};
	proto["getResource(Ljava/lang/String;Z)Lsun/misc/Resource;"] = function(ref0,b1){
		var self = this;
		throw new Error("NotImplemented: sun/misc/URLClassPath#getResource(Ljava/lang/String;Z)Lsun/misc/Resource;");
	};
	proto["findResources(Ljava/lang/String;Z)Ljava/util/Enumeration;"] = function(ref0,b1){
		var self = this;
		throw new Error("NotImplemented: sun/misc/URLClassPath#findResources(Ljava/lang/String;Z)Ljava/util/Enumeration;");
	};
	proto["getResource(Ljava/lang/String;)Lsun/misc/Resource;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/misc/URLClassPath#getResource(Ljava/lang/String;)Lsun/misc/Resource;");
	};
	proto["getResources(Ljava/lang/String;Z)Ljava/util/Enumeration;"] = function(ref0,b1){
		var self = this;
		throw new Error("NotImplemented: sun/misc/URLClassPath#getResources(Ljava/lang/String;Z)Ljava/util/Enumeration;");
	};
	proto["getResources(Ljava/lang/String;)Ljava/util/Enumeration;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/misc/URLClassPath#getResources(Ljava/lang/String;)Ljava/util/Enumeration;");
	};
	klass["pathToURLs(Ljava/lang/String;)[Ljava/net/URL;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: sun/misc/URLClassPath#pathToURLs(Ljava/lang/String;)[Ljava/net/URL;");
	};
	proto["checkURL(Ljava/net/URL;)Ljava/net/URL;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/misc/URLClassPath#checkURL(Ljava/net/URL;)Ljava/net/URL;");
	};
	klass["check(Ljava/net/URL;)V"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: sun/misc/URLClassPath#check(Ljava/net/URL;)V");
	};
	klass["access$000(Lsun/misc/URLClassPath;I)Lsun/misc/URLClassPath$Loader;"] = function(ref0,i1){
		var self = null;
		throw new Error("NotImplemented: sun/misc/URLClassPath#access$000(Lsun/misc/URLClassPath;I)Lsun/misc/URLClassPath$Loader;");
	};
	klass["access$100(Lsun/misc/URLClassPath;)Ljava/net/URLStreamHandler;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: sun/misc/URLClassPath#access$100(Lsun/misc/URLClassPath;)Ljava/net/URLStreamHandler;");
	};
	klass["access$300()Z"] = function(){
		var self = null;
		throw new Error("NotImplemented: sun/misc/URLClassPath#access$300()Z");
	};
	klass["access$1000()Z"] = function(){
		var self = null;
		throw new Error("NotImplemented: sun/misc/URLClassPath#access$1000()Z");
	};

});

//"java/util/Vector"
Java["java/util/Vector"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/util/AbstractList"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/Vector");
	proto["elementData"] = null;
	proto["elementCount"] = null;
	proto["capacityIncrement"] = null;
	proto["<init>(II)V"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#<init>(II)V");
	};
	proto["<init>(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#<init>(I)V");
	};
	proto["<init>()V"] = function(){
		this.list = [];
	};
	proto["<init>(Ljava/util/Collection;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#<init>(Ljava/util/Collection;)V");
	};
	proto["copyInto([Ljava/lang/Object;)V"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#copyInto([Ljava/lang/Object;)V");
	};
	proto["trimToSize()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#trimToSize()V");
	};
	proto["ensureCapacity(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#ensureCapacity(I)V");
	};
	proto["setSize(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#setSize(I)V");
	};
	proto["capacity()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#capacity()I");
	};
	proto["size()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#size()I");
	};
	proto["isEmpty()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#isEmpty()Z");
	};
	proto["elements()Ljava/util/Enumeration;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#elements()Ljava/util/Enumeration;");
	};
	proto["contains(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#contains(Ljava/lang/Object;)Z");
	};
	proto["indexOf(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#indexOf(Ljava/lang/Object;)I");
	};
	proto["indexOf(Ljava/lang/Object;I)I"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#indexOf(Ljava/lang/Object;I)I");
	};
	proto["lastIndexOf(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#lastIndexOf(Ljava/lang/Object;)I");
	};
	proto["lastIndexOf(Ljava/lang/Object;I)I"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#lastIndexOf(Ljava/lang/Object;I)I");
	};
	proto["elementAt(I)Ljava/lang/Object;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#elementAt(I)Ljava/lang/Object;");
	};
	proto["firstElement()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#firstElement()Ljava/lang/Object;");
	};
	proto["lastElement()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#lastElement()Ljava/lang/Object;");
	};
	proto["setElementAt(Ljava/lang/Object;I)V"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#setElementAt(Ljava/lang/Object;I)V");
	};
	proto["removeElementAt(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#removeElementAt(I)V");
	};
	proto["insertElementAt(Ljava/lang/Object;I)V"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#insertElementAt(Ljava/lang/Object;I)V");
	};
	proto["addElement(Ljava/lang/Object;)V"] = function(ref0){
		this.list.push(ref0);
	};
	proto["removeElement(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#removeElement(Ljava/lang/Object;)Z");
	};
	proto["removeAllElements()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#removeAllElements()V");
	};
	proto["clone()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#clone()Ljava/lang/Object;");
	};
	proto["toArray()[Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#toArray()[Ljava/lang/Object;");
	};
	proto["toArray([Ljava/lang/Object;)[Ljava/lang/Object;"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#toArray([Ljava/lang/Object;)[Ljava/lang/Object;");
	};
	proto["elementData(I)Ljava/lang/Object;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#elementData(I)Ljava/lang/Object;");
	};
	proto["get(I)Ljava/lang/Object;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#get(I)Ljava/lang/Object;");
	};
	proto["set(ILjava/lang/Object;)Ljava/lang/Object;"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#set(ILjava/lang/Object;)Ljava/lang/Object;");
	};
	proto["add(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#add(Ljava/lang/Object;)Z");
	};
	proto["remove(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#remove(Ljava/lang/Object;)Z");
	};
	proto["add(ILjava/lang/Object;)V"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#add(ILjava/lang/Object;)V");
	};
	proto["remove(I)Ljava/lang/Object;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#remove(I)Ljava/lang/Object;");
	};
	proto["clear()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#clear()V");
	};
	proto["containsAll(Ljava/util/Collection;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#containsAll(Ljava/util/Collection;)Z");
	};
	proto["addAll(Ljava/util/Collection;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#addAll(Ljava/util/Collection;)Z");
	};
	proto["removeAll(Ljava/util/Collection;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#removeAll(Ljava/util/Collection;)Z");
	};
	proto["retainAll(Ljava/util/Collection;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#retainAll(Ljava/util/Collection;)Z");
	};
	proto["addAll(ILjava/util/Collection;)Z"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#addAll(ILjava/util/Collection;)Z");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#hashCode()I");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#toString()Ljava/lang/String;");
	};
	proto["subList(II)Ljava/util/List;"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#subList(II)Ljava/util/List;");
	};
	proto["removeRange(II)V"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#removeRange(II)V");
	};
	proto["listIterator(I)Ljava/util/ListIterator;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#listIterator(I)Ljava/util/ListIterator;");
	};
	proto["listIterator()Ljava/util/ListIterator;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Vector#listIterator()Ljava/util/ListIterator;");
	};
	proto["iterator()Ljava/util/Iterator;"] = function(){
		return Java.mkIterator(this.list);
	};

});

//"java/util/Stack"
Java["java/util/Stack"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/util/Vector"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/Stack");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Stack#<init>()V");
	};
	proto["push(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Stack#push(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["pop()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Stack#pop()Ljava/lang/Object;");
	};
	proto["peek()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Stack#peek()Ljava/lang/Object;");
	};
	proto["empty()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Stack#empty()Z");
	};
	proto["search(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Stack#search(Ljava/lang/Object;)I");
	};

});

//"java/security/cert/Certificate"
Java["java/security/cert/Certificate"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/security/cert/Certificate");

	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/security/cert/Certificate#<init>(Ljava/lang/String;)V");
	};
	proto["getType()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/cert/Certificate#getType()Ljava/lang/String;");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/security/cert/Certificate#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/cert/Certificate#hashCode()I");
	};
	proto["getEncoded()[B"] = null;
	proto["verify(Ljava/security/PublicKey;)V"] = null;
	proto["verify(Ljava/security/PublicKey;Ljava/lang/String;)V"] = null;
	proto["toString()Ljava/lang/String;"] = null;
	proto["getPublicKey()Ljava/security/PublicKey;"] = null;
	proto["writeReplace()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/cert/Certificate#writeReplace()Ljava/lang/Object;");
	};

});

//"java/security/CodeSource"
Java["java/security/CodeSource"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/security/CodeSource");

	proto["<init>(Ljava/net/URL;[Ljava/security/cert/Certificate;)V"] = function(ref0,arr_ref1){
		var self = this;
		throw new Error("NotImplemented: java/security/CodeSource#<init>(Ljava/net/URL;[Ljava/security/cert/Certificate;)V");
	};
	proto["<init>(Ljava/net/URL;[Ljava/security/CodeSigner;)V"] = function(ref0,arr_ref1){
		var self = this;
		throw new Error("NotImplemented: java/security/CodeSource#<init>(Ljava/net/URL;[Ljava/security/CodeSigner;)V");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/CodeSource#hashCode()I");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/security/CodeSource#equals(Ljava/lang/Object;)Z");
	};
	proto["getLocation()Ljava/net/URL;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/CodeSource#getLocation()Ljava/net/URL;");
	};
	proto["getCertificates()[Ljava/security/cert/Certificate;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/CodeSource#getCertificates()[Ljava/security/cert/Certificate;");
	};
	proto["getCodeSigners()[Ljava/security/CodeSigner;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/CodeSource#getCodeSigners()[Ljava/security/CodeSigner;");
	};
	proto["implies(Ljava/security/CodeSource;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/security/CodeSource#implies(Ljava/security/CodeSource;)Z");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/CodeSource#toString()Ljava/lang/String;");
	};

});

//"java/lang/Void"
Java["java/lang/Void"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Void");
	klass["TYPE"] = null;

});

//"java/lang/ClassFormatError"
Java["java/lang/ClassFormatError"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/LinkageError"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/ClassFormatError");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassFormatError#<init>()V");
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassFormatError#<init>(Ljava/lang/String;)V");
	};

});

//"java/lang/AssertionStatusDirectives"
Java["java/lang/AssertionStatusDirectives"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/AssertionStatusDirectives");
	proto["classes"] = null;
	proto["classEnabled"] = null;
	proto["packages"] = null;
	proto["packageEnabled"] = null;
	proto["deflt"] = null;
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/AssertionStatusDirectives#<init>()V");
	};

});

//"java/util/concurrent/ConcurrentMap"
Java["java/util/concurrent/ConcurrentMap"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/concurrent/ConcurrentMap");

	proto["putIfAbsent(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;"] = null;
	proto["remove(Ljava/lang/Object;Ljava/lang/Object;)Z"] = null;
	proto["replace(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Z"] = null;
	proto["replace(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;"] = null;

});

//"java/lang/ref/ReferenceQueue"
Java["java/lang/ref/ReferenceQueue"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/ref/ReferenceQueue");
	klass["NULL"] = null;
	klass["ENQUEUED"] = null;
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ref/ReferenceQueue#<init>()V");
	};
	proto["enqueue(Ljava/lang/ref/Reference;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ref/ReferenceQueue#enqueue(Ljava/lang/ref/Reference;)Z");
	};
	proto["poll()Ljava/lang/ref/Reference;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ref/ReferenceQueue#poll()Ljava/lang/ref/Reference;");
	};
	proto["remove(J)Ljava/lang/ref/Reference;"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ref/ReferenceQueue#remove(J)Ljava/lang/ref/Reference;");
	};
	proto["remove()Ljava/lang/ref/Reference;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ref/ReferenceQueue#remove()Ljava/lang/ref/Reference;");
	};

});

//"java/lang/Long"
Java["java/lang/Long"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Number"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Long");
	klass["MIN_VALUE"] = (-9223372036854775808);
	klass["MAX_VALUE"] = (9223372036854775807);
	klass["TYPE"] = null;
	klass["SIZE"] = (64);
	klass["toString(JI)Ljava/lang/String;"] = function(l0,i1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#toString(JI)Ljava/lang/String;");
	};
	klass["toHexString(J)Ljava/lang/String;"] = function(l0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#toHexString(J)Ljava/lang/String;");
	};
	klass["toOctalString(J)Ljava/lang/String;"] = function(l0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#toOctalString(J)Ljava/lang/String;");
	};
	klass["toBinaryString(J)Ljava/lang/String;"] = function(l0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#toBinaryString(J)Ljava/lang/String;");
	};
	klass["toString(J)Ljava/lang/String;"] = function(l0){
		return Java.mkString(l0.toString());
	};
	klass["getChars(JI[C)V"] = function(l0,i1,arr_ch2){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#getChars(JI[C)V");
	};
	klass["stringSize(J)I"] = function(l0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#stringSize(J)I");
	};
	klass["parseLong(Ljava/lang/String;I)J"] = function(ref0,i1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#parseLong(Ljava/lang/String;I)J");
	};
	klass["parseLong(Ljava/lang/String;)J"] = function(ref0){
		return Java.mkLong(ref0.val);
	};
	klass["valueOf(Ljava/lang/String;I)Ljava/lang/Long;"] = function(ref0,i1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#valueOf(Ljava/lang/String;I)Ljava/lang/Long;");
	};
	klass["valueOf(Ljava/lang/String;)Ljava/lang/Long;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#valueOf(Ljava/lang/String;)Ljava/lang/Long;");
	};
	klass["valueOf(J)Ljava/lang/Long;"] = function(l0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#valueOf(J)Ljava/lang/Long;");
	};
	klass["decode(Ljava/lang/String;)Ljava/lang/Long;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#decode(Ljava/lang/String;)Ljava/lang/Long;");
	};
	proto["<init>(J)V"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Long#<init>(J)V");
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Long#<init>(Ljava/lang/String;)V");
	};
	proto["byteValue()B"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Long#byteValue()B");
	};
	proto["shortValue()S"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Long#shortValue()S");
	};
	proto["intValue()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Long#intValue()I");
	};
	proto["longValue()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Long#longValue()J");
	};
	proto["floatValue()F"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Long#floatValue()F");
	};
	proto["doubleValue()D"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Long#doubleValue()D");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Long#toString()Ljava/lang/String;");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Long#hashCode()I");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Long#equals(Ljava/lang/Object;)Z");
	};
	klass["getLong(Ljava/lang/String;)Ljava/lang/Long;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#getLong(Ljava/lang/String;)Ljava/lang/Long;");
	};
	klass["getLong(Ljava/lang/String;J)Ljava/lang/Long;"] = function(ref0,l1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#getLong(Ljava/lang/String;J)Ljava/lang/Long;");
	};
	klass["getLong(Ljava/lang/String;Ljava/lang/Long;)Ljava/lang/Long;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#getLong(Ljava/lang/String;Ljava/lang/Long;)Ljava/lang/Long;");
	};
	proto["compareTo(Ljava/lang/Long;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Long#compareTo(Ljava/lang/Long;)I");
	};
	klass["compare(JJ)I"] = function(l0,l1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#compare(JJ)I");
	};
	klass["highestOneBit(J)J"] = function(l0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#highestOneBit(J)J");
	};
	klass["lowestOneBit(J)J"] = function(l0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#lowestOneBit(J)J");
	};
	klass["numberOfLeadingZeros(J)I"] = function(l0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#numberOfLeadingZeros(J)I");
	};
	klass["numberOfTrailingZeros(J)I"] = function(l0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#numberOfTrailingZeros(J)I");
	};
	klass["bitCount(J)I"] = function(l0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#bitCount(J)I");
	};
	klass["rotateLeft(JI)J"] = function(l0,i1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#rotateLeft(JI)J");
	};
	klass["rotateRight(JI)J"] = function(l0,i1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#rotateRight(JI)J");
	};
	klass["reverse(J)J"] = function(l0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#reverse(J)J");
	};
	klass["signum(J)I"] = function(l0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#signum(J)I");
	};
	klass["reverseBytes(J)J"] = function(l0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Long#reverseBytes(J)J");
	};
	proto["compareTo(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Long#compareTo(Ljava/lang/Object;)I");
	};

});

//"java/io/ObjectStreamField"
Java["java/io/ObjectStreamField"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/ObjectStreamField");

	proto["<init>(Ljava/lang/String;Ljava/lang/Class;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamField#<init>(Ljava/lang/String;Ljava/lang/Class;)V");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/Class;Z)V"] = function(ref0,ref1,b2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamField#<init>(Ljava/lang/String;Ljava/lang/Class;Z)V");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/String;Z)V"] = function(ref0,ref1,b2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamField#<init>(Ljava/lang/String;Ljava/lang/String;Z)V");
	};
	proto["<init>(Ljava/lang/reflect/Field;ZZ)V"] = function(ref0,b1,b2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamField#<init>(Ljava/lang/reflect/Field;ZZ)V");
	};
	proto["getName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamField#getName()Ljava/lang/String;");
	};
	proto["getType()Ljava/lang/Class;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamField#getType()Ljava/lang/Class;");
	};
	proto["getTypeCode()C"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamField#getTypeCode()C");
	};
	proto["getTypeString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamField#getTypeString()Ljava/lang/String;");
	};
	proto["getOffset()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamField#getOffset()I");
	};
	proto["setOffset(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamField#setOffset(I)V");
	};
	proto["isPrimitive()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamField#isPrimitive()Z");
	};
	proto["isUnshared()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamField#isUnshared()Z");
	};
	proto["compareTo(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamField#compareTo(Ljava/lang/Object;)I");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamField#toString()Ljava/lang/String;");
	};
	proto["getField()Ljava/lang/reflect/Field;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamField#getField()Ljava/lang/reflect/Field;");
	};
	proto["getSignature()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamField#getSignature()Ljava/lang/String;");
	};

});

//"java/io/ObjectStreamClass$FieldReflector"
Java["java/io/ObjectStreamClass$FieldReflector"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/ObjectStreamClass$FieldReflector");

	proto["<init>([Ljava/io/ObjectStreamField;)V"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass$FieldReflector#<init>([Ljava/io/ObjectStreamField;)V");
	};
	proto["getFields()[Ljava/io/ObjectStreamField;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass$FieldReflector#getFields()[Ljava/io/ObjectStreamField;");
	};
	proto["getPrimFieldValues(Ljava/lang/Object;[B)V"] = function(ref0,arr_sb1){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass$FieldReflector#getPrimFieldValues(Ljava/lang/Object;[B)V");
	};
	proto["setPrimFieldValues(Ljava/lang/Object;[B)V"] = function(ref0,arr_sb1){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass$FieldReflector#setPrimFieldValues(Ljava/lang/Object;[B)V");
	};
	proto["getObjFieldValues(Ljava/lang/Object;[Ljava/lang/Object;)V"] = function(ref0,arr_ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass$FieldReflector#getObjFieldValues(Ljava/lang/Object;[Ljava/lang/Object;)V");
	};
	proto["setObjFieldValues(Ljava/lang/Object;[Ljava/lang/Object;)V"] = function(ref0,arr_ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass$FieldReflector#setObjFieldValues(Ljava/lang/Object;[Ljava/lang/Object;)V");
	};

});

//"java/io/ObjectStreamClass$ExceptionInfo"
Java["java/io/ObjectStreamClass$ExceptionInfo"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/ObjectStreamClass$ExceptionInfo");

	proto["<init>(Ljava/lang/String;Ljava/lang/String;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass$ExceptionInfo#<init>(Ljava/lang/String;Ljava/lang/String;)V");
	};
	proto["newInvalidClassException()Ljava/io/InvalidClassException;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass$ExceptionInfo#newInvalidClassException()Ljava/io/InvalidClassException;");
	};

});

//"java/io/ObjectStreamClass$ClassDataSlot"
Java["java/io/ObjectStreamClass$ClassDataSlot"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/ObjectStreamClass$ClassDataSlot");
	proto["desc"] = null;
	proto["hasData"] = null;
	proto["<init>(Ljava/io/ObjectStreamClass;Z)V"] = function(ref0,b1){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass$ClassDataSlot#<init>(Ljava/io/ObjectStreamClass;Z)V");
	};

});

//"java/lang/ClassNotFoundException"
Java["java/lang/ClassNotFoundException"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/ReflectiveOperationException"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/ClassNotFoundException");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassNotFoundException#<init>()V");
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassNotFoundException#<init>(Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/Throwable;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassNotFoundException#<init>(Ljava/lang/String;Ljava/lang/Throwable;)V");
	};
	proto["getException()Ljava/lang/Throwable;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassNotFoundException#getException()Ljava/lang/Throwable;");
	};
	proto["getCause()Ljava/lang/Throwable;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassNotFoundException#getCause()Ljava/lang/Throwable;");
	};

});

//"java/io/ObjectInputStream$HandleTable$HandleList"
Java["java/io/ObjectInputStream$HandleTable$HandleList"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/ObjectInputStream$HandleTable$HandleList");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$HandleTable$HandleList#<init>()V");
	};
	proto["add(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$HandleTable$HandleList#add(I)V");
	};
	proto["get(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$HandleTable$HandleList#get(I)I");
	};
	proto["size()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$HandleTable$HandleList#size()I");
	};

});

//"java/lang/Throwable"
Java["java/lang/Throwable"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Throwable");
	klass["$assertionsDisabled"] = null;
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Throwable#<init>()V");
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Throwable#<init>(Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/Throwable;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/Throwable#<init>(Ljava/lang/String;Ljava/lang/Throwable;)V");
	};
	proto["<init>(Ljava/lang/Throwable;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Throwable#<init>(Ljava/lang/Throwable;)V");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/Throwable;ZZ)V"] = function(ref0,ref1,b2,b3){
		var self = this;
		throw new Error("NotImplemented: java/lang/Throwable#<init>(Ljava/lang/String;Ljava/lang/Throwable;ZZ)V");
	};
	proto["getMessage()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Throwable#getMessage()Ljava/lang/String;");
	};
	proto["getLocalizedMessage()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Throwable#getLocalizedMessage()Ljava/lang/String;");
	};
	proto["getCause()Ljava/lang/Throwable;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Throwable#getCause()Ljava/lang/Throwable;");
	};
	proto["initCause(Ljava/lang/Throwable;)Ljava/lang/Throwable;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Throwable#initCause(Ljava/lang/Throwable;)Ljava/lang/Throwable;");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Throwable#toString()Ljava/lang/String;");
	};
	proto["printStackTrace()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Throwable#printStackTrace()V");
	};
	proto["printStackTrace(Ljava/io/PrintStream;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Throwable#printStackTrace(Ljava/io/PrintStream;)V");
	};
	proto["printStackTrace(Ljava/io/PrintWriter;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Throwable#printStackTrace(Ljava/io/PrintWriter;)V");
	};
	proto["fillInStackTrace()Ljava/lang/Throwable;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Throwable#fillInStackTrace()Ljava/lang/Throwable;");
	};
	proto["getStackTrace()[Ljava/lang/StackTraceElement;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Throwable#getStackTrace()[Ljava/lang/StackTraceElement;");
	};
	proto["setStackTrace([Ljava/lang/StackTraceElement;)V"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Throwable#setStackTrace([Ljava/lang/StackTraceElement;)V");
	};
	proto["getStackTraceDepth()I"] = function(){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Throwable#getStackTraceDepth()I");
	};
	proto["getStackTraceElement(I)Ljava/lang/StackTraceElement;"] = function(i0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Throwable#getStackTraceElement(I)Ljava/lang/StackTraceElement;");
	};
	proto["addSuppressed(Ljava/lang/Throwable;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Throwable#addSuppressed(Ljava/lang/Throwable;)V");
	};
	proto["getSuppressed()[Ljava/lang/Throwable;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Throwable#getSuppressed()[Ljava/lang/Throwable;");
	};

});

//"java/lang/Exception"
Java["java/lang/Exception"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Throwable"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Exception");
	klass["serialVersionUID"] = (-3387516993124229948);
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Exception#<init>()V");
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		this.msg = ref0.val;
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/Throwable;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/Exception#<init>(Ljava/lang/String;Ljava/lang/Throwable;)V");
	};
	proto["<init>(Ljava/lang/Throwable;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Exception#<init>(Ljava/lang/Throwable;)V");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/Throwable;ZZ)V"] = function(ref0,ref1,b2,b3){
		var self = this;
		throw new Error("NotImplemented: java/lang/Exception#<init>(Ljava/lang/String;Ljava/lang/Throwable;ZZ)V");
	};

});

//"java/io/ObjectOutput"
Java["java/io/ObjectOutput"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/ObjectOutput");

	proto["writeObject(Ljava/lang/Object;)V"] = null;
	proto["write(I)V"] = null;
	proto["write([B)V"] = null;
	proto["write([BII)V"] = null;
	proto["flush()V"] = null;
	proto["close()V"] = null;

});

//"java/io/ObjectInput"
Java["java/io/ObjectInput"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/ObjectInput");

	proto["readObject()Ljava/lang/Object;"] = null;
	proto["read()I"] = null;
	proto["read([B)I"] = null;
	proto["read([BII)I"] = null;
	proto["skip(J)J"] = null;
	proto["available()I"] = null;
	proto["close()V"] = null;

});

//"sun/reflect/generics/repository/ClassRepository"
Java["sun/reflect/generics/repository/ClassRepository"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["sun/reflect/generics/repository/GenericDeclRepository"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/repository/ClassRepository");

	proto["parse(Ljava/lang/String;)Lsun/reflect/generics/tree/ClassSignature;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/repository/ClassRepository#parse(Ljava/lang/String;)Lsun/reflect/generics/tree/ClassSignature;");
	};
	klass["make(Ljava/lang/String;Lsun/reflect/generics/factory/GenericsFactory;)Lsun/reflect/generics/repository/ClassRepository;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/generics/repository/ClassRepository#make(Ljava/lang/String;Lsun/reflect/generics/factory/GenericsFactory;)Lsun/reflect/generics/repository/ClassRepository;");
	};
	proto["getSuperclass()Ljava/lang/reflect/Type;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/repository/ClassRepository#getSuperclass()Ljava/lang/reflect/Type;");
	};
	proto["getSuperInterfaces()[Ljava/lang/reflect/Type;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/repository/ClassRepository#getSuperInterfaces()[Ljava/lang/reflect/Type;");
	};
	proto["parse(Ljava/lang/String;)Lsun/reflect/generics/tree/Tree;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/generics/repository/ClassRepository#parse(Ljava/lang/String;)Lsun/reflect/generics/tree/Tree;");
	};

});

//"sun/reflect/generics/factory/GenericsFactory"
Java["sun/reflect/generics/factory/GenericsFactory"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/generics/factory/GenericsFactory");

	proto["makeTypeVariable(Ljava/lang/String;[Lsun/reflect/generics/tree/FieldTypeSignature;)Ljava/lang/reflect/TypeVariable;"] = null;
	proto["makeParameterizedType(Ljava/lang/reflect/Type;[Ljava/lang/reflect/Type;Ljava/lang/reflect/Type;)Ljava/lang/reflect/ParameterizedType;"] = null;
	proto["findTypeVariable(Ljava/lang/String;)Ljava/lang/reflect/TypeVariable;"] = null;
	proto["makeWildcard([Lsun/reflect/generics/tree/FieldTypeSignature;[Lsun/reflect/generics/tree/FieldTypeSignature;)Ljava/lang/reflect/WildcardType;"] = null;
	proto["makeNamedType(Ljava/lang/String;)Ljava/lang/reflect/Type;"] = null;
	proto["makeArrayType(Ljava/lang/reflect/Type;)Ljava/lang/reflect/Type;"] = null;
	proto["makeByte()Ljava/lang/reflect/Type;"] = null;
	proto["makeBool()Ljava/lang/reflect/Type;"] = null;
	proto["makeShort()Ljava/lang/reflect/Type;"] = null;
	proto["makeChar()Ljava/lang/reflect/Type;"] = null;
	proto["makeInt()Ljava/lang/reflect/Type;"] = null;
	proto["makeLong()Ljava/lang/reflect/Type;"] = null;
	proto["makeFloat()Ljava/lang/reflect/Type;"] = null;
	proto["makeDouble()Ljava/lang/reflect/Type;"] = null;
	proto["makeVoid()Ljava/lang/reflect/Type;"] = null;

});

//"sun/reflect/annotation/AnnotationType"
Java["sun/reflect/annotation/AnnotationType"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/annotation/AnnotationType");
	klass["$assertionsDisabled"] = null;
	klass["getInstance(Ljava/lang/Class;)Lsun/reflect/annotation/AnnotationType;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/annotation/AnnotationType#getInstance(Ljava/lang/Class;)Lsun/reflect/annotation/AnnotationType;");
	};
	klass["invocationHandlerReturnType(Ljava/lang/Class;)Ljava/lang/Class;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/annotation/AnnotationType#invocationHandlerReturnType(Ljava/lang/Class;)Ljava/lang/Class;");
	};
	proto["memberTypes()Ljava/util/Map;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/annotation/AnnotationType#memberTypes()Ljava/util/Map;");
	};
	proto["members()Ljava/util/Map;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/annotation/AnnotationType#members()Ljava/util/Map;");
	};
	proto["memberDefaults()Ljava/util/Map;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/annotation/AnnotationType#memberDefaults()Ljava/util/Map;");
	};
	proto["retention()Ljava/lang/annotation/RetentionPolicy;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/annotation/AnnotationType#retention()Ljava/lang/annotation/RetentionPolicy;");
	};
	proto["isInherited()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/annotation/AnnotationType#isInherited()Z");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/annotation/AnnotationType#toString()Ljava/lang/String;");
	};

});

//"sun/reflect/ReflectionFactory"
Java["sun/reflect/ReflectionFactory"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/ReflectionFactory");

	klass["getReflectionFactory()Lsun/reflect/ReflectionFactory;"] = function(){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/ReflectionFactory#getReflectionFactory()Lsun/reflect/ReflectionFactory;");
	};
	proto["setLangReflectAccess(Lsun/reflect/LangReflectAccess;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ReflectionFactory#setLangReflectAccess(Lsun/reflect/LangReflectAccess;)V");
	};
	proto["newFieldAccessor(Ljava/lang/reflect/Field;Z)Lsun/reflect/FieldAccessor;"] = function(ref0,b1){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ReflectionFactory#newFieldAccessor(Ljava/lang/reflect/Field;Z)Lsun/reflect/FieldAccessor;");
	};
	proto["newMethodAccessor(Ljava/lang/reflect/Method;)Lsun/reflect/MethodAccessor;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ReflectionFactory#newMethodAccessor(Ljava/lang/reflect/Method;)Lsun/reflect/MethodAccessor;");
	};
	proto["newConstructorAccessor(Ljava/lang/reflect/Constructor;)Lsun/reflect/ConstructorAccessor;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ReflectionFactory#newConstructorAccessor(Ljava/lang/reflect/Constructor;)Lsun/reflect/ConstructorAccessor;");
	};
	proto["newField(Ljava/lang/Class;Ljava/lang/String;Ljava/lang/Class;IILjava/lang/String;[B)Ljava/lang/reflect/Field;"] = function(ref0,ref1,ref2,i3,i4,ref5,arr_sb6){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ReflectionFactory#newField(Ljava/lang/Class;Ljava/lang/String;Ljava/lang/Class;IILjava/lang/String;[B)Ljava/lang/reflect/Field;");
	};
	proto["newMethod(Ljava/lang/Class;Ljava/lang/String;[Ljava/lang/Class;Ljava/lang/Class;[Ljava/lang/Class;IILjava/lang/String;[B[B[B)Ljava/lang/reflect/Method;"] = function(ref0,ref1,arr_ref2,ref3,arr_ref4,i5,i6,ref7,arr_sb8,arr_sb9,arr_sb10){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ReflectionFactory#newMethod(Ljava/lang/Class;Ljava/lang/String;[Ljava/lang/Class;Ljava/lang/Class;[Ljava/lang/Class;IILjava/lang/String;[B[B[B)Ljava/lang/reflect/Method;");
	};
	proto["newConstructor(Ljava/lang/Class;[Ljava/lang/Class;[Ljava/lang/Class;IILjava/lang/String;[B[B)Ljava/lang/reflect/Constructor;"] = function(ref0,arr_ref1,arr_ref2,i3,i4,ref5,arr_sb6,arr_sb7){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ReflectionFactory#newConstructor(Ljava/lang/Class;[Ljava/lang/Class;[Ljava/lang/Class;IILjava/lang/String;[B[B)Ljava/lang/reflect/Constructor;");
	};
	proto["getMethodAccessor(Ljava/lang/reflect/Method;)Lsun/reflect/MethodAccessor;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ReflectionFactory#getMethodAccessor(Ljava/lang/reflect/Method;)Lsun/reflect/MethodAccessor;");
	};
	proto["setMethodAccessor(Ljava/lang/reflect/Method;Lsun/reflect/MethodAccessor;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ReflectionFactory#setMethodAccessor(Ljava/lang/reflect/Method;Lsun/reflect/MethodAccessor;)V");
	};
	proto["getConstructorAccessor(Ljava/lang/reflect/Constructor;)Lsun/reflect/ConstructorAccessor;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ReflectionFactory#getConstructorAccessor(Ljava/lang/reflect/Constructor;)Lsun/reflect/ConstructorAccessor;");
	};
	proto["setConstructorAccessor(Ljava/lang/reflect/Constructor;Lsun/reflect/ConstructorAccessor;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ReflectionFactory#setConstructorAccessor(Ljava/lang/reflect/Constructor;Lsun/reflect/ConstructorAccessor;)V");
	};
	proto["copyMethod(Ljava/lang/reflect/Method;)Ljava/lang/reflect/Method;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ReflectionFactory#copyMethod(Ljava/lang/reflect/Method;)Ljava/lang/reflect/Method;");
	};
	proto["copyField(Ljava/lang/reflect/Field;)Ljava/lang/reflect/Field;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ReflectionFactory#copyField(Ljava/lang/reflect/Field;)Ljava/lang/reflect/Field;");
	};
	proto["copyConstructor(Ljava/lang/reflect/Constructor;)Ljava/lang/reflect/Constructor;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ReflectionFactory#copyConstructor(Ljava/lang/reflect/Constructor;)Ljava/lang/reflect/Constructor;");
	};
	proto["newConstructorForSerialization(Ljava/lang/Class;Ljava/lang/reflect/Constructor;)Ljava/lang/reflect/Constructor;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ReflectionFactory#newConstructorForSerialization(Ljava/lang/Class;Ljava/lang/reflect/Constructor;)Ljava/lang/reflect/Constructor;");
	};
	klass["inflationThreshold()I"] = function(){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/ReflectionFactory#inflationThreshold()I");
	};
	klass["access$002(Z)Z"] = function(b0){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/ReflectionFactory#access$002(Z)Z");
	};
	klass["access$102(I)I"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/ReflectionFactory#access$102(I)I");
	};
	klass["access$202(Z)Z"] = function(b0){
		var self = null;
		throw new Error("NotImplemented: sun/reflect/ReflectionFactory#access$202(Z)Z");
	};

});

//"sun/reflect/ConstantPool"
Java["sun/reflect/ConstantPool"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/reflect/ConstantPool");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ConstantPool#<init>()V");
	};
	proto["getSize()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ConstantPool#getSize()I");
	};
	proto["getClassAt(I)Ljava/lang/Class;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ConstantPool#getClassAt(I)Ljava/lang/Class;");
	};
	proto["getClassAtIfLoaded(I)Ljava/lang/Class;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ConstantPool#getClassAtIfLoaded(I)Ljava/lang/Class;");
	};
	proto["getMethodAt(I)Ljava/lang/reflect/Member;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ConstantPool#getMethodAt(I)Ljava/lang/reflect/Member;");
	};
	proto["getMethodAtIfLoaded(I)Ljava/lang/reflect/Member;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ConstantPool#getMethodAtIfLoaded(I)Ljava/lang/reflect/Member;");
	};
	proto["getFieldAt(I)Ljava/lang/reflect/Field;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ConstantPool#getFieldAt(I)Ljava/lang/reflect/Field;");
	};
	proto["getFieldAtIfLoaded(I)Ljava/lang/reflect/Field;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ConstantPool#getFieldAtIfLoaded(I)Ljava/lang/reflect/Field;");
	};
	proto["getMemberRefInfoAt(I)[Ljava/lang/String;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ConstantPool#getMemberRefInfoAt(I)[Ljava/lang/String;");
	};
	proto["getIntAt(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ConstantPool#getIntAt(I)I");
	};
	proto["getLongAt(I)J"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ConstantPool#getLongAt(I)J");
	};
	proto["getFloatAt(I)F"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ConstantPool#getFloatAt(I)F");
	};
	proto["getDoubleAt(I)D"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ConstantPool#getDoubleAt(I)D");
	};
	proto["getStringAt(I)Ljava/lang/String;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ConstantPool#getStringAt(I)Ljava/lang/String;");
	};
	proto["getUTF8At(I)Ljava/lang/String;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/reflect/ConstantPool#getUTF8At(I)Ljava/lang/String;");
	};

});

//"java/security/ProtectionDomain"
Java["java/security/ProtectionDomain"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/security/ProtectionDomain");
	proto["key"] = null;
	proto["<init>(Ljava/security/CodeSource;Ljava/security/PermissionCollection;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/security/ProtectionDomain#<init>(Ljava/security/CodeSource;Ljava/security/PermissionCollection;)V");
	};
	proto["<init>(Ljava/security/CodeSource;Ljava/security/PermissionCollection;Ljava/lang/ClassLoader;[Ljava/security/Principal;)V"] = function(ref0,ref1,ref2,arr_ref3){
		var self = this;
		throw new Error("NotImplemented: java/security/ProtectionDomain#<init>(Ljava/security/CodeSource;Ljava/security/PermissionCollection;Ljava/lang/ClassLoader;[Ljava/security/Principal;)V");
	};
	proto["getCodeSource()Ljava/security/CodeSource;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/ProtectionDomain#getCodeSource()Ljava/security/CodeSource;");
	};
	proto["getClassLoader()Ljava/lang/ClassLoader;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/ProtectionDomain#getClassLoader()Ljava/lang/ClassLoader;");
	};
	proto["getPrincipals()[Ljava/security/Principal;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/ProtectionDomain#getPrincipals()[Ljava/security/Principal;");
	};
	proto["getPermissions()Ljava/security/PermissionCollection;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/ProtectionDomain#getPermissions()Ljava/security/PermissionCollection;");
	};
	proto["implies(Ljava/security/Permission;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/security/ProtectionDomain#implies(Ljava/security/Permission;)Z");
	};
	proto["impliesCreateAccessControlContext()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/ProtectionDomain#impliesCreateAccessControlContext()Z");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/ProtectionDomain#toString()Ljava/lang/String;");
	};

});

//"java/net/URL"
Java["java/net/URL"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/net/URL");
	klass["serialVersionUID"] = (-7627629688361524110);
	proto["hostAddress"] = null;
	proto["handler"] = null;
	klass["factory"] = null;
	klass["handlers"] = null;
	proto["<init>(Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;)V"] = function(ref0,ref1,i2,ref3){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#<init>(Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V"] = function(ref0,ref1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#<init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/net/URLStreamHandler;)V"] = function(ref0,ref1,i2,ref3,ref4){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#<init>(Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/net/URLStreamHandler;)V");
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#<init>(Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/net/URL;Ljava/lang/String;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#<init>(Ljava/net/URL;Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/net/URL;Ljava/lang/String;Ljava/net/URLStreamHandler;)V"] = function(ref0,ref1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#<init>(Ljava/net/URL;Ljava/lang/String;Ljava/net/URLStreamHandler;)V");
	};
	proto["set(Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/lang/String;)V"] = function(ref0,ref1,i2,ref3,ref4){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#set(Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/lang/String;)V");
	};
	proto["set(Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V"] = function(ref0,ref1,i2,ref3,ref4,ref5,ref6,ref7){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#set(Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V");
	};
	proto["getQuery()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#getQuery()Ljava/lang/String;");
	};
	proto["getPath()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#getPath()Ljava/lang/String;");
	};
	proto["getUserInfo()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#getUserInfo()Ljava/lang/String;");
	};
	proto["getAuthority()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#getAuthority()Ljava/lang/String;");
	};
	proto["getPort()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#getPort()I");
	};
	proto["getDefaultPort()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#getDefaultPort()I");
	};
	proto["getProtocol()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#getProtocol()Ljava/lang/String;");
	};
	proto["getHost()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#getHost()Ljava/lang/String;");
	};
	proto["getFile()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#getFile()Ljava/lang/String;");
	};
	proto["getRef()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#getRef()Ljava/lang/String;");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#hashCode()I");
	};
	proto["sameFile(Ljava/net/URL;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#sameFile(Ljava/net/URL;)Z");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#toString()Ljava/lang/String;");
	};
	proto["toExternalForm()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#toExternalForm()Ljava/lang/String;");
	};
	proto["toURI()Ljava/net/URI;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#toURI()Ljava/net/URI;");
	};
	proto["openConnection()Ljava/net/URLConnection;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#openConnection()Ljava/net/URLConnection;");
	};
	proto["openConnection(Ljava/net/Proxy;)Ljava/net/URLConnection;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#openConnection(Ljava/net/Proxy;)Ljava/net/URLConnection;");
	};
	proto["openStream()Ljava/io/InputStream;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#openStream()Ljava/io/InputStream;");
	};
	proto["getContent()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#getContent()Ljava/lang/Object;");
	};
	proto["getContent([Ljava/lang/Class;)Ljava/lang/Object;"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/net/URL#getContent([Ljava/lang/Class;)Ljava/lang/Object;");
	};
	klass["setURLStreamHandlerFactory(Ljava/net/URLStreamHandlerFactory;)V"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/net/URL#setURLStreamHandlerFactory(Ljava/net/URLStreamHandlerFactory;)V");
	};
	klass["getURLStreamHandler(Ljava/lang/String;)Ljava/net/URLStreamHandler;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/net/URL#getURLStreamHandler(Ljava/lang/String;)Ljava/net/URLStreamHandler;");
	};

});

//"java/lang/reflect/TypeVariable"
Java["java/lang/reflect/TypeVariable"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/reflect/TypeVariable");

	proto["getBounds()[Ljava/lang/reflect/Type;"] = null;
	proto["getGenericDeclaration()Ljava/lang/reflect/GenericDeclaration;"] = null;
	proto["getName()Ljava/lang/String;"] = null;

});

//"java/lang/reflect/Type"
Java["java/lang/reflect/Type"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/reflect/Type");


});

//"java/lang/reflect/Method"
Java["java/lang/reflect/Method"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/reflect/AccessibleObject"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/reflect/Method");

	proto["<init>(Ljava/lang/Class;Ljava/lang/String;[Ljava/lang/Class;Ljava/lang/Class;[Ljava/lang/Class;IILjava/lang/String;[B[B[B)V"] = function(ref0,ref1,arr_ref2,ref3,arr_ref4,i5,i6,ref7,arr_sb8,arr_sb9,arr_sb10){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#<init>(Ljava/lang/Class;Ljava/lang/String;[Ljava/lang/Class;Ljava/lang/Class;[Ljava/lang/Class;IILjava/lang/String;[B[B[B)V");
	};
	proto["copy()Ljava/lang/reflect/Method;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#copy()Ljava/lang/reflect/Method;");
	};
	proto["getDeclaringClass()Ljava/lang/Class;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#getDeclaringClass()Ljava/lang/Class;");
	};
	proto["getName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#getName()Ljava/lang/String;");
	};
	proto["getModifiers()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#getModifiers()I");
	};
	proto["getTypeParameters()[Ljava/lang/reflect/TypeVariable;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#getTypeParameters()[Ljava/lang/reflect/TypeVariable;");
	};
	proto["getReturnType()Ljava/lang/Class;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#getReturnType()Ljava/lang/Class;");
	};
	proto["getGenericReturnType()Ljava/lang/reflect/Type;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#getGenericReturnType()Ljava/lang/reflect/Type;");
	};
	proto["getParameterTypes()[Ljava/lang/Class;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#getParameterTypes()[Ljava/lang/Class;");
	};
	proto["getGenericParameterTypes()[Ljava/lang/reflect/Type;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#getGenericParameterTypes()[Ljava/lang/reflect/Type;");
	};
	proto["getExceptionTypes()[Ljava/lang/Class;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#getExceptionTypes()[Ljava/lang/Class;");
	};
	proto["getGenericExceptionTypes()[Ljava/lang/reflect/Type;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#getGenericExceptionTypes()[Ljava/lang/reflect/Type;");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#hashCode()I");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#toString()Ljava/lang/String;");
	};
	proto["toGenericString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#toGenericString()Ljava/lang/String;");
	};
	proto["invoke(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0,arr_ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#invoke(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["isBridge()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#isBridge()Z");
	};
	proto["isVarArgs()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#isVarArgs()Z");
	};
	proto["isSynthetic()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#isSynthetic()Z");
	};
	proto["getMethodAccessor()Lsun/reflect/MethodAccessor;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#getMethodAccessor()Lsun/reflect/MethodAccessor;");
	};
	proto["setMethodAccessor(Lsun/reflect/MethodAccessor;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#setMethodAccessor(Lsun/reflect/MethodAccessor;)V");
	};
	proto["getAnnotation(Ljava/lang/Class;)Ljava/lang/annotation/Annotation;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#getAnnotation(Ljava/lang/Class;)Ljava/lang/annotation/Annotation;");
	};
	proto["getDeclaredAnnotations()[Ljava/lang/annotation/Annotation;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#getDeclaredAnnotations()[Ljava/lang/annotation/Annotation;");
	};
	proto["getDefaultValue()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#getDefaultValue()Ljava/lang/Object;");
	};
	proto["getParameterAnnotations()[[Ljava/lang/annotation/Annotation;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Method#getParameterAnnotations()[[Ljava/lang/annotation/Annotation;");
	};

});

//"java/lang/reflect/Field"
Java["java/lang/reflect/Field"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/reflect/AccessibleObject"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/reflect/Field");

	proto["<init>(Ljava/lang/Class;Ljava/lang/String;Ljava/lang/Class;IILjava/lang/String;[B)V"] = function(ref0,ref1,ref2,i3,i4,ref5,arr_sb6){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#<init>(Ljava/lang/Class;Ljava/lang/String;Ljava/lang/Class;IILjava/lang/String;[B)V");
	};
	proto["copy()Ljava/lang/reflect/Field;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#copy()Ljava/lang/reflect/Field;");
	};
	proto["getDeclaringClass()Ljava/lang/Class;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#getDeclaringClass()Ljava/lang/Class;");
	};
	proto["getName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#getName()Ljava/lang/String;");
	};
	proto["getModifiers()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#getModifiers()I");
	};
	proto["isEnumConstant()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#isEnumConstant()Z");
	};
	proto["isSynthetic()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#isSynthetic()Z");
	};
	proto["getType()Ljava/lang/Class;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#getType()Ljava/lang/Class;");
	};
	proto["getGenericType()Ljava/lang/reflect/Type;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#getGenericType()Ljava/lang/reflect/Type;");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#hashCode()I");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#toString()Ljava/lang/String;");
	};
	proto["toGenericString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#toGenericString()Ljava/lang/String;");
	};
	proto["get(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#get(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["getBoolean(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#getBoolean(Ljava/lang/Object;)Z");
	};
	proto["getByte(Ljava/lang/Object;)B"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#getByte(Ljava/lang/Object;)B");
	};
	proto["getChar(Ljava/lang/Object;)C"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#getChar(Ljava/lang/Object;)C");
	};
	proto["getShort(Ljava/lang/Object;)S"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#getShort(Ljava/lang/Object;)S");
	};
	proto["getInt(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#getInt(Ljava/lang/Object;)I");
	};
	proto["getLong(Ljava/lang/Object;)J"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#getLong(Ljava/lang/Object;)J");
	};
	proto["getFloat(Ljava/lang/Object;)F"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#getFloat(Ljava/lang/Object;)F");
	};
	proto["getDouble(Ljava/lang/Object;)D"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#getDouble(Ljava/lang/Object;)D");
	};
	proto["set(Ljava/lang/Object;Ljava/lang/Object;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#set(Ljava/lang/Object;Ljava/lang/Object;)V");
	};
	proto["setBoolean(Ljava/lang/Object;Z)V"] = function(ref0,b1){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#setBoolean(Ljava/lang/Object;Z)V");
	};
	proto["setByte(Ljava/lang/Object;B)V"] = function(ref0,sb1){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#setByte(Ljava/lang/Object;B)V");
	};
	proto["setChar(Ljava/lang/Object;C)V"] = function(ref0,ch1){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#setChar(Ljava/lang/Object;C)V");
	};
	proto["setShort(Ljava/lang/Object;S)V"] = function(ref0,sh1){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#setShort(Ljava/lang/Object;S)V");
	};
	proto["setInt(Ljava/lang/Object;I)V"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#setInt(Ljava/lang/Object;I)V");
	};
	proto["setLong(Ljava/lang/Object;J)V"] = function(ref0,l1){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#setLong(Ljava/lang/Object;J)V");
	};
	proto["setFloat(Ljava/lang/Object;F)V"] = function(ref0,flt1){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#setFloat(Ljava/lang/Object;F)V");
	};
	proto["setDouble(Ljava/lang/Object;D)V"] = function(ref0,db1){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#setDouble(Ljava/lang/Object;D)V");
	};
	klass["getTypeName(Ljava/lang/Class;)Ljava/lang/String;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/reflect/Field#getTypeName(Ljava/lang/Class;)Ljava/lang/String;");
	};
	proto["getAnnotation(Ljava/lang/Class;)Ljava/lang/annotation/Annotation;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#getAnnotation(Ljava/lang/Class;)Ljava/lang/annotation/Annotation;");
	};
	proto["getDeclaredAnnotations()[Ljava/lang/annotation/Annotation;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Field#getDeclaredAnnotations()[Ljava/lang/annotation/Annotation;");
	};

});

//"java/lang/reflect/Constructor"
Java["java/lang/reflect/Constructor"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/reflect/AccessibleObject"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/reflect/Constructor");

	proto["<init>(Ljava/lang/Class;[Ljava/lang/Class;[Ljava/lang/Class;IILjava/lang/String;[B[B)V"] = function(ref0,arr_ref1,arr_ref2,i3,i4,ref5,arr_sb6,arr_sb7){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#<init>(Ljava/lang/Class;[Ljava/lang/Class;[Ljava/lang/Class;IILjava/lang/String;[B[B)V");
	};
	proto["copy()Ljava/lang/reflect/Constructor;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#copy()Ljava/lang/reflect/Constructor;");
	};
	proto["getDeclaringClass()Ljava/lang/Class;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#getDeclaringClass()Ljava/lang/Class;");
	};
	proto["getName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#getName()Ljava/lang/String;");
	};
	proto["getModifiers()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#getModifiers()I");
	};
	proto["getTypeParameters()[Ljava/lang/reflect/TypeVariable;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#getTypeParameters()[Ljava/lang/reflect/TypeVariable;");
	};
	proto["getParameterTypes()[Ljava/lang/Class;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#getParameterTypes()[Ljava/lang/Class;");
	};
	proto["getGenericParameterTypes()[Ljava/lang/reflect/Type;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#getGenericParameterTypes()[Ljava/lang/reflect/Type;");
	};
	proto["getExceptionTypes()[Ljava/lang/Class;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#getExceptionTypes()[Ljava/lang/Class;");
	};
	proto["getGenericExceptionTypes()[Ljava/lang/reflect/Type;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#getGenericExceptionTypes()[Ljava/lang/reflect/Type;");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#hashCode()I");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#toString()Ljava/lang/String;");
	};
	proto["toGenericString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#toGenericString()Ljava/lang/String;");
	};
	proto["newInstance([Ljava/lang/Object;)Ljava/lang/Object;"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#newInstance([Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["isVarArgs()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#isVarArgs()Z");
	};
	proto["isSynthetic()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#isSynthetic()Z");
	};
	proto["getConstructorAccessor()Lsun/reflect/ConstructorAccessor;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#getConstructorAccessor()Lsun/reflect/ConstructorAccessor;");
	};
	proto["setConstructorAccessor(Lsun/reflect/ConstructorAccessor;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#setConstructorAccessor(Lsun/reflect/ConstructorAccessor;)V");
	};
	proto["getSlot()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#getSlot()I");
	};
	proto["getSignature()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#getSignature()Ljava/lang/String;");
	};
	proto["getRawAnnotations()[B"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#getRawAnnotations()[B");
	};
	proto["getRawParameterAnnotations()[B"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#getRawParameterAnnotations()[B");
	};
	proto["getAnnotation(Ljava/lang/Class;)Ljava/lang/annotation/Annotation;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#getAnnotation(Ljava/lang/Class;)Ljava/lang/annotation/Annotation;");
	};
	proto["getDeclaredAnnotations()[Ljava/lang/annotation/Annotation;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#getDeclaredAnnotations()[Ljava/lang/annotation/Annotation;");
	};
	proto["getParameterAnnotations()[[Ljava/lang/annotation/Annotation;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/reflect/Constructor#getParameterAnnotations()[[Ljava/lang/annotation/Annotation;");
	};

});

//"java/lang/ref/SoftReference"
Java["java/lang/ref/SoftReference"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/ref/Reference"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/ref/SoftReference");

	proto["<init>(Ljava/lang/Object;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ref/SoftReference#<init>(Ljava/lang/Object;)V");
	};
	proto["<init>(Ljava/lang/Object;Ljava/lang/ref/ReferenceQueue;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/ref/SoftReference#<init>(Ljava/lang/Object;Ljava/lang/ref/ReferenceQueue;)V");
	};
	proto["get()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ref/SoftReference#get()Ljava/lang/Object;");
	};

});

//"java/lang/annotation/Annotation"
Java["java/lang/annotation/Annotation"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/annotation/Annotation");

	proto["equals(Ljava/lang/Object;)Z"] = null;
	proto["hashCode()I"] = null;
	proto["toString()Ljava/lang/String;"] = null;
	proto["annotationType()Ljava/lang/Class;"] = null;

});

//"java/lang/Package"
Java["java/lang/Package"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Package");

	proto["getName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Package#getName()Ljava/lang/String;");
	};
	proto["getSpecificationTitle()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Package#getSpecificationTitle()Ljava/lang/String;");
	};
	proto["getSpecificationVersion()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Package#getSpecificationVersion()Ljava/lang/String;");
	};
	proto["getSpecificationVendor()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Package#getSpecificationVendor()Ljava/lang/String;");
	};
	proto["getImplementationTitle()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Package#getImplementationTitle()Ljava/lang/String;");
	};
	proto["getImplementationVersion()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Package#getImplementationVersion()Ljava/lang/String;");
	};
	proto["getImplementationVendor()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Package#getImplementationVendor()Ljava/lang/String;");
	};
	proto["isSealed()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Package#isSealed()Z");
	};
	proto["isSealed(Ljava/net/URL;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Package#isSealed(Ljava/net/URL;)Z");
	};
	proto["isCompatibleWith(Ljava/lang/String;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Package#isCompatibleWith(Ljava/lang/String;)Z");
	};
	klass["getPackage(Ljava/lang/String;)Ljava/lang/Package;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Package#getPackage(Ljava/lang/String;)Ljava/lang/Package;");
	};
	klass["getPackages()[Ljava/lang/Package;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/Package#getPackages()[Ljava/lang/Package;");
	};
	klass["getPackage(Ljava/lang/Class;)Ljava/lang/Package;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Package#getPackage(Ljava/lang/Class;)Ljava/lang/Package;");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Package#hashCode()I");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Package#toString()Ljava/lang/String;");
	};
	proto["getAnnotation(Ljava/lang/Class;)Ljava/lang/annotation/Annotation;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Package#getAnnotation(Ljava/lang/Class;)Ljava/lang/annotation/Annotation;");
	};
	proto["isAnnotationPresent(Ljava/lang/Class;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Package#isAnnotationPresent(Ljava/lang/Class;)Z");
	};
	proto["getAnnotations()[Ljava/lang/annotation/Annotation;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Package#getAnnotations()[Ljava/lang/annotation/Annotation;");
	};
	proto["getDeclaredAnnotations()[Ljava/lang/annotation/Annotation;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Package#getDeclaredAnnotations()[Ljava/lang/annotation/Annotation;");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/net/URL;Ljava/lang/ClassLoader;)V"] = function(ref0,ref1,ref2,ref3,ref4,ref5,ref6,ref7,ref8){
		var self = this;
		throw new Error("NotImplemented: java/lang/Package#<init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/net/URL;Ljava/lang/ClassLoader;)V");
	};
	klass["getSystemPackage(Ljava/lang/String;)Ljava/lang/Package;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Package#getSystemPackage(Ljava/lang/String;)Ljava/lang/Package;");
	};
	klass["getSystemPackages()[Ljava/lang/Package;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/Package#getSystemPackages()[Ljava/lang/Package;");
	};
	klass["access$000()Ljava/util/Map;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/Package#access$000()Ljava/util/Map;");
	};
	klass["access$100(Ljava/lang/String;)Ljava/util/jar/Manifest;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Package#access$100(Ljava/lang/String;)Ljava/util/jar/Manifest;");
	};
	klass["access$200()Ljava/util/Map;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/Package#access$200()Ljava/util/Map;");
	};
	proto["<init>(Ljava/lang/String;Ljava/util/jar/Manifest;Ljava/net/URL;Ljava/lang/ClassLoader;Ljava/lang/Package$1;)V"] = function(ref0,ref1,ref2,ref3,ref4){
		var self = this;
		throw new Error("NotImplemented: java/lang/Package#<init>(Ljava/lang/String;Ljava/util/jar/Manifest;Ljava/net/URL;Ljava/lang/ClassLoader;Ljava/lang/Package$1;)V");
	};
	klass["access$400()Ljava/util/Map;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/Package#access$400()Ljava/util/Map;");
	};

});

//"java/lang/ClassValue$ClassValueMap"
Java["java/lang/ClassValue$ClassValueMap"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/util/WeakHashMap"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/ClassValue$ClassValueMap");
	klass["$assertionsDisabled"] = null;
	proto["<init>(Ljava/lang/Class;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue$ClassValueMap#<init>(Ljava/lang/Class;)V");
	};
	proto["getCache()[Ljava/lang/ClassValue$Entry;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue$ClassValueMap#getCache()[Ljava/lang/ClassValue$Entry;");
	};
	proto["startEntry(Ljava/lang/ClassValue;)Ljava/lang/ClassValue$Entry;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue$ClassValueMap#startEntry(Ljava/lang/ClassValue;)Ljava/lang/ClassValue$Entry;");
	};
	proto["finishEntry(Ljava/lang/ClassValue;Ljava/lang/ClassValue$Entry;)Ljava/lang/ClassValue$Entry;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue$ClassValueMap#finishEntry(Ljava/lang/ClassValue;Ljava/lang/ClassValue$Entry;)Ljava/lang/ClassValue$Entry;");
	};
	proto["removeEntry(Ljava/lang/ClassValue;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue$ClassValueMap#removeEntry(Ljava/lang/ClassValue;)V");
	};
	proto["changeEntry(Ljava/lang/ClassValue;Ljava/lang/Object;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassValue$ClassValueMap#changeEntry(Ljava/lang/ClassValue;Ljava/lang/Object;)V");
	};
	klass["loadFromCache([Ljava/lang/ClassValue$Entry;I)Ljava/lang/ClassValue$Entry;"] = function(arr_ref0,i1){
		var self = null;
		throw new Error("NotImplemented: java/lang/ClassValue$ClassValueMap#loadFromCache([Ljava/lang/ClassValue$Entry;I)Ljava/lang/ClassValue$Entry;");
	};
	klass["probeHomeLocation([Ljava/lang/ClassValue$Entry;Ljava/lang/ClassValue;)Ljava/lang/ClassValue$Entry;"] = function(arr_ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/lang/ClassValue$ClassValueMap#probeHomeLocation([Ljava/lang/ClassValue$Entry;Ljava/lang/ClassValue;)Ljava/lang/ClassValue$Entry;");
	};
	klass["probeBackupLocations([Ljava/lang/ClassValue$Entry;Ljava/lang/ClassValue;)Ljava/lang/ClassValue$Entry;"] = function(arr_ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/lang/ClassValue$ClassValueMap#probeBackupLocations([Ljava/lang/ClassValue$Entry;Ljava/lang/ClassValue;)Ljava/lang/ClassValue$Entry;");
	};

});

//"java/lang/Class$ReflectionData"
Java["java/lang/Class$ReflectionData"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Class$ReflectionData");
	proto["declaredFields"] = null;
	proto["publicFields"] = null;
	proto["declaredMethods"] = null;
	proto["publicMethods"] = null;
	proto["declaredConstructors"] = null;
	proto["publicConstructors"] = null;
	proto["declaredPublicFields"] = null;
	proto["declaredPublicMethods"] = null;
	proto["redefinedCount"] = null;
	proto["<init>(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class$ReflectionData#<init>(I)V");
	};

});

//"java/lang/Class$EnclosingMethodInfo"
Java["java/lang/Class$EnclosingMethodInfo"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Class$EnclosingMethodInfo");
	klass["$assertionsDisabled"] = null;
	proto["isPartial()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class$EnclosingMethodInfo#isPartial()Z");
	};
	proto["isConstructor()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class$EnclosingMethodInfo#isConstructor()Z");
	};
	proto["isMethod()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class$EnclosingMethodInfo#isMethod()Z");
	};
	proto["getEnclosingClass()Ljava/lang/Class;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class$EnclosingMethodInfo#getEnclosingClass()Ljava/lang/Class;");
	};
	proto["getName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class$EnclosingMethodInfo#getName()Ljava/lang/String;");
	};
	proto["getDescriptor()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class$EnclosingMethodInfo#getDescriptor()Ljava/lang/String;");
	};
	proto["<init>([Ljava/lang/Object;Ljava/lang/Class$1;)V"] = function(arr_ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class$EnclosingMethodInfo#<init>([Ljava/lang/Object;Ljava/lang/Class$1;)V");
	};

});

//"sun/util/resources/OpenListResourceBundle"
Java["sun/util/resources/OpenListResourceBundle"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/util/ResourceBundle"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/util/resources/OpenListResourceBundle");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/resources/OpenListResourceBundle#<init>()V");
	};
	proto["handleGetObject(Ljava/lang/String;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/resources/OpenListResourceBundle#handleGetObject(Ljava/lang/String;)Ljava/lang/Object;");
	};
	proto["getKeys()Ljava/util/Enumeration;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/resources/OpenListResourceBundle#getKeys()Ljava/util/Enumeration;");
	};
	proto["handleGetKeys()Ljava/util/Set;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/resources/OpenListResourceBundle#handleGetKeys()Ljava/util/Set;");
	};
	proto["getParent()Lsun/util/resources/OpenListResourceBundle;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/resources/OpenListResourceBundle#getParent()Lsun/util/resources/OpenListResourceBundle;");
	};
	proto["getContents()[[Ljava/lang/Object;"] = null;
	proto["loadLookupTablesIfNecessary()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/resources/OpenListResourceBundle#loadLookupTablesIfNecessary()V");
	};
	proto["createMap(I)Ljava/util/Map;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/util/resources/OpenListResourceBundle#createMap(I)Ljava/util/Map;");
	};

});

//"sun/util/locale/LocaleExtensions"
Java["sun/util/locale/LocaleExtensions"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/util/locale/LocaleExtensions");
	klass["CALENDAR_JAPANESE"] = null;
	klass["NUMBER_THAI"] = null;
	klass["$assertionsDisabled"] = null;
	proto["<init>(Ljava/util/Map;Ljava/util/Set;Ljava/util/Map;)V"] = function(ref0,ref1,ref2){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/LocaleExtensions#<init>(Ljava/util/Map;Ljava/util/Set;Ljava/util/Map;)V");
	};
	proto["getKeys()Ljava/util/Set;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/LocaleExtensions#getKeys()Ljava/util/Set;");
	};
	proto["getExtension(Ljava/lang/Character;)Lsun/util/locale/Extension;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/LocaleExtensions#getExtension(Ljava/lang/Character;)Lsun/util/locale/Extension;");
	};
	proto["getExtensionValue(Ljava/lang/Character;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/LocaleExtensions#getExtensionValue(Ljava/lang/Character;)Ljava/lang/String;");
	};
	proto["getUnicodeLocaleAttributes()Ljava/util/Set;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/LocaleExtensions#getUnicodeLocaleAttributes()Ljava/util/Set;");
	};
	proto["getUnicodeLocaleKeys()Ljava/util/Set;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/LocaleExtensions#getUnicodeLocaleKeys()Ljava/util/Set;");
	};
	proto["getUnicodeLocaleType(Ljava/lang/String;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/LocaleExtensions#getUnicodeLocaleType(Ljava/lang/String;)Ljava/lang/String;");
	};
	proto["isEmpty()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/LocaleExtensions#isEmpty()Z");
	};
	klass["isValidKey(C)Z"] = function(ch0){
		var self = null;
		throw new Error("NotImplemented: sun/util/locale/LocaleExtensions#isValidKey(C)Z");
	};
	klass["isValidUnicodeLocaleKey(Ljava/lang/String;)Z"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: sun/util/locale/LocaleExtensions#isValidUnicodeLocaleKey(Ljava/lang/String;)Z");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/LocaleExtensions#toString()Ljava/lang/String;");
	};
	proto["getID()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/LocaleExtensions#getID()Ljava/lang/String;");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/LocaleExtensions#hashCode()I");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/LocaleExtensions#equals(Ljava/lang/Object;)Z");
	};

});

//"sun/util/locale/BaseLocale"
Java["sun/util/locale/BaseLocale"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/util/locale/BaseLocale");
	klass["SEP"] = ("_");
	klass["createInstance(Ljava/lang/String;Ljava/lang/String;)Lsun/util/locale/BaseLocale;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: sun/util/locale/BaseLocale#createInstance(Ljava/lang/String;Ljava/lang/String;)Lsun/util/locale/BaseLocale;");
	};
	klass["getInstance(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lsun/util/locale/BaseLocale;"] = function(ref0,ref1,ref2,ref3){
		var self = null;
		throw new Error("NotImplemented: sun/util/locale/BaseLocale#getInstance(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lsun/util/locale/BaseLocale;");
	};
	proto["getLanguage()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/BaseLocale#getLanguage()Ljava/lang/String;");
	};
	proto["getScript()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/BaseLocale#getScript()Ljava/lang/String;");
	};
	proto["getRegion()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/BaseLocale#getRegion()Ljava/lang/String;");
	};
	proto["getVariant()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/BaseLocale#getVariant()Ljava/lang/String;");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/BaseLocale#equals(Ljava/lang/Object;)Z");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/BaseLocale#toString()Ljava/lang/String;");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/BaseLocale#hashCode()I");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lsun/util/locale/BaseLocale$1;)V"] = function(ref0,ref1,ref2,ref3,ref4){
		var self = this;
		throw new Error("NotImplemented: sun/util/locale/BaseLocale#<init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lsun/util/locale/BaseLocale$1;)V");
	};

});

//"java/util/Locale$Category"
Java["java/util/Locale$Category"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Enum"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/Locale$Category");
	klass["DISPLAY"] = null;
	klass["FORMAT"] = null;
	proto["languageKey"] = null;
	proto["scriptKey"] = null;
	proto["countryKey"] = null;
	proto["variantKey"] = null;
	klass["values()[Ljava/util/Locale$Category;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/util/Locale$Category#values()[Ljava/util/Locale$Category;");
	};
	klass["valueOf(Ljava/lang/String;)Ljava/util/Locale$Category;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Locale$Category#valueOf(Ljava/lang/String;)Ljava/util/Locale$Category;");
	};

});

//"java/util/Locale$1"
Java["java/util/Locale$1"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/Locale$1");
	klass["$SwitchMap$java$util$Locale$Category"] = null;

});

//"java/text/MessageFormat"
Java["java/text/MessageFormat"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/text/Format"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/text/MessageFormat");

	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/MessageFormat#<init>(Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/String;Ljava/util/Locale;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/text/MessageFormat#<init>(Ljava/lang/String;Ljava/util/Locale;)V");
	};
	proto["setLocale(Ljava/util/Locale;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/MessageFormat#setLocale(Ljava/util/Locale;)V");
	};
	proto["getLocale()Ljava/util/Locale;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/MessageFormat#getLocale()Ljava/util/Locale;");
	};
	proto["applyPattern(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/MessageFormat#applyPattern(Ljava/lang/String;)V");
	};
	proto["toPattern()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/MessageFormat#toPattern()Ljava/lang/String;");
	};
	proto["setFormatsByArgumentIndex([Ljava/text/Format;)V"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/MessageFormat#setFormatsByArgumentIndex([Ljava/text/Format;)V");
	};
	proto["setFormats([Ljava/text/Format;)V"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/MessageFormat#setFormats([Ljava/text/Format;)V");
	};
	proto["setFormatByArgumentIndex(ILjava/text/Format;)V"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/text/MessageFormat#setFormatByArgumentIndex(ILjava/text/Format;)V");
	};
	proto["setFormat(ILjava/text/Format;)V"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/text/MessageFormat#setFormat(ILjava/text/Format;)V");
	};
	proto["getFormatsByArgumentIndex()[Ljava/text/Format;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/MessageFormat#getFormatsByArgumentIndex()[Ljava/text/Format;");
	};
	proto["getFormats()[Ljava/text/Format;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/MessageFormat#getFormats()[Ljava/text/Format;");
	};
	proto["format([Ljava/lang/Object;Ljava/lang/StringBuffer;Ljava/text/FieldPosition;)Ljava/lang/StringBuffer;"] = function(arr_ref0,ref1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/text/MessageFormat#format([Ljava/lang/Object;Ljava/lang/StringBuffer;Ljava/text/FieldPosition;)Ljava/lang/StringBuffer;");
	};
	klass["format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;"] = function(ref0,arr_ref1){
		var self = null;
		throw new Error("NotImplemented: java/text/MessageFormat#format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;");
	};
	proto["format(Ljava/lang/Object;Ljava/lang/StringBuffer;Ljava/text/FieldPosition;)Ljava/lang/StringBuffer;"] = function(ref0,ref1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/text/MessageFormat#format(Ljava/lang/Object;Ljava/lang/StringBuffer;Ljava/text/FieldPosition;)Ljava/lang/StringBuffer;");
	};
	proto["formatToCharacterIterator(Ljava/lang/Object;)Ljava/text/AttributedCharacterIterator;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/MessageFormat#formatToCharacterIterator(Ljava/lang/Object;)Ljava/text/AttributedCharacterIterator;");
	};
	proto["parse(Ljava/lang/String;Ljava/text/ParsePosition;)[Ljava/lang/Object;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/text/MessageFormat#parse(Ljava/lang/String;Ljava/text/ParsePosition;)[Ljava/lang/Object;");
	};
	proto["parse(Ljava/lang/String;)[Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/MessageFormat#parse(Ljava/lang/String;)[Ljava/lang/Object;");
	};
	proto["parseObject(Ljava/lang/String;Ljava/text/ParsePosition;)Ljava/lang/Object;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/text/MessageFormat#parseObject(Ljava/lang/String;Ljava/text/ParsePosition;)Ljava/lang/Object;");
	};
	proto["clone()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/MessageFormat#clone()Ljava/lang/Object;");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/MessageFormat#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/MessageFormat#hashCode()I");
	};

});

//"java/util/SortedMap"
Java["java/util/SortedMap"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/SortedMap");

	proto["comparator()Ljava/util/Comparator;"] = null;
	proto["subMap(Ljava/lang/Object;Ljava/lang/Object;)Ljava/util/SortedMap;"] = null;
	proto["headMap(Ljava/lang/Object;)Ljava/util/SortedMap;"] = null;
	proto["tailMap(Ljava/lang/Object;)Ljava/util/SortedMap;"] = null;
	proto["firstKey()Ljava/lang/Object;"] = null;
	proto["lastKey()Ljava/lang/Object;"] = null;
	proto["keySet()Ljava/util/Set;"] = null;
	proto["values()Ljava/util/Collection;"] = null;
	proto["entrySet()Ljava/util/Set;"] = null;

});

//"java/nio/charset/spi/CharsetProvider"
Java["java/nio/charset/spi/CharsetProvider"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/charset/spi/CharsetProvider");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/spi/CharsetProvider#<init>()V");
	};
	proto["charsets()Ljava/util/Iterator;"] = null;
	proto["charsetForName(Ljava/lang/String;)Ljava/nio/charset/Charset;"] = null;

});

//"java/nio/charset/CharsetEncoder"
Java["java/nio/charset/CharsetEncoder"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/charset/CharsetEncoder");
	klass["$assertionsDisabled"] = null;
	proto["<init>(Ljava/nio/charset/Charset;FF[B)V"] = function(ref0,flt1,flt2,arr_sb3){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetEncoder#<init>(Ljava/nio/charset/Charset;FF[B)V");
	};
	proto["<init>(Ljava/nio/charset/Charset;FF)V"] = function(ref0,flt1,flt2){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetEncoder#<init>(Ljava/nio/charset/Charset;FF)V");
	};
	proto["charset()Ljava/nio/charset/Charset;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetEncoder#charset()Ljava/nio/charset/Charset;");
	};
	proto["replacement()[B"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetEncoder#replacement()[B");
	};
	proto["replaceWith([B)Ljava/nio/charset/CharsetEncoder;"] = function(arr_sb0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetEncoder#replaceWith([B)Ljava/nio/charset/CharsetEncoder;");
	};
	proto["implReplaceWith([B)V"] = function(arr_sb0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetEncoder#implReplaceWith([B)V");
	};
	proto["isLegalReplacement([B)Z"] = function(arr_sb0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetEncoder#isLegalReplacement([B)Z");
	};
	proto["malformedInputAction()Ljava/nio/charset/CodingErrorAction;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetEncoder#malformedInputAction()Ljava/nio/charset/CodingErrorAction;");
	};
	proto["onMalformedInput(Ljava/nio/charset/CodingErrorAction;)Ljava/nio/charset/CharsetEncoder;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetEncoder#onMalformedInput(Ljava/nio/charset/CodingErrorAction;)Ljava/nio/charset/CharsetEncoder;");
	};
	proto["implOnMalformedInput(Ljava/nio/charset/CodingErrorAction;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetEncoder#implOnMalformedInput(Ljava/nio/charset/CodingErrorAction;)V");
	};
	proto["unmappableCharacterAction()Ljava/nio/charset/CodingErrorAction;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetEncoder#unmappableCharacterAction()Ljava/nio/charset/CodingErrorAction;");
	};
	proto["onUnmappableCharacter(Ljava/nio/charset/CodingErrorAction;)Ljava/nio/charset/CharsetEncoder;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetEncoder#onUnmappableCharacter(Ljava/nio/charset/CodingErrorAction;)Ljava/nio/charset/CharsetEncoder;");
	};
	proto["implOnUnmappableCharacter(Ljava/nio/charset/CodingErrorAction;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetEncoder#implOnUnmappableCharacter(Ljava/nio/charset/CodingErrorAction;)V");
	};
	proto["averageBytesPerChar()F"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetEncoder#averageBytesPerChar()F");
	};
	proto["maxBytesPerChar()F"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetEncoder#maxBytesPerChar()F");
	};
	proto["encode(Ljava/nio/CharBuffer;Ljava/nio/ByteBuffer;Z)Ljava/nio/charset/CoderResult;"] = function(ref0,ref1,b2){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetEncoder#encode(Ljava/nio/CharBuffer;Ljava/nio/ByteBuffer;Z)Ljava/nio/charset/CoderResult;");
	};
	proto["flush(Ljava/nio/ByteBuffer;)Ljava/nio/charset/CoderResult;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetEncoder#flush(Ljava/nio/ByteBuffer;)Ljava/nio/charset/CoderResult;");
	};
	proto["implFlush(Ljava/nio/ByteBuffer;)Ljava/nio/charset/CoderResult;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetEncoder#implFlush(Ljava/nio/ByteBuffer;)Ljava/nio/charset/CoderResult;");
	};
	proto["reset()Ljava/nio/charset/CharsetEncoder;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetEncoder#reset()Ljava/nio/charset/CharsetEncoder;");
	};
	proto["implReset()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetEncoder#implReset()V");
	};
	proto["encodeLoop(Ljava/nio/CharBuffer;Ljava/nio/ByteBuffer;)Ljava/nio/charset/CoderResult;"] = null;
	proto["encode(Ljava/nio/CharBuffer;)Ljava/nio/ByteBuffer;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetEncoder#encode(Ljava/nio/CharBuffer;)Ljava/nio/ByteBuffer;");
	};
	proto["canEncode(C)Z"] = function(ch0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetEncoder#canEncode(C)Z");
	};
	proto["canEncode(Ljava/lang/CharSequence;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetEncoder#canEncode(Ljava/lang/CharSequence;)Z");
	};

});

//"java/nio/charset/CharsetDecoder"
Java["java/nio/charset/CharsetDecoder"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/charset/CharsetDecoder");
	klass["$assertionsDisabled"] = null;
	proto["<init>(Ljava/nio/charset/Charset;FF)V"] = function(ref0,flt1,flt2){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetDecoder#<init>(Ljava/nio/charset/Charset;FF)V");
	};
	proto["charset()Ljava/nio/charset/Charset;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetDecoder#charset()Ljava/nio/charset/Charset;");
	};
	proto["replacement()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetDecoder#replacement()Ljava/lang/String;");
	};
	proto["replaceWith(Ljava/lang/String;)Ljava/nio/charset/CharsetDecoder;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetDecoder#replaceWith(Ljava/lang/String;)Ljava/nio/charset/CharsetDecoder;");
	};
	proto["implReplaceWith(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetDecoder#implReplaceWith(Ljava/lang/String;)V");
	};
	proto["malformedInputAction()Ljava/nio/charset/CodingErrorAction;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetDecoder#malformedInputAction()Ljava/nio/charset/CodingErrorAction;");
	};
	proto["onMalformedInput(Ljava/nio/charset/CodingErrorAction;)Ljava/nio/charset/CharsetDecoder;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetDecoder#onMalformedInput(Ljava/nio/charset/CodingErrorAction;)Ljava/nio/charset/CharsetDecoder;");
	};
	proto["implOnMalformedInput(Ljava/nio/charset/CodingErrorAction;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetDecoder#implOnMalformedInput(Ljava/nio/charset/CodingErrorAction;)V");
	};
	proto["unmappableCharacterAction()Ljava/nio/charset/CodingErrorAction;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetDecoder#unmappableCharacterAction()Ljava/nio/charset/CodingErrorAction;");
	};
	proto["onUnmappableCharacter(Ljava/nio/charset/CodingErrorAction;)Ljava/nio/charset/CharsetDecoder;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetDecoder#onUnmappableCharacter(Ljava/nio/charset/CodingErrorAction;)Ljava/nio/charset/CharsetDecoder;");
	};
	proto["implOnUnmappableCharacter(Ljava/nio/charset/CodingErrorAction;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetDecoder#implOnUnmappableCharacter(Ljava/nio/charset/CodingErrorAction;)V");
	};
	proto["averageCharsPerByte()F"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetDecoder#averageCharsPerByte()F");
	};
	proto["maxCharsPerByte()F"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetDecoder#maxCharsPerByte()F");
	};
	proto["decode(Ljava/nio/ByteBuffer;Ljava/nio/CharBuffer;Z)Ljava/nio/charset/CoderResult;"] = function(ref0,ref1,b2){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetDecoder#decode(Ljava/nio/ByteBuffer;Ljava/nio/CharBuffer;Z)Ljava/nio/charset/CoderResult;");
	};
	proto["flush(Ljava/nio/CharBuffer;)Ljava/nio/charset/CoderResult;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetDecoder#flush(Ljava/nio/CharBuffer;)Ljava/nio/charset/CoderResult;");
	};
	proto["implFlush(Ljava/nio/CharBuffer;)Ljava/nio/charset/CoderResult;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetDecoder#implFlush(Ljava/nio/CharBuffer;)Ljava/nio/charset/CoderResult;");
	};
	proto["reset()Ljava/nio/charset/CharsetDecoder;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetDecoder#reset()Ljava/nio/charset/CharsetDecoder;");
	};
	proto["implReset()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetDecoder#implReset()V");
	};
	proto["decodeLoop(Ljava/nio/ByteBuffer;Ljava/nio/CharBuffer;)Ljava/nio/charset/CoderResult;"] = null;
	proto["decode(Ljava/nio/ByteBuffer;)Ljava/nio/CharBuffer;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetDecoder#decode(Ljava/nio/ByteBuffer;)Ljava/nio/CharBuffer;");
	};
	proto["isAutoDetecting()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetDecoder#isAutoDetecting()Z");
	};
	proto["isCharsetDetected()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetDecoder#isCharsetDetected()Z");
	};
	proto["detectedCharset()Ljava/nio/charset/Charset;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/CharsetDecoder#detectedCharset()Ljava/nio/charset/Charset;");
	};

});

//"java/nio/CharBuffer"
Java["java/nio/CharBuffer"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/nio/Buffer"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/CharBuffer");
	proto["hb"] = null;
	proto["offset"] = null;
	proto["isReadOnly"] = null;
	proto["<init>(IIII[CI)V"] = function(i0,i1,i2,i3,arr_ch4,i5){
		var self = this;
		throw new Error("NotImplemented: java/nio/CharBuffer#<init>(IIII[CI)V");
	};
	proto["<init>(IIII)V"] = function(i0,i1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: java/nio/CharBuffer#<init>(IIII)V");
	};
	klass["allocate(I)Ljava/nio/CharBuffer;"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/nio/CharBuffer#allocate(I)Ljava/nio/CharBuffer;");
	};
	klass["wrap([CII)Ljava/nio/CharBuffer;"] = function(arr_ch0,i1,i2){
		var self = null;
		throw new Error("NotImplemented: java/nio/CharBuffer#wrap([CII)Ljava/nio/CharBuffer;");
	};
	klass["wrap([C)Ljava/nio/CharBuffer;"] = function(arr_ch0){
		var self = null;
		throw new Error("NotImplemented: java/nio/CharBuffer#wrap([C)Ljava/nio/CharBuffer;");
	};
	proto["read(Ljava/nio/CharBuffer;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/CharBuffer#read(Ljava/nio/CharBuffer;)I");
	};
	klass["wrap(Ljava/lang/CharSequence;II)Ljava/nio/CharBuffer;"] = function(ref0,i1,i2){
		var self = null;
		throw new Error("NotImplemented: java/nio/CharBuffer#wrap(Ljava/lang/CharSequence;II)Ljava/nio/CharBuffer;");
	};
	klass["wrap(Ljava/lang/CharSequence;)Ljava/nio/CharBuffer;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/nio/CharBuffer#wrap(Ljava/lang/CharSequence;)Ljava/nio/CharBuffer;");
	};
	proto["slice()Ljava/nio/CharBuffer;"] = null;
	proto["duplicate()Ljava/nio/CharBuffer;"] = null;
	proto["asReadOnlyBuffer()Ljava/nio/CharBuffer;"] = null;
	proto["get()C"] = null;
	proto["put(C)Ljava/nio/CharBuffer;"] = null;
	proto["get(I)C"] = null;
	proto["put(IC)Ljava/nio/CharBuffer;"] = null;
	proto["get([CII)Ljava/nio/CharBuffer;"] = null;
	proto["get([C)Ljava/nio/CharBuffer;"] = null;
	proto["put(Ljava/nio/CharBuffer;)Ljava/nio/CharBuffer;"] = null;
	proto["put([CII)Ljava/nio/CharBuffer;"] = null;
	proto["put([C)Ljava/nio/CharBuffer;"] = null;
	proto["put(Ljava/lang/String;II)Ljava/nio/CharBuffer;"] = null;
	proto["put(Ljava/lang/String;)Ljava/nio/CharBuffer;"] = null;
	proto["hasArray()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/CharBuffer#hasArray()Z");
	};
	proto["array()[C"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/CharBuffer#array()[C");
	};
	proto["arrayOffset()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/CharBuffer#arrayOffset()I");
	};
	proto["compact()Ljava/nio/CharBuffer;"] = null;
	proto["isDirect()Z"] = null;
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/CharBuffer#hashCode()I");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/CharBuffer#equals(Ljava/lang/Object;)Z");
	};
	proto["compareTo(Ljava/nio/CharBuffer;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/CharBuffer#compareTo(Ljava/nio/CharBuffer;)I");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/CharBuffer#toString()Ljava/lang/String;");
	};
	proto["toString(II)Ljava/lang/String;"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/nio/CharBuffer#toString(II)Ljava/lang/String;");
	};
	proto["length()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/CharBuffer#length()I");
	};
	proto["charAt(I)C"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/nio/CharBuffer#charAt(I)C");
	};
	proto["subSequence(II)Ljava/nio/CharBuffer;"] = null;
	proto["append(Ljava/lang/CharSequence;)Ljava/nio/CharBuffer;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/CharBuffer#append(Ljava/lang/CharSequence;)Ljava/nio/CharBuffer;");
	};
	proto["append(Ljava/lang/CharSequence;II)Ljava/nio/CharBuffer;"] = function(ref0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/nio/CharBuffer#append(Ljava/lang/CharSequence;II)Ljava/nio/CharBuffer;");
	};
	proto["append(C)Ljava/nio/CharBuffer;"] = function(ch0){
		var self = this;
		throw new Error("NotImplemented: java/nio/CharBuffer#append(C)Ljava/nio/CharBuffer;");
	};
	proto["order()Ljava/nio/ByteOrder;"] = null;
	proto["array()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/CharBuffer#array()Ljava/lang/Object;");
	};
	proto["compareTo(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/CharBuffer#compareTo(Ljava/lang/Object;)I");
	};
	proto["append(C)Ljava/lang/Appendable;"] = function(ch0){
		var self = this;
		throw new Error("NotImplemented: java/nio/CharBuffer#append(C)Ljava/lang/Appendable;");
	};
	proto["append(Ljava/lang/CharSequence;II)Ljava/lang/Appendable;"] = function(ref0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/nio/CharBuffer#append(Ljava/lang/CharSequence;II)Ljava/lang/Appendable;");
	};
	proto["append(Ljava/lang/CharSequence;)Ljava/lang/Appendable;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/CharBuffer#append(Ljava/lang/CharSequence;)Ljava/lang/Appendable;");
	};
	proto["subSequence(II)Ljava/lang/CharSequence;"] = null;

});

//"java/nio/ByteBuffer"
Java["java/nio/ByteBuffer"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/nio/Buffer"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/ByteBuffer");
	proto["hb"] = null;
	proto["offset"] = null;
	proto["isReadOnly"] = null;
	proto["bigEndian"] = null;
	proto["nativeByteOrder"] = null;
	proto["<init>(IIII[BI)V"] = function(i0,i1,i2,i3,arr_sb4,i5){
		var self = this;
		throw new Error("NotImplemented: java/nio/ByteBuffer#<init>(IIII[BI)V");
	};
	proto["<init>(IIII)V"] = function(i0,i1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: java/nio/ByteBuffer#<init>(IIII)V");
	};
	klass["allocateDirect(I)Ljava/nio/ByteBuffer;"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/nio/ByteBuffer#allocateDirect(I)Ljava/nio/ByteBuffer;");
	};
	klass["allocate(I)Ljava/nio/ByteBuffer;"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/nio/ByteBuffer#allocate(I)Ljava/nio/ByteBuffer;");
	};
	klass["wrap([BII)Ljava/nio/ByteBuffer;"] = function(arr_sb0,i1,i2){
		var self = null;
		throw new Error("NotImplemented: java/nio/ByteBuffer#wrap([BII)Ljava/nio/ByteBuffer;");
	};
	klass["wrap([B)Ljava/nio/ByteBuffer;"] = function(arr_sb0){
		var self = null;
		throw new Error("NotImplemented: java/nio/ByteBuffer#wrap([B)Ljava/nio/ByteBuffer;");
	};
	proto["slice()Ljava/nio/ByteBuffer;"] = null;
	proto["duplicate()Ljava/nio/ByteBuffer;"] = null;
	proto["asReadOnlyBuffer()Ljava/nio/ByteBuffer;"] = null;
	proto["get()B"] = null;
	proto["put(B)Ljava/nio/ByteBuffer;"] = null;
	proto["get(I)B"] = null;
	proto["put(IB)Ljava/nio/ByteBuffer;"] = null;
	proto["get([BII)Ljava/nio/ByteBuffer;"] = null;
	proto["get([B)Ljava/nio/ByteBuffer;"] = null;
	proto["put(Ljava/nio/ByteBuffer;)Ljava/nio/ByteBuffer;"] = null;
	proto["put([BII)Ljava/nio/ByteBuffer;"] = null;
	proto["put([B)Ljava/nio/ByteBuffer;"] = null;
	proto["hasArray()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/ByteBuffer#hasArray()Z");
	};
	proto["array()[B"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/ByteBuffer#array()[B");
	};
	proto["arrayOffset()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/ByteBuffer#arrayOffset()I");
	};
	proto["compact()Ljava/nio/ByteBuffer;"] = null;
	proto["isDirect()Z"] = null;
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/ByteBuffer#toString()Ljava/lang/String;");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/ByteBuffer#hashCode()I");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/ByteBuffer#equals(Ljava/lang/Object;)Z");
	};
	proto["compareTo(Ljava/nio/ByteBuffer;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/ByteBuffer#compareTo(Ljava/nio/ByteBuffer;)I");
	};
	proto["order()Ljava/nio/ByteOrder;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/ByteBuffer#order()Ljava/nio/ByteOrder;");
	};
	proto["order(Ljava/nio/ByteOrder;)Ljava/nio/ByteBuffer;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/ByteBuffer#order(Ljava/nio/ByteOrder;)Ljava/nio/ByteBuffer;");
	};
	proto["_get(I)B"] = null;
	proto["_put(IB)V"] = null;
	proto["getChar()C"] = null;
	proto["putChar(C)Ljava/nio/ByteBuffer;"] = null;
	proto["getChar(I)C"] = null;
	proto["putChar(IC)Ljava/nio/ByteBuffer;"] = null;
	proto["asCharBuffer()Ljava/nio/CharBuffer;"] = null;
	proto["getShort()S"] = null;
	proto["putShort(S)Ljava/nio/ByteBuffer;"] = null;
	proto["getShort(I)S"] = null;
	proto["putShort(IS)Ljava/nio/ByteBuffer;"] = null;
	proto["asShortBuffer()Ljava/nio/ShortBuffer;"] = null;
	proto["getInt()I"] = null;
	proto["putInt(I)Ljava/nio/ByteBuffer;"] = null;
	proto["getInt(I)I"] = null;
	proto["putInt(II)Ljava/nio/ByteBuffer;"] = null;
	proto["asIntBuffer()Ljava/nio/IntBuffer;"] = null;
	proto["getLong()J"] = null;
	proto["putLong(J)Ljava/nio/ByteBuffer;"] = null;
	proto["getLong(I)J"] = null;
	proto["putLong(IJ)Ljava/nio/ByteBuffer;"] = null;
	proto["asLongBuffer()Ljava/nio/LongBuffer;"] = null;
	proto["getFloat()F"] = null;
	proto["putFloat(F)Ljava/nio/ByteBuffer;"] = null;
	proto["getFloat(I)F"] = null;
	proto["putFloat(IF)Ljava/nio/ByteBuffer;"] = null;
	proto["asFloatBuffer()Ljava/nio/FloatBuffer;"] = null;
	proto["getDouble()D"] = null;
	proto["putDouble(D)Ljava/nio/ByteBuffer;"] = null;
	proto["getDouble(I)D"] = null;
	proto["putDouble(ID)Ljava/nio/ByteBuffer;"] = null;
	proto["asDoubleBuffer()Ljava/nio/DoubleBuffer;"] = null;
	proto["array()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/ByteBuffer#array()Ljava/lang/Object;");
	};
	proto["compareTo(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/ByteBuffer#compareTo(Ljava/lang/Object;)I");
	};

});

//"java/lang/AbstractStringBuilder"
Java["java/lang/AbstractStringBuilder"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/AbstractStringBuilder");
	proto["value"] = null;
	proto["count"] = null;
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#<init>()V");
	};
	proto["<init>(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#<init>(I)V");
	};
	proto["length()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#length()I");
	};
	proto["capacity()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#capacity()I");
	};
	proto["ensureCapacity(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#ensureCapacity(I)V");
	};
	proto["expandCapacity(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#expandCapacity(I)V");
	};
	proto["trimToSize()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#trimToSize()V");
	};
	proto["setLength(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#setLength(I)V");
	};
	proto["charAt(I)C"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#charAt(I)C");
	};
	proto["codePointAt(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#codePointAt(I)I");
	};
	proto["codePointBefore(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#codePointBefore(I)I");
	};
	proto["codePointCount(II)I"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#codePointCount(II)I");
	};
	proto["offsetByCodePoints(II)I"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#offsetByCodePoints(II)I");
	};
	proto["getChars(II[CI)V"] = function(i0,i1,arr_ch2,i3){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#getChars(II[CI)V");
	};
	proto["setCharAt(IC)V"] = function(i0,ch1){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#setCharAt(IC)V");
	};
	proto["append(Ljava/lang/Object;)Ljava/lang/AbstractStringBuilder;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#append(Ljava/lang/Object;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(Ljava/lang/String;)Ljava/lang/AbstractStringBuilder;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#append(Ljava/lang/String;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(Ljava/lang/StringBuffer;)Ljava/lang/AbstractStringBuilder;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#append(Ljava/lang/StringBuffer;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(Ljava/lang/CharSequence;)Ljava/lang/AbstractStringBuilder;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#append(Ljava/lang/CharSequence;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(Ljava/lang/CharSequence;II)Ljava/lang/AbstractStringBuilder;"] = function(ref0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#append(Ljava/lang/CharSequence;II)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append([C)Ljava/lang/AbstractStringBuilder;"] = function(arr_ch0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#append([C)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append([CII)Ljava/lang/AbstractStringBuilder;"] = function(arr_ch0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#append([CII)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(Z)Ljava/lang/AbstractStringBuilder;"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#append(Z)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(C)Ljava/lang/AbstractStringBuilder;"] = function(ch0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#append(C)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(I)Ljava/lang/AbstractStringBuilder;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#append(I)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(J)Ljava/lang/AbstractStringBuilder;"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#append(J)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(F)Ljava/lang/AbstractStringBuilder;"] = function(flt0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#append(F)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(D)Ljava/lang/AbstractStringBuilder;"] = function(db0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#append(D)Ljava/lang/AbstractStringBuilder;");
	};
	proto["delete(II)Ljava/lang/AbstractStringBuilder;"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#delete(II)Ljava/lang/AbstractStringBuilder;");
	};
	proto["appendCodePoint(I)Ljava/lang/AbstractStringBuilder;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#appendCodePoint(I)Ljava/lang/AbstractStringBuilder;");
	};
	proto["deleteCharAt(I)Ljava/lang/AbstractStringBuilder;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#deleteCharAt(I)Ljava/lang/AbstractStringBuilder;");
	};
	proto["replace(IILjava/lang/String;)Ljava/lang/AbstractStringBuilder;"] = function(i0,i1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#replace(IILjava/lang/String;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["substring(I)Ljava/lang/String;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#substring(I)Ljava/lang/String;");
	};
	proto["subSequence(II)Ljava/lang/CharSequence;"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#subSequence(II)Ljava/lang/CharSequence;");
	};
	proto["substring(II)Ljava/lang/String;"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#substring(II)Ljava/lang/String;");
	};
	proto["insert(I[CII)Ljava/lang/AbstractStringBuilder;"] = function(i0,arr_ch1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#insert(I[CII)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(ILjava/lang/Object;)Ljava/lang/AbstractStringBuilder;"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#insert(ILjava/lang/Object;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(ILjava/lang/String;)Ljava/lang/AbstractStringBuilder;"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#insert(ILjava/lang/String;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(I[C)Ljava/lang/AbstractStringBuilder;"] = function(i0,arr_ch1){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#insert(I[C)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(ILjava/lang/CharSequence;)Ljava/lang/AbstractStringBuilder;"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#insert(ILjava/lang/CharSequence;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(ILjava/lang/CharSequence;II)Ljava/lang/AbstractStringBuilder;"] = function(i0,ref1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#insert(ILjava/lang/CharSequence;II)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(IZ)Ljava/lang/AbstractStringBuilder;"] = function(i0,b1){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#insert(IZ)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(IC)Ljava/lang/AbstractStringBuilder;"] = function(i0,ch1){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#insert(IC)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(II)Ljava/lang/AbstractStringBuilder;"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#insert(II)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(IJ)Ljava/lang/AbstractStringBuilder;"] = function(i0,l1){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#insert(IJ)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(IF)Ljava/lang/AbstractStringBuilder;"] = function(i0,flt1){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#insert(IF)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(ID)Ljava/lang/AbstractStringBuilder;"] = function(i0,db1){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#insert(ID)Ljava/lang/AbstractStringBuilder;");
	};
	proto["indexOf(Ljava/lang/String;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#indexOf(Ljava/lang/String;)I");
	};
	proto["indexOf(Ljava/lang/String;I)I"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#indexOf(Ljava/lang/String;I)I");
	};
	proto["lastIndexOf(Ljava/lang/String;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#lastIndexOf(Ljava/lang/String;)I");
	};
	proto["lastIndexOf(Ljava/lang/String;I)I"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#lastIndexOf(Ljava/lang/String;I)I");
	};
	proto["reverse()Ljava/lang/AbstractStringBuilder;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#reverse()Ljava/lang/AbstractStringBuilder;");
	};
	proto["toString()Ljava/lang/String;"] = null;
	proto["getValue()[C"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#getValue()[C");
	};
	proto["append(C)Ljava/lang/Appendable;"] = function(ch0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#append(C)Ljava/lang/Appendable;");
	};
	proto["append(Ljava/lang/CharSequence;II)Ljava/lang/Appendable;"] = function(ref0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#append(Ljava/lang/CharSequence;II)Ljava/lang/Appendable;");
	};
	proto["append(Ljava/lang/CharSequence;)Ljava/lang/Appendable;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/AbstractStringBuilder#append(Ljava/lang/CharSequence;)Ljava/lang/Appendable;");
	};

});

//"java/util/Properties$LineReader"
Java["java/util/Properties$LineReader"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/Properties$LineReader");
	proto["inByteBuf"] = null;
	proto["inCharBuf"] = null;
	proto["lineBuf"] = null;
	proto["inLimit"] = null;
	proto["inOff"] = null;
	proto["inStream"] = null;
	proto["reader"] = null;
	proto["this$0"] = null;
	proto["<init>(Ljava/util/Properties;Ljava/io/InputStream;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/Properties$LineReader#<init>(Ljava/util/Properties;Ljava/io/InputStream;)V");
	};
	proto["<init>(Ljava/util/Properties;Ljava/io/Reader;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/Properties$LineReader#<init>(Ljava/util/Properties;Ljava/io/Reader;)V");
	};
	proto["readLine()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Properties$LineReader#readLine()I");
	};

});

//"java/util/Hashtable"
Java["java/util/Hashtable"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/util/Dictionary"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/Hashtable");
	klass["ALTERNATIVE_HASHING_THRESHOLD_DEFAULT"] = (2147483647);
	proto["hashSeed"] = null;
	proto.init = function(){

	};
	proto["initHashSeedAsNeeded(I)Z"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable#initHashSeedAsNeeded(I)Z");
	};
	proto["<init>(IF)V"] = function(i0,flt1){
		this.init();
	};
	proto["<init>(I)V"] = function(i0){
		this.init();
	};
	proto["<init>()V"] = function(){
		this.init();
	};
	proto["<init>(Ljava/util/Map;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable#<init>(Ljava/util/Map;)V");
	};
	proto["size()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable#size()I");
	};
	proto["isEmpty()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable#isEmpty()Z");
	};
	proto["keys()Ljava/util/Enumeration;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable#keys()Ljava/util/Enumeration;");
	};
	proto["elements()Ljava/util/Enumeration;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable#elements()Ljava/util/Enumeration;");
	};
	proto["contains(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable#contains(Ljava/lang/Object;)Z");
	};
	proto["containsValue(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable#containsValue(Ljava/lang/Object;)Z");
	};
	proto["containsKey(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable#containsKey(Ljava/lang/Object;)Z");
	};
	proto["get(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable#get(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["rehash()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable#rehash()V");
	};
	proto["put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable#put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["remove(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable#remove(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["putAll(Ljava/util/Map;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable#putAll(Ljava/util/Map;)V");
	};
	proto["clear()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable#clear()V");
	};
	proto["clone()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable#clone()Ljava/lang/Object;");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable#toString()Ljava/lang/String;");
	};
	proto["keySet()Ljava/util/Set;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable#keySet()Ljava/util/Set;");
	};
	proto["entrySet()Ljava/util/Set;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable#entrySet()Ljava/util/Set;");
	};
	proto["values()Ljava/util/Collection;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable#values()Ljava/util/Collection;");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Hashtable#hashCode()I");
	};
	klass["access$100(Ljava/util/Hashtable;I)Ljava/util/Iterator;"] = function(ref0,i1){
		var self = null;
		throw new Error("NotImplemented: java/util/Hashtable#access$100(Ljava/util/Hashtable;I)Ljava/util/Iterator;");
	};
	klass["access$200(Ljava/util/Hashtable;)I"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Hashtable#access$200(Ljava/util/Hashtable;)I");
	};
	klass["access$400(Ljava/util/Hashtable;)[Ljava/util/Hashtable$Entry;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Hashtable#access$400(Ljava/util/Hashtable;)[Ljava/util/Hashtable$Entry;");
	};
	klass["access$500(Ljava/util/Hashtable;Ljava/lang/Object;)I"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/Hashtable#access$500(Ljava/util/Hashtable;Ljava/lang/Object;)I");
	};
	klass["access$608(Ljava/util/Hashtable;)I"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Hashtable#access$608(Ljava/util/Hashtable;)I");
	};
	klass["access$210(Ljava/util/Hashtable;)I"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Hashtable#access$210(Ljava/util/Hashtable;)I");
	};
	klass["access$600(Ljava/util/Hashtable;)I"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Hashtable#access$600(Ljava/util/Hashtable;)I");
	};

});

//"java/io/Writer"
Java["java/io/Writer"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/Writer");
	proto["lock"] = null;
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/Writer#<init>()V");
	};
	proto["<init>(Ljava/lang/Object;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/Writer#<init>(Ljava/lang/Object;)V");
	};
	proto["write(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/Writer#write(I)V");
	};
	proto["write([C)V"] = function(arr_ch0){
		var self = this;
		throw new Error("NotImplemented: java/io/Writer#write([C)V");
	};
	proto["write([CII)V"] = function(arr_ch0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/Writer#write([CII)V");
	};
	proto["write(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/Writer#write(Ljava/lang/String;)V");
	};
	proto["write(Ljava/lang/String;II)V"] = function(ref0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/Writer#write(Ljava/lang/String;II)V");
	};
	proto["append(Ljava/lang/CharSequence;)Ljava/io/Writer;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/Writer#append(Ljava/lang/CharSequence;)Ljava/io/Writer;");
	};
	proto["append(Ljava/lang/CharSequence;II)Ljava/io/Writer;"] = function(ref0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/Writer#append(Ljava/lang/CharSequence;II)Ljava/io/Writer;");
	};
	proto["append(C)Ljava/io/Writer;"] = function(ch0){
		var self = this;
		throw new Error("NotImplemented: java/io/Writer#append(C)Ljava/io/Writer;");
	};
	proto["flush()V"] = null;
	proto["close()V"] = null;
	proto["append(C)Ljava/lang/Appendable;"] = function(ch0){
		var self = this;
		throw new Error("NotImplemented: java/io/Writer#append(C)Ljava/lang/Appendable;");
	};
	proto["append(Ljava/lang/CharSequence;II)Ljava/lang/Appendable;"] = function(ref0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/Writer#append(Ljava/lang/CharSequence;II)Ljava/lang/Appendable;");
	};
	proto["append(Ljava/lang/CharSequence;)Ljava/lang/Appendable;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/Writer#append(Ljava/lang/CharSequence;)Ljava/lang/Appendable;");
	};

});

//"java/io/BufferedWriter"
Java["java/io/BufferedWriter"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/io/Writer"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/BufferedWriter");

	proto["<init>(Ljava/io/Writer;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/BufferedWriter#<init>(Ljava/io/Writer;)V");
	};
	proto["<init>(Ljava/io/Writer;I)V"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/io/BufferedWriter#<init>(Ljava/io/Writer;I)V");
	};
	proto["flushBuffer()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/BufferedWriter#flushBuffer()V");
	};
	proto["write(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/BufferedWriter#write(I)V");
	};
	proto["write([CII)V"] = function(arr_ch0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/BufferedWriter#write([CII)V");
	};
	proto["write(Ljava/lang/String;II)V"] = function(ref0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/BufferedWriter#write(Ljava/lang/String;II)V");
	};
	proto["newLine()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/BufferedWriter#newLine()V");
	};
	proto["flush()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/BufferedWriter#flush()V");
	};
	proto["close()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/BufferedWriter#close()V");
	};

});

//"java/security/Permission"
Java["java/security/Permission"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/security/Permission");

	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/security/Permission#<init>(Ljava/lang/String;)V");
	};
	proto["checkGuard(Ljava/lang/Object;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/security/Permission#checkGuard(Ljava/lang/Object;)V");
	};
	proto["implies(Ljava/security/Permission;)Z"] = null;
	proto["equals(Ljava/lang/Object;)Z"] = null;
	proto["hashCode()I"] = null;
	proto["getName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/Permission#getName()Ljava/lang/String;");
	};
	proto["getActions()Ljava/lang/String;"] = null;
	proto["newPermissionCollection()Ljava/security/PermissionCollection;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/Permission#newPermissionCollection()Ljava/security/PermissionCollection;");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/security/Permission#toString()Ljava/lang/String;");
	};

});

//"java/net/InetAddress"
Java["java/net/InetAddress"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/net/InetAddress");
	klass["IPv4"] = (1);
	klass["IPv6"] = (2);
	klass["preferIPv6Address"] = null;
	proto["holder"] = null;
	klass["unknown_array"] = null;
	klass["impl"] = null;
	klass["$assertionsDisabled"] = null;
	proto["holder()Ljava/net/InetAddress$InetAddressHolder;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress#holder()Ljava/net/InetAddress$InetAddressHolder;");
	};
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress#<init>()V");
	};
	proto["isMulticastAddress()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress#isMulticastAddress()Z");
	};
	proto["isAnyLocalAddress()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress#isAnyLocalAddress()Z");
	};
	proto["isLoopbackAddress()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress#isLoopbackAddress()Z");
	};
	proto["isLinkLocalAddress()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress#isLinkLocalAddress()Z");
	};
	proto["isSiteLocalAddress()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress#isSiteLocalAddress()Z");
	};
	proto["isMCGlobal()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress#isMCGlobal()Z");
	};
	proto["isMCNodeLocal()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress#isMCNodeLocal()Z");
	};
	proto["isMCLinkLocal()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress#isMCLinkLocal()Z");
	};
	proto["isMCSiteLocal()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress#isMCSiteLocal()Z");
	};
	proto["isMCOrgLocal()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress#isMCOrgLocal()Z");
	};
	proto["isReachable(I)Z"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress#isReachable(I)Z");
	};
	proto["isReachable(Ljava/net/NetworkInterface;II)Z"] = function(ref0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress#isReachable(Ljava/net/NetworkInterface;II)Z");
	};
	proto["getHostName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress#getHostName()Ljava/lang/String;");
	};
	proto["getHostName(Z)Ljava/lang/String;"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress#getHostName(Z)Ljava/lang/String;");
	};
	proto["getCanonicalHostName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress#getCanonicalHostName()Ljava/lang/String;");
	};
	proto["getAddress()[B"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress#getAddress()[B");
	};
	proto["getHostAddress()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress#getHostAddress()Ljava/lang/String;");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress#hashCode()I");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress#equals(Ljava/lang/Object;)Z");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/net/InetAddress#toString()Ljava/lang/String;");
	};
	klass["getByAddress(Ljava/lang/String;[B)Ljava/net/InetAddress;"] = function(ref0,arr_sb1){
		var self = null;
		throw new Error("NotImplemented: java/net/InetAddress#getByAddress(Ljava/lang/String;[B)Ljava/net/InetAddress;");
	};
	klass["getByName(Ljava/lang/String;)Ljava/net/InetAddress;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/net/InetAddress#getByName(Ljava/lang/String;)Ljava/net/InetAddress;");
	};
	klass["getAllByName(Ljava/lang/String;)[Ljava/net/InetAddress;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/net/InetAddress#getAllByName(Ljava/lang/String;)[Ljava/net/InetAddress;");
	};
	klass["getLoopbackAddress()Ljava/net/InetAddress;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/InetAddress#getLoopbackAddress()Ljava/net/InetAddress;");
	};
	klass["getAllByName0(Ljava/lang/String;Z)[Ljava/net/InetAddress;"] = function(ref0,b1){
		var self = null;
		throw new Error("NotImplemented: java/net/InetAddress#getAllByName0(Ljava/lang/String;Z)[Ljava/net/InetAddress;");
	};
	klass["getByAddress([B)Ljava/net/InetAddress;"] = function(arr_sb0){
		var self = null;
		throw new Error("NotImplemented: java/net/InetAddress#getByAddress([B)Ljava/net/InetAddress;");
	};
	klass["getLocalHost()Ljava/net/InetAddress;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/InetAddress#getLocalHost()Ljava/net/InetAddress;");
	};
	klass["anyLocalAddress()Ljava/net/InetAddress;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/net/InetAddress#anyLocalAddress()Ljava/net/InetAddress;");
	};
	klass["loadImpl(Ljava/lang/String;)Ljava/net/InetAddressImpl;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/net/InetAddress#loadImpl(Ljava/lang/String;)Ljava/net/InetAddressImpl;");
	};

});

//"java/lang/ThreadGroup"
Java["java/lang/ThreadGroup"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/ThreadGroup");
	proto["name"] = null;
	proto["maxPriority"] = null;
	proto["destroyed"] = null;
	proto["daemon"] = null;
	proto["vmAllowSuspension"] = null;
	proto["nUnstartedThreads"] = null;
	proto["nthreads"] = null;
	proto["threads"] = null;
	proto["ngroups"] = null;
	proto["groups"] = null;
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#<init>(Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/ThreadGroup;Ljava/lang/String;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#<init>(Ljava/lang/ThreadGroup;Ljava/lang/String;)V");
	};
	proto["getName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#getName()Ljava/lang/String;");
	};
	proto["getParent()Ljava/lang/ThreadGroup;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#getParent()Ljava/lang/ThreadGroup;");
	};
	proto["getMaxPriority()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#getMaxPriority()I");
	};
	proto["isDaemon()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#isDaemon()Z");
	};
	proto["isDestroyed()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#isDestroyed()Z");
	};
	proto["setDaemon(Z)V"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#setDaemon(Z)V");
	};
	proto["setMaxPriority(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#setMaxPriority(I)V");
	};
	proto["parentOf(Ljava/lang/ThreadGroup;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#parentOf(Ljava/lang/ThreadGroup;)Z");
	};
	proto["checkAccess()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#checkAccess()V");
	};
	proto["activeCount()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#activeCount()I");
	};
	proto["enumerate([Ljava/lang/Thread;)I"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#enumerate([Ljava/lang/Thread;)I");
	};
	proto["enumerate([Ljava/lang/Thread;Z)I"] = function(arr_ref0,b1){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#enumerate([Ljava/lang/Thread;Z)I");
	};
	proto["activeGroupCount()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#activeGroupCount()I");
	};
	proto["enumerate([Ljava/lang/ThreadGroup;)I"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#enumerate([Ljava/lang/ThreadGroup;)I");
	};
	proto["enumerate([Ljava/lang/ThreadGroup;Z)I"] = function(arr_ref0,b1){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#enumerate([Ljava/lang/ThreadGroup;Z)I");
	};
	proto["stop()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#stop()V");
	};
	proto["interrupt()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#interrupt()V");
	};
	proto["suspend()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#suspend()V");
	};
	proto["resume()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#resume()V");
	};
	proto["destroy()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#destroy()V");
	};
	proto["addUnstarted()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#addUnstarted()V");
	};
	proto["add(Ljava/lang/Thread;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#add(Ljava/lang/Thread;)V");
	};
	proto["threadStartFailed(Ljava/lang/Thread;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#threadStartFailed(Ljava/lang/Thread;)V");
	};
	proto["threadTerminated(Ljava/lang/Thread;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#threadTerminated(Ljava/lang/Thread;)V");
	};
	proto["list()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#list()V");
	};
	proto["list(Ljava/io/PrintStream;I)V"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#list(Ljava/io/PrintStream;I)V");
	};
	proto["uncaughtException(Ljava/lang/Thread;Ljava/lang/Throwable;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#uncaughtException(Ljava/lang/Thread;Ljava/lang/Throwable;)V");
	};
	proto["allowThreadSuspension(Z)Z"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#allowThreadSuspension(Z)Z");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ThreadGroup#toString()Ljava/lang/String;");
	};

});

//"java/lang/Thread"
Java["java/lang/Thread"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Thread");
	proto["threadLocals"] = null;
	proto["inheritableThreadLocals"] = null;
	proto["parkBlocker"] = null;
	klass["MIN_PRIORITY"] = (1);
	klass["NORM_PRIORITY"] = (5);
	klass["MAX_PRIORITY"] = (10);
	proto["blockedOn(Lsun/nio/ch/Interruptible;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#blockedOn(Lsun/nio/ch/Interruptible;)V");
	};
	klass["currentThread()Ljava/lang/Thread;"] = function(){
		var self = null;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Thread#currentThread()Ljava/lang/Thread;");
	};
	klass["yield()V"] = function(){
		var self = null;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Thread#yield()V");
	};
	klass["sleep(J)V"] = function(l0){
		var self = null;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Thread#sleep(J)V");
	};
	klass["sleep(JI)V"] = null;
	proto["clone()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#clone()Ljava/lang/Object;");
	};
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#<init>()V");
	};
	proto["<init>(Ljava/lang/Runnable;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#<init>(Ljava/lang/Runnable;)V");
	};
	proto["<init>(Ljava/lang/Runnable;Ljava/security/AccessControlContext;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#<init>(Ljava/lang/Runnable;Ljava/security/AccessControlContext;)V");
	};
	proto["<init>(Ljava/lang/ThreadGroup;Ljava/lang/Runnable;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#<init>(Ljava/lang/ThreadGroup;Ljava/lang/Runnable;)V");
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#<init>(Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/ThreadGroup;Ljava/lang/String;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#<init>(Ljava/lang/ThreadGroup;Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/Runnable;Ljava/lang/String;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#<init>(Ljava/lang/Runnable;Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/ThreadGroup;Ljava/lang/Runnable;Ljava/lang/String;)V"] = function(ref0,ref1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#<init>(Ljava/lang/ThreadGroup;Ljava/lang/Runnable;Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/ThreadGroup;Ljava/lang/Runnable;Ljava/lang/String;J)V"] = function(ref0,ref1,ref2,l3){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#<init>(Ljava/lang/ThreadGroup;Ljava/lang/Runnable;Ljava/lang/String;J)V");
	};
	proto["start()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#start()V");
	};
	proto["run()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#run()V");
	};
	proto["stop()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#stop()V");
	};
	proto["stop(Ljava/lang/Throwable;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#stop(Ljava/lang/Throwable;)V");
	};
	proto["interrupt()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#interrupt()V");
	};
	klass["interrupted()Z"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/Thread#interrupted()Z");
	};
	proto["isInterrupted()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#isInterrupted()Z");
	};
	proto["destroy()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#destroy()V");
	};
	proto["isAlive()Z"] = function(){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Thread#isAlive()Z");
	};
	proto["suspend()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#suspend()V");
	};
	proto["resume()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#resume()V");
	};
	proto["setPriority(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#setPriority(I)V");
	};
	proto["getPriority()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#getPriority()I");
	};
	proto["setName(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#setName(Ljava/lang/String;)V");
	};
	proto["getName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#getName()Ljava/lang/String;");
	};
	proto["getThreadGroup()Ljava/lang/ThreadGroup;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#getThreadGroup()Ljava/lang/ThreadGroup;");
	};
	klass["activeCount()I"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/Thread#activeCount()I");
	};
	klass["enumerate([Ljava/lang/Thread;)I"] = function(arr_ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Thread#enumerate([Ljava/lang/Thread;)I");
	};
	proto["countStackFrames()I"] = function(){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Thread#countStackFrames()I");
	};
	proto["join(J)V"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#join(J)V");
	};
	proto["join(JI)V"] = function(l0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#join(JI)V");
	};
	proto["join()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#join()V");
	};
	klass["dumpStack()V"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/Thread#dumpStack()V");
	};
	proto["setDaemon(Z)V"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#setDaemon(Z)V");
	};
	proto["isDaemon()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#isDaemon()Z");
	};
	proto["checkAccess()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#checkAccess()V");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#toString()Ljava/lang/String;");
	};
	proto["getContextClassLoader()Ljava/lang/ClassLoader;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#getContextClassLoader()Ljava/lang/ClassLoader;");
	};
	proto["setContextClassLoader(Ljava/lang/ClassLoader;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#setContextClassLoader(Ljava/lang/ClassLoader;)V");
	};
	klass["holdsLock(Ljava/lang/Object;)Z"] = function(ref0){
		var self = null;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Thread#holdsLock(Ljava/lang/Object;)Z");
	};
	proto["getStackTrace()[Ljava/lang/StackTraceElement;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#getStackTrace()[Ljava/lang/StackTraceElement;");
	};
	klass["getAllStackTraces()Ljava/util/Map;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/Thread#getAllStackTraces()Ljava/util/Map;");
	};
	proto["getId()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#getId()J");
	};
	proto["getState()Ljava/lang/Thread$State;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#getState()Ljava/lang/Thread$State;");
	};
	klass["setDefaultUncaughtExceptionHandler(Ljava/lang/Thread$UncaughtExceptionHandler;)V"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Thread#setDefaultUncaughtExceptionHandler(Ljava/lang/Thread$UncaughtExceptionHandler;)V");
	};
	klass["getDefaultUncaughtExceptionHandler()Ljava/lang/Thread$UncaughtExceptionHandler;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/Thread#getDefaultUncaughtExceptionHandler()Ljava/lang/Thread$UncaughtExceptionHandler;");
	};
	proto["getUncaughtExceptionHandler()Ljava/lang/Thread$UncaughtExceptionHandler;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#getUncaughtExceptionHandler()Ljava/lang/Thread$UncaughtExceptionHandler;");
	};
	proto["setUncaughtExceptionHandler(Ljava/lang/Thread$UncaughtExceptionHandler;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Thread#setUncaughtExceptionHandler(Ljava/lang/Thread$UncaughtExceptionHandler;)V");
	};
	klass["processQueue(Ljava/lang/ref/ReferenceQueue;Ljava/util/concurrent/ConcurrentMap;)V"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Thread#processQueue(Ljava/lang/ref/ReferenceQueue;Ljava/util/concurrent/ConcurrentMap;)V");
	};

});

//"java/io/FileDescriptor"
Java["java/io/FileDescriptor"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/FileDescriptor");
	klass["in"] = null;
	klass["out"] = null;
	klass["err"] = null;
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/FileDescriptor#<init>()V");
	};
	proto["valid()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/FileDescriptor#valid()Z");
	};
	proto["sync()V"] = function(){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/io/FileDescriptor#sync()V");
	};
	proto["incrementAndGetUseCount()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/FileDescriptor#incrementAndGetUseCount()I");
	};
	proto["decrementAndGetUseCount()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/FileDescriptor#decrementAndGetUseCount()I");
	};
	klass["access$002(Ljava/io/FileDescriptor;I)I"] = function(ref0,i1){
		var self = null;
		throw new Error("NotImplemented: java/io/FileDescriptor#access$002(Ljava/io/FileDescriptor;I)I");
	};
	klass["access$000(Ljava/io/FileDescriptor;)I"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/FileDescriptor#access$000(Ljava/io/FileDescriptor;)I");
	};

});

//"java/lang/Appendable"
Java["java/lang/Appendable"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Appendable");

	proto["append(Ljava/lang/CharSequence;)Ljava/lang/Appendable;"] = null;
	proto["append(Ljava/lang/CharSequence;II)Ljava/lang/Appendable;"] = null;
	proto["append(C)Ljava/lang/Appendable;"] = null;

});

//"java/io/FilterOutputStream"
Java["java/io/FilterOutputStream"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/io/OutputStream"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/FilterOutputStream");
	proto["out"] = null;
	proto["<init>(Ljava/io/OutputStream;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/FilterOutputStream#<init>(Ljava/io/OutputStream;)V");
	};
	proto["write(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/FilterOutputStream#write(I)V");
	};
	proto["write([B)V"] = function(arr_sb0){
		var self = this;
		throw new Error("NotImplemented: java/io/FilterOutputStream#write([B)V");
	};
	proto["write([BII)V"] = function(arr_sb0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/FilterOutputStream#write([BII)V");
	};
	proto["flush()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/FilterOutputStream#flush()V");
	};
	proto["close()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/FilterOutputStream#close()V");
	};

});

//"java/io/File"
Java["java/io/File"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/File");
	klass["separatorChar"] = null;
	klass["separator"] = null;
	klass["pathSeparatorChar"] = null;
	klass["pathSeparator"] = null;
	klass["$assertionsDisabled"] = null;
	proto["isInvalid()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#isInvalid()Z");
	};
	proto["getPrefixLength()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#getPrefixLength()I");
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/File#<init>(Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/String;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/File#<init>(Ljava/lang/String;Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/io/File;Ljava/lang/String;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/File#<init>(Ljava/io/File;Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/net/URI;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/File#<init>(Ljava/net/URI;)V");
	};
	proto["getName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#getName()Ljava/lang/String;");
	};
	proto["getParent()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#getParent()Ljava/lang/String;");
	};
	proto["getParentFile()Ljava/io/File;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#getParentFile()Ljava/io/File;");
	};
	proto["getPath()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#getPath()Ljava/lang/String;");
	};
	proto["isAbsolute()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#isAbsolute()Z");
	};
	proto["getAbsolutePath()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#getAbsolutePath()Ljava/lang/String;");
	};
	proto["getAbsoluteFile()Ljava/io/File;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#getAbsoluteFile()Ljava/io/File;");
	};
	proto["getCanonicalPath()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#getCanonicalPath()Ljava/lang/String;");
	};
	proto["getCanonicalFile()Ljava/io/File;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#getCanonicalFile()Ljava/io/File;");
	};
	proto["toURL()Ljava/net/URL;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#toURL()Ljava/net/URL;");
	};
	proto["toURI()Ljava/net/URI;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#toURI()Ljava/net/URI;");
	};
	proto["canRead()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#canRead()Z");
	};
	proto["canWrite()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#canWrite()Z");
	};
	proto["exists()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#exists()Z");
	};
	proto["isDirectory()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#isDirectory()Z");
	};
	proto["isFile()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#isFile()Z");
	};
	proto["isHidden()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#isHidden()Z");
	};
	proto["lastModified()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#lastModified()J");
	};
	proto["length()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#length()J");
	};
	proto["createNewFile()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#createNewFile()Z");
	};
	proto["delete()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#delete()Z");
	};
	proto["deleteOnExit()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#deleteOnExit()V");
	};
	proto["list()[Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#list()[Ljava/lang/String;");
	};
	proto["list(Ljava/io/FilenameFilter;)[Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/File#list(Ljava/io/FilenameFilter;)[Ljava/lang/String;");
	};
	proto["listFiles()[Ljava/io/File;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#listFiles()[Ljava/io/File;");
	};
	proto["listFiles(Ljava/io/FilenameFilter;)[Ljava/io/File;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/File#listFiles(Ljava/io/FilenameFilter;)[Ljava/io/File;");
	};
	proto["listFiles(Ljava/io/FileFilter;)[Ljava/io/File;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/File#listFiles(Ljava/io/FileFilter;)[Ljava/io/File;");
	};
	proto["mkdir()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#mkdir()Z");
	};
	proto["mkdirs()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#mkdirs()Z");
	};
	proto["renameTo(Ljava/io/File;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/File#renameTo(Ljava/io/File;)Z");
	};
	proto["setLastModified(J)Z"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/io/File#setLastModified(J)Z");
	};
	proto["setReadOnly()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#setReadOnly()Z");
	};
	proto["setWritable(ZZ)Z"] = function(b0,b1){
		var self = this;
		throw new Error("NotImplemented: java/io/File#setWritable(ZZ)Z");
	};
	proto["setWritable(Z)Z"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/io/File#setWritable(Z)Z");
	};
	proto["setReadable(ZZ)Z"] = function(b0,b1){
		var self = this;
		throw new Error("NotImplemented: java/io/File#setReadable(ZZ)Z");
	};
	proto["setReadable(Z)Z"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/io/File#setReadable(Z)Z");
	};
	proto["setExecutable(ZZ)Z"] = function(b0,b1){
		var self = this;
		throw new Error("NotImplemented: java/io/File#setExecutable(ZZ)Z");
	};
	proto["setExecutable(Z)Z"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/io/File#setExecutable(Z)Z");
	};
	proto["canExecute()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#canExecute()Z");
	};
	klass["listRoots()[Ljava/io/File;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/io/File#listRoots()[Ljava/io/File;");
	};
	proto["getTotalSpace()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#getTotalSpace()J");
	};
	proto["getFreeSpace()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#getFreeSpace()J");
	};
	proto["getUsableSpace()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#getUsableSpace()J");
	};
	klass["createTempFile(Ljava/lang/String;Ljava/lang/String;Ljava/io/File;)Ljava/io/File;"] = function(ref0,ref1,ref2){
		var self = null;
		throw new Error("NotImplemented: java/io/File#createTempFile(Ljava/lang/String;Ljava/lang/String;Ljava/io/File;)Ljava/io/File;");
	};
	klass["createTempFile(Ljava/lang/String;Ljava/lang/String;)Ljava/io/File;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/io/File#createTempFile(Ljava/lang/String;Ljava/lang/String;)Ljava/io/File;");
	};
	proto["compareTo(Ljava/io/File;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/File#compareTo(Ljava/io/File;)I");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/File#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#hashCode()I");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#toString()Ljava/lang/String;");
	};
	proto["toPath()Ljava/nio/file/Path;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/File#toPath()Ljava/nio/file/Path;");
	};
	proto["compareTo(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/File#compareTo(Ljava/lang/Object;)I");
	};

});

//"java/io/Reader"
Java["java/io/Reader"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/Reader");
	proto["lock"] = null;
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/Reader#<init>()V");
	};
	proto["<init>(Ljava/lang/Object;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/Reader#<init>(Ljava/lang/Object;)V");
	};
	proto["read(Ljava/nio/CharBuffer;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/Reader#read(Ljava/nio/CharBuffer;)I");
	};
	proto["read()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/Reader#read()I");
	};
	proto["read([C)I"] = function(arr_ch0){
		var self = this;
		throw new Error("NotImplemented: java/io/Reader#read([C)I");
	};
	proto["read([CII)I"] = function(arr_ch0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/Reader#read([CII)I");
	};
	proto["skip(J)J"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/io/Reader#skip(J)J");
	};
	proto["ready()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/Reader#ready()Z");
	};
	proto["markSupported()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/Reader#markSupported()Z");
	};
	proto["mark(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/Reader#mark(I)V");
	};
	proto["reset()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/Reader#reset()V");
	};
	proto["close()V"] = null;

});

//"java/io/PrintWriter"
Java["java/io/PrintWriter"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/io/Writer"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/PrintWriter");
	proto["out"] = null;
	proto["<init>(Ljava/io/Writer;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#<init>(Ljava/io/Writer;)V");
	};
	proto["<init>(Ljava/io/Writer;Z)V"] = function(ref0,b1){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#<init>(Ljava/io/Writer;Z)V");
	};
	proto["<init>(Ljava/io/OutputStream;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#<init>(Ljava/io/OutputStream;)V");
	};
	proto["<init>(Ljava/io/OutputStream;Z)V"] = function(ref0,b1){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#<init>(Ljava/io/OutputStream;Z)V");
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#<init>(Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/String;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#<init>(Ljava/lang/String;Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/io/File;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#<init>(Ljava/io/File;)V");
	};
	proto["<init>(Ljava/io/File;Ljava/lang/String;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#<init>(Ljava/io/File;Ljava/lang/String;)V");
	};
	proto["flush()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#flush()V");
	};
	proto["close()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#close()V");
	};
	proto["checkError()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#checkError()Z");
	};
	proto["setError()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#setError()V");
	};
	proto["clearError()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#clearError()V");
	};
	proto["write(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#write(I)V");
	};
	proto["write([CII)V"] = function(arr_ch0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#write([CII)V");
	};
	proto["write([C)V"] = function(arr_ch0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#write([C)V");
	};
	proto["write(Ljava/lang/String;II)V"] = function(ref0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#write(Ljava/lang/String;II)V");
	};
	proto["write(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#write(Ljava/lang/String;)V");
	};
	proto["print(Z)V"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#print(Z)V");
	};
	proto["print(C)V"] = function(ch0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#print(C)V");
	};
	proto["print(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#print(I)V");
	};
	proto["print(J)V"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#print(J)V");
	};
	proto["print(F)V"] = function(flt0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#print(F)V");
	};
	proto["print(D)V"] = function(db0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#print(D)V");
	};
	proto["print([C)V"] = function(arr_ch0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#print([C)V");
	};
	proto["print(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#print(Ljava/lang/String;)V");
	};
	proto["print(Ljava/lang/Object;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#print(Ljava/lang/Object;)V");
	};
	proto["println()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#println()V");
	};
	proto["println(Z)V"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#println(Z)V");
	};
	proto["println(C)V"] = function(ch0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#println(C)V");
	};
	proto["println(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#println(I)V");
	};
	proto["println(J)V"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#println(J)V");
	};
	proto["println(F)V"] = function(flt0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#println(F)V");
	};
	proto["println(D)V"] = function(db0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#println(D)V");
	};
	proto["println([C)V"] = function(arr_ch0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#println([C)V");
	};
	proto["println(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#println(Ljava/lang/String;)V");
	};
	proto["println(Ljava/lang/Object;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#println(Ljava/lang/Object;)V");
	};
	proto["printf(Ljava/lang/String;[Ljava/lang/Object;)Ljava/io/PrintWriter;"] = function(ref0,arr_ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#printf(Ljava/lang/String;[Ljava/lang/Object;)Ljava/io/PrintWriter;");
	};
	proto["printf(Ljava/util/Locale;Ljava/lang/String;[Ljava/lang/Object;)Ljava/io/PrintWriter;"] = function(ref0,ref1,arr_ref2){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#printf(Ljava/util/Locale;Ljava/lang/String;[Ljava/lang/Object;)Ljava/io/PrintWriter;");
	};
	proto["format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/io/PrintWriter;"] = function(ref0,arr_ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/io/PrintWriter;");
	};
	proto["format(Ljava/util/Locale;Ljava/lang/String;[Ljava/lang/Object;)Ljava/io/PrintWriter;"] = function(ref0,ref1,arr_ref2){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#format(Ljava/util/Locale;Ljava/lang/String;[Ljava/lang/Object;)Ljava/io/PrintWriter;");
	};
	proto["append(Ljava/lang/CharSequence;)Ljava/io/PrintWriter;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#append(Ljava/lang/CharSequence;)Ljava/io/PrintWriter;");
	};
	proto["append(Ljava/lang/CharSequence;II)Ljava/io/PrintWriter;"] = function(ref0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#append(Ljava/lang/CharSequence;II)Ljava/io/PrintWriter;");
	};
	proto["append(C)Ljava/io/PrintWriter;"] = function(ch0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#append(C)Ljava/io/PrintWriter;");
	};
	proto["append(C)Ljava/io/Writer;"] = function(ch0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#append(C)Ljava/io/Writer;");
	};
	proto["append(Ljava/lang/CharSequence;II)Ljava/io/Writer;"] = function(ref0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#append(Ljava/lang/CharSequence;II)Ljava/io/Writer;");
	};
	proto["append(Ljava/lang/CharSequence;)Ljava/io/Writer;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#append(Ljava/lang/CharSequence;)Ljava/io/Writer;");
	};
	proto["append(C)Ljava/lang/Appendable;"] = function(ch0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#append(C)Ljava/lang/Appendable;");
	};
	proto["append(Ljava/lang/CharSequence;II)Ljava/lang/Appendable;"] = function(ref0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#append(Ljava/lang/CharSequence;II)Ljava/lang/Appendable;");
	};
	proto["append(Ljava/lang/CharSequence;)Ljava/lang/Appendable;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintWriter#append(Ljava/lang/CharSequence;)Ljava/lang/Appendable;");
	};

});

//"java/io/Console$1"
Java["java/io/Console$1"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/Console$1");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/Console$1#<init>()V");
	};
	proto["run()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/Console$1#run()V");
	};

});

//"java/util/concurrent/locks/ReentrantLock"
Java["java/util/concurrent/locks/ReentrantLock"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/concurrent/locks/ReentrantLock");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/locks/ReentrantLock#<init>()V");
	};
	proto["<init>(Z)V"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/locks/ReentrantLock#<init>(Z)V");
	};
	proto["lock()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/locks/ReentrantLock#lock()V");
	};
	proto["lockInterruptibly()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/locks/ReentrantLock#lockInterruptibly()V");
	};
	proto["tryLock()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/locks/ReentrantLock#tryLock()Z");
	};
	proto["tryLock(JLjava/util/concurrent/TimeUnit;)Z"] = function(l0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/locks/ReentrantLock#tryLock(JLjava/util/concurrent/TimeUnit;)Z");
	};
	proto["unlock()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/locks/ReentrantLock#unlock()V");
	};
	proto["newCondition()Ljava/util/concurrent/locks/Condition;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/locks/ReentrantLock#newCondition()Ljava/util/concurrent/locks/Condition;");
	};
	proto["getHoldCount()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/locks/ReentrantLock#getHoldCount()I");
	};
	proto["isHeldByCurrentThread()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/locks/ReentrantLock#isHeldByCurrentThread()Z");
	};
	proto["isLocked()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/locks/ReentrantLock#isLocked()Z");
	};
	proto["isFair()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/locks/ReentrantLock#isFair()Z");
	};
	proto["getOwner()Ljava/lang/Thread;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/locks/ReentrantLock#getOwner()Ljava/lang/Thread;");
	};
	proto["hasQueuedThreads()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/locks/ReentrantLock#hasQueuedThreads()Z");
	};
	proto["hasQueuedThread(Ljava/lang/Thread;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/locks/ReentrantLock#hasQueuedThread(Ljava/lang/Thread;)Z");
	};
	proto["getQueueLength()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/locks/ReentrantLock#getQueueLength()I");
	};
	proto["getQueuedThreads()Ljava/util/Collection;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/locks/ReentrantLock#getQueuedThreads()Ljava/util/Collection;");
	};
	proto["hasWaiters(Ljava/util/concurrent/locks/Condition;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/locks/ReentrantLock#hasWaiters(Ljava/util/concurrent/locks/Condition;)Z");
	};
	proto["getWaitQueueLength(Ljava/util/concurrent/locks/Condition;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/locks/ReentrantLock#getWaitQueueLength(Ljava/util/concurrent/locks/Condition;)I");
	};
	proto["getWaitingThreads(Ljava/util/concurrent/locks/Condition;)Ljava/util/Collection;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/locks/ReentrantLock#getWaitingThreads(Ljava/util/concurrent/locks/Condition;)Ljava/util/Collection;");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/locks/ReentrantLock#toString()Ljava/lang/String;");
	};

});

//"sun/misc/Unsafe"
Java["sun/misc/Unsafe"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/misc/Unsafe");
	klass["INVALID_FIELD_OFFSET"] = (-1);
	klass["ARRAY_BOOLEAN_BASE_OFFSET"] = null;
	klass["ARRAY_BYTE_BASE_OFFSET"] = null;
	klass["ARRAY_SHORT_BASE_OFFSET"] = null;
	klass["ARRAY_CHAR_BASE_OFFSET"] = null;
	klass["ARRAY_INT_BASE_OFFSET"] = null;
	klass["ARRAY_LONG_BASE_OFFSET"] = null;
	klass["ARRAY_FLOAT_BASE_OFFSET"] = null;
	klass["ARRAY_DOUBLE_BASE_OFFSET"] = null;
	klass["ARRAY_OBJECT_BASE_OFFSET"] = null;
	klass["ARRAY_BOOLEAN_INDEX_SCALE"] = null;
	klass["ARRAY_BYTE_INDEX_SCALE"] = null;
	klass["ARRAY_SHORT_INDEX_SCALE"] = null;
	klass["ARRAY_CHAR_INDEX_SCALE"] = null;
	klass["ARRAY_INT_INDEX_SCALE"] = null;
	klass["ARRAY_LONG_INDEX_SCALE"] = null;
	klass["ARRAY_FLOAT_INDEX_SCALE"] = null;
	klass["ARRAY_DOUBLE_INDEX_SCALE"] = null;
	klass["ARRAY_OBJECT_INDEX_SCALE"] = null;
	klass["ADDRESS_SIZE"] = null;
	klass["getUnsafe()Lsun/misc/Unsafe;"] = function(){
		var self = null;
		throw new Error("NotImplemented: sun/misc/Unsafe#getUnsafe()Lsun/misc/Unsafe;");
	};
	proto["getInt(Ljava/lang/Object;J)I"] = function(ref0,l1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getInt(Ljava/lang/Object;J)I");
	};
	proto["putInt(Ljava/lang/Object;JI)V"] = function(ref0,l1,i2){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putInt(Ljava/lang/Object;JI)V");
	};
	proto["getObject(Ljava/lang/Object;J)Ljava/lang/Object;"] = function(ref0,l1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getObject(Ljava/lang/Object;J)Ljava/lang/Object;");
	};
	proto["putObject(Ljava/lang/Object;JLjava/lang/Object;)V"] = function(ref0,l1,ref2){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putObject(Ljava/lang/Object;JLjava/lang/Object;)V");
	};
	proto["getBoolean(Ljava/lang/Object;J)Z"] = function(ref0,l1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getBoolean(Ljava/lang/Object;J)Z");
	};
	proto["putBoolean(Ljava/lang/Object;JZ)V"] = function(ref0,l1,b2){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putBoolean(Ljava/lang/Object;JZ)V");
	};
	proto["getByte(Ljava/lang/Object;J)B"] = function(ref0,l1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getByte(Ljava/lang/Object;J)B");
	};
	proto["putByte(Ljava/lang/Object;JB)V"] = function(ref0,l1,sb2){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putByte(Ljava/lang/Object;JB)V");
	};
	proto["getShort(Ljava/lang/Object;J)S"] = function(ref0,l1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getShort(Ljava/lang/Object;J)S");
	};
	proto["putShort(Ljava/lang/Object;JS)V"] = function(ref0,l1,sh2){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putShort(Ljava/lang/Object;JS)V");
	};
	proto["getChar(Ljava/lang/Object;J)C"] = function(ref0,l1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getChar(Ljava/lang/Object;J)C");
	};
	proto["putChar(Ljava/lang/Object;JC)V"] = function(ref0,l1,ch2){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putChar(Ljava/lang/Object;JC)V");
	};
	proto["getLong(Ljava/lang/Object;J)J"] = function(ref0,l1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getLong(Ljava/lang/Object;J)J");
	};
	proto["putLong(Ljava/lang/Object;JJ)V"] = function(ref0,l1,l2){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putLong(Ljava/lang/Object;JJ)V");
	};
	proto["getFloat(Ljava/lang/Object;J)F"] = function(ref0,l1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getFloat(Ljava/lang/Object;J)F");
	};
	proto["putFloat(Ljava/lang/Object;JF)V"] = function(ref0,l1,flt2){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putFloat(Ljava/lang/Object;JF)V");
	};
	proto["getDouble(Ljava/lang/Object;J)D"] = function(ref0,l1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getDouble(Ljava/lang/Object;J)D");
	};
	proto["putDouble(Ljava/lang/Object;JD)V"] = function(ref0,l1,db2){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putDouble(Ljava/lang/Object;JD)V");
	};
	proto["getInt(Ljava/lang/Object;I)I"] = null;
	proto["putInt(Ljava/lang/Object;II)V"] = null;
	proto["getObject(Ljava/lang/Object;I)Ljava/lang/Object;"] = null;
	proto["putObject(Ljava/lang/Object;ILjava/lang/Object;)V"] = null;
	proto["getBoolean(Ljava/lang/Object;I)Z"] = null;
	proto["putBoolean(Ljava/lang/Object;IZ)V"] = null;
	proto["getByte(Ljava/lang/Object;I)B"] = null;
	proto["putByte(Ljava/lang/Object;IB)V"] = null;
	proto["getShort(Ljava/lang/Object;I)S"] = null;
	proto["putShort(Ljava/lang/Object;IS)V"] = null;
	proto["getChar(Ljava/lang/Object;I)C"] = null;
	proto["putChar(Ljava/lang/Object;IC)V"] = null;
	proto["getLong(Ljava/lang/Object;I)J"] = null;
	proto["putLong(Ljava/lang/Object;IJ)V"] = null;
	proto["getFloat(Ljava/lang/Object;I)F"] = null;
	proto["putFloat(Ljava/lang/Object;IF)V"] = null;
	proto["getDouble(Ljava/lang/Object;I)D"] = null;
	proto["putDouble(Ljava/lang/Object;ID)V"] = null;
	proto["getByte(J)B"] = function(l0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getByte(J)B");
	};
	proto["putByte(JB)V"] = function(l0,sb1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putByte(JB)V");
	};
	proto["getShort(J)S"] = function(l0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getShort(J)S");
	};
	proto["putShort(JS)V"] = function(l0,sh1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putShort(JS)V");
	};
	proto["getChar(J)C"] = function(l0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getChar(J)C");
	};
	proto["putChar(JC)V"] = function(l0,ch1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putChar(JC)V");
	};
	proto["getInt(J)I"] = function(l0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getInt(J)I");
	};
	proto["putInt(JI)V"] = function(l0,i1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putInt(JI)V");
	};
	proto["getLong(J)J"] = function(l0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getLong(J)J");
	};
	proto["putLong(JJ)V"] = function(l0,l1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putLong(JJ)V");
	};
	proto["getFloat(J)F"] = function(l0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getFloat(J)F");
	};
	proto["putFloat(JF)V"] = function(l0,flt1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putFloat(JF)V");
	};
	proto["getDouble(J)D"] = function(l0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getDouble(J)D");
	};
	proto["putDouble(JD)V"] = function(l0,db1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putDouble(JD)V");
	};
	proto["getAddress(J)J"] = function(l0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getAddress(J)J");
	};
	proto["putAddress(JJ)V"] = function(l0,l1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putAddress(JJ)V");
	};
	proto["allocateMemory(J)J"] = function(l0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#allocateMemory(J)J");
	};
	proto["reallocateMemory(JJ)J"] = function(l0,l1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#reallocateMemory(JJ)J");
	};
	proto["setMemory(Ljava/lang/Object;JJB)V"] = function(ref0,l1,l2,sb3){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#setMemory(Ljava/lang/Object;JJB)V");
	};
	proto["setMemory(JJB)V"] = null;
	proto["copyMemory(Ljava/lang/Object;JLjava/lang/Object;JJ)V"] = function(ref0,l1,ref2,l3,l4){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#copyMemory(Ljava/lang/Object;JLjava/lang/Object;JJ)V");
	};
	proto["copyMemory(JJJ)V"] = null;
	proto["freeMemory(J)V"] = function(l0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#freeMemory(J)V");
	};
	proto["fieldOffset(Ljava/lang/reflect/Field;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/misc/Unsafe#fieldOffset(Ljava/lang/reflect/Field;)I");
	};
	proto["staticFieldBase(Ljava/lang/Class;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/misc/Unsafe#staticFieldBase(Ljava/lang/Class;)Ljava/lang/Object;");
	};
	proto["staticFieldOffset(Ljava/lang/reflect/Field;)J"] = function(ref0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#staticFieldOffset(Ljava/lang/reflect/Field;)J");
	};
	proto["objectFieldOffset(Ljava/lang/reflect/Field;)J"] = function(ref0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#objectFieldOffset(Ljava/lang/reflect/Field;)J");
	};
	proto["staticFieldBase(Ljava/lang/reflect/Field;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/misc/Unsafe#staticFieldBase(Ljava/lang/reflect/Field;)Ljava/lang/Object;");
	};
	proto["shouldBeInitialized(Ljava/lang/Class;)Z"] = function(ref0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#shouldBeInitialized(Ljava/lang/Class;)Z");
	};
	proto["ensureClassInitialized(Ljava/lang/Class;)V"] = function(ref0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#ensureClassInitialized(Ljava/lang/Class;)V");
	};
	proto["arrayBaseOffset(Ljava/lang/Class;)I"] = function(ref0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#arrayBaseOffset(Ljava/lang/Class;)I");
	};
	proto["arrayIndexScale(Ljava/lang/Class;)I"] = function(ref0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#arrayIndexScale(Ljava/lang/Class;)I");
	};
	proto["addressSize()I"] = function(){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#addressSize()I");
	};
	proto["pageSize()I"] = function(){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#pageSize()I");
	};
	proto["defineClass(Ljava/lang/String;[BIILjava/lang/ClassLoader;Ljava/security/ProtectionDomain;)Ljava/lang/Class;"] = function(ref0,arr_sb1,i2,i3,ref4,ref5){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#defineClass(Ljava/lang/String;[BIILjava/lang/ClassLoader;Ljava/security/ProtectionDomain;)Ljava/lang/Class;");
	};
	proto["defineClass(Ljava/lang/String;[BII)Ljava/lang/Class;"] = function(ref0,arr_sb1,i2,i3){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#defineClass(Ljava/lang/String;[BII)Ljava/lang/Class;");
	};
	proto["defineAnonymousClass(Ljava/lang/Class;[B[Ljava/lang/Object;)Ljava/lang/Class;"] = function(ref0,arr_sb1,arr_ref2){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#defineAnonymousClass(Ljava/lang/Class;[B[Ljava/lang/Object;)Ljava/lang/Class;");
	};
	proto["allocateInstance(Ljava/lang/Class;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#allocateInstance(Ljava/lang/Class;)Ljava/lang/Object;");
	};
	proto["monitorEnter(Ljava/lang/Object;)V"] = function(ref0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#monitorEnter(Ljava/lang/Object;)V");
	};
	proto["monitorExit(Ljava/lang/Object;)V"] = function(ref0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#monitorExit(Ljava/lang/Object;)V");
	};
	proto["tryMonitorEnter(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#tryMonitorEnter(Ljava/lang/Object;)Z");
	};
	proto["throwException(Ljava/lang/Throwable;)V"] = function(ref0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#throwException(Ljava/lang/Throwable;)V");
	};
	proto["compareAndSwapObject(Ljava/lang/Object;JLjava/lang/Object;Ljava/lang/Object;)Z"] = function(ref0,l1,ref2,ref3){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#compareAndSwapObject(Ljava/lang/Object;JLjava/lang/Object;Ljava/lang/Object;)Z");
	};
	proto["compareAndSwapInt(Ljava/lang/Object;JII)Z"] = function(ref0,l1,i2,i3){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#compareAndSwapInt(Ljava/lang/Object;JII)Z");
	};
	proto["compareAndSwapLong(Ljava/lang/Object;JJJ)Z"] = function(ref0,l1,l2,l3){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#compareAndSwapLong(Ljava/lang/Object;JJJ)Z");
	};
	proto["getObjectVolatile(Ljava/lang/Object;J)Ljava/lang/Object;"] = function(ref0,l1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getObjectVolatile(Ljava/lang/Object;J)Ljava/lang/Object;");
	};
	proto["putObjectVolatile(Ljava/lang/Object;JLjava/lang/Object;)V"] = function(ref0,l1,ref2){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putObjectVolatile(Ljava/lang/Object;JLjava/lang/Object;)V");
	};
	proto["getIntVolatile(Ljava/lang/Object;J)I"] = function(ref0,l1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getIntVolatile(Ljava/lang/Object;J)I");
	};
	proto["putIntVolatile(Ljava/lang/Object;JI)V"] = function(ref0,l1,i2){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putIntVolatile(Ljava/lang/Object;JI)V");
	};
	proto["getBooleanVolatile(Ljava/lang/Object;J)Z"] = function(ref0,l1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getBooleanVolatile(Ljava/lang/Object;J)Z");
	};
	proto["putBooleanVolatile(Ljava/lang/Object;JZ)V"] = function(ref0,l1,b2){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putBooleanVolatile(Ljava/lang/Object;JZ)V");
	};
	proto["getByteVolatile(Ljava/lang/Object;J)B"] = function(ref0,l1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getByteVolatile(Ljava/lang/Object;J)B");
	};
	proto["putByteVolatile(Ljava/lang/Object;JB)V"] = function(ref0,l1,sb2){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putByteVolatile(Ljava/lang/Object;JB)V");
	};
	proto["getShortVolatile(Ljava/lang/Object;J)S"] = function(ref0,l1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getShortVolatile(Ljava/lang/Object;J)S");
	};
	proto["putShortVolatile(Ljava/lang/Object;JS)V"] = function(ref0,l1,sh2){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putShortVolatile(Ljava/lang/Object;JS)V");
	};
	proto["getCharVolatile(Ljava/lang/Object;J)C"] = function(ref0,l1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getCharVolatile(Ljava/lang/Object;J)C");
	};
	proto["putCharVolatile(Ljava/lang/Object;JC)V"] = function(ref0,l1,ch2){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putCharVolatile(Ljava/lang/Object;JC)V");
	};
	proto["getLongVolatile(Ljava/lang/Object;J)J"] = function(ref0,l1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getLongVolatile(Ljava/lang/Object;J)J");
	};
	proto["putLongVolatile(Ljava/lang/Object;JJ)V"] = function(ref0,l1,l2){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putLongVolatile(Ljava/lang/Object;JJ)V");
	};
	proto["getFloatVolatile(Ljava/lang/Object;J)F"] = function(ref0,l1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getFloatVolatile(Ljava/lang/Object;J)F");
	};
	proto["putFloatVolatile(Ljava/lang/Object;JF)V"] = function(ref0,l1,flt2){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putFloatVolatile(Ljava/lang/Object;JF)V");
	};
	proto["getDoubleVolatile(Ljava/lang/Object;J)D"] = function(ref0,l1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getDoubleVolatile(Ljava/lang/Object;J)D");
	};
	proto["putDoubleVolatile(Ljava/lang/Object;JD)V"] = function(ref0,l1,db2){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putDoubleVolatile(Ljava/lang/Object;JD)V");
	};
	proto["putOrderedObject(Ljava/lang/Object;JLjava/lang/Object;)V"] = function(ref0,l1,ref2){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putOrderedObject(Ljava/lang/Object;JLjava/lang/Object;)V");
	};
	proto["putOrderedInt(Ljava/lang/Object;JI)V"] = function(ref0,l1,i2){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putOrderedInt(Ljava/lang/Object;JI)V");
	};
	proto["putOrderedLong(Ljava/lang/Object;JJ)V"] = function(ref0,l1,l2){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#putOrderedLong(Ljava/lang/Object;JJ)V");
	};
	proto["unpark(Ljava/lang/Object;)V"] = function(ref0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#unpark(Ljava/lang/Object;)V");
	};
	proto["park(ZJ)V"] = function(b0,l1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#park(ZJ)V");
	};
	proto["getLoadAverage([DI)I"] = function(arr_db0,i1){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: sun/misc/Unsafe#getLoadAverage([DI)I");
	};

});

//"java/util/Iterator"
Java["java/util/Iterator"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/Iterator");

	proto["hasNext()Z"] = null;
	proto["next()Ljava/lang/Object;"] = null;
	proto["remove()V"] = null;

});

//"java/io/OutputStream"
Java["java/io/OutputStream"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/OutputStream");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/OutputStream#<init>()V");
	};
	proto["write(I)V"] = null;
	proto["write([B)V"] = null;
	proto["write([BII)V"] = null;
	proto["flush()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/OutputStream#flush()V");
	};
	proto["close()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/OutputStream#close()V");
	};

});

//"java/io/ObjectOutputStream$PutField"
Java["java/io/ObjectOutputStream$PutField"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/ObjectOutputStream$PutField");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$PutField#<init>()V");
	};
	proto["put(Ljava/lang/String;Z)V"] = null;
	proto["put(Ljava/lang/String;B)V"] = null;
	proto["put(Ljava/lang/String;C)V"] = null;
	proto["put(Ljava/lang/String;S)V"] = null;
	proto["put(Ljava/lang/String;I)V"] = null;
	proto["put(Ljava/lang/String;J)V"] = null;
	proto["put(Ljava/lang/String;F)V"] = null;
	proto["put(Ljava/lang/String;D)V"] = null;
	proto["put(Ljava/lang/String;Ljava/lang/Object;)V"] = null;
	proto["write(Ljava/io/ObjectOutput;)V"] = null;

});

//"java/io/ObjectOutputStream$DebugTraceInfoStack"
Java["java/io/ObjectOutputStream$DebugTraceInfoStack"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/ObjectOutputStream$DebugTraceInfoStack");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$DebugTraceInfoStack#<init>()V");
	};
	proto["clear()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$DebugTraceInfoStack#clear()V");
	};
	proto["pop()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$DebugTraceInfoStack#pop()V");
	};
	proto["push(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$DebugTraceInfoStack#push(Ljava/lang/String;)V");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$DebugTraceInfoStack#toString()Ljava/lang/String;");
	};

});

//"java/io/ObjectOutputStream$BlockDataOutputStream"
Java["java/io/ObjectOutputStream$BlockDataOutputStream"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/io/OutputStream"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/ObjectOutputStream$BlockDataOutputStream");

	proto["<init>(Ljava/io/OutputStream;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#<init>(Ljava/io/OutputStream;)V");
	};
	proto["setBlockDataMode(Z)Z"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#setBlockDataMode(Z)Z");
	};
	proto["getBlockDataMode()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#getBlockDataMode()Z");
	};
	proto["write(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#write(I)V");
	};
	proto["write([B)V"] = function(arr_sb0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#write([B)V");
	};
	proto["write([BII)V"] = function(arr_sb0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#write([BII)V");
	};
	proto["flush()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#flush()V");
	};
	proto["close()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#close()V");
	};
	proto["write([BIIZ)V"] = function(arr_sb0,i1,i2,b3){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#write([BIIZ)V");
	};
	proto["drain()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#drain()V");
	};
	proto["writeBoolean(Z)V"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#writeBoolean(Z)V");
	};
	proto["writeByte(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#writeByte(I)V");
	};
	proto["writeChar(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#writeChar(I)V");
	};
	proto["writeShort(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#writeShort(I)V");
	};
	proto["writeInt(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#writeInt(I)V");
	};
	proto["writeFloat(F)V"] = function(flt0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#writeFloat(F)V");
	};
	proto["writeLong(J)V"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#writeLong(J)V");
	};
	proto["writeDouble(D)V"] = function(db0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#writeDouble(D)V");
	};
	proto["writeBytes(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#writeBytes(Ljava/lang/String;)V");
	};
	proto["writeChars(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#writeChars(Ljava/lang/String;)V");
	};
	proto["writeUTF(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#writeUTF(Ljava/lang/String;)V");
	};
	proto["writeBooleans([ZII)V"] = function(arr_b0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#writeBooleans([ZII)V");
	};
	proto["writeChars([CII)V"] = function(arr_ch0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#writeChars([CII)V");
	};
	proto["writeShorts([SII)V"] = function(arr_sh0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#writeShorts([SII)V");
	};
	proto["writeInts([III)V"] = function(arr_i0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#writeInts([III)V");
	};
	proto["writeFloats([FII)V"] = function(arr_flt0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#writeFloats([FII)V");
	};
	proto["writeLongs([JII)V"] = function(arr_l0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#writeLongs([JII)V");
	};
	proto["writeDoubles([DII)V"] = function(arr_db0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#writeDoubles([DII)V");
	};
	proto["getUTFLength(Ljava/lang/String;)J"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#getUTFLength(Ljava/lang/String;)J");
	};
	proto["writeUTF(Ljava/lang/String;J)V"] = function(ref0,l1){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#writeUTF(Ljava/lang/String;J)V");
	};
	proto["writeLongUTF(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#writeLongUTF(Ljava/lang/String;)V");
	};
	proto["writeLongUTF(Ljava/lang/String;J)V"] = function(ref0,l1){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream$BlockDataOutputStream#writeLongUTF(Ljava/lang/String;J)V");
	};

});

//"java/lang/Enum"
Java["java/lang/Enum"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Enum");

	proto["name()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Enum#name()Ljava/lang/String;");
	};
	proto["ordinal()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Enum#ordinal()I");
	};
	proto["<init>(Ljava/lang/String;I)V"] = function(ref0,i1){
		var self = this;
		this.name = ref0.val;
		this.ord = i1;
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Enum#toString()Ljava/lang/String;");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Enum#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Enum#hashCode()I");
	};
	proto["clone()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Enum#clone()Ljava/lang/Object;");
	};
	proto["compareTo(Ljava/lang/Enum;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Enum#compareTo(Ljava/lang/Enum;)I");
	};
	proto["getDeclaringClass()Ljava/lang/Class;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Enum#getDeclaringClass()Ljava/lang/Class;");
	};
	klass["valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Enum#valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;");
	};
	proto["finalize()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Enum#finalize()V");
	};
	proto["compareTo(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Enum#compareTo(Ljava/lang/Object;)I");
	};

});

//"java/lang/ClassLoader"
Java["java/lang/ClassLoader"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/ClassLoader");
	proto["assertionLock"] = null;
	proto["classAssertionStatus"] = null;
	proto["addClass(Ljava/lang/Class;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#addClass(Ljava/lang/Class;)V");
	};
	proto["<init>(Ljava/lang/ClassLoader;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#<init>(Ljava/lang/ClassLoader;)V");
	};
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#<init>()V");
	};
	proto["loadClass(Ljava/lang/String;)Ljava/lang/Class;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#loadClass(Ljava/lang/String;)Ljava/lang/Class;");
	};
	proto["loadClass(Ljava/lang/String;Z)Ljava/lang/Class;"] = function(ref0,b1){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#loadClass(Ljava/lang/String;Z)Ljava/lang/Class;");
	};
	proto["getClassLoadingLock(Ljava/lang/String;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#getClassLoadingLock(Ljava/lang/String;)Ljava/lang/Object;");
	};
	proto["findClass(Ljava/lang/String;)Ljava/lang/Class;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#findClass(Ljava/lang/String;)Ljava/lang/Class;");
	};
	proto["defineClass([BII)Ljava/lang/Class;"] = function(arr_sb0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#defineClass([BII)Ljava/lang/Class;");
	};
	proto["defineClass(Ljava/lang/String;[BII)Ljava/lang/Class;"] = function(ref0,arr_sb1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#defineClass(Ljava/lang/String;[BII)Ljava/lang/Class;");
	};
	proto["defineClass(Ljava/lang/String;[BIILjava/security/ProtectionDomain;)Ljava/lang/Class;"] = function(ref0,arr_sb1,i2,i3,ref4){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#defineClass(Ljava/lang/String;[BIILjava/security/ProtectionDomain;)Ljava/lang/Class;");
	};
	proto["defineClass(Ljava/lang/String;Ljava/nio/ByteBuffer;Ljava/security/ProtectionDomain;)Ljava/lang/Class;"] = function(ref0,ref1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#defineClass(Ljava/lang/String;Ljava/nio/ByteBuffer;Ljava/security/ProtectionDomain;)Ljava/lang/Class;");
	};
	proto["resolveClass(Ljava/lang/Class;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#resolveClass(Ljava/lang/Class;)V");
	};
	proto["findSystemClass(Ljava/lang/String;)Ljava/lang/Class;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#findSystemClass(Ljava/lang/String;)Ljava/lang/Class;");
	};
	proto["findLoadedClass(Ljava/lang/String;)Ljava/lang/Class;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#findLoadedClass(Ljava/lang/String;)Ljava/lang/Class;");
	};
	proto["setSigners(Ljava/lang/Class;[Ljava/lang/Object;)V"] = function(ref0,arr_ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#setSigners(Ljava/lang/Class;[Ljava/lang/Object;)V");
	};
	proto["getResource(Ljava/lang/String;)Ljava/net/URL;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#getResource(Ljava/lang/String;)Ljava/net/URL;");
	};
	proto["getResources(Ljava/lang/String;)Ljava/util/Enumeration;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#getResources(Ljava/lang/String;)Ljava/util/Enumeration;");
	};
	proto["findResource(Ljava/lang/String;)Ljava/net/URL;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#findResource(Ljava/lang/String;)Ljava/net/URL;");
	};
	proto["findResources(Ljava/lang/String;)Ljava/util/Enumeration;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#findResources(Ljava/lang/String;)Ljava/util/Enumeration;");
	};
	klass["registerAsParallelCapable()Z"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/ClassLoader#registerAsParallelCapable()Z");
	};
	klass["getSystemResource(Ljava/lang/String;)Ljava/net/URL;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/ClassLoader#getSystemResource(Ljava/lang/String;)Ljava/net/URL;");
	};
	klass["getSystemResources(Ljava/lang/String;)Ljava/util/Enumeration;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/ClassLoader#getSystemResources(Ljava/lang/String;)Ljava/util/Enumeration;");
	};
	klass["getBootstrapClassPath()Lsun/misc/URLClassPath;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/ClassLoader#getBootstrapClassPath()Lsun/misc/URLClassPath;");
	};
	proto["getResourceAsStream(Ljava/lang/String;)Ljava/io/InputStream;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#getResourceAsStream(Ljava/lang/String;)Ljava/io/InputStream;");
	};
	klass["getSystemResourceAsStream(Ljava/lang/String;)Ljava/io/InputStream;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/ClassLoader#getSystemResourceAsStream(Ljava/lang/String;)Ljava/io/InputStream;");
	};
	proto["getParent()Ljava/lang/ClassLoader;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#getParent()Ljava/lang/ClassLoader;");
	};
	klass["getSystemClassLoader()Ljava/lang/ClassLoader;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/ClassLoader#getSystemClassLoader()Ljava/lang/ClassLoader;");
	};
	proto["isAncestor(Ljava/lang/ClassLoader;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#isAncestor(Ljava/lang/ClassLoader;)Z");
	};
	klass["getClassLoader(Ljava/lang/Class;)Ljava/lang/ClassLoader;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/ClassLoader#getClassLoader(Ljava/lang/Class;)Ljava/lang/ClassLoader;");
	};
	klass["checkClassLoaderPermission(Ljava/lang/ClassLoader;Ljava/lang/Class;)V"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/lang/ClassLoader#checkClassLoaderPermission(Ljava/lang/ClassLoader;Ljava/lang/Class;)V");
	};
	proto["definePackage(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/net/URL;)Ljava/lang/Package;"] = function(ref0,ref1,ref2,ref3,ref4,ref5,ref6,ref7){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#definePackage(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/net/URL;)Ljava/lang/Package;");
	};
	proto["getPackage(Ljava/lang/String;)Ljava/lang/Package;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#getPackage(Ljava/lang/String;)Ljava/lang/Package;");
	};
	proto["getPackages()[Ljava/lang/Package;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#getPackages()[Ljava/lang/Package;");
	};
	proto["findLibrary(Ljava/lang/String;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#findLibrary(Ljava/lang/String;)Ljava/lang/String;");
	};
	klass["loadLibrary(Ljava/lang/Class;Ljava/lang/String;Z)V"] = function(ref0,ref1,b2){
		var self = null;
		throw new Error("NotImplemented: java/lang/ClassLoader#loadLibrary(Ljava/lang/Class;Ljava/lang/String;Z)V");
	};
	klass["findNative(Ljava/lang/ClassLoader;Ljava/lang/String;)J"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/lang/ClassLoader#findNative(Ljava/lang/ClassLoader;Ljava/lang/String;)J");
	};
	proto["setDefaultAssertionStatus(Z)V"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#setDefaultAssertionStatus(Z)V");
	};
	proto["setPackageAssertionStatus(Ljava/lang/String;Z)V"] = function(ref0,b1){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#setPackageAssertionStatus(Ljava/lang/String;Z)V");
	};
	proto["setClassAssertionStatus(Ljava/lang/String;Z)V"] = function(ref0,b1){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#setClassAssertionStatus(Ljava/lang/String;Z)V");
	};
	proto["clearAssertionStatus()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#clearAssertionStatus()V");
	};
	proto["desiredAssertionStatus(Ljava/lang/String;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/ClassLoader#desiredAssertionStatus(Ljava/lang/String;)Z");
	};
	klass["access$000()Ljava/util/Vector;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/ClassLoader#access$000()Ljava/util/Vector;");
	};
	klass["access$100()Ljava/util/Stack;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/ClassLoader#access$100()Ljava/util/Stack;");
	};

});

//"java/io/ObjectStreamClass"
Java["java/io/ObjectStreamClass"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/ObjectStreamClass");
	klass["NO_FIELDS"] = null;
	klass["lookup(Ljava/lang/Class;)Ljava/io/ObjectStreamClass;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#lookup(Ljava/lang/Class;)Ljava/io/ObjectStreamClass;");
	};
	klass["lookupAny(Ljava/lang/Class;)Ljava/io/ObjectStreamClass;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#lookupAny(Ljava/lang/Class;)Ljava/io/ObjectStreamClass;");
	};
	proto["getName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#getName()Ljava/lang/String;");
	};
	proto["getSerialVersionUID()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#getSerialVersionUID()J");
	};
	proto["forClass()Ljava/lang/Class;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#forClass()Ljava/lang/Class;");
	};
	proto["getFields()[Ljava/io/ObjectStreamField;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#getFields()[Ljava/io/ObjectStreamField;");
	};
	proto["getField(Ljava/lang/String;)Ljava/io/ObjectStreamField;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#getField(Ljava/lang/String;)Ljava/io/ObjectStreamField;");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#toString()Ljava/lang/String;");
	};
	klass["lookup(Ljava/lang/Class;Z)Ljava/io/ObjectStreamClass;"] = function(ref0,b1){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#lookup(Ljava/lang/Class;Z)Ljava/io/ObjectStreamClass;");
	};
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#<init>()V");
	};
	proto["initProxy(Ljava/lang/Class;Ljava/lang/ClassNotFoundException;Ljava/io/ObjectStreamClass;)V"] = function(ref0,ref1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#initProxy(Ljava/lang/Class;Ljava/lang/ClassNotFoundException;Ljava/io/ObjectStreamClass;)V");
	};
	proto["initNonProxy(Ljava/io/ObjectStreamClass;Ljava/lang/Class;Ljava/lang/ClassNotFoundException;Ljava/io/ObjectStreamClass;)V"] = function(ref0,ref1,ref2,ref3){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#initNonProxy(Ljava/io/ObjectStreamClass;Ljava/lang/Class;Ljava/lang/ClassNotFoundException;Ljava/io/ObjectStreamClass;)V");
	};
	proto["readNonProxy(Ljava/io/ObjectInputStream;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#readNonProxy(Ljava/io/ObjectInputStream;)V");
	};
	proto["writeNonProxy(Ljava/io/ObjectOutputStream;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#writeNonProxy(Ljava/io/ObjectOutputStream;)V");
	};
	proto["getResolveException()Ljava/lang/ClassNotFoundException;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#getResolveException()Ljava/lang/ClassNotFoundException;");
	};
	proto["checkDeserialize()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#checkDeserialize()V");
	};
	proto["checkSerialize()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#checkSerialize()V");
	};
	proto["checkDefaultSerialize()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#checkDefaultSerialize()V");
	};
	proto["getSuperDesc()Ljava/io/ObjectStreamClass;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#getSuperDesc()Ljava/io/ObjectStreamClass;");
	};
	proto["getLocalDesc()Ljava/io/ObjectStreamClass;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#getLocalDesc()Ljava/io/ObjectStreamClass;");
	};
	proto["getFields(Z)[Ljava/io/ObjectStreamField;"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#getFields(Z)[Ljava/io/ObjectStreamField;");
	};
	proto["getField(Ljava/lang/String;Ljava/lang/Class;)Ljava/io/ObjectStreamField;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#getField(Ljava/lang/String;Ljava/lang/Class;)Ljava/io/ObjectStreamField;");
	};
	proto["isProxy()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#isProxy()Z");
	};
	proto["isEnum()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#isEnum()Z");
	};
	proto["isExternalizable()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#isExternalizable()Z");
	};
	proto["isSerializable()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#isSerializable()Z");
	};
	proto["hasBlockExternalData()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#hasBlockExternalData()Z");
	};
	proto["hasWriteObjectData()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#hasWriteObjectData()Z");
	};
	proto["isInstantiable()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#isInstantiable()Z");
	};
	proto["hasWriteObjectMethod()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#hasWriteObjectMethod()Z");
	};
	proto["hasReadObjectMethod()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#hasReadObjectMethod()Z");
	};
	proto["hasReadObjectNoDataMethod()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#hasReadObjectNoDataMethod()Z");
	};
	proto["hasWriteReplaceMethod()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#hasWriteReplaceMethod()Z");
	};
	proto["hasReadResolveMethod()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#hasReadResolveMethod()Z");
	};
	proto["newInstance()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#newInstance()Ljava/lang/Object;");
	};
	proto["invokeWriteObject(Ljava/lang/Object;Ljava/io/ObjectOutputStream;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#invokeWriteObject(Ljava/lang/Object;Ljava/io/ObjectOutputStream;)V");
	};
	proto["invokeReadObject(Ljava/lang/Object;Ljava/io/ObjectInputStream;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#invokeReadObject(Ljava/lang/Object;Ljava/io/ObjectInputStream;)V");
	};
	proto["invokeReadObjectNoData(Ljava/lang/Object;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#invokeReadObjectNoData(Ljava/lang/Object;)V");
	};
	proto["invokeWriteReplace(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#invokeWriteReplace(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["invokeReadResolve(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#invokeReadResolve(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["getClassDataLayout()[Ljava/io/ObjectStreamClass$ClassDataSlot;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#getClassDataLayout()[Ljava/io/ObjectStreamClass$ClassDataSlot;");
	};
	proto["getPrimDataSize()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#getPrimDataSize()I");
	};
	proto["getNumObjFields()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#getNumObjFields()I");
	};
	proto["getPrimFieldValues(Ljava/lang/Object;[B)V"] = function(ref0,arr_sb1){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#getPrimFieldValues(Ljava/lang/Object;[B)V");
	};
	proto["setPrimFieldValues(Ljava/lang/Object;[B)V"] = function(ref0,arr_sb1){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#setPrimFieldValues(Ljava/lang/Object;[B)V");
	};
	proto["getObjFieldValues(Ljava/lang/Object;[Ljava/lang/Object;)V"] = function(ref0,arr_ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#getObjFieldValues(Ljava/lang/Object;[Ljava/lang/Object;)V");
	};
	proto["setObjFieldValues(Ljava/lang/Object;[Ljava/lang/Object;)V"] = function(ref0,arr_ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#setObjFieldValues(Ljava/lang/Object;[Ljava/lang/Object;)V");
	};
	klass["processQueue(Ljava/lang/ref/ReferenceQueue;Ljava/util/concurrent/ConcurrentMap;)V"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#processQueue(Ljava/lang/ref/ReferenceQueue;Ljava/util/concurrent/ConcurrentMap;)V");
	};
	klass["access$000(Ljava/io/ObjectStreamClass;)Ljava/lang/Class;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$000(Ljava/io/ObjectStreamClass;)Ljava/lang/Class;");
	};
	klass["access$100(Ljava/lang/Class;)J"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$100(Ljava/lang/Class;)J");
	};
	klass["access$400(Ljava/io/ObjectStreamClass;)Z"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$400(Ljava/io/ObjectStreamClass;)Z");
	};
	klass["access$502(Ljava/io/ObjectStreamClass;Ljava/lang/Long;)Ljava/lang/Long;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$502(Ljava/io/ObjectStreamClass;Ljava/lang/Long;)Ljava/lang/Long;");
	};
	klass["access$602(Ljava/io/ObjectStreamClass;[Ljava/io/ObjectStreamField;)[Ljava/io/ObjectStreamField;"] = function(ref0,arr_ref1){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$602(Ljava/io/ObjectStreamClass;[Ljava/io/ObjectStreamField;)[Ljava/io/ObjectStreamField;");
	};
	klass["access$700(Ljava/lang/Class;)Ljava/lang/Long;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$700(Ljava/lang/Class;)Ljava/lang/Long;");
	};
	klass["access$800(Ljava/lang/Class;)[Ljava/io/ObjectStreamField;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$800(Ljava/lang/Class;)[Ljava/io/ObjectStreamField;");
	};
	klass["access$900(Ljava/io/ObjectStreamClass;)V"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$900(Ljava/io/ObjectStreamClass;)V");
	};
	klass["access$1002(Ljava/io/ObjectStreamClass;Ljava/io/ObjectStreamClass$ExceptionInfo;)Ljava/io/ObjectStreamClass$ExceptionInfo;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$1002(Ljava/io/ObjectStreamClass;Ljava/io/ObjectStreamClass$ExceptionInfo;)Ljava/io/ObjectStreamClass$ExceptionInfo;");
	};
	klass["access$1102(Ljava/io/ObjectStreamClass;Ljava/io/ObjectStreamClass$ExceptionInfo;)Ljava/io/ObjectStreamClass$ExceptionInfo;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$1102(Ljava/io/ObjectStreamClass;Ljava/io/ObjectStreamClass$ExceptionInfo;)Ljava/io/ObjectStreamClass$ExceptionInfo;");
	};
	klass["access$1200(Ljava/io/ObjectStreamClass;)Z"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$1200(Ljava/io/ObjectStreamClass;)Z");
	};
	klass["access$1302(Ljava/io/ObjectStreamClass;Ljava/lang/reflect/Constructor;)Ljava/lang/reflect/Constructor;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$1302(Ljava/io/ObjectStreamClass;Ljava/lang/reflect/Constructor;)Ljava/lang/reflect/Constructor;");
	};
	klass["access$1400(Ljava/lang/Class;)Ljava/lang/reflect/Constructor;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$1400(Ljava/lang/Class;)Ljava/lang/reflect/Constructor;");
	};
	klass["access$1500(Ljava/lang/Class;)Ljava/lang/reflect/Constructor;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$1500(Ljava/lang/Class;)Ljava/lang/reflect/Constructor;");
	};
	klass["access$1602(Ljava/io/ObjectStreamClass;Ljava/lang/reflect/Method;)Ljava/lang/reflect/Method;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$1602(Ljava/io/ObjectStreamClass;Ljava/lang/reflect/Method;)Ljava/lang/reflect/Method;");
	};
	klass["access$1700(Ljava/lang/Class;Ljava/lang/String;[Ljava/lang/Class;Ljava/lang/Class;)Ljava/lang/reflect/Method;"] = function(ref0,ref1,arr_ref2,ref3){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$1700(Ljava/lang/Class;Ljava/lang/String;[Ljava/lang/Class;Ljava/lang/Class;)Ljava/lang/reflect/Method;");
	};
	klass["access$1802(Ljava/io/ObjectStreamClass;Ljava/lang/reflect/Method;)Ljava/lang/reflect/Method;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$1802(Ljava/io/ObjectStreamClass;Ljava/lang/reflect/Method;)Ljava/lang/reflect/Method;");
	};
	klass["access$1902(Ljava/io/ObjectStreamClass;Ljava/lang/reflect/Method;)Ljava/lang/reflect/Method;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$1902(Ljava/io/ObjectStreamClass;Ljava/lang/reflect/Method;)Ljava/lang/reflect/Method;");
	};
	klass["access$2002(Ljava/io/ObjectStreamClass;Z)Z"] = function(ref0,b1){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$2002(Ljava/io/ObjectStreamClass;Z)Z");
	};
	klass["access$1600(Ljava/io/ObjectStreamClass;)Ljava/lang/reflect/Method;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$1600(Ljava/io/ObjectStreamClass;)Ljava/lang/reflect/Method;");
	};
	klass["access$2102(Ljava/io/ObjectStreamClass;Ljava/lang/reflect/Method;)Ljava/lang/reflect/Method;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$2102(Ljava/io/ObjectStreamClass;Ljava/lang/reflect/Method;)Ljava/lang/reflect/Method;");
	};
	klass["access$2200(Ljava/lang/Class;Ljava/lang/String;[Ljava/lang/Class;Ljava/lang/Class;)Ljava/lang/reflect/Method;"] = function(ref0,ref1,arr_ref2,ref3){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$2200(Ljava/lang/Class;Ljava/lang/String;[Ljava/lang/Class;Ljava/lang/Class;)Ljava/lang/reflect/Method;");
	};
	klass["access$2302(Ljava/io/ObjectStreamClass;Ljava/lang/reflect/Method;)Ljava/lang/reflect/Method;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$2302(Ljava/io/ObjectStreamClass;Ljava/lang/reflect/Method;)Ljava/lang/reflect/Method;");
	};
	klass["access$2400(Ljava/lang/Class;)Ljava/lang/String;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$2400(Ljava/lang/Class;)Ljava/lang/String;");
	};
	klass["access$2500([Ljava/lang/Class;Ljava/lang/Class;)Ljava/lang/String;"] = function(arr_ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectStreamClass#access$2500([Ljava/lang/Class;Ljava/lang/Class;)Ljava/lang/String;");
	};

});

//"java/io/ObjectInputValidation"
Java["java/io/ObjectInputValidation"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/ObjectInputValidation");

	proto["validateObject()V"] = null;

});

//"java/io/ObjectInputStream$HandleTable"
Java["java/io/ObjectInputStream$HandleTable"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/ObjectInputStream$HandleTable");
	proto["status"] = null;
	proto["entries"] = null;
	proto["deps"] = null;
	proto["lowDep"] = null;
	proto["size"] = null;
	proto["<init>(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$HandleTable#<init>(I)V");
	};
	proto["assign(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$HandleTable#assign(Ljava/lang/Object;)I");
	};
	proto["markDependency(II)V"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$HandleTable#markDependency(II)V");
	};
	proto["markException(ILjava/lang/ClassNotFoundException;)V"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$HandleTable#markException(ILjava/lang/ClassNotFoundException;)V");
	};
	proto["finish(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$HandleTable#finish(I)V");
	};
	proto["setObject(ILjava/lang/Object;)V"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$HandleTable#setObject(ILjava/lang/Object;)V");
	};
	proto["lookupObject(I)Ljava/lang/Object;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$HandleTable#lookupObject(I)Ljava/lang/Object;");
	};
	proto["lookupException(I)Ljava/lang/ClassNotFoundException;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$HandleTable#lookupException(I)Ljava/lang/ClassNotFoundException;");
	};
	proto["clear()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$HandleTable#clear()V");
	};
	proto["size()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$HandleTable#size()I");
	};

});

//"java/io/ObjectInputStream$GetField"
Java["java/io/ObjectInputStream$GetField"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/ObjectInputStream$GetField");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$GetField#<init>()V");
	};
	proto["getObjectStreamClass()Ljava/io/ObjectStreamClass;"] = null;
	proto["defaulted(Ljava/lang/String;)Z"] = null;
	proto["get(Ljava/lang/String;Z)Z"] = null;
	proto["get(Ljava/lang/String;B)B"] = null;
	proto["get(Ljava/lang/String;C)C"] = null;
	proto["get(Ljava/lang/String;S)S"] = null;
	proto["get(Ljava/lang/String;I)I"] = null;
	proto["get(Ljava/lang/String;J)J"] = null;
	proto["get(Ljava/lang/String;F)F"] = null;
	proto["get(Ljava/lang/String;D)D"] = null;
	proto["get(Ljava/lang/String;Ljava/lang/Object;)Ljava/lang/Object;"] = null;

});

//"java/io/ObjectInputStream$BlockDataInputStream"
Java["java/io/ObjectInputStream$BlockDataInputStream"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/io/InputStream"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/ObjectInputStream$BlockDataInputStream");
	proto["this$0"] = null;
	proto["<init>(Ljava/io/ObjectInputStream;Ljava/io/InputStream;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#<init>(Ljava/io/ObjectInputStream;Ljava/io/InputStream;)V");
	};
	proto["setBlockDataMode(Z)Z"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#setBlockDataMode(Z)Z");
	};
	proto["getBlockDataMode()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#getBlockDataMode()Z");
	};
	proto["skipBlockData()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#skipBlockData()V");
	};
	proto["currentBlockRemaining()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#currentBlockRemaining()I");
	};
	proto["peek()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#peek()I");
	};
	proto["peekByte()B"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#peekByte()B");
	};
	proto["read()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#read()I");
	};
	proto["read([BII)I"] = function(arr_sb0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#read([BII)I");
	};
	proto["skip(J)J"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#skip(J)J");
	};
	proto["available()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#available()I");
	};
	proto["close()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#close()V");
	};
	proto["read([BIIZ)I"] = function(arr_sb0,i1,i2,b3){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#read([BIIZ)I");
	};
	proto["readFully([B)V"] = function(arr_sb0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#readFully([B)V");
	};
	proto["readFully([BII)V"] = function(arr_sb0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#readFully([BII)V");
	};
	proto["readFully([BIIZ)V"] = function(arr_sb0,i1,i2,b3){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#readFully([BIIZ)V");
	};
	proto["skipBytes(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#skipBytes(I)I");
	};
	proto["readBoolean()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#readBoolean()Z");
	};
	proto["readByte()B"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#readByte()B");
	};
	proto["readUnsignedByte()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#readUnsignedByte()I");
	};
	proto["readChar()C"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#readChar()C");
	};
	proto["readShort()S"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#readShort()S");
	};
	proto["readUnsignedShort()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#readUnsignedShort()I");
	};
	proto["readInt()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#readInt()I");
	};
	proto["readFloat()F"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#readFloat()F");
	};
	proto["readLong()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#readLong()J");
	};
	proto["readDouble()D"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#readDouble()D");
	};
	proto["readUTF()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#readUTF()Ljava/lang/String;");
	};
	proto["readLine()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#readLine()Ljava/lang/String;");
	};
	proto["readBooleans([ZII)V"] = function(arr_b0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#readBooleans([ZII)V");
	};
	proto["readChars([CII)V"] = function(arr_ch0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#readChars([CII)V");
	};
	proto["readShorts([SII)V"] = function(arr_sh0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#readShorts([SII)V");
	};
	proto["readInts([III)V"] = function(arr_i0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#readInts([III)V");
	};
	proto["readFloats([FII)V"] = function(arr_flt0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#readFloats([FII)V");
	};
	proto["readLongs([JII)V"] = function(arr_l0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#readLongs([JII)V");
	};
	proto["readDoubles([DII)V"] = function(arr_db0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#readDoubles([DII)V");
	};
	proto["readLongUTF()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream$BlockDataInputStream#readLongUTF()Ljava/lang/String;");
	};

});

//"java/io/IOException"
Java["java/io/IOException"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Exception"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/IOException");
	klass["serialVersionUID"] = (7818375828146090155);
	proto["<init>()V"] = function(){
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		this.msg = ref0.val;
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/Throwable;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/IOException#<init>(Ljava/lang/String;Ljava/lang/Throwable;)V");
	};
	proto["<init>(Ljava/lang/Throwable;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/IOException#<init>(Ljava/lang/Throwable;)V");
	};

});

//"java/io/Externalizable"
Java["java/io/Externalizable"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/Externalizable");

	proto["writeExternal(Ljava/io/ObjectOutput;)V"] = null;
	proto["readExternal(Ljava/io/ObjectInput;)V"] = null;

});

//"java/lang/Class"
Java["java/lang/Class"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto.init = function (klass, name) {
		this.klass = klass
		this.name = name;
	};
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Class");
	proto["classValueMap"] = null;
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#toString()Ljava/lang/String;");
	};
	klass["forName(Ljava/lang/String;)Ljava/lang/Class;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Class#forName(Ljava/lang/String;)Ljava/lang/Class;");
	};
	klass["forName(Ljava/lang/String;ZLjava/lang/ClassLoader;)Ljava/lang/Class;"] = function(ref0,b1,ref2){
		var self = null;
		throw new Error("NotImplemented: java/lang/Class#forName(Ljava/lang/String;ZLjava/lang/ClassLoader;)Ljava/lang/Class;");
	};
	proto["newInstance()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#newInstance()Ljava/lang/Object;");
	};
	proto["isInstance(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Class#isInstance(Ljava/lang/Object;)Z");
	};
	proto["isAssignableFrom(Ljava/lang/Class;)Z"] = function(ref0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Class#isAssignableFrom(Ljava/lang/Class;)Z");
	};
	proto["isInterface()Z"] = function(){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Class#isInterface()Z");
	};
	proto["isArray()Z"] = function(){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Class#isArray()Z");
	};
	proto["isPrimitive()Z"] = function(){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Class#isPrimitive()Z");
	};
	proto["isAnnotation()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#isAnnotation()Z");
	};
	proto["isSynthetic()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#isSynthetic()Z");
	};
	proto["getName()Ljava/lang/String;"] = function(){
		var self = this;
		return self.name;
	};
	proto["getClassLoader()Ljava/lang/ClassLoader;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getClassLoader()Ljava/lang/ClassLoader;");
	};
	proto["getClassLoader0()Ljava/lang/ClassLoader;"] = function(){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Class#getClassLoader0()Ljava/lang/ClassLoader;");
	};
	proto["getTypeParameters()[Ljava/lang/reflect/TypeVariable;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getTypeParameters()[Ljava/lang/reflect/TypeVariable;");
	};
	proto["getSuperclass()Ljava/lang/Class;"] = function(){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Class#getSuperclass()Ljava/lang/Class;");
	};
	proto["getGenericSuperclass()Ljava/lang/reflect/Type;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getGenericSuperclass()Ljava/lang/reflect/Type;");
	};
	proto["getPackage()Ljava/lang/Package;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getPackage()Ljava/lang/Package;");
	};
	proto["getInterfaces()[Ljava/lang/Class;"] = function(){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Class#getInterfaces()[Ljava/lang/Class;");
	};
	proto["getGenericInterfaces()[Ljava/lang/reflect/Type;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getGenericInterfaces()[Ljava/lang/reflect/Type;");
	};
	proto["getComponentType()Ljava/lang/Class;"] = function(){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Class#getComponentType()Ljava/lang/Class;");
	};
	proto["getModifiers()I"] = function(){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Class#getModifiers()I");
	};
	proto["getSigners()[Ljava/lang/Object;"] = function(){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Class#getSigners()[Ljava/lang/Object;");
	};
	proto["setSigners([Ljava/lang/Object;)V"] = function(arr_ref0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Class#setSigners([Ljava/lang/Object;)V");
	};
	proto["getEnclosingMethod()Ljava/lang/reflect/Method;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getEnclosingMethod()Ljava/lang/reflect/Method;");
	};
	proto["getEnclosingConstructor()Ljava/lang/reflect/Constructor;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getEnclosingConstructor()Ljava/lang/reflect/Constructor;");
	};
	proto["getDeclaringClass()Ljava/lang/Class;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getDeclaringClass()Ljava/lang/Class;");
	};
	proto["getEnclosingClass()Ljava/lang/Class;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getEnclosingClass()Ljava/lang/Class;");
	};
	proto["getSimpleName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getSimpleName()Ljava/lang/String;");
	};
	proto["getCanonicalName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getCanonicalName()Ljava/lang/String;");
	};
	proto["isAnonymousClass()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#isAnonymousClass()Z");
	};
	proto["isLocalClass()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#isLocalClass()Z");
	};
	proto["isMemberClass()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#isMemberClass()Z");
	};
	proto["getClasses()[Ljava/lang/Class;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getClasses()[Ljava/lang/Class;");
	};
	proto["getFields()[Ljava/lang/reflect/Field;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getFields()[Ljava/lang/reflect/Field;");
	};
	proto["getMethods()[Ljava/lang/reflect/Method;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getMethods()[Ljava/lang/reflect/Method;");
	};
	proto["getConstructors()[Ljava/lang/reflect/Constructor;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getConstructors()[Ljava/lang/reflect/Constructor;");
	};
	proto["getField(Ljava/lang/String;)Ljava/lang/reflect/Field;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getField(Ljava/lang/String;)Ljava/lang/reflect/Field;");
	};
	proto["getMethod(Ljava/lang/String;[Ljava/lang/Class;)Ljava/lang/reflect/Method;"] = function(ref0,arr_ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getMethod(Ljava/lang/String;[Ljava/lang/Class;)Ljava/lang/reflect/Method;");
	};
	proto["getConstructor([Ljava/lang/Class;)Ljava/lang/reflect/Constructor;"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getConstructor([Ljava/lang/Class;)Ljava/lang/reflect/Constructor;");
	};
	proto["getDeclaredClasses()[Ljava/lang/Class;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getDeclaredClasses()[Ljava/lang/Class;");
	};
	proto["getDeclaredFields()[Ljava/lang/reflect/Field;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getDeclaredFields()[Ljava/lang/reflect/Field;");
	};
	proto["getDeclaredMethods()[Ljava/lang/reflect/Method;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getDeclaredMethods()[Ljava/lang/reflect/Method;");
	};
	proto["getDeclaredConstructors()[Ljava/lang/reflect/Constructor;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getDeclaredConstructors()[Ljava/lang/reflect/Constructor;");
	};
	proto["getDeclaredField(Ljava/lang/String;)Ljava/lang/reflect/Field;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getDeclaredField(Ljava/lang/String;)Ljava/lang/reflect/Field;");
	};
	proto["getDeclaredMethod(Ljava/lang/String;[Ljava/lang/Class;)Ljava/lang/reflect/Method;"] = function(ref0,arr_ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getDeclaredMethod(Ljava/lang/String;[Ljava/lang/Class;)Ljava/lang/reflect/Method;");
	};
	proto["getDeclaredConstructor([Ljava/lang/Class;)Ljava/lang/reflect/Constructor;"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getDeclaredConstructor([Ljava/lang/Class;)Ljava/lang/reflect/Constructor;");
	};
	proto["getResourceAsStream(Ljava/lang/String;)Ljava/io/InputStream;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getResourceAsStream(Ljava/lang/String;)Ljava/io/InputStream;");
	};
	proto["getResource(Ljava/lang/String;)Ljava/net/URL;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getResource(Ljava/lang/String;)Ljava/net/URL;");
	};
	proto["getProtectionDomain()Ljava/security/ProtectionDomain;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getProtectionDomain()Ljava/security/ProtectionDomain;");
	};
	proto["setProtectionDomain0(Ljava/security/ProtectionDomain;)V"] = function(ref0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Class#setProtectionDomain0(Ljava/security/ProtectionDomain;)V");
	};
	klass["getPrimitiveClass(Ljava/lang/String;)Ljava/lang/Class;"] = function(ref0){
		var self = null;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Class#getPrimitiveClass(Ljava/lang/String;)Ljava/lang/Class;");
	};
	proto["getRawAnnotations()[B"] = function(){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Class#getRawAnnotations()[B");
	};
	proto["getConstantPool()Lsun/reflect/ConstantPool;"] = function(){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Class#getConstantPool()Lsun/reflect/ConstantPool;");
	};
	proto["desiredAssertionStatus()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#desiredAssertionStatus()Z");
	};
	proto["isEnum()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#isEnum()Z");
	};
	proto["getEnumConstants()[Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getEnumConstants()[Ljava/lang/Object;");
	};
	proto["getEnumConstantsShared()[Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getEnumConstantsShared()[Ljava/lang/Object;");
	};
	proto["enumConstantDirectory()Ljava/util/Map;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#enumConstantDirectory()Ljava/util/Map;");
	};
	proto["cast(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#cast(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["asSubclass(Ljava/lang/Class;)Ljava/lang/Class;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#asSubclass(Ljava/lang/Class;)Ljava/lang/Class;");
	};
	proto["getAnnotation(Ljava/lang/Class;)Ljava/lang/annotation/Annotation;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getAnnotation(Ljava/lang/Class;)Ljava/lang/annotation/Annotation;");
	};
	proto["isAnnotationPresent(Ljava/lang/Class;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#isAnnotationPresent(Ljava/lang/Class;)Z");
	};
	proto["getAnnotations()[Ljava/lang/annotation/Annotation;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getAnnotations()[Ljava/lang/annotation/Annotation;");
	};
	proto["getDeclaredAnnotations()[Ljava/lang/annotation/Annotation;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getDeclaredAnnotations()[Ljava/lang/annotation/Annotation;");
	};
	proto["casAnnotationType(Lsun/reflect/annotation/AnnotationType;Lsun/reflect/annotation/AnnotationType;)Z"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#casAnnotationType(Lsun/reflect/annotation/AnnotationType;Lsun/reflect/annotation/AnnotationType;)Z");
	};
	proto["getAnnotationType()Lsun/reflect/annotation/AnnotationType;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Class#getAnnotationType()Lsun/reflect/annotation/AnnotationType;");
	};
	klass["access$100(Ljava/lang/Class;)Ljava/lang/reflect/Method;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Class#access$100(Ljava/lang/Class;)Ljava/lang/reflect/Method;");
	};
	klass["access$200(Ljava/lang/Class;Z)[Ljava/lang/reflect/Field;"] = function(ref0,b1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Class#access$200(Ljava/lang/Class;Z)[Ljava/lang/reflect/Field;");
	};
	klass["access$300([Ljava/lang/reflect/Field;Ljava/lang/String;)Ljava/lang/reflect/Field;"] = function(arr_ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Class#access$300([Ljava/lang/reflect/Field;Ljava/lang/String;)Ljava/lang/reflect/Field;");
	};
	klass["access$400([Ljava/lang/Object;[Ljava/lang/Object;)Z"] = function(arr_ref0,arr_ref1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Class#access$400([Ljava/lang/Object;[Ljava/lang/Object;)Z");
	};
	klass["access$502(Z)Z"] = function(b0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Class#access$502(Z)Z");
	};
	klass["access$602(Z)Z"] = function(b0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Class#access$602(Z)Z");
	};

});

//"java/util/Locale"
Java["java/util/Locale"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/Locale");
	klass["ENGLISH"] = null;
	klass["FRENCH"] = null;
	klass["GERMAN"] = null;
	klass["ITALIAN"] = null;
	klass["JAPANESE"] = null;
	klass["KOREAN"] = null;
	klass["CHINESE"] = null;
	klass["SIMPLIFIED_CHINESE"] = null;
	klass["TRADITIONAL_CHINESE"] = null;
	klass["FRANCE"] = null;
	klass["GERMANY"] = null;
	klass["ITALY"] = null;
	klass["JAPAN"] = null;
	klass["KOREA"] = null;
	klass["CHINA"] = null;
	klass["PRC"] = null;
	klass["TAIWAN"] = null;
	klass["UK"] = null;
	klass["US"] = null;
	klass["CANADA"] = null;
	klass["CANADA_FRENCH"] = null;
	klass["ROOT"] = null;
	klass["PRIVATE_USE_EXTENSION"] = (120);
	klass["UNICODE_LOCALE_EXTENSION"] = (117);
	klass["serialVersionUID"] = (9149081749638150636);
	klass["$assertionsDisabled"] = null;
	var def = new klass();
	proto["<init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V"] = function(ref0,ref1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#<init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/String;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#<init>(Ljava/lang/String;Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#<init>(Ljava/lang/String;)V");
	};
	klass["getInstance(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/util/Locale;"] = function(ref0,ref1,ref2){
		var self = null;
		throw new Error("NotImplemented: java/util/Locale#getInstance(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/util/Locale;");
	};
	klass["getInstance(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lsun/util/locale/LocaleExtensions;)Ljava/util/Locale;"] = function(ref0,ref1,ref2,ref3,ref4){
		var self = null;
		throw new Error("NotImplemented: java/util/Locale#getInstance(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lsun/util/locale/LocaleExtensions;)Ljava/util/Locale;");
	};
	klass["getInstance(Lsun/util/locale/BaseLocale;Lsun/util/locale/LocaleExtensions;)Ljava/util/Locale;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/Locale#getInstance(Lsun/util/locale/BaseLocale;Lsun/util/locale/LocaleExtensions;)Ljava/util/Locale;");
	};
	klass["getDefault()Ljava/util/Locale;"] = function(){
		return def;
	};
	klass["getDefault(Ljava/util/Locale$Category;)Ljava/util/Locale;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Locale#getDefault(Ljava/util/Locale$Category;)Ljava/util/Locale;");
	};
	klass["setDefault(Ljava/util/Locale;)V"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Locale#setDefault(Ljava/util/Locale;)V");
	};
	klass["setDefault(Ljava/util/Locale$Category;Ljava/util/Locale;)V"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/Locale#setDefault(Ljava/util/Locale$Category;Ljava/util/Locale;)V");
	};
	klass["getAvailableLocales()[Ljava/util/Locale;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/util/Locale#getAvailableLocales()[Ljava/util/Locale;");
	};
	klass["getISOCountries()[Ljava/lang/String;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/util/Locale#getISOCountries()[Ljava/lang/String;");
	};
	klass["getISOLanguages()[Ljava/lang/String;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/util/Locale#getISOLanguages()[Ljava/lang/String;");
	};
	proto["getLanguage()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#getLanguage()Ljava/lang/String;");
	};
	proto["getScript()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#getScript()Ljava/lang/String;");
	};
	proto["getCountry()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#getCountry()Ljava/lang/String;");
	};
	proto["getVariant()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#getVariant()Ljava/lang/String;");
	};
	proto["getExtension(C)Ljava/lang/String;"] = function(ch0){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#getExtension(C)Ljava/lang/String;");
	};
	proto["getExtensionKeys()Ljava/util/Set;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#getExtensionKeys()Ljava/util/Set;");
	};
	proto["getUnicodeLocaleAttributes()Ljava/util/Set;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#getUnicodeLocaleAttributes()Ljava/util/Set;");
	};
	proto["getUnicodeLocaleType(Ljava/lang/String;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#getUnicodeLocaleType(Ljava/lang/String;)Ljava/lang/String;");
	};
	proto["getUnicodeLocaleKeys()Ljava/util/Set;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#getUnicodeLocaleKeys()Ljava/util/Set;");
	};
	proto["getBaseLocale()Lsun/util/locale/BaseLocale;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#getBaseLocale()Lsun/util/locale/BaseLocale;");
	};
	proto["getLocaleExtensions()Lsun/util/locale/LocaleExtensions;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#getLocaleExtensions()Lsun/util/locale/LocaleExtensions;");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#toString()Ljava/lang/String;");
	};
	proto["toLanguageTag()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#toLanguageTag()Ljava/lang/String;");
	};
	klass["forLanguageTag(Ljava/lang/String;)Ljava/util/Locale;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Locale#forLanguageTag(Ljava/lang/String;)Ljava/util/Locale;");
	};
	proto["getISO3Language()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#getISO3Language()Ljava/lang/String;");
	};
	proto["getISO3Country()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#getISO3Country()Ljava/lang/String;");
	};
	proto["getDisplayLanguage()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#getDisplayLanguage()Ljava/lang/String;");
	};
	proto["getDisplayLanguage(Ljava/util/Locale;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#getDisplayLanguage(Ljava/util/Locale;)Ljava/lang/String;");
	};
	proto["getDisplayScript()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#getDisplayScript()Ljava/lang/String;");
	};
	proto["getDisplayScript(Ljava/util/Locale;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#getDisplayScript(Ljava/util/Locale;)Ljava/lang/String;");
	};
	proto["getDisplayCountry()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#getDisplayCountry()Ljava/lang/String;");
	};
	proto["getDisplayCountry(Ljava/util/Locale;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#getDisplayCountry(Ljava/util/Locale;)Ljava/lang/String;");
	};
	proto["getDisplayVariant()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#getDisplayVariant()Ljava/lang/String;");
	};
	proto["getDisplayVariant(Ljava/util/Locale;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#getDisplayVariant(Ljava/util/Locale;)Ljava/lang/String;");
	};
	proto["getDisplayName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#getDisplayName()Ljava/lang/String;");
	};
	proto["getDisplayName(Ljava/util/Locale;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#getDisplayName(Ljava/util/Locale;)Ljava/lang/String;");
	};
	proto["clone()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#clone()Ljava/lang/Object;");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#hashCode()I");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#equals(Ljava/lang/Object;)Z");
	};
	proto["<init>(Lsun/util/locale/BaseLocale;Lsun/util/locale/LocaleExtensions;Ljava/util/Locale$1;)V"] = function(ref0,ref1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/util/Locale#<init>(Lsun/util/locale/BaseLocale;Lsun/util/locale/LocaleExtensions;Ljava/util/Locale$1;)V");
	};
	klass["access$600(Ljava/util/Locale;)Lsun/util/locale/BaseLocale;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Locale#access$600(Ljava/util/Locale;)Lsun/util/locale/BaseLocale;");
	};
	klass["access$700(Ljava/util/Locale;)Lsun/util/locale/LocaleExtensions;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Locale#access$700(Ljava/util/Locale;)Lsun/util/locale/LocaleExtensions;");
	};
	klass["access$800(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lsun/util/locale/LocaleExtensions;"] = function(ref0,ref1,ref2,ref3){
		var self = null;
		throw new Error("NotImplemented: java/util/Locale#access$800(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lsun/util/locale/LocaleExtensions;");
	};

});

//"java/util/Comparator"
Java["java/util/Comparator"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/Comparator");

	proto["compare(Ljava/lang/Object;Ljava/lang/Object;)I"] = null;
	proto["equals(Ljava/lang/Object;)Z"] = null;

});

//"java/nio/charset/Charset"
Java["java/nio/charset/Charset"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/charset/Charset");

	klass["atBugLevel(Ljava/lang/String;)Z"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/nio/charset/Charset#atBugLevel(Ljava/lang/String;)Z");
	};
	klass["isSupported(Ljava/lang/String;)Z"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/nio/charset/Charset#isSupported(Ljava/lang/String;)Z");
	};
	klass["forName(Ljava/lang/String;)Ljava/nio/charset/Charset;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/nio/charset/Charset#forName(Ljava/lang/String;)Ljava/nio/charset/Charset;");
	};
	klass["availableCharsets()Ljava/util/SortedMap;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/nio/charset/Charset#availableCharsets()Ljava/util/SortedMap;");
	};
	klass["defaultCharset()Ljava/nio/charset/Charset;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/nio/charset/Charset#defaultCharset()Ljava/nio/charset/Charset;");
	};
	proto["<init>(Ljava/lang/String;[Ljava/lang/String;)V"] = function(ref0,arr_ref1){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/Charset#<init>(Ljava/lang/String;[Ljava/lang/String;)V");
	};
	proto["name()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/Charset#name()Ljava/lang/String;");
	};
	proto["aliases()Ljava/util/Set;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/Charset#aliases()Ljava/util/Set;");
	};
	proto["displayName()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/Charset#displayName()Ljava/lang/String;");
	};
	proto["isRegistered()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/Charset#isRegistered()Z");
	};
	proto["displayName(Ljava/util/Locale;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/Charset#displayName(Ljava/util/Locale;)Ljava/lang/String;");
	};
	proto["contains(Ljava/nio/charset/Charset;)Z"] = null;
	proto["newDecoder()Ljava/nio/charset/CharsetDecoder;"] = null;
	proto["newEncoder()Ljava/nio/charset/CharsetEncoder;"] = null;
	proto["canEncode()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/Charset#canEncode()Z");
	};
	proto["decode(Ljava/nio/ByteBuffer;)Ljava/nio/CharBuffer;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/Charset#decode(Ljava/nio/ByteBuffer;)Ljava/nio/CharBuffer;");
	};
	proto["encode(Ljava/nio/CharBuffer;)Ljava/nio/ByteBuffer;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/Charset#encode(Ljava/nio/CharBuffer;)Ljava/nio/ByteBuffer;");
	};
	proto["encode(Ljava/lang/String;)Ljava/nio/ByteBuffer;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/Charset#encode(Ljava/lang/String;)Ljava/nio/ByteBuffer;");
	};
	proto["compareTo(Ljava/nio/charset/Charset;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/Charset#compareTo(Ljava/nio/charset/Charset;)I");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/Charset#hashCode()I");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/Charset#equals(Ljava/lang/Object;)Z");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/Charset#toString()Ljava/lang/String;");
	};
	proto["compareTo(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/nio/charset/Charset#compareTo(Ljava/lang/Object;)I");
	};
	klass["access$000()Ljava/util/Iterator;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/nio/charset/Charset#access$000()Ljava/util/Iterator;");
	};
	klass["access$100()Ljava/nio/charset/spi/CharsetProvider;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/nio/charset/Charset#access$100()Ljava/nio/charset/spi/CharsetProvider;");
	};
	klass["access$200(Ljava/util/Iterator;Ljava/util/Map;)V"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/nio/charset/Charset#access$200(Ljava/util/Iterator;Ljava/util/Map;)V");
	};

});

//"java/lang/StringBuilder"
Java["java/lang/StringBuilder"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/AbstractStringBuilder"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/StringBuilder");
	klass["serialVersionUID"] = (4383685877147921099);
	proto["<init>()V"] = function(){
		this.buf = "";
	};
	proto["<init>(I)V"] = function(i0){
		this.buf = "";
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#<init>(Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/CharSequence;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#<init>(Ljava/lang/CharSequence;)V");
	};
	proto["append(Ljava/lang/Object;)Ljava/lang/StringBuilder;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append(Ljava/lang/Object;)Ljava/lang/StringBuilder;");
	};
	proto["append(Ljava/lang/String;)Ljava/lang/StringBuilder;"] = function(ref0){
		this.buf += ref0.val;
		return this;
	};
	proto["append(Ljava/lang/StringBuffer;)Ljava/lang/StringBuilder;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append(Ljava/lang/StringBuffer;)Ljava/lang/StringBuilder;");
	};
	proto["append(Ljava/lang/CharSequence;)Ljava/lang/StringBuilder;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append(Ljava/lang/CharSequence;)Ljava/lang/StringBuilder;");
	};
	proto["append(Ljava/lang/CharSequence;II)Ljava/lang/StringBuilder;"] = function(ref0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append(Ljava/lang/CharSequence;II)Ljava/lang/StringBuilder;");
	};
	proto["append([C)Ljava/lang/StringBuilder;"] = function(arr_ch0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append([C)Ljava/lang/StringBuilder;");
	};
	proto["append([CII)Ljava/lang/StringBuilder;"] = function(arr_ch0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append([CII)Ljava/lang/StringBuilder;");
	};
	proto["append(Z)Ljava/lang/StringBuilder;"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append(Z)Ljava/lang/StringBuilder;");
	};
	proto["append(C)Ljava/lang/StringBuilder;"] = function(ch0){
		this.buf += String.fromCodePoint(ch0);
	};
	proto["append(I)Ljava/lang/StringBuilder;"] = function(i0){
		this.buf += i0.toString();
		return this;
	};
	proto["append(J)Ljava/lang/StringBuilder;"] = function(l0){
		this.buf += l0.toString();
		return this;
	};
	proto["append(F)Ljava/lang/StringBuilder;"] = function(flt0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append(F)Ljava/lang/StringBuilder;");
	};
	proto["append(D)Ljava/lang/StringBuilder;"] = function(db0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append(D)Ljava/lang/StringBuilder;");
	};
	proto["appendCodePoint(I)Ljava/lang/StringBuilder;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#appendCodePoint(I)Ljava/lang/StringBuilder;");
	};
	proto["delete(II)Ljava/lang/StringBuilder;"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#delete(II)Ljava/lang/StringBuilder;");
	};
	proto["deleteCharAt(I)Ljava/lang/StringBuilder;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#deleteCharAt(I)Ljava/lang/StringBuilder;");
	};
	proto["replace(IILjava/lang/String;)Ljava/lang/StringBuilder;"] = function(i0,i1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#replace(IILjava/lang/String;)Ljava/lang/StringBuilder;");
	};
	proto["insert(I[CII)Ljava/lang/StringBuilder;"] = function(i0,arr_ch1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(I[CII)Ljava/lang/StringBuilder;");
	};
	proto["insert(ILjava/lang/Object;)Ljava/lang/StringBuilder;"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(ILjava/lang/Object;)Ljava/lang/StringBuilder;");
	};
	proto["insert(ILjava/lang/String;)Ljava/lang/StringBuilder;"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(ILjava/lang/String;)Ljava/lang/StringBuilder;");
	};
	proto["insert(I[C)Ljava/lang/StringBuilder;"] = function(i0,arr_ch1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(I[C)Ljava/lang/StringBuilder;");
	};
	proto["insert(ILjava/lang/CharSequence;)Ljava/lang/StringBuilder;"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(ILjava/lang/CharSequence;)Ljava/lang/StringBuilder;");
	};
	proto["insert(ILjava/lang/CharSequence;II)Ljava/lang/StringBuilder;"] = function(i0,ref1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(ILjava/lang/CharSequence;II)Ljava/lang/StringBuilder;");
	};
	proto["insert(IZ)Ljava/lang/StringBuilder;"] = function(i0,b1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(IZ)Ljava/lang/StringBuilder;");
	};
	proto["insert(IC)Ljava/lang/StringBuilder;"] = function(i0,ch1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(IC)Ljava/lang/StringBuilder;");
	};
	proto["insert(II)Ljava/lang/StringBuilder;"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(II)Ljava/lang/StringBuilder;");
	};
	proto["insert(IJ)Ljava/lang/StringBuilder;"] = function(i0,l1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(IJ)Ljava/lang/StringBuilder;");
	};
	proto["insert(IF)Ljava/lang/StringBuilder;"] = function(i0,flt1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(IF)Ljava/lang/StringBuilder;");
	};
	proto["insert(ID)Ljava/lang/StringBuilder;"] = function(i0,db1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(ID)Ljava/lang/StringBuilder;");
	};
	proto["indexOf(Ljava/lang/String;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#indexOf(Ljava/lang/String;)I");
	};
	proto["indexOf(Ljava/lang/String;I)I"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#indexOf(Ljava/lang/String;I)I");
	};
	proto["lastIndexOf(Ljava/lang/String;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#lastIndexOf(Ljava/lang/String;)I");
	};
	proto["lastIndexOf(Ljava/lang/String;I)I"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#lastIndexOf(Ljava/lang/String;I)I");
	};
	proto["reverse()Ljava/lang/StringBuilder;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#reverse()Ljava/lang/StringBuilder;");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		return Java.mkString(this.buf);
	};
	proto["reverse()Ljava/lang/AbstractStringBuilder;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#reverse()Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(ID)Ljava/lang/AbstractStringBuilder;"] = function(i0,db1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(ID)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(IF)Ljava/lang/AbstractStringBuilder;"] = function(i0,flt1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(IF)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(IJ)Ljava/lang/AbstractStringBuilder;"] = function(i0,l1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(IJ)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(II)Ljava/lang/AbstractStringBuilder;"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(II)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(IC)Ljava/lang/AbstractStringBuilder;"] = function(i0,ch1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(IC)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(IZ)Ljava/lang/AbstractStringBuilder;"] = function(i0,b1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(IZ)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(ILjava/lang/CharSequence;II)Ljava/lang/AbstractStringBuilder;"] = function(i0,ref1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(ILjava/lang/CharSequence;II)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(ILjava/lang/CharSequence;)Ljava/lang/AbstractStringBuilder;"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(ILjava/lang/CharSequence;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(I[C)Ljava/lang/AbstractStringBuilder;"] = function(i0,arr_ch1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(I[C)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(ILjava/lang/String;)Ljava/lang/AbstractStringBuilder;"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(ILjava/lang/String;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(ILjava/lang/Object;)Ljava/lang/AbstractStringBuilder;"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(ILjava/lang/Object;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(I[CII)Ljava/lang/AbstractStringBuilder;"] = function(i0,arr_ch1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#insert(I[CII)Ljava/lang/AbstractStringBuilder;");
	};
	proto["substring(II)Ljava/lang/String;"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#substring(II)Ljava/lang/String;");
	};
	proto["subSequence(II)Ljava/lang/CharSequence;"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#subSequence(II)Ljava/lang/CharSequence;");
	};
	proto["substring(I)Ljava/lang/String;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#substring(I)Ljava/lang/String;");
	};
	proto["replace(IILjava/lang/String;)Ljava/lang/AbstractStringBuilder;"] = function(i0,i1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#replace(IILjava/lang/String;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["deleteCharAt(I)Ljava/lang/AbstractStringBuilder;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#deleteCharAt(I)Ljava/lang/AbstractStringBuilder;");
	};
	proto["appendCodePoint(I)Ljava/lang/AbstractStringBuilder;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#appendCodePoint(I)Ljava/lang/AbstractStringBuilder;");
	};
	proto["delete(II)Ljava/lang/AbstractStringBuilder;"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#delete(II)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(D)Ljava/lang/AbstractStringBuilder;"] = function(db0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append(D)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(F)Ljava/lang/AbstractStringBuilder;"] = function(flt0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append(F)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(J)Ljava/lang/AbstractStringBuilder;"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append(J)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(I)Ljava/lang/AbstractStringBuilder;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append(I)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(C)Ljava/lang/AbstractStringBuilder;"] = function(ch0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append(C)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(Z)Ljava/lang/AbstractStringBuilder;"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append(Z)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append([CII)Ljava/lang/AbstractStringBuilder;"] = function(arr_ch0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append([CII)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append([C)Ljava/lang/AbstractStringBuilder;"] = function(arr_ch0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append([C)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(Ljava/lang/CharSequence;II)Ljava/lang/AbstractStringBuilder;"] = function(ref0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append(Ljava/lang/CharSequence;II)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(Ljava/lang/CharSequence;)Ljava/lang/AbstractStringBuilder;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append(Ljava/lang/CharSequence;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(Ljava/lang/StringBuffer;)Ljava/lang/AbstractStringBuilder;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append(Ljava/lang/StringBuffer;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(Ljava/lang/String;)Ljava/lang/AbstractStringBuilder;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append(Ljava/lang/String;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(Ljava/lang/Object;)Ljava/lang/AbstractStringBuilder;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append(Ljava/lang/Object;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["setCharAt(IC)V"] = function(i0,ch1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#setCharAt(IC)V");
	};
	proto["getChars(II[CI)V"] = function(i0,i1,arr_ch2,i3){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#getChars(II[CI)V");
	};
	proto["offsetByCodePoints(II)I"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#offsetByCodePoints(II)I");
	};
	proto["codePointCount(II)I"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#codePointCount(II)I");
	};
	proto["codePointBefore(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#codePointBefore(I)I");
	};
	proto["codePointAt(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#codePointAt(I)I");
	};
	proto["charAt(I)C"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#charAt(I)C");
	};
	proto["setLength(I)V"] = function(i0){
		this.buf = this.buf.substring(0, i0);
	};
	proto["trimToSize()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#trimToSize()V");
	};
	proto["ensureCapacity(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#ensureCapacity(I)V");
	};
	proto["capacity()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#capacity()I");
	};
	proto["length()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#length()I");
	};
	proto["append(C)Ljava/lang/Appendable;"] = function(ch0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append(C)Ljava/lang/Appendable;");
	};
	proto["append(Ljava/lang/CharSequence;II)Ljava/lang/Appendable;"] = function(ref0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append(Ljava/lang/CharSequence;II)Ljava/lang/Appendable;");
	};
	proto["append(Ljava/lang/CharSequence;)Ljava/lang/Appendable;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuilder#append(Ljava/lang/CharSequence;)Ljava/lang/Appendable;");
	};

});

//"java/lang/StringBuffer"
Java["java/lang/StringBuffer"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/AbstractStringBuilder"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/StringBuffer");
	klass["serialVersionUID"] = (3388685877147921107);
	proto["<init>()V"] = function(){
		this.buf = "";
	};
	proto["<init>(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#<init>(I)V");
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#<init>(Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/CharSequence;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#<init>(Ljava/lang/CharSequence;)V");
	};
	proto["length()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#length()I");
	};
	proto["capacity()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#capacity()I");
	};
	proto["ensureCapacity(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#ensureCapacity(I)V");
	};
	proto["trimToSize()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#trimToSize()V");
	};
	proto["setLength(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#setLength(I)V");
	};
	proto["charAt(I)C"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#charAt(I)C");
	};
	proto["codePointAt(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#codePointAt(I)I");
	};
	proto["codePointBefore(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#codePointBefore(I)I");
	};
	proto["codePointCount(II)I"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#codePointCount(II)I");
	};
	proto["offsetByCodePoints(II)I"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#offsetByCodePoints(II)I");
	};
	proto["getChars(II[CI)V"] = function(i0,i1,arr_ch2,i3){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#getChars(II[CI)V");
	};
	proto["setCharAt(IC)V"] = function(i0,ch1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#setCharAt(IC)V");
	};
	proto["append(Ljava/lang/Object;)Ljava/lang/StringBuffer;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append(Ljava/lang/Object;)Ljava/lang/StringBuffer;");
	};
	proto["append(Ljava/lang/String;)Ljava/lang/StringBuffer;"] = function(ref0){
		this.buf += ref0.val;
		return this;
	};
	proto["append(Ljava/lang/StringBuffer;)Ljava/lang/StringBuffer;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append(Ljava/lang/StringBuffer;)Ljava/lang/StringBuffer;");
	};
	proto["append(Ljava/lang/CharSequence;)Ljava/lang/StringBuffer;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append(Ljava/lang/CharSequence;)Ljava/lang/StringBuffer;");
	};
	proto["append(Ljava/lang/CharSequence;II)Ljava/lang/StringBuffer;"] = function(ref0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append(Ljava/lang/CharSequence;II)Ljava/lang/StringBuffer;");
	};
	proto["append([C)Ljava/lang/StringBuffer;"] = function(arr_ch0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append([C)Ljava/lang/StringBuffer;");
	};
	proto["append([CII)Ljava/lang/StringBuffer;"] = function(arr_ch0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append([CII)Ljava/lang/StringBuffer;");
	};
	proto["append(Z)Ljava/lang/StringBuffer;"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append(Z)Ljava/lang/StringBuffer;");
	};
	proto["append(C)Ljava/lang/StringBuffer;"] = function(ch0){
		this.buf += String.fromCodePoint(ch0);
		return this;
	};
	proto["append(I)Ljava/lang/StringBuffer;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append(I)Ljava/lang/StringBuffer;");
	};
	proto["appendCodePoint(I)Ljava/lang/StringBuffer;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#appendCodePoint(I)Ljava/lang/StringBuffer;");
	};
	proto["append(J)Ljava/lang/StringBuffer;"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append(J)Ljava/lang/StringBuffer;");
	};
	proto["append(F)Ljava/lang/StringBuffer;"] = function(flt0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append(F)Ljava/lang/StringBuffer;");
	};
	proto["append(D)Ljava/lang/StringBuffer;"] = function(db0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append(D)Ljava/lang/StringBuffer;");
	};
	proto["delete(II)Ljava/lang/StringBuffer;"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#delete(II)Ljava/lang/StringBuffer;");
	};
	proto["deleteCharAt(I)Ljava/lang/StringBuffer;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#deleteCharAt(I)Ljava/lang/StringBuffer;");
	};
	proto["replace(IILjava/lang/String;)Ljava/lang/StringBuffer;"] = function(i0,i1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#replace(IILjava/lang/String;)Ljava/lang/StringBuffer;");
	};
	proto["substring(I)Ljava/lang/String;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#substring(I)Ljava/lang/String;");
	};
	proto["subSequence(II)Ljava/lang/CharSequence;"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#subSequence(II)Ljava/lang/CharSequence;");
	};
	proto["substring(II)Ljava/lang/String;"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#substring(II)Ljava/lang/String;");
	};
	proto["insert(I[CII)Ljava/lang/StringBuffer;"] = function(i0,arr_ch1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(I[CII)Ljava/lang/StringBuffer;");
	};
	proto["insert(ILjava/lang/Object;)Ljava/lang/StringBuffer;"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(ILjava/lang/Object;)Ljava/lang/StringBuffer;");
	};
	proto["insert(ILjava/lang/String;)Ljava/lang/StringBuffer;"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(ILjava/lang/String;)Ljava/lang/StringBuffer;");
	};
	proto["insert(I[C)Ljava/lang/StringBuffer;"] = function(i0,arr_ch1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(I[C)Ljava/lang/StringBuffer;");
	};
	proto["insert(ILjava/lang/CharSequence;)Ljava/lang/StringBuffer;"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(ILjava/lang/CharSequence;)Ljava/lang/StringBuffer;");
	};
	proto["insert(ILjava/lang/CharSequence;II)Ljava/lang/StringBuffer;"] = function(i0,ref1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(ILjava/lang/CharSequence;II)Ljava/lang/StringBuffer;");
	};
	proto["insert(IZ)Ljava/lang/StringBuffer;"] = function(i0,b1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(IZ)Ljava/lang/StringBuffer;");
	};
	proto["insert(IC)Ljava/lang/StringBuffer;"] = function(i0,ch1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(IC)Ljava/lang/StringBuffer;");
	};
	proto["insert(II)Ljava/lang/StringBuffer;"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(II)Ljava/lang/StringBuffer;");
	};
	proto["insert(IJ)Ljava/lang/StringBuffer;"] = function(i0,l1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(IJ)Ljava/lang/StringBuffer;");
	};
	proto["insert(IF)Ljava/lang/StringBuffer;"] = function(i0,flt1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(IF)Ljava/lang/StringBuffer;");
	};
	proto["insert(ID)Ljava/lang/StringBuffer;"] = function(i0,db1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(ID)Ljava/lang/StringBuffer;");
	};
	proto["indexOf(Ljava/lang/String;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#indexOf(Ljava/lang/String;)I");
	};
	proto["indexOf(Ljava/lang/String;I)I"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#indexOf(Ljava/lang/String;I)I");
	};
	proto["lastIndexOf(Ljava/lang/String;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#lastIndexOf(Ljava/lang/String;)I");
	};
	proto["lastIndexOf(Ljava/lang/String;I)I"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#lastIndexOf(Ljava/lang/String;I)I");
	};
	proto["reverse()Ljava/lang/StringBuffer;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#reverse()Ljava/lang/StringBuffer;");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		return Java.mkString(this.buf);
	};
	proto["reverse()Ljava/lang/AbstractStringBuilder;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#reverse()Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(ID)Ljava/lang/AbstractStringBuilder;"] = function(i0,db1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(ID)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(IF)Ljava/lang/AbstractStringBuilder;"] = function(i0,flt1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(IF)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(IJ)Ljava/lang/AbstractStringBuilder;"] = function(i0,l1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(IJ)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(II)Ljava/lang/AbstractStringBuilder;"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(II)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(IC)Ljava/lang/AbstractStringBuilder;"] = function(i0,ch1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(IC)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(IZ)Ljava/lang/AbstractStringBuilder;"] = function(i0,b1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(IZ)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(ILjava/lang/CharSequence;II)Ljava/lang/AbstractStringBuilder;"] = function(i0,ref1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(ILjava/lang/CharSequence;II)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(ILjava/lang/CharSequence;)Ljava/lang/AbstractStringBuilder;"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(ILjava/lang/CharSequence;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(I[C)Ljava/lang/AbstractStringBuilder;"] = function(i0,arr_ch1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(I[C)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(ILjava/lang/String;)Ljava/lang/AbstractStringBuilder;"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(ILjava/lang/String;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(ILjava/lang/Object;)Ljava/lang/AbstractStringBuilder;"] = function(i0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(ILjava/lang/Object;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["insert(I[CII)Ljava/lang/AbstractStringBuilder;"] = function(i0,arr_ch1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#insert(I[CII)Ljava/lang/AbstractStringBuilder;");
	};
	proto["replace(IILjava/lang/String;)Ljava/lang/AbstractStringBuilder;"] = function(i0,i1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#replace(IILjava/lang/String;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["deleteCharAt(I)Ljava/lang/AbstractStringBuilder;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#deleteCharAt(I)Ljava/lang/AbstractStringBuilder;");
	};
	proto["appendCodePoint(I)Ljava/lang/AbstractStringBuilder;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#appendCodePoint(I)Ljava/lang/AbstractStringBuilder;");
	};
	proto["delete(II)Ljava/lang/AbstractStringBuilder;"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#delete(II)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(D)Ljava/lang/AbstractStringBuilder;"] = function(db0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append(D)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(F)Ljava/lang/AbstractStringBuilder;"] = function(flt0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append(F)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(J)Ljava/lang/AbstractStringBuilder;"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append(J)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(I)Ljava/lang/AbstractStringBuilder;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append(I)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(C)Ljava/lang/AbstractStringBuilder;"] = function(ch0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append(C)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(Z)Ljava/lang/AbstractStringBuilder;"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append(Z)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append([CII)Ljava/lang/AbstractStringBuilder;"] = function(arr_ch0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append([CII)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append([C)Ljava/lang/AbstractStringBuilder;"] = function(arr_ch0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append([C)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(Ljava/lang/CharSequence;II)Ljava/lang/AbstractStringBuilder;"] = function(ref0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append(Ljava/lang/CharSequence;II)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(Ljava/lang/CharSequence;)Ljava/lang/AbstractStringBuilder;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append(Ljava/lang/CharSequence;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(Ljava/lang/StringBuffer;)Ljava/lang/AbstractStringBuilder;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append(Ljava/lang/StringBuffer;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(Ljava/lang/String;)Ljava/lang/AbstractStringBuilder;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append(Ljava/lang/String;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(Ljava/lang/Object;)Ljava/lang/AbstractStringBuilder;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append(Ljava/lang/Object;)Ljava/lang/AbstractStringBuilder;");
	};
	proto["append(C)Ljava/lang/Appendable;"] = function(ch0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append(C)Ljava/lang/Appendable;");
	};
	proto["append(Ljava/lang/CharSequence;II)Ljava/lang/Appendable;"] = function(ref0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append(Ljava/lang/CharSequence;II)Ljava/lang/Appendable;");
	};
	proto["append(Ljava/lang/CharSequence;)Ljava/lang/Appendable;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/StringBuffer#append(Ljava/lang/CharSequence;)Ljava/lang/Appendable;");
	};

});

//"java/lang/CharSequence"
Java["java/lang/CharSequence"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/CharSequence");

	proto["length()I"] = null;
	proto["charAt(I)C"] = null;
	proto["subSequence(II)Ljava/lang/CharSequence;"] = null;
	proto["toString()Ljava/lang/String;"] = null;

});

//"java/util/Properties"
Java["java/util/Properties"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/util/Hashtable"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/Properties");
	proto["defaults"] = null;
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Properties#<init>()V");
	};
	proto["<init>(Ljava/util/Properties;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Properties#<init>(Ljava/util/Properties;)V");
	};
	proto["setProperty(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/Object;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/Properties#setProperty(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/Object;");
	};
	proto["load(Ljava/io/Reader;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Properties#load(Ljava/io/Reader;)V");
	};
	proto["load(Ljava/io/InputStream;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Properties#load(Ljava/io/InputStream;)V");
	};
	proto["save(Ljava/io/OutputStream;Ljava/lang/String;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/Properties#save(Ljava/io/OutputStream;Ljava/lang/String;)V");
	};
	proto["store(Ljava/io/Writer;Ljava/lang/String;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/Properties#store(Ljava/io/Writer;Ljava/lang/String;)V");
	};
	proto["store(Ljava/io/OutputStream;Ljava/lang/String;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/Properties#store(Ljava/io/OutputStream;Ljava/lang/String;)V");
	};
	proto["loadFromXML(Ljava/io/InputStream;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Properties#loadFromXML(Ljava/io/InputStream;)V");
	};
	proto["storeToXML(Ljava/io/OutputStream;Ljava/lang/String;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/Properties#storeToXML(Ljava/io/OutputStream;Ljava/lang/String;)V");
	};
	proto["storeToXML(Ljava/io/OutputStream;Ljava/lang/String;Ljava/lang/String;)V"] = function(ref0,ref1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/util/Properties#storeToXML(Ljava/io/OutputStream;Ljava/lang/String;Ljava/lang/String;)V");
	};
	proto["getProperty(Ljava/lang/String;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Properties#getProperty(Ljava/lang/String;)Ljava/lang/String;");
	};
	proto["getProperty(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/Properties#getProperty(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;");
	};
	proto["propertyNames()Ljava/util/Enumeration;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Properties#propertyNames()Ljava/util/Enumeration;");
	};
	proto["stringPropertyNames()Ljava/util/Set;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Properties#stringPropertyNames()Ljava/util/Set;");
	};
	proto["list(Ljava/io/PrintStream;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Properties#list(Ljava/io/PrintStream;)V");
	};
	proto["list(Ljava/io/PrintWriter;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Properties#list(Ljava/io/PrintWriter;)V");
	};

});

//"java/nio/channels/Channel"
Java["java/nio/channels/Channel"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/nio/channels/Channel");

	proto["isOpen()Z"] = null;
	proto["close()V"] = null;

});

//"java/lang/SecurityManager"
Java["java/lang/SecurityManager"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/SecurityManager");
	proto["inCheck"] = null;
	proto["getInCheck()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#getInCheck()Z");
	};
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#<init>()V");
	};
	proto["getClassContext()[Ljava/lang/Class;"] = function(){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/SecurityManager#getClassContext()[Ljava/lang/Class;");
	};
	proto["currentClassLoader()Ljava/lang/ClassLoader;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#currentClassLoader()Ljava/lang/ClassLoader;");
	};
	proto["currentLoadedClass()Ljava/lang/Class;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#currentLoadedClass()Ljava/lang/Class;");
	};
	proto["classDepth(Ljava/lang/String;)I"] = function(ref0){
		var self = this;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/SecurityManager#classDepth(Ljava/lang/String;)I");
	};
	proto["classLoaderDepth()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#classLoaderDepth()I");
	};
	proto["inClass(Ljava/lang/String;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#inClass(Ljava/lang/String;)Z");
	};
	proto["inClassLoader()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#inClassLoader()Z");
	};
	proto["getSecurityContext()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#getSecurityContext()Ljava/lang/Object;");
	};
	proto["checkPermission(Ljava/security/Permission;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkPermission(Ljava/security/Permission;)V");
	};
	proto["checkPermission(Ljava/security/Permission;Ljava/lang/Object;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkPermission(Ljava/security/Permission;Ljava/lang/Object;)V");
	};
	proto["checkCreateClassLoader()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkCreateClassLoader()V");
	};
	proto["checkAccess(Ljava/lang/Thread;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkAccess(Ljava/lang/Thread;)V");
	};
	proto["checkAccess(Ljava/lang/ThreadGroup;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkAccess(Ljava/lang/ThreadGroup;)V");
	};
	proto["checkExit(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkExit(I)V");
	};
	proto["checkExec(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkExec(Ljava/lang/String;)V");
	};
	proto["checkLink(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkLink(Ljava/lang/String;)V");
	};
	proto["checkRead(Ljava/io/FileDescriptor;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkRead(Ljava/io/FileDescriptor;)V");
	};
	proto["checkRead(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkRead(Ljava/lang/String;)V");
	};
	proto["checkRead(Ljava/lang/String;Ljava/lang/Object;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkRead(Ljava/lang/String;Ljava/lang/Object;)V");
	};
	proto["checkWrite(Ljava/io/FileDescriptor;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkWrite(Ljava/io/FileDescriptor;)V");
	};
	proto["checkWrite(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkWrite(Ljava/lang/String;)V");
	};
	proto["checkDelete(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkDelete(Ljava/lang/String;)V");
	};
	proto["checkConnect(Ljava/lang/String;I)V"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkConnect(Ljava/lang/String;I)V");
	};
	proto["checkConnect(Ljava/lang/String;ILjava/lang/Object;)V"] = function(ref0,i1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkConnect(Ljava/lang/String;ILjava/lang/Object;)V");
	};
	proto["checkListen(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkListen(I)V");
	};
	proto["checkAccept(Ljava/lang/String;I)V"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkAccept(Ljava/lang/String;I)V");
	};
	proto["checkMulticast(Ljava/net/InetAddress;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkMulticast(Ljava/net/InetAddress;)V");
	};
	proto["checkMulticast(Ljava/net/InetAddress;B)V"] = function(ref0,sb1){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkMulticast(Ljava/net/InetAddress;B)V");
	};
	proto["checkPropertiesAccess()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkPropertiesAccess()V");
	};
	proto["checkPropertyAccess(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkPropertyAccess(Ljava/lang/String;)V");
	};
	proto["checkTopLevelWindow(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkTopLevelWindow(Ljava/lang/Object;)Z");
	};
	proto["checkPrintJobAccess()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkPrintJobAccess()V");
	};
	proto["checkSystemClipboardAccess()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkSystemClipboardAccess()V");
	};
	proto["checkAwtEventQueueAccess()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkAwtEventQueueAccess()V");
	};
	proto["checkPackageAccess(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkPackageAccess(Ljava/lang/String;)V");
	};
	proto["checkPackageDefinition(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkPackageDefinition(Ljava/lang/String;)V");
	};
	proto["checkSetFactory()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkSetFactory()V");
	};
	proto["checkMemberAccess(Ljava/lang/Class;I)V"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkMemberAccess(Ljava/lang/Class;I)V");
	};
	proto["checkSecurityAccess(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#checkSecurityAccess(Ljava/lang/String;)V");
	};
	proto["getThreadGroup()Ljava/lang/ThreadGroup;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/SecurityManager#getThreadGroup()Ljava/lang/ThreadGroup;");
	};

});

//"java/io/PrintStream"
Java["java/io/PrintStream"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/io/FilterOutputStream"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/PrintStream");

	proto["<init>(Ljava/io/OutputStream;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#<init>(Ljava/io/OutputStream;)V");
	};
	proto["<init>(Ljava/io/OutputStream;Z)V"] = function(ref0,b1){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#<init>(Ljava/io/OutputStream;Z)V");
	};
	proto["<init>(Ljava/io/OutputStream;ZLjava/lang/String;)V"] = function(ref0,b1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#<init>(Ljava/io/OutputStream;ZLjava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#<init>(Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/String;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#<init>(Ljava/lang/String;Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/io/File;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#<init>(Ljava/io/File;)V");
	};
	proto["<init>(Ljava/io/File;Ljava/lang/String;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#<init>(Ljava/io/File;Ljava/lang/String;)V");
	};
	proto["flush()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#flush()V");
	};
	proto["close()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#close()V");
	};
	proto["checkError()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#checkError()Z");
	};
	proto["setError()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#setError()V");
	};
	proto["clearError()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#clearError()V");
	};
	proto["write(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#write(I)V");
	};
	proto["write([BII)V"] = function(arr_sb0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#write([BII)V");
	};
	proto["print(Z)V"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#print(Z)V");
	};
	proto["print(C)V"] = function(ch0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#print(C)V");
	};
	proto["print(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#print(I)V");
	};
	proto["print(J)V"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#print(J)V");
	};
	proto["print(F)V"] = function(flt0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#print(F)V");
	};
	proto["print(D)V"] = function(db0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#print(D)V");
	};
	proto["print([C)V"] = function(arr_ch0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#print([C)V");
	};
	proto["print(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#print(Ljava/lang/String;)V");
	};
	proto["print(Ljava/lang/Object;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#print(Ljava/lang/Object;)V");
	};
	proto["println()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#println()V");
	};
	proto["println(Z)V"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#println(Z)V");
	};
	proto["println(C)V"] = function(ch0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#println(C)V");
	};
	proto["println(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#println(I)V");
	};
	proto["println(J)V"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#println(J)V");
	};
	proto["println(F)V"] = function(flt0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#println(F)V");
	};
	proto["println(D)V"] = function(db0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#println(D)V");
	};
	proto["println([C)V"] = function(arr_ch0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#println([C)V");
	};
	proto["println(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#println(Ljava/lang/String;)V");
	};
	proto["println(Ljava/lang/Object;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#println(Ljava/lang/Object;)V");
	};
	proto["printf(Ljava/lang/String;[Ljava/lang/Object;)Ljava/io/PrintStream;"] = function(ref0,arr_ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#printf(Ljava/lang/String;[Ljava/lang/Object;)Ljava/io/PrintStream;");
	};
	proto["printf(Ljava/util/Locale;Ljava/lang/String;[Ljava/lang/Object;)Ljava/io/PrintStream;"] = function(ref0,ref1,arr_ref2){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#printf(Ljava/util/Locale;Ljava/lang/String;[Ljava/lang/Object;)Ljava/io/PrintStream;");
	};
	proto["format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/io/PrintStream;"] = function(ref0,arr_ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/io/PrintStream;");
	};
	proto["format(Ljava/util/Locale;Ljava/lang/String;[Ljava/lang/Object;)Ljava/io/PrintStream;"] = function(ref0,ref1,arr_ref2){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#format(Ljava/util/Locale;Ljava/lang/String;[Ljava/lang/Object;)Ljava/io/PrintStream;");
	};
	proto["append(Ljava/lang/CharSequence;)Ljava/io/PrintStream;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#append(Ljava/lang/CharSequence;)Ljava/io/PrintStream;");
	};
	proto["append(Ljava/lang/CharSequence;II)Ljava/io/PrintStream;"] = function(ref0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#append(Ljava/lang/CharSequence;II)Ljava/io/PrintStream;");
	};
	proto["append(C)Ljava/io/PrintStream;"] = function(ch0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#append(C)Ljava/io/PrintStream;");
	};
	proto["append(C)Ljava/lang/Appendable;"] = function(ch0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#append(C)Ljava/lang/Appendable;");
	};
	proto["append(Ljava/lang/CharSequence;II)Ljava/lang/Appendable;"] = function(ref0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#append(Ljava/lang/CharSequence;II)Ljava/lang/Appendable;");
	};
	proto["append(Ljava/lang/CharSequence;)Ljava/lang/Appendable;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/PrintStream#append(Ljava/lang/CharSequence;)Ljava/lang/Appendable;");
	};

});

//"java/io/InputStream"
Java["java/io/InputStream"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/InputStream");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/InputStream#<init>()V");
	};
	proto["read()I"] = null;
	proto["read([B)I"] = null;
	proto["read([BII)I"] = null;
	proto["skip(J)J"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/io/InputStream#skip(J)J");
	};
	proto["available()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/InputStream#available()I");
	};
	proto["close()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/InputStream#close()V");
	};
	proto["mark(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/InputStream#mark(I)V");
	};
	proto["reset()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/InputStream#reset()V");
	};
	proto["markSupported()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/InputStream#markSupported()Z");
	};

});

//"java/io/Console"
Java["java/io/Console"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/Console");
	klass["$assertionsDisabled"] = null;
	proto["writer()Ljava/io/PrintWriter;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/Console#writer()Ljava/io/PrintWriter;");
	};
	proto["reader()Ljava/io/Reader;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/Console#reader()Ljava/io/Reader;");
	};
	proto["format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/io/Console;"] = function(ref0,arr_ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/Console#format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/io/Console;");
	};
	proto["printf(Ljava/lang/String;[Ljava/lang/Object;)Ljava/io/Console;"] = function(ref0,arr_ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/Console#printf(Ljava/lang/String;[Ljava/lang/Object;)Ljava/io/Console;");
	};
	proto["readLine(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;"] = function(ref0,arr_ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/Console#readLine(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;");
	};
	proto["readLine()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/Console#readLine()Ljava/lang/String;");
	};
	proto["readPassword(Ljava/lang/String;[Ljava/lang/Object;)[C"] = function(ref0,arr_ref1){
		var self = this;
		throw new Error("NotImplemented: java/io/Console#readPassword(Ljava/lang/String;[Ljava/lang/Object;)[C");
	};
	proto["readPassword()[C"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/Console#readPassword()[C");
	};
	proto["flush()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/Console#flush()V");
	};
	klass["access$000(Ljava/io/Console;)Ljava/lang/Object;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/Console#access$000(Ljava/io/Console;)Ljava/lang/Object;");
	};
	klass["access$100(Ljava/io/Console;)[C"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/Console#access$100(Ljava/io/Console;)[C");
	};
	klass["access$200(Ljava/io/Console;)[C"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/Console#access$200(Ljava/io/Console;)[C");
	};
	klass["access$300()Z"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/io/Console#access$300()Z");
	};
	klass["access$400(Z)Z"] = function(b0){
		var self = null;
		throw new Error("NotImplemented: java/io/Console#access$400(Z)Z");
	};
	klass["access$500()Z"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/io/Console#access$500()Z");
	};
	klass["access$600()Ljava/io/Console;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/io/Console#access$600()Ljava/io/Console;");
	};
	klass["access$602(Ljava/io/Console;)Ljava/io/Console;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/Console#access$602(Ljava/io/Console;)Ljava/io/Console;");
	};
	proto["<init>(Ljava/io/Console$1;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/Console#<init>(Ljava/io/Console$1;)V");
	};
	klass["access$800(Ljava/io/Console;)Ljava/nio/charset/Charset;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/Console#access$800(Ljava/io/Console;)Ljava/nio/charset/Charset;");
	};

});

//"java/util/concurrent/ConcurrentHashMap$Segment"
Java["java/util/concurrent/ConcurrentHashMap$Segment"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/util/concurrent/locks/ReentrantLock"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/concurrent/ConcurrentHashMap$Segment");
	klass["MAX_SCAN_RETRIES"] = null;
	proto["table"] = null;
	proto["count"] = null;
	proto["modCount"] = null;
	proto["threshold"] = null;
	proto["loadFactor"] = null;
	proto["<init>(FI[Ljava/util/concurrent/ConcurrentHashMap$HashEntry;)V"] = function(flt0,i1,arr_ref2){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap$Segment#<init>(FI[Ljava/util/concurrent/ConcurrentHashMap$HashEntry;)V");
	};
	proto["put(Ljava/lang/Object;ILjava/lang/Object;Z)Ljava/lang/Object;"] = function(ref0,i1,ref2,b3){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap$Segment#put(Ljava/lang/Object;ILjava/lang/Object;Z)Ljava/lang/Object;");
	};
	proto["remove(Ljava/lang/Object;ILjava/lang/Object;)Ljava/lang/Object;"] = function(ref0,i1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap$Segment#remove(Ljava/lang/Object;ILjava/lang/Object;)Ljava/lang/Object;");
	};
	proto["replace(Ljava/lang/Object;ILjava/lang/Object;Ljava/lang/Object;)Z"] = function(ref0,i1,ref2,ref3){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap$Segment#replace(Ljava/lang/Object;ILjava/lang/Object;Ljava/lang/Object;)Z");
	};
	proto["replace(Ljava/lang/Object;ILjava/lang/Object;)Ljava/lang/Object;"] = function(ref0,i1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap$Segment#replace(Ljava/lang/Object;ILjava/lang/Object;)Ljava/lang/Object;");
	};
	proto["clear()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap$Segment#clear()V");
	};

});

//"java/util/concurrent/ConcurrentHashMap$HashEntry"
Java["java/util/concurrent/ConcurrentHashMap$HashEntry"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/concurrent/ConcurrentHashMap$HashEntry");
	proto["hash"] = null;
	proto["key"] = null;
	proto["value"] = null;
	proto["next"] = null;
	klass["UNSAFE"] = null;
	klass["nextOffset"] = null;
	proto["<init>(ILjava/lang/Object;Ljava/lang/Object;Ljava/util/concurrent/ConcurrentHashMap$HashEntry;)V"] = function(i0,ref1,ref2,ref3){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap$HashEntry#<init>(ILjava/lang/Object;Ljava/lang/Object;Ljava/util/concurrent/ConcurrentHashMap$HashEntry;)V");
	};
	proto["setNext(Ljava/util/concurrent/ConcurrentHashMap$HashEntry;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap$HashEntry#setNext(Ljava/util/concurrent/ConcurrentHashMap$HashEntry;)V");
	};

});

//"java/util/Set"
Java["java/util/Set"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/Set");

	proto["size()I"] = null;
	proto["isEmpty()Z"] = null;
	proto["contains(Ljava/lang/Object;)Z"] = null;
	proto["iterator()Ljava/util/Iterator;"] = null;
	proto["toArray()[Ljava/lang/Object;"] = null;
	proto["toArray([Ljava/lang/Object;)[Ljava/lang/Object;"] = null;
	proto["add(Ljava/lang/Object;)Z"] = null;
	proto["remove(Ljava/lang/Object;)Z"] = null;
	proto["containsAll(Ljava/util/Collection;)Z"] = null;
	proto["addAll(Ljava/util/Collection;)Z"] = null;
	proto["retainAll(Ljava/util/Collection;)Z"] = null;
	proto["removeAll(Ljava/util/Collection;)Z"] = null;
	proto["clear()V"] = null;
	proto["equals(Ljava/lang/Object;)Z"] = null;
	proto["hashCode()I"] = null;

});

//"java/util/Map"
Java["java/util/Map"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/Map");

	proto["size()I"] = null;
	proto["isEmpty()Z"] = null;
	proto["containsKey(Ljava/lang/Object;)Z"] = null;
	proto["containsValue(Ljava/lang/Object;)Z"] = null;
	proto["get(Ljava/lang/Object;)Ljava/lang/Object;"] = null;
	proto["put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;"] = null;
	proto["remove(Ljava/lang/Object;)Ljava/lang/Object;"] = null;
	proto["putAll(Ljava/util/Map;)V"] = null;
	proto["clear()V"] = null;
	proto["keySet()Ljava/util/Set;"] = null;
	proto["values()Ljava/util/Collection;"] = null;
	proto["entrySet()Ljava/util/Set;"] = null;
	proto["equals(Ljava/lang/Object;)Z"] = null;
	proto["hashCode()I"] = null;

});

//"java/util/Enumeration"
Java["java/util/Enumeration"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/Enumeration");

	proto["hasMoreElements()Z"] = null;
	proto["nextElement()Ljava/lang/Object;"] = null;

});

//"java/util/Collection"
Java["java/util/Collection"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/Collection");

	proto["size()I"] = null;
	proto["isEmpty()Z"] = null;
	proto["contains(Ljava/lang/Object;)Z"] = null;
	proto["iterator()Ljava/util/Iterator;"] = null;
	proto["toArray()[Ljava/lang/Object;"] = null;
	proto["toArray([Ljava/lang/Object;)[Ljava/lang/Object;"] = null;
	proto["add(Ljava/lang/Object;)Z"] = null;
	proto["remove(Ljava/lang/Object;)Z"] = null;
	proto["containsAll(Ljava/util/Collection;)Z"] = null;
	proto["addAll(Ljava/util/Collection;)Z"] = null;
	proto["removeAll(Ljava/util/Collection;)Z"] = null;
	proto["retainAll(Ljava/util/Collection;)Z"] = null;
	proto["clear()V"] = null;
	proto["equals(Ljava/lang/Object;)Z"] = null;
	proto["hashCode()I"] = null;

});

//"java/util/AbstractMap"
Java["java/util/AbstractMap"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/AbstractMap");
	proto["keySet"] = null;
	proto["values"] = null;
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractMap#<init>()V");
	};
	proto["size()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractMap#size()I");
	};
	proto["isEmpty()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractMap#isEmpty()Z");
	};
	proto["containsValue(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractMap#containsValue(Ljava/lang/Object;)Z");
	};
	proto["containsKey(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractMap#containsKey(Ljava/lang/Object;)Z");
	};
	proto["get(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractMap#get(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractMap#put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["remove(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractMap#remove(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["putAll(Ljava/util/Map;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractMap#putAll(Ljava/util/Map;)V");
	};
	proto["clear()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractMap#clear()V");
	};
	proto["keySet()Ljava/util/Set;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractMap#keySet()Ljava/util/Set;");
	};
	proto["values()Ljava/util/Collection;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractMap#values()Ljava/util/Collection;");
	};
	proto["entrySet()Ljava/util/Set;"] = null;
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractMap#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractMap#hashCode()I");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractMap#toString()Ljava/lang/String;");
	};
	proto["clone()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractMap#clone()Ljava/lang/Object;");
	};
	klass["access$000(Ljava/lang/Object;Ljava/lang/Object;)Z"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/AbstractMap#access$000(Ljava/lang/Object;Ljava/lang/Object;)Z");
	};

});

//"java/io/ObjectOutputStream"
Java["java/io/ObjectOutputStream"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/io/OutputStream"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/ObjectOutputStream");

	proto["<init>(Ljava/io/OutputStream;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#<init>(Ljava/io/OutputStream;)V");
	};
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#<init>()V");
	};
	proto["useProtocolVersion(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#useProtocolVersion(I)V");
	};
	proto["writeObject(Ljava/lang/Object;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#writeObject(Ljava/lang/Object;)V");
	};
	proto["writeObjectOverride(Ljava/lang/Object;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#writeObjectOverride(Ljava/lang/Object;)V");
	};
	proto["writeUnshared(Ljava/lang/Object;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#writeUnshared(Ljava/lang/Object;)V");
	};
	proto["defaultWriteObject()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#defaultWriteObject()V");
	};
	proto["putFields()Ljava/io/ObjectOutputStream$PutField;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#putFields()Ljava/io/ObjectOutputStream$PutField;");
	};
	proto["writeFields()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#writeFields()V");
	};
	proto["reset()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#reset()V");
	};
	proto["annotateClass(Ljava/lang/Class;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#annotateClass(Ljava/lang/Class;)V");
	};
	proto["annotateProxyClass(Ljava/lang/Class;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#annotateProxyClass(Ljava/lang/Class;)V");
	};
	proto["replaceObject(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#replaceObject(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["enableReplaceObject(Z)Z"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#enableReplaceObject(Z)Z");
	};
	proto["writeStreamHeader()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#writeStreamHeader()V");
	};
	proto["writeClassDescriptor(Ljava/io/ObjectStreamClass;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#writeClassDescriptor(Ljava/io/ObjectStreamClass;)V");
	};
	proto["write(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#write(I)V");
	};
	proto["write([B)V"] = function(arr_sb0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#write([B)V");
	};
	proto["write([BII)V"] = function(arr_sb0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#write([BII)V");
	};
	proto["flush()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#flush()V");
	};
	proto["drain()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#drain()V");
	};
	proto["close()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#close()V");
	};
	proto["writeBoolean(Z)V"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#writeBoolean(Z)V");
	};
	proto["writeByte(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#writeByte(I)V");
	};
	proto["writeShort(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#writeShort(I)V");
	};
	proto["writeChar(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#writeChar(I)V");
	};
	proto["writeInt(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#writeInt(I)V");
	};
	proto["writeLong(J)V"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#writeLong(J)V");
	};
	proto["writeFloat(F)V"] = function(flt0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#writeFloat(F)V");
	};
	proto["writeDouble(D)V"] = function(db0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#writeDouble(D)V");
	};
	proto["writeBytes(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#writeBytes(Ljava/lang/String;)V");
	};
	proto["writeChars(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#writeChars(Ljava/lang/String;)V");
	};
	proto["writeUTF(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#writeUTF(Ljava/lang/String;)V");
	};
	proto["getProtocolVersion()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#getProtocolVersion()I");
	};
	proto["writeTypeString(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#writeTypeString(Ljava/lang/String;)V");
	};
	klass["access$000(Ljava/io/ObjectOutputStream;)Ljava/io/ObjectOutputStream$BlockDataOutputStream;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#access$000(Ljava/io/ObjectOutputStream;)Ljava/io/ObjectOutputStream$BlockDataOutputStream;");
	};
	klass["access$100()Z"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#access$100()Z");
	};
	klass["access$200(Ljava/io/ObjectOutputStream;)Ljava/io/ObjectOutputStream$DebugTraceInfoStack;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#access$200(Ljava/io/ObjectOutputStream;)Ljava/io/ObjectOutputStream$DebugTraceInfoStack;");
	};
	klass["access$300(Ljava/io/ObjectOutputStream;Ljava/lang/Object;Z)V"] = function(ref0,ref1,b2){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#access$300(Ljava/io/ObjectOutputStream;Ljava/lang/Object;Z)V");
	};
	klass["access$400([FI[BII)V"] = function(arr_flt0,i1,arr_sb2,i3,i4){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#access$400([FI[BII)V");
	};
	klass["access$500([DI[BII)V"] = function(arr_db0,i1,arr_sb2,i3,i4){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectOutputStream#access$500([DI[BII)V");
	};

});

//"java/io/ObjectInputStream"
Java["java/io/ObjectInputStream"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/io/InputStream"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/ObjectInputStream");

	proto["<init>(Ljava/io/InputStream;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#<init>(Ljava/io/InputStream;)V");
	};
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#<init>()V");
	};
	proto["readObject()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#readObject()Ljava/lang/Object;");
	};
	proto["readObjectOverride()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#readObjectOverride()Ljava/lang/Object;");
	};
	proto["readUnshared()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#readUnshared()Ljava/lang/Object;");
	};
	proto["defaultReadObject()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#defaultReadObject()V");
	};
	proto["readFields()Ljava/io/ObjectInputStream$GetField;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#readFields()Ljava/io/ObjectInputStream$GetField;");
	};
	proto["registerValidation(Ljava/io/ObjectInputValidation;I)V"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#registerValidation(Ljava/io/ObjectInputValidation;I)V");
	};
	proto["resolveClass(Ljava/io/ObjectStreamClass;)Ljava/lang/Class;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#resolveClass(Ljava/io/ObjectStreamClass;)Ljava/lang/Class;");
	};
	proto["resolveProxyClass([Ljava/lang/String;)Ljava/lang/Class;"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#resolveProxyClass([Ljava/lang/String;)Ljava/lang/Class;");
	};
	proto["resolveObject(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#resolveObject(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["enableResolveObject(Z)Z"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#enableResolveObject(Z)Z");
	};
	proto["readStreamHeader()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#readStreamHeader()V");
	};
	proto["readClassDescriptor()Ljava/io/ObjectStreamClass;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#readClassDescriptor()Ljava/io/ObjectStreamClass;");
	};
	proto["read()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#read()I");
	};
	proto["read([BII)I"] = function(arr_sb0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#read([BII)I");
	};
	proto["available()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#available()I");
	};
	proto["close()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#close()V");
	};
	proto["readBoolean()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#readBoolean()Z");
	};
	proto["readByte()B"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#readByte()B");
	};
	proto["readUnsignedByte()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#readUnsignedByte()I");
	};
	proto["readChar()C"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#readChar()C");
	};
	proto["readShort()S"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#readShort()S");
	};
	proto["readUnsignedShort()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#readUnsignedShort()I");
	};
	proto["readInt()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#readInt()I");
	};
	proto["readLong()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#readLong()J");
	};
	proto["readFloat()F"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#readFloat()F");
	};
	proto["readDouble()D"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#readDouble()D");
	};
	proto["readFully([B)V"] = function(arr_sb0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#readFully([B)V");
	};
	proto["readFully([BII)V"] = function(arr_sb0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#readFully([BII)V");
	};
	proto["skipBytes(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#skipBytes(I)I");
	};
	proto["readLine()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#readLine()Ljava/lang/String;");
	};
	proto["readUTF()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#readUTF()Ljava/lang/String;");
	};
	proto["readTypeString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/ObjectInputStream#readTypeString()Ljava/lang/String;");
	};
	klass["access$000(Ljava/io/ObjectInputStream;)I"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectInputStream#access$000(Ljava/io/ObjectInputStream;)I");
	};
	klass["access$100(Ljava/io/ObjectInputStream;)Ljava/io/ObjectInputStream$HandleTable;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectInputStream#access$100(Ljava/io/ObjectInputStream;)Ljava/io/ObjectInputStream$HandleTable;");
	};
	klass["access$200(Ljava/io/ObjectInputStream;)Ljava/io/ObjectInputStream$BlockDataInputStream;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectInputStream#access$200(Ljava/io/ObjectInputStream;)Ljava/io/ObjectInputStream$BlockDataInputStream;");
	};
	klass["access$300(Ljava/io/ObjectInputStream;Z)Ljava/lang/Object;"] = function(ref0,b1){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectInputStream#access$300(Ljava/io/ObjectInputStream;Z)Ljava/lang/Object;");
	};
	klass["access$002(Ljava/io/ObjectInputStream;I)I"] = function(ref0,i1){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectInputStream#access$002(Ljava/io/ObjectInputStream;I)I");
	};
	klass["access$500(Ljava/io/ObjectInputStream;)Z"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectInputStream#access$500(Ljava/io/ObjectInputStream;)Z");
	};
	klass["access$600(Ljava/io/ObjectInputStream;)V"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectInputStream#access$600(Ljava/io/ObjectInputStream;)V");
	};
	klass["access$700([BI[FII)V"] = function(arr_sb0,i1,arr_flt2,i3,i4){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectInputStream#access$700([BI[FII)V");
	};
	klass["access$800([BI[DII)V"] = function(arr_sb0,i1,arr_db2,i3,i4){
		var self = null;
		throw new Error("NotImplemented: java/io/ObjectInputStream#access$800([BI[DII)V");
	};

});

//"java/lang/Object"
Java["java/lang/Object"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = {};
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Object");

	proto["<init>()V"] = function(){
		var self = this;
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

//"java/lang/String"
Java["java/lang/String"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/String");
	klass["CASE_INSENSITIVE_ORDER"] = null;
	proto["toString"] = function(){
		return this.val;
	};
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#<init>()V");
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#<init>(Ljava/lang/String;)V");
	};
	proto["<init>([C)V"] = function(arr_ch0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#<init>([C)V");
	};
	proto["<init>([CII)V"] = function(arr_ch0,i1,i2){
		this.val = String.fromCodePoint.apply(null, (arr_ch0.slice(i1,i1+i2)));
	};
	proto["<init>([III)V"] = function(arr_i0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#<init>([III)V");
	};
	proto["<init>([BIII)V"] = function(arr_sb0,i1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#<init>([BIII)V");
	};
	proto["<init>([BI)V"] = function(arr_sb0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#<init>([BI)V");
	};
	proto["<init>([BIILjava/lang/String;)V"] = function(arr_sb0,i1,i2,ref3){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#<init>([BIILjava/lang/String;)V");
	};
	proto["<init>([BIILjava/nio/charset/Charset;)V"] = function(arr_sb0,i1,i2,ref3){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#<init>([BIILjava/nio/charset/Charset;)V");
	};
	proto["<init>([BLjava/lang/String;)V"] = function(arr_sb0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#<init>([BLjava/lang/String;)V");
	};
	proto["<init>([BLjava/nio/charset/Charset;)V"] = function(arr_sb0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#<init>([BLjava/nio/charset/Charset;)V");
	};
	proto["<init>([BII)V"] = function(arr_sb0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#<init>([BII)V");
	};
	proto["<init>([B)V"] = function(arr_sb0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#<init>([B)V");
	};
	proto["<init>(Ljava/lang/StringBuffer;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#<init>(Ljava/lang/StringBuffer;)V");
	};
	proto["<init>(Ljava/lang/StringBuilder;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#<init>(Ljava/lang/StringBuilder;)V");
	};
	proto["<init>([CZ)V"] = function(arr_ch0,b1){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#<init>([CZ)V");
	};
	proto["<init>(II[C)V"] = function(i0,i1,arr_ch2){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#<init>(II[C)V");
	};
	proto["length()I"] = function(){
		return this.val.length;
	};
	proto["isEmpty()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#isEmpty()Z");
	};
	proto["charAt(I)C"] = function(i0){
		return this.val.charCodeAt(i0);
	};
	proto["codePointAt(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#codePointAt(I)I");
	};
	proto["codePointBefore(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#codePointBefore(I)I");
	};
	proto["codePointCount(II)I"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#codePointCount(II)I");
	};
	proto["offsetByCodePoints(II)I"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#offsetByCodePoints(II)I");
	};
	proto["getChars([CI)V"] = function(arr_ch0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#getChars([CI)V");
	};
	proto["getChars(II[CI)V"] = function(i0,i1,arr_ch2,i3){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#getChars(II[CI)V");
	};
	proto["getBytes(II[BI)V"] = function(i0,i1,arr_sb2,i3){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#getBytes(II[BI)V");
	};
	proto["getBytes(Ljava/lang/String;)[B"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#getBytes(Ljava/lang/String;)[B");
	};
	proto["getBytes(Ljava/nio/charset/Charset;)[B"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#getBytes(Ljava/nio/charset/Charset;)[B");
	};
	proto["getBytes()[B"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#getBytes()[B");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		return (ref0.val == this.val);
	};
	proto["contentEquals(Ljava/lang/StringBuffer;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#contentEquals(Ljava/lang/StringBuffer;)Z");
	};
	proto["contentEquals(Ljava/lang/CharSequence;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#contentEquals(Ljava/lang/CharSequence;)Z");
	};
	proto["equalsIgnoreCase(Ljava/lang/String;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#equalsIgnoreCase(Ljava/lang/String;)Z");
	};
	proto["compareTo(Ljava/lang/String;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#compareTo(Ljava/lang/String;)I");
	};
	proto["compareToIgnoreCase(Ljava/lang/String;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#compareToIgnoreCase(Ljava/lang/String;)I");
	};
	proto["regionMatches(ILjava/lang/String;II)Z"] = function(i0,ref1,i2,i3){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#regionMatches(ILjava/lang/String;II)Z");
	};
	proto["regionMatches(ZILjava/lang/String;II)Z"] = function(b0,i1,ref2,i3,i4){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#regionMatches(ZILjava/lang/String;II)Z");
	};
	proto["startsWith(Ljava/lang/String;I)Z"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#startsWith(Ljava/lang/String;I)Z");
	};
	proto["startsWith(Ljava/lang/String;)Z"] = function(ref0){
		return this.val.startsWith(ref0.val);
	};
	proto["endsWith(Ljava/lang/String;)Z"] = function(ref0){
		return this.val.endsWith(ref0.val);
	};
	proto["hashCode()I"] = function(){
		var hash = 0, i, chr, len;
		if (this.val.length == 0) return 0;
		for (i = 0, len = this.val.length; i < len; i++) {
			chr   = this.val.charCodeAt(i);
			hash  = ((hash << 5) - hash) + chr;
			hash |= 0;
		}
		return hash;
	};
	proto["indexOf(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#indexOf(I)I");
	};
	proto["indexOf(II)I"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#indexOf(II)I");
	};
	proto["lastIndexOf(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#lastIndexOf(I)I");
	};
	proto["lastIndexOf(II)I"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#lastIndexOf(II)I");
	};
	proto["indexOf(Ljava/lang/String;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#indexOf(Ljava/lang/String;)I");
	};
	proto["indexOf(Ljava/lang/String;I)I"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#indexOf(Ljava/lang/String;I)I");
	};
	klass["indexOf([CII[CIII)I"] = function(arr_ch0,i1,i2,arr_ch3,i4,i5,i6){
		var self = null;
		throw new Error("NotImplemented: java/lang/String#indexOf([CII[CIII)I");
	};
	proto["lastIndexOf(Ljava/lang/String;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#lastIndexOf(Ljava/lang/String;)I");
	};
	proto["lastIndexOf(Ljava/lang/String;I)I"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#lastIndexOf(Ljava/lang/String;I)I");
	};
	klass["lastIndexOf([CII[CIII)I"] = function(arr_ch0,i1,i2,arr_ch3,i4,i5,i6){
		var self = null;
		throw new Error("NotImplemented: java/lang/String#lastIndexOf([CII[CIII)I");
	};
	proto["substring(I)Ljava/lang/String;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#substring(I)Ljava/lang/String;");
	};
	proto["substring(II)Ljava/lang/String;"] = function(i0,i1){
		return Java.mkString(this.val.substring(i0, i1));
	};
	proto["subSequence(II)Ljava/lang/CharSequence;"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#subSequence(II)Ljava/lang/CharSequence;");
	};
	proto["concat(Ljava/lang/String;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#concat(Ljava/lang/String;)Ljava/lang/String;");
	};
	proto["replace(CC)Ljava/lang/String;"] = function(ch0,ch1){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#replace(CC)Ljava/lang/String;");
	};
	proto["matches(Ljava/lang/String;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#matches(Ljava/lang/String;)Z");
	};
	proto["contains(Ljava/lang/CharSequence;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#contains(Ljava/lang/CharSequence;)Z");
	};
	proto["replaceFirst(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#replaceFirst(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;");
	};
	proto["replaceAll(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#replaceAll(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;");
	};
	proto["replace(Ljava/lang/CharSequence;Ljava/lang/CharSequence;)Ljava/lang/String;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#replace(Ljava/lang/CharSequence;Ljava/lang/CharSequence;)Ljava/lang/String;");
	};
	proto["split(Ljava/lang/String;I)[Ljava/lang/String;"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#split(Ljava/lang/String;I)[Ljava/lang/String;");
	};
	proto["split(Ljava/lang/String;)[Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#split(Ljava/lang/String;)[Ljava/lang/String;");
	};
	proto["toLowerCase(Ljava/util/Locale;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#toLowerCase(Ljava/util/Locale;)Ljava/lang/String;");
	};
	proto["toLowerCase()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#toLowerCase()Ljava/lang/String;");
	};
	proto["toUpperCase(Ljava/util/Locale;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#toUpperCase(Ljava/util/Locale;)Ljava/lang/String;");
	};
	proto["toUpperCase()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#toUpperCase()Ljava/lang/String;");
	};
	proto["trim()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#trim()Ljava/lang/String;");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#toString()Ljava/lang/String;");
	};
	proto["toCharArray()[C"] = function(){
		var r = [];
		for (var i=0;i<this.val.length; i++){
			r.push(this.val.charCodeAt(i));
		}
		return r;
	};
	klass["format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;"] = function(ref0,arr_ref1){
		var self = null;
		throw new Error("NotImplemented: java/lang/String#format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;");
	};
	klass["format(Ljava/util/Locale;Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;"] = function(ref0,ref1,arr_ref2){
		var self = null;
		throw new Error("NotImplemented: java/lang/String#format(Ljava/util/Locale;Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;");
	};
	klass["valueOf(Ljava/lang/Object;)Ljava/lang/String;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/String#valueOf(Ljava/lang/Object;)Ljava/lang/String;");
	};
	klass["valueOf([C)Ljava/lang/String;"] = function(arr_ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/String#valueOf([C)Ljava/lang/String;");
	};
	klass["valueOf([CII)Ljava/lang/String;"] = function(arr_ch0,i1,i2){
		var self = null;
		throw new Error("NotImplemented: java/lang/String#valueOf([CII)Ljava/lang/String;");
	};
	klass["copyValueOf([CII)Ljava/lang/String;"] = function(arr_ch0,i1,i2){
		var self = null;
		throw new Error("NotImplemented: java/lang/String#copyValueOf([CII)Ljava/lang/String;");
	};
	klass["copyValueOf([C)Ljava/lang/String;"] = function(arr_ch0){
		var self = null;
		throw new Error("NotImplemented: java/lang/String#copyValueOf([C)Ljava/lang/String;");
	};
	klass["valueOf(Z)Ljava/lang/String;"] = function(b0){
		var self = null;
		throw new Error("NotImplemented: java/lang/String#valueOf(Z)Ljava/lang/String;");
	};
	klass["valueOf(C)Ljava/lang/String;"] = function(ch0){
		var str = String.fromCodePoint(ch0);
		return Java.mkString(str);
	};
	klass["valueOf(I)Ljava/lang/String;"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/String#valueOf(I)Ljava/lang/String;");
	};
	klass["valueOf(J)Ljava/lang/String;"] = function(l0){
		var self = null;
		throw new Error("NotImplemented: java/lang/String#valueOf(J)Ljava/lang/String;");
	};
	klass["valueOf(F)Ljava/lang/String;"] = function(flt0){
		var self = null;
		throw new Error("NotImplemented: java/lang/String#valueOf(F)Ljava/lang/String;");
	};
	klass["valueOf(D)Ljava/lang/String;"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/String#valueOf(D)Ljava/lang/String;");
	};
	var strPool = {};
	var hasOwn = Object.prototype.hasOwnProperty;
	proto["intern()Ljava/lang/String;"] = function(){
		var str = this.val;
		if(hasOwn.call(strPool,str)){
			return strPool[str];
		}else{
			strPool[str] = this;
			return this;
		}
	};
	proto["hash32()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#hash32()I");
	};
	proto["compareTo(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/String#compareTo(Ljava/lang/Object;)I");
	};

});

//"java/lang/System"
Java["java/lang/System"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/System");
	klass["in"] = null;
	klass["out"] = null;
	klass["err"] = null;
	klass["setIn(Ljava/io/InputStream;)V"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/System#setIn(Ljava/io/InputStream;)V");
	};
	klass["setOut(Ljava/io/PrintStream;)V"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/System#setOut(Ljava/io/PrintStream;)V");
	};
	klass["setErr(Ljava/io/PrintStream;)V"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/System#setErr(Ljava/io/PrintStream;)V");
	};
	klass["console()Ljava/io/Console;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/System#console()Ljava/io/Console;");
	};
	klass["inheritedChannel()Ljava/nio/channels/Channel;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/System#inheritedChannel()Ljava/nio/channels/Channel;");
	};
	klass["setSecurityManager(Ljava/lang/SecurityManager;)V"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/System#setSecurityManager(Ljava/lang/SecurityManager;)V");
	};
	klass["getSecurityManager()Ljava/lang/SecurityManager;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/System#getSecurityManager()Ljava/lang/SecurityManager;");
	};
	klass["currentTimeMillis()J"] = function(){
		return new Date().getTime();
	};
	klass["nanoTime()J"] = function(){
		var self = null;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/System#nanoTime()J");
	};
	klass["arraycopy(Ljava/lang/Object;ILjava/lang/Object;II)V"] = function(ref0,i1,ref2,i3,i4){
		var self = null;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/System#arraycopy(Ljava/lang/Object;ILjava/lang/Object;II)V");
	};
	klass["identityHashCode(Ljava/lang/Object;)I"] = function(ref0){
		var self = null;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/System#identityHashCode(Ljava/lang/Object;)I");
	};
	klass["getProperties()Ljava/util/Properties;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/System#getProperties()Ljava/util/Properties;");
	};
	klass["lineSeparator()Ljava/lang/String;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/System#lineSeparator()Ljava/lang/String;");
	};
	klass["setProperties(Ljava/util/Properties;)V"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/System#setProperties(Ljava/util/Properties;)V");
	};
	klass.prop = {};
	klass["getProperty(Ljava/lang/String;)Ljava/lang/String;"] = function(ref0){
		if(klass.prop.hasOwnProperty(ref0)){
			return klass.prop[ref0];
		}else{
			return null;
		}
	};
	klass["getProperty(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;"] = function(ref0,ref1){
		if(klass.prop.hasOwnProperty(ref0)){
			return klass.prop[ref0];
		}else{
			return ref1;
		}
	};
	klass["setProperty(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/lang/System#setProperty(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;");
	};
	klass["clearProperty(Ljava/lang/String;)Ljava/lang/String;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/System#clearProperty(Ljava/lang/String;)Ljava/lang/String;");
	};
	klass["getenv(Ljava/lang/String;)Ljava/lang/String;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/System#getenv(Ljava/lang/String;)Ljava/lang/String;");
	};
	klass["getenv()Ljava/util/Map;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/System#getenv()Ljava/util/Map;");
	};
	klass["exit(I)V"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/System#exit(I)V");
	};
	klass["gc()V"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/System#gc()V");
	};
	klass["runFinalization()V"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/System#runFinalization()V");
	};
	klass["runFinalizersOnExit(Z)V"] = function(b0){
		var self = null;
		throw new Error("NotImplemented: java/lang/System#runFinalizersOnExit(Z)V");
	};
	klass["load(Ljava/lang/String;)V"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/System#load(Ljava/lang/String;)V");
	};
	klass["loadLibrary(Ljava/lang/String;)V"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/System#loadLibrary(Ljava/lang/String;)V");
	};
	klass["mapLibraryName(Ljava/lang/String;)Ljava/lang/String;"] = function(ref0){
		var self = null;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/System#mapLibraryName(Ljava/lang/String;)Ljava/lang/String;");
	};

});

//"java/util/concurrent/ConcurrentHashMap"
Java["java/util/concurrent/ConcurrentHashMap"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/util/AbstractMap"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/concurrent/ConcurrentHashMap");
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
	proto.init = function () {
		this.dict = {};
		this.size = 0;
	};
	klass["entryAt([Ljava/util/concurrent/ConcurrentHashMap$HashEntry;I)Ljava/util/concurrent/ConcurrentHashMap$HashEntry;"] = function(arr_ref0,i1){
		var self = null;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap#entryAt([Ljava/util/concurrent/ConcurrentHashMap$HashEntry;I)Ljava/util/concurrent/ConcurrentHashMap$HashEntry;");
	};
	klass["setEntryAt([Ljava/util/concurrent/ConcurrentHashMap$HashEntry;ILjava/util/concurrent/ConcurrentHashMap$HashEntry;)V"] = function(arr_ref0,i1,ref2){
		var self = null;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap#setEntryAt([Ljava/util/concurrent/ConcurrentHashMap$HashEntry;ILjava/util/concurrent/ConcurrentHashMap$HashEntry;)V");
	};
	klass["segmentAt([Ljava/util/concurrent/ConcurrentHashMap$Segment;I)Ljava/util/concurrent/ConcurrentHashMap$Segment;"] = function(arr_ref0,i1){
		var self = null;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap#segmentAt([Ljava/util/concurrent/ConcurrentHashMap$Segment;I)Ljava/util/concurrent/ConcurrentHashMap$Segment;");
	};
	klass["entryForHash(Ljava/util/concurrent/ConcurrentHashMap$Segment;I)Ljava/util/concurrent/ConcurrentHashMap$HashEntry;"] = function(ref0,i1){
		var self = null;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap#entryForHash(Ljava/util/concurrent/ConcurrentHashMap$Segment;I)Ljava/util/concurrent/ConcurrentHashMap$HashEntry;");
	};
	proto["<init>(IFI)V"] = function(i0,flt1,i2){
		this.init();
	};
	proto["<init>(IF)V"] = function(i0,flt1){
		this.init();
	};
	proto["<init>(I)V"] = function(i0){
		this.init();
	};
	proto["<init>()V"] = function(){
		this.init();
	};
	proto["<init>(Ljava/util/Map;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap#<init>(Ljava/util/Map;)V");
	};
	proto["isEmpty()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap#isEmpty()Z");
	};
	proto["size()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap#size()I");
	};
	proto["get(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		if(this.dict.hasOwnProperty(ref0)){
			return this.dict[ref0];
		}else{
			return null;
		}
	};
	proto["containsKey(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap#containsKey(Ljava/lang/Object;)Z");
	};
	proto["containsValue(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap#containsValue(Ljava/lang/Object;)Z");
	};
	proto["contains(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap#contains(Ljava/lang/Object;)Z");
	};
	proto["put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0,ref1){
		this.dict[ref0] = ref1;
	};
	proto["putIfAbsent(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap#putIfAbsent(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["putAll(Ljava/util/Map;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap#putAll(Ljava/util/Map;)V");
	};
	proto["remove(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap#remove(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["remove(Ljava/lang/Object;Ljava/lang/Object;)Z"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap#remove(Ljava/lang/Object;Ljava/lang/Object;)Z");
	};
	proto["replace(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Z"] = function(ref0,ref1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap#replace(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/Object;)Z");
	};
	proto["replace(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap#replace(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["clear()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap#clear()V");
	};
	proto["keySet()Ljava/util/Set;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap#keySet()Ljava/util/Set;");
	};
	proto["values()Ljava/util/Collection;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap#values()Ljava/util/Collection;");
	};
	proto["entrySet()Ljava/util/Set;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap#entrySet()Ljava/util/Set;");
	};
	proto["keys()Ljava/util/Enumeration;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap#keys()Ljava/util/Enumeration;");
	};
	proto["elements()Ljava/util/Enumeration;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/concurrent/ConcurrentHashMap#elements()Ljava/util/Enumeration;");
	};

});

//"java/lang/Integer"
Java["java/lang/Integer"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Number"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Integer");
	klass["MIN_VALUE"] = (-2147483648);
	klass["MAX_VALUE"] = (2147483647);
	klass["TYPE"] = null;
	klass["digits"] = null;
	klass["DigitTens"] = null;
	klass["DigitOnes"] = null;
	klass["sizeTable"] = null;
	klass["SIZE"] = (32);
	klass["$assertionsDisabled"] = null;
	klass["toString(II)Ljava/lang/String;"] = function(i0,i1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#toString(II)Ljava/lang/String;");
	};
	klass["toHexString(I)Ljava/lang/String;"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#toHexString(I)Ljava/lang/String;");
	};
	klass["toOctalString(I)Ljava/lang/String;"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#toOctalString(I)Ljava/lang/String;");
	};
	klass["toBinaryString(I)Ljava/lang/String;"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#toBinaryString(I)Ljava/lang/String;");
	};
	klass["toString(I)Ljava/lang/String;"] = function(i0){
		return Java.mkString(i0.toString());
	};
	klass["getChars(II[C)V"] = function(i0,i1,arr_ch2){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#getChars(II[C)V");
	};
	klass["stringSize(I)I"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#stringSize(I)I");
	};
	klass["parseInt(Ljava/lang/String;I)I"] = function(ref0,i1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#parseInt(Ljava/lang/String;I)I");
	};
	klass["parseInt(Ljava/lang/String;)I"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#parseInt(Ljava/lang/String;)I");
	};
	klass["valueOf(Ljava/lang/String;I)Ljava/lang/Integer;"] = function(ref0,i1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#valueOf(Ljava/lang/String;I)Ljava/lang/Integer;");
	};
	klass["valueOf(Ljava/lang/String;)Ljava/lang/Integer;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#valueOf(Ljava/lang/String;)Ljava/lang/Integer;");
	};
	klass["valueOf(I)Ljava/lang/Integer;"] = function(i0){
		var obj = new klass;
		obj.val = i0;
		return obj;
	};
	proto["<init>(I)V"] = function(i0){
		this.val = i0;
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Integer#<init>(Ljava/lang/String;)V");
	};
	proto["byteValue()B"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Integer#byteValue()B");
	};
	proto["shortValue()S"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Integer#shortValue()S");
	};
	proto["intValue()I"] = function(){
		return this.val;
	};
	proto["longValue()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Integer#longValue()J");
	};
	proto["floatValue()F"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Integer#floatValue()F");
	};
	proto["doubleValue()D"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Integer#doubleValue()D");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Integer#toString()Ljava/lang/String;");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Integer#hashCode()I");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Integer#equals(Ljava/lang/Object;)Z");
	};
	klass["getInteger(Ljava/lang/String;)Ljava/lang/Integer;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#getInteger(Ljava/lang/String;)Ljava/lang/Integer;");
	};
	klass["getInteger(Ljava/lang/String;I)Ljava/lang/Integer;"] = function(ref0,i1){
		var sys = Java["java/lang/System"]();
		if(sys.prop.hasOwnProperty(ref0)){
			i1 = parseInt(sys.prop[ref0]);
		}
		var obj = new klass();
		obj.val = i1;
		return obj;
	};
	klass["getInteger(Ljava/lang/String;Ljava/lang/Integer;)Ljava/lang/Integer;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#getInteger(Ljava/lang/String;Ljava/lang/Integer;)Ljava/lang/Integer;");
	};
	klass["decode(Ljava/lang/String;)Ljava/lang/Integer;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#decode(Ljava/lang/String;)Ljava/lang/Integer;");
	};
	proto["compareTo(Ljava/lang/Integer;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Integer#compareTo(Ljava/lang/Integer;)I");
	};
	klass["compare(II)I"] = function(i0,i1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#compare(II)I");
	};
	klass["highestOneBit(I)I"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#highestOneBit(I)I");
	};
	klass["lowestOneBit(I)I"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#lowestOneBit(I)I");
	};
	klass["numberOfLeadingZeros(I)I"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#numberOfLeadingZeros(I)I");
	};
	klass["numberOfTrailingZeros(I)I"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#numberOfTrailingZeros(I)I");
	};
	klass["bitCount(I)I"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#bitCount(I)I");
	};
	klass["rotateLeft(II)I"] = function(i0,i1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#rotateLeft(II)I");
	};
	klass["rotateRight(II)I"] = function(i0,i1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#rotateRight(II)I");
	};
	klass["reverse(I)I"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#reverse(I)I");
	};
	klass["signum(I)I"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#signum(I)I");
	};
	klass["reverseBytes(I)I"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Integer#reverseBytes(I)I");
	};
	proto["compareTo(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Integer#compareTo(Ljava/lang/Object;)I");
	};

});

//"java/lang/Double"
Java["java/lang/Double"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Number"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Double");
	klass["POSITIVE_INFINITY"] = (Infinity);
	klass["NEGATIVE_INFINITY"] = (-Infinity);
	klass["NaN"] = (NaN);
	klass["MAX_VALUE"] = (1.7976931348623157e308);
	klass["MIN_NORMAL"] = (2.2250738585072014e-308);
	klass["MIN_VALUE"] = (5.0e-324);
	klass["MAX_EXPONENT"] = (1023);
	klass["MIN_EXPONENT"] = (-1022);
	klass["SIZE"] = (64);
	klass["TYPE"] = null;
	klass["toString(D)Ljava/lang/String;"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Double#toString(D)Ljava/lang/String;");
	};
	klass["toHexString(D)Ljava/lang/String;"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Double#toHexString(D)Ljava/lang/String;");
	};
	klass["valueOf(Ljava/lang/String;)Ljava/lang/Double;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Double#valueOf(Ljava/lang/String;)Ljava/lang/Double;");
	};
	klass["valueOf(D)Ljava/lang/Double;"] = function(db0){
		var obj = new klass();
		obj.val = db0;
		return obj;
	};
	klass["parseDouble(Ljava/lang/String;)D"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Double#parseDouble(Ljava/lang/String;)D");
	};
	klass["isNaN(D)Z"] = function(db0){
		return (db0 === db0) ? 0 : 1;
	};
	klass["isInfinite(D)Z"] = function(db0){
		return (db0 === db0/0)?1:0;
	};
	proto["<init>(D)V"] = function(db0){
		this.val = db0;
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Double#<init>(Ljava/lang/String;)V");
	};
	proto["isNaN()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Double#isNaN()Z");
	};
	proto["isInfinite()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Double#isInfinite()Z");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Double#toString()Ljava/lang/String;");
	};
	proto["byteValue()B"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Double#byteValue()B");
	};
	proto["shortValue()S"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Double#shortValue()S");
	};
	proto["intValue()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Double#intValue()I");
	};
	proto["longValue()J"] = function(){
		return Math.floor(this.val);
	};
	proto["floatValue()F"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Double#floatValue()F");
	};
	proto["doubleValue()D"] = function(){
		return this.val;
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/Double#hashCode()I");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		if(ref0.constructor === this.constructor){
			return ref0.val === this.val;
		}else{
			return false;
		}
	};
	klass["doubleToLongBits(D)J"] = function(db0){
		return Java.Long.ZERO; //FIXME!!!
	};
	klass["doubleToRawLongBits(D)J"] = function(db0){
		var self = null;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Double#doubleToRawLongBits(D)J");
	};
	klass["longBitsToDouble(J)D"] = function(l0){
		var self = null;
		/* Native Method */
		throw new Error("NotImplemented: java/lang/Double#longBitsToDouble(J)D");
	};
	proto["compareTo(Ljava/lang/Double;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Double#compareTo(Ljava/lang/Double;)I");
	};
	klass["compare(DD)I"] = function(db0,db1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Double#compare(DD)I");
	};
	proto["compareTo(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/Double#compareTo(Ljava/lang/Object;)I");
	};

});
//"java/util/SortedSet"
Java["java/util/SortedSet"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/SortedSet");

	proto["comparator()Ljava/util/Comparator;"] = null;
	proto["subSet(Ljava/lang/Object;Ljava/lang/Object;)Ljava/util/SortedSet;"] = null;
	proto["headSet(Ljava/lang/Object;)Ljava/util/SortedSet;"] = null;
	proto["tailSet(Ljava/lang/Object;)Ljava/util/SortedSet;"] = null;
	proto["first()Ljava/lang/Object;"] = null;
	proto["last()Ljava/lang/Object;"] = null;

});

//"java/util/Queue"
Java["java/util/Queue"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/Queue");

	proto["add(Ljava/lang/Object;)Z"] = null;
	proto["offer(Ljava/lang/Object;)Z"] = null;
	proto["remove()Ljava/lang/Object;"] = null;
	proto["poll()Ljava/lang/Object;"] = null;
	proto["element()Ljava/lang/Object;"] = null;
	proto["peek()Ljava/lang/Object;"] = null;

});

//"java/util/Deque"
Java["java/util/Deque"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/Deque");

	proto["addFirst(Ljava/lang/Object;)V"] = null;
	proto["addLast(Ljava/lang/Object;)V"] = null;
	proto["offerFirst(Ljava/lang/Object;)Z"] = null;
	proto["offerLast(Ljava/lang/Object;)Z"] = null;
	proto["removeFirst()Ljava/lang/Object;"] = null;
	proto["removeLast()Ljava/lang/Object;"] = null;
	proto["pollFirst()Ljava/lang/Object;"] = null;
	proto["pollLast()Ljava/lang/Object;"] = null;
	proto["getFirst()Ljava/lang/Object;"] = null;
	proto["getLast()Ljava/lang/Object;"] = null;
	proto["peekFirst()Ljava/lang/Object;"] = null;
	proto["peekLast()Ljava/lang/Object;"] = null;
	proto["removeFirstOccurrence(Ljava/lang/Object;)Z"] = null;
	proto["removeLastOccurrence(Ljava/lang/Object;)Z"] = null;
	proto["add(Ljava/lang/Object;)Z"] = null;
	proto["offer(Ljava/lang/Object;)Z"] = null;
	proto["remove()Ljava/lang/Object;"] = null;
	proto["poll()Ljava/lang/Object;"] = null;
	proto["element()Ljava/lang/Object;"] = null;
	proto["peek()Ljava/lang/Object;"] = null;
	proto["push(Ljava/lang/Object;)V"] = null;
	proto["pop()Ljava/lang/Object;"] = null;
	proto["remove(Ljava/lang/Object;)Z"] = null;
	proto["contains(Ljava/lang/Object;)Z"] = null;
	proto["size()I"] = null;
	proto["iterator()Ljava/util/Iterator;"] = null;
	proto["descendingIterator()Ljava/util/Iterator;"] = null;

});

//"java/util/Collections"
Java["java/util/Collections"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/Collections");
	klass["EMPTY_SET"] = null;
	klass["EMPTY_LIST"] = null;
	klass["EMPTY_MAP"] = null;
	klass["sort(Ljava/util/List;)V"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#sort(Ljava/util/List;)V");
	};
	klass["sort(Ljava/util/List;Ljava/util/Comparator;)V"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#sort(Ljava/util/List;Ljava/util/Comparator;)V");
	};
	klass["binarySearch(Ljava/util/List;Ljava/lang/Object;)I"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#binarySearch(Ljava/util/List;Ljava/lang/Object;)I");
	};
	klass["binarySearch(Ljava/util/List;Ljava/lang/Object;Ljava/util/Comparator;)I"] = function(ref0,ref1,ref2){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#binarySearch(Ljava/util/List;Ljava/lang/Object;Ljava/util/Comparator;)I");
	};
	klass["reverse(Ljava/util/List;)V"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#reverse(Ljava/util/List;)V");
	};
	klass["shuffle(Ljava/util/List;)V"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#shuffle(Ljava/util/List;)V");
	};
	klass["shuffle(Ljava/util/List;Ljava/util/Random;)V"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#shuffle(Ljava/util/List;Ljava/util/Random;)V");
	};
	klass["swap(Ljava/util/List;II)V"] = function(ref0,i1,i2){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#swap(Ljava/util/List;II)V");
	};
	klass["fill(Ljava/util/List;Ljava/lang/Object;)V"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#fill(Ljava/util/List;Ljava/lang/Object;)V");
	};
	klass["copy(Ljava/util/List;Ljava/util/List;)V"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#copy(Ljava/util/List;Ljava/util/List;)V");
	};
	klass["min(Ljava/util/Collection;)Ljava/lang/Object;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#min(Ljava/util/Collection;)Ljava/lang/Object;");
	};
	klass["min(Ljava/util/Collection;Ljava/util/Comparator;)Ljava/lang/Object;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#min(Ljava/util/Collection;Ljava/util/Comparator;)Ljava/lang/Object;");
	};
	klass["max(Ljava/util/Collection;)Ljava/lang/Object;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#max(Ljava/util/Collection;)Ljava/lang/Object;");
	};
	klass["max(Ljava/util/Collection;Ljava/util/Comparator;)Ljava/lang/Object;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#max(Ljava/util/Collection;Ljava/util/Comparator;)Ljava/lang/Object;");
	};
	klass["rotate(Ljava/util/List;I)V"] = function(ref0,i1){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#rotate(Ljava/util/List;I)V");
	};
	klass["replaceAll(Ljava/util/List;Ljava/lang/Object;Ljava/lang/Object;)Z"] = function(ref0,ref1,ref2){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#replaceAll(Ljava/util/List;Ljava/lang/Object;Ljava/lang/Object;)Z");
	};
	klass["indexOfSubList(Ljava/util/List;Ljava/util/List;)I"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#indexOfSubList(Ljava/util/List;Ljava/util/List;)I");
	};
	klass["lastIndexOfSubList(Ljava/util/List;Ljava/util/List;)I"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#lastIndexOfSubList(Ljava/util/List;Ljava/util/List;)I");
	};
	klass["unmodifiableCollection(Ljava/util/Collection;)Ljava/util/Collection;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#unmodifiableCollection(Ljava/util/Collection;)Ljava/util/Collection;");
	};
	klass["unmodifiableSet(Ljava/util/Set;)Ljava/util/Set;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#unmodifiableSet(Ljava/util/Set;)Ljava/util/Set;");
	};
	klass["unmodifiableSortedSet(Ljava/util/SortedSet;)Ljava/util/SortedSet;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#unmodifiableSortedSet(Ljava/util/SortedSet;)Ljava/util/SortedSet;");
	};
	klass["unmodifiableList(Ljava/util/List;)Ljava/util/List;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#unmodifiableList(Ljava/util/List;)Ljava/util/List;");
	};
	klass["unmodifiableMap(Ljava/util/Map;)Ljava/util/Map;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#unmodifiableMap(Ljava/util/Map;)Ljava/util/Map;");
	};
	klass["unmodifiableSortedMap(Ljava/util/SortedMap;)Ljava/util/SortedMap;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#unmodifiableSortedMap(Ljava/util/SortedMap;)Ljava/util/SortedMap;");
	};
	klass["synchronizedCollection(Ljava/util/Collection;)Ljava/util/Collection;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#synchronizedCollection(Ljava/util/Collection;)Ljava/util/Collection;");
	};
	klass["synchronizedSet(Ljava/util/Set;)Ljava/util/Set;"] = function(ref0){
		return ref0;
	};
	klass["synchronizedSortedSet(Ljava/util/SortedSet;)Ljava/util/SortedSet;"] = function(ref0){
		return ref0;
	};
	klass["synchronizedList(Ljava/util/List;)Ljava/util/List;"] = function(ref0){
		return ref0;
	};
	klass["synchronizedMap(Ljava/util/Map;)Ljava/util/Map;"] = function(ref0){
		return ref0;
	};
	klass["synchronizedSortedMap(Ljava/util/SortedMap;)Ljava/util/SortedMap;"] = function(ref0){
		return ref0;
	};
	klass["checkedCollection(Ljava/util/Collection;Ljava/lang/Class;)Ljava/util/Collection;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#checkedCollection(Ljava/util/Collection;Ljava/lang/Class;)Ljava/util/Collection;");
	};
	klass["checkedSet(Ljava/util/Set;Ljava/lang/Class;)Ljava/util/Set;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#checkedSet(Ljava/util/Set;Ljava/lang/Class;)Ljava/util/Set;");
	};
	klass["checkedSortedSet(Ljava/util/SortedSet;Ljava/lang/Class;)Ljava/util/SortedSet;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#checkedSortedSet(Ljava/util/SortedSet;Ljava/lang/Class;)Ljava/util/SortedSet;");
	};
	klass["checkedList(Ljava/util/List;Ljava/lang/Class;)Ljava/util/List;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#checkedList(Ljava/util/List;Ljava/lang/Class;)Ljava/util/List;");
	};
	klass["checkedMap(Ljava/util/Map;Ljava/lang/Class;Ljava/lang/Class;)Ljava/util/Map;"] = function(ref0,ref1,ref2){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#checkedMap(Ljava/util/Map;Ljava/lang/Class;Ljava/lang/Class;)Ljava/util/Map;");
	};
	klass["checkedSortedMap(Ljava/util/SortedMap;Ljava/lang/Class;Ljava/lang/Class;)Ljava/util/SortedMap;"] = function(ref0,ref1,ref2){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#checkedSortedMap(Ljava/util/SortedMap;Ljava/lang/Class;Ljava/lang/Class;)Ljava/util/SortedMap;");
	};
	klass["emptyIterator()Ljava/util/Iterator;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#emptyIterator()Ljava/util/Iterator;");
	};
	klass["emptyListIterator()Ljava/util/ListIterator;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#emptyListIterator()Ljava/util/ListIterator;");
	};
	klass["emptyEnumeration()Ljava/util/Enumeration;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#emptyEnumeration()Ljava/util/Enumeration;");
	};
	klass["emptySet()Ljava/util/Set;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#emptySet()Ljava/util/Set;");
	};
	klass["emptyList()Ljava/util/List;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#emptyList()Ljava/util/List;");
	};
	klass["emptyMap()Ljava/util/Map;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#emptyMap()Ljava/util/Map;");
	};
	klass["singleton(Ljava/lang/Object;)Ljava/util/Set;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#singleton(Ljava/lang/Object;)Ljava/util/Set;");
	};
	klass["singletonList(Ljava/lang/Object;)Ljava/util/List;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#singletonList(Ljava/lang/Object;)Ljava/util/List;");
	};
	klass["singletonMap(Ljava/lang/Object;Ljava/lang/Object;)Ljava/util/Map;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#singletonMap(Ljava/lang/Object;Ljava/lang/Object;)Ljava/util/Map;");
	};
	klass["nCopies(ILjava/lang/Object;)Ljava/util/List;"] = function(i0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#nCopies(ILjava/lang/Object;)Ljava/util/List;");
	};
	klass["reverseOrder()Ljava/util/Comparator;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#reverseOrder()Ljava/util/Comparator;");
	};
	klass["reverseOrder(Ljava/util/Comparator;)Ljava/util/Comparator;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#reverseOrder(Ljava/util/Comparator;)Ljava/util/Comparator;");
	};
	klass["enumeration(Ljava/util/Collection;)Ljava/util/Enumeration;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#enumeration(Ljava/util/Collection;)Ljava/util/Enumeration;");
	};
	klass["list(Ljava/util/Enumeration;)Ljava/util/ArrayList;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#list(Ljava/util/Enumeration;)Ljava/util/ArrayList;");
	};
	klass["frequency(Ljava/util/Collection;Ljava/lang/Object;)I"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#frequency(Ljava/util/Collection;Ljava/lang/Object;)I");
	};
	klass["disjoint(Ljava/util/Collection;Ljava/util/Collection;)Z"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#disjoint(Ljava/util/Collection;Ljava/util/Collection;)Z");
	};
	klass["addAll(Ljava/util/Collection;[Ljava/lang/Object;)Z"] = function(ref0,arr_ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#addAll(Ljava/util/Collection;[Ljava/lang/Object;)Z");
	};
	klass["newSetFromMap(Ljava/util/Map;)Ljava/util/Set;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#newSetFromMap(Ljava/util/Map;)Ljava/util/Set;");
	};
	klass["asLifoQueue(Ljava/util/Deque;)Ljava/util/Queue;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Collections#asLifoQueue(Ljava/util/Deque;)Ljava/util/Queue;");
	};

});

//"sun/misc/SoftCache"
Java["sun/misc/SoftCache"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/util/AbstractMap"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "sun/misc/SoftCache");

	proto["<init>(IF)V"] = function(i0,flt1){
		var self = this;
		throw new Error("NotImplemented: sun/misc/SoftCache#<init>(IF)V");
	};
	proto["<init>(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: sun/misc/SoftCache#<init>(I)V");
	};
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/misc/SoftCache#<init>()V");
	};
	proto["size()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/misc/SoftCache#size()I");
	};
	proto["isEmpty()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/misc/SoftCache#isEmpty()Z");
	};
	proto["containsKey(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/misc/SoftCache#containsKey(Ljava/lang/Object;)Z");
	};
	proto["get(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/misc/SoftCache#get(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: sun/misc/SoftCache#put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["remove(Ljava/lang/Object;)Ljava/lang/Object;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: sun/misc/SoftCache#remove(Ljava/lang/Object;)Ljava/lang/Object;");
	};
	proto["clear()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/misc/SoftCache#clear()V");
	};
	proto["entrySet()Ljava/util/Set;"] = function(){
		var self = this;
		throw new Error("NotImplemented: sun/misc/SoftCache#entrySet()Ljava/util/Set;");
	};

});

//"java/text/CollationKey"
Java["java/text/CollationKey"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/text/CollationKey");

	proto["compareTo(Ljava/text/CollationKey;)I"] = null;
	proto["getSourceString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/CollationKey#getSourceString()Ljava/lang/String;");
	};
	proto["toByteArray()[B"] = null;
	proto["compareTo(Ljava/lang/Object;)I"] = null;

});

//"java/text/Collator"
Java["java/text/Collator"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/text/Collator");
	klass["PRIMARY"] = (0);
	klass["SECONDARY"] = (1);
	klass["TERTIARY"] = (2);
	klass["IDENTICAL"] = (3);
	klass["NO_DECOMPOSITION"] = (0);
	klass["CANONICAL_DECOMPOSITION"] = (1);
	klass["FULL_DECOMPOSITION"] = (2);
	var ins = new klass();
	klass["getInstance()Ljava/text/Collator;"] = function(){
		return ins;
	};
	klass["getInstance(Ljava/util/Locale;)Ljava/text/Collator;"] = function(ref0){
		return ins;
	};
	proto["compare(Ljava/lang/String;Ljava/lang/String;)I"] = null;
	proto["compare(Ljava/lang/Object;Ljava/lang/Object;)I"] = null;
	proto["getCollationKey(Ljava/lang/String;)Ljava/text/CollationKey;"] = null;
	proto["equals(Ljava/lang/String;Ljava/lang/String;)Z"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/text/Collator#equals(Ljava/lang/String;Ljava/lang/String;)Z");
	};
	proto["getStrength()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/Collator#getStrength()I");
	};
	proto["setStrength(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/text/Collator#setStrength(I)V");
	};
	proto["getDecomposition()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/Collator#getDecomposition()I");
	};
	proto["setDecomposition(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/text/Collator#setDecomposition(I)V");
	};
	klass["getAvailableLocales()[Ljava/util/Locale;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/text/Collator#getAvailableLocales()[Ljava/util/Locale;");
	};
	proto["clone()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/Collator#clone()Ljava/lang/Object;");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/Collator#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = null;

});

//"java/text/DateFormatSymbols"
Java["java/text/DateFormatSymbols"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/text/DateFormatSymbols");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#<init>()V");
	};
	proto["<init>(Ljava/util/Locale;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#<init>(Ljava/util/Locale;)V");
	};
	klass["getAvailableLocales()[Ljava/util/Locale;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#getAvailableLocales()[Ljava/util/Locale;");
	};
	klass["getInstance()Ljava/text/DateFormatSymbols;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#getInstance()Ljava/text/DateFormatSymbols;");
	};
	klass["getInstance(Ljava/util/Locale;)Ljava/text/DateFormatSymbols;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#getInstance(Ljava/util/Locale;)Ljava/text/DateFormatSymbols;");
	};
	proto["getEras()[Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#getEras()[Ljava/lang/String;");
	};
	proto["setEras([Ljava/lang/String;)V"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#setEras([Ljava/lang/String;)V");
	};
	proto["getMonths()[Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#getMonths()[Ljava/lang/String;");
	};
	proto["setMonths([Ljava/lang/String;)V"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#setMonths([Ljava/lang/String;)V");
	};
	proto["getShortMonths()[Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#getShortMonths()[Ljava/lang/String;");
	};
	proto["setShortMonths([Ljava/lang/String;)V"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#setShortMonths([Ljava/lang/String;)V");
	};
	proto["getWeekdays()[Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#getWeekdays()[Ljava/lang/String;");
	};
	proto["setWeekdays([Ljava/lang/String;)V"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#setWeekdays([Ljava/lang/String;)V");
	};
	proto["getShortWeekdays()[Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#getShortWeekdays()[Ljava/lang/String;");
	};
	proto["setShortWeekdays([Ljava/lang/String;)V"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#setShortWeekdays([Ljava/lang/String;)V");
	};
	proto["getAmPmStrings()[Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#getAmPmStrings()[Ljava/lang/String;");
	};
	proto["setAmPmStrings([Ljava/lang/String;)V"] = function(arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#setAmPmStrings([Ljava/lang/String;)V");
	};
	proto["getZoneStrings()[[Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#getZoneStrings()[[Ljava/lang/String;");
	};
	proto["setZoneStrings([[Ljava/lang/String;)V"] = function(arr_arr_ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#setZoneStrings([[Ljava/lang/String;)V");
	};
	proto["getLocalPatternChars()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#getLocalPatternChars()Ljava/lang/String;");
	};
	proto["setLocalPatternChars(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#setLocalPatternChars(Ljava/lang/String;)V");
	};
	proto["clone()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#clone()Ljava/lang/Object;");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#hashCode()I");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/text/DateFormatSymbols#equals(Ljava/lang/Object;)Z");
	};

});

//"java/util/Calendar"
Java["java/util/Calendar"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/Calendar");
	klass["ERA"] = (0);
	klass["YEAR"] = (1);
	klass["MONTH"] = (2);
	klass["WEEK_OF_YEAR"] = (3);
	klass["WEEK_OF_MONTH"] = (4);
	klass["DATE"] = (5);
	klass["DAY_OF_MONTH"] = (5);
	klass["DAY_OF_YEAR"] = (6);
	klass["DAY_OF_WEEK"] = (7);
	klass["DAY_OF_WEEK_IN_MONTH"] = (8);
	klass["AM_PM"] = (9);
	klass["HOUR"] = (10);
	klass["HOUR_OF_DAY"] = (11);
	klass["MINUTE"] = (12);
	klass["SECOND"] = (13);
	klass["MILLISECOND"] = (14);
	klass["ZONE_OFFSET"] = (15);
	klass["DST_OFFSET"] = (16);
	klass["FIELD_COUNT"] = (17);
	klass["SUNDAY"] = (1);
	klass["MONDAY"] = (2);
	klass["TUESDAY"] = (3);
	klass["WEDNESDAY"] = (4);
	klass["THURSDAY"] = (5);
	klass["FRIDAY"] = (6);
	klass["SATURDAY"] = (7);
	klass["JANUARY"] = (0);
	klass["FEBRUARY"] = (1);
	klass["MARCH"] = (2);
	klass["APRIL"] = (3);
	klass["MAY"] = (4);
	klass["JUNE"] = (5);
	klass["JULY"] = (6);
	klass["AUGUST"] = (7);
	klass["SEPTEMBER"] = (8);
	klass["OCTOBER"] = (9);
	klass["NOVEMBER"] = (10);
	klass["DECEMBER"] = (11);
	klass["UNDECIMBER"] = (12);
	klass["AM"] = (0);
	klass["PM"] = (1);
	klass["ALL_STYLES"] = (0);
	klass["SHORT"] = (1);
	klass["LONG"] = (2);
	klass["getInstance()Ljava/util/Calendar;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/util/Calendar#getInstance()Ljava/util/Calendar;");
	};
	klass["getInstance(Ljava/util/TimeZone;)Ljava/util/Calendar;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Calendar#getInstance(Ljava/util/TimeZone;)Ljava/util/Calendar;");
	};
	klass["getInstance(Ljava/util/Locale;)Ljava/util/Calendar;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/Calendar#getInstance(Ljava/util/Locale;)Ljava/util/Calendar;");
	};
	klass["getInstance(Ljava/util/TimeZone;Ljava/util/Locale;)Ljava/util/Calendar;"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/Calendar#getInstance(Ljava/util/TimeZone;Ljava/util/Locale;)Ljava/util/Calendar;");
	};
	klass["getAvailableLocales()[Ljava/util/Locale;"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/util/Calendar#getAvailableLocales()[Ljava/util/Locale;");
	};
	proto["getTime()Ljava/util/Date;"] = function(){
		var d = new Java["java/util/Date"];
		d.val = this.val;
	};
	proto["setTime(Ljava/util/Date;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#setTime(Ljava/util/Date;)V");
	};
	proto["getTimeInMillis()J"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#getTimeInMillis()J");
	};
	proto["setTimeInMillis(J)V"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#setTimeInMillis(J)V");
	};
	proto["get(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#get(I)I");
	};
	proto["set(II)V"] = function(i0,i1){
		var self = this;
		// FIXME
		//throw new Error("NotImplemented: java/util/Calendar#set(II)V");
	};
	proto["set(III)V"] = function(i0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#set(III)V");
	};
	proto["set(IIIII)V"] = function(i0,i1,i2,i3,i4){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#set(IIIII)V");
	};
	proto["set(IIIIII)V"] = function(i0,i1,i2,i3,i4,i5){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#set(IIIIII)V");
	};
	proto["clear()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#clear()V");
	};
	proto["clear(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#clear(I)V");
	};
	proto["isSet(I)Z"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#isSet(I)Z");
	};
	proto["getDisplayName(IILjava/util/Locale;)Ljava/lang/String;"] = function(i0,i1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#getDisplayName(IILjava/util/Locale;)Ljava/lang/String;");
	};
	proto["getDisplayNames(IILjava/util/Locale;)Ljava/util/Map;"] = function(i0,i1,ref2){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#getDisplayNames(IILjava/util/Locale;)Ljava/util/Map;");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#hashCode()I");
	};
	proto["before(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#before(Ljava/lang/Object;)Z");
	};
	proto["after(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#after(Ljava/lang/Object;)Z");
	};
	proto["compareTo(Ljava/util/Calendar;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#compareTo(Ljava/util/Calendar;)I");
	};
	proto["add(II)V"] = null;
	proto["roll(IZ)V"] = null;
	proto["roll(II)V"] = null;
	proto["setTimeZone(Ljava/util/TimeZone;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#setTimeZone(Ljava/util/TimeZone;)V");
	};
	proto["getTimeZone()Ljava/util/TimeZone;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#getTimeZone()Ljava/util/TimeZone;");
	};
	proto["setLenient(Z)V"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#setLenient(Z)V");
	};
	proto["isLenient()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#isLenient()Z");
	};
	proto["setFirstDayOfWeek(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#setFirstDayOfWeek(I)V");
	};
	proto["getFirstDayOfWeek()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#getFirstDayOfWeek()I");
	};
	proto["setMinimalDaysInFirstWeek(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#setMinimalDaysInFirstWeek(I)V");
	};
	proto["getMinimalDaysInFirstWeek()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#getMinimalDaysInFirstWeek()I");
	};
	proto["isWeekDateSupported()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#isWeekDateSupported()Z");
	};
	proto["getWeekYear()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#getWeekYear()I");
	};
	proto["setWeekDate(III)V"] = function(i0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#setWeekDate(III)V");
	};
	proto["getWeeksInWeekYear()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#getWeeksInWeekYear()I");
	};
	proto["getMinimum(I)I"] = null;
	proto["getMaximum(I)I"] = null;
	proto["getGreatestMinimum(I)I"] = null;
	proto["getLeastMaximum(I)I"] = null;
	proto["getActualMinimum(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#getActualMinimum(I)I");
	};
	proto["getActualMaximum(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#getActualMaximum(I)I");
	};
	proto["clone()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#clone()Ljava/lang/Object;");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#toString()Ljava/lang/String;");
	};
	proto["compareTo(Ljava/lang/Object;)I"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/Calendar#compareTo(Ljava/lang/Object;)I");
	};

});

//"java/util/GregorianCalendar"
Java["java/util/GregorianCalendar"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/util/Calendar"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/GregorianCalendar");
	klass["BC"] = (0);
	klass["AD"] = (1);
	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#<init>()V");
	};
	proto["<init>(Ljava/util/TimeZone;)V"] = function(ref0){
		self.val = new Date();
	};
	proto["<init>(Ljava/util/Locale;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#<init>(Ljava/util/Locale;)V");
	};
	proto["<init>(Ljava/util/TimeZone;Ljava/util/Locale;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#<init>(Ljava/util/TimeZone;Ljava/util/Locale;)V");
	};
	proto["<init>(III)V"] = function(i0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#<init>(III)V");
	};
	proto["<init>(IIIII)V"] = function(i0,i1,i2,i3,i4){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#<init>(IIIII)V");
	};
	proto["<init>(IIIIII)V"] = function(i0,i1,i2,i3,i4,i5){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#<init>(IIIIII)V");
	};
	proto["setGregorianChange(Ljava/util/Date;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#setGregorianChange(Ljava/util/Date;)V");
	};
	proto["getGregorianChange()Ljava/util/Date;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#getGregorianChange()Ljava/util/Date;");
	};
	proto["isLeapYear(I)Z"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#isLeapYear(I)Z");
	};
	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#hashCode()I");
	};
	proto["add(II)V"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#add(II)V");
	};
	proto["roll(IZ)V"] = function(i0,b1){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#roll(IZ)V");
	};
	proto["roll(II)V"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#roll(II)V");
	};
	proto["getMinimum(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#getMinimum(I)I");
	};
	proto["getMaximum(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#getMaximum(I)I");
	};
	proto["getGreatestMinimum(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#getGreatestMinimum(I)I");
	};
	proto["getLeastMaximum(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#getLeastMaximum(I)I");
	};
	proto["getActualMinimum(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#getActualMinimum(I)I");
	};
	proto["getActualMaximum(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#getActualMaximum(I)I");
	};
	proto["clone()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#clone()Ljava/lang/Object;");
	};
	proto["getTimeZone()Ljava/util/TimeZone;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#getTimeZone()Ljava/util/TimeZone;");
	};
	proto["setTimeZone(Ljava/util/TimeZone;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#setTimeZone(Ljava/util/TimeZone;)V");
	};
	proto["isWeekDateSupported()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#isWeekDateSupported()Z");
	};
	proto["getWeekYear()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#getWeekYear()I");
	};
	proto["setWeekDate(III)V"] = function(i0,i1,i2){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#setWeekDate(III)V");
	};
	proto["getWeeksInWeekYear()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/GregorianCalendar#getWeeksInWeekYear()I");
	};

});

//"java/lang/RuntimeException"
Java["java/lang/RuntimeException"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Exception"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/RuntimeException");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/RuntimeException#<init>()V");
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/RuntimeException#<init>(Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/Throwable;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/RuntimeException#<init>(Ljava/lang/String;Ljava/lang/Throwable;)V");
	};
	proto["<init>(Ljava/lang/Throwable;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/RuntimeException#<init>(Ljava/lang/Throwable;)V");
	};

});

//"java/lang/IllegalArgumentException"
Java["java/lang/IllegalArgumentException"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/RuntimeException"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/IllegalArgumentException");

	proto["<init>()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/lang/IllegalArgumentException#<init>()V");
	};
	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/IllegalArgumentException#<init>(Ljava/lang/String;)V");
	};
	proto["<init>(Ljava/lang/String;Ljava/lang/Throwable;)V"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/lang/IllegalArgumentException#<init>(Ljava/lang/String;Ljava/lang/Throwable;)V");
	};
	proto["<init>(Ljava/lang/Throwable;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/lang/IllegalArgumentException#<init>(Ljava/lang/Throwable;)V");
	};

});

//"java/util/regex/Pattern$TreeInfo"
Java["java/util/regex/Pattern$TreeInfo"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/regex/Pattern$TreeInfo");


});

//"java/util/regex/Pattern$1"
Java["java/util/regex/Pattern$1"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/util/regex/Pattern$CharProperty"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/regex/Pattern$1");


});

//"java/util/regex/Pattern$BmpCharProperty"
Java["java/util/regex/Pattern$BmpCharProperty"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/util/regex/Pattern$CharProperty"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/regex/Pattern$BmpCharProperty");


});

//"java/util/regex/MatchResult"
Java["java/util/regex/MatchResult"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/regex/MatchResult");

	proto["start()I"] = null;
	proto["start(I)I"] = null;
	proto["end()I"] = null;
	proto["end(I)I"] = null;
	proto["group()Ljava/lang/String;"] = null;
	proto["group(I)Ljava/lang/String;"] = null;
	proto["groupCount()I"] = null;

});

//"java/util/regex/PatternSyntaxException"
Java["java/util/regex/PatternSyntaxException"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/IllegalArgumentException"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/regex/PatternSyntaxException");

	proto["<init>(Ljava/lang/String;Ljava/lang/String;I)V"] = function(ref0,ref1,i2){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/PatternSyntaxException#<init>(Ljava/lang/String;Ljava/lang/String;I)V");
	};
	proto["getIndex()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/PatternSyntaxException#getIndex()I");
	};
	proto["getDescription()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/PatternSyntaxException#getDescription()Ljava/lang/String;");
	};
	proto["getPattern()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/PatternSyntaxException#getPattern()Ljava/lang/String;");
	};
	proto["getMessage()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/PatternSyntaxException#getMessage()Ljava/lang/String;");
	};

});

//"java/util/regex/Pattern$Node"
Java["java/util/regex/Pattern$Node"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/regex/Pattern$Node");


});

//"java/util/regex/Pattern$CharProperty"
Java["java/util/regex/Pattern$CharProperty"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/util/regex/Pattern$Node"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/regex/Pattern$CharProperty");


});

//"java/util/regex/Pattern$BitClass"
Java["java/util/regex/Pattern$BitClass"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/util/regex/Pattern$BmpCharProperty"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/regex/Pattern$BitClass");


});

//"java/util/regex/Matcher"
Java["java/util/regex/Matcher"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/regex/Matcher");

	proto["pattern()Ljava/util/regex/Pattern;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#pattern()Ljava/util/regex/Pattern;");
	};
	proto["toMatchResult()Ljava/util/regex/MatchResult;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#toMatchResult()Ljava/util/regex/MatchResult;");
	};
	proto["usePattern(Ljava/util/regex/Pattern;)Ljava/util/regex/Matcher;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#usePattern(Ljava/util/regex/Pattern;)Ljava/util/regex/Matcher;");
	};
	proto["reset()Ljava/util/regex/Matcher;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#reset()Ljava/util/regex/Matcher;");
	};
	proto["reset(Ljava/lang/CharSequence;)Ljava/util/regex/Matcher;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#reset(Ljava/lang/CharSequence;)Ljava/util/regex/Matcher;");
	};
	proto["start()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#start()I");
	};
	proto["start(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#start(I)I");
	};
	proto["end()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#end()I");
	};
	proto["end(I)I"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#end(I)I");
	};
	proto["group()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#group()Ljava/lang/String;");
	};
	proto["group(I)Ljava/lang/String;"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#group(I)Ljava/lang/String;");
	};
	proto["group(Ljava/lang/String;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#group(Ljava/lang/String;)Ljava/lang/String;");
	};
	proto["groupCount()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#groupCount()I");
	};
	proto["matches()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#matches()Z");
	};
	proto["find()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#find()Z");
	};
	proto["find(I)Z"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#find(I)Z");
	};
	proto["lookingAt()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#lookingAt()Z");
	};
	klass["quoteReplacement(Ljava/lang/String;)Ljava/lang/String;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/regex/Matcher#quoteReplacement(Ljava/lang/String;)Ljava/lang/String;");
	};
	proto["appendReplacement(Ljava/lang/StringBuffer;Ljava/lang/String;)Ljava/util/regex/Matcher;"] = function(ref0,ref1){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#appendReplacement(Ljava/lang/StringBuffer;Ljava/lang/String;)Ljava/util/regex/Matcher;");
	};
	proto["appendTail(Ljava/lang/StringBuffer;)Ljava/lang/StringBuffer;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#appendTail(Ljava/lang/StringBuffer;)Ljava/lang/StringBuffer;");
	};
	proto["replaceAll(Ljava/lang/String;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#replaceAll(Ljava/lang/String;)Ljava/lang/String;");
	};
	proto["replaceFirst(Ljava/lang/String;)Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#replaceFirst(Ljava/lang/String;)Ljava/lang/String;");
	};
	proto["region(II)Ljava/util/regex/Matcher;"] = function(i0,i1){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#region(II)Ljava/util/regex/Matcher;");
	};
	proto["regionStart()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#regionStart()I");
	};
	proto["regionEnd()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#regionEnd()I");
	};
	proto["hasTransparentBounds()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#hasTransparentBounds()Z");
	};
	proto["useTransparentBounds(Z)Ljava/util/regex/Matcher;"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#useTransparentBounds(Z)Ljava/util/regex/Matcher;");
	};
	proto["hasAnchoringBounds()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#hasAnchoringBounds()Z");
	};
	proto["useAnchoringBounds(Z)Ljava/util/regex/Matcher;"] = function(b0){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#useAnchoringBounds(Z)Ljava/util/regex/Matcher;");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#toString()Ljava/lang/String;");
	};
	proto["hitEnd()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#hitEnd()Z");
	};
	proto["requireEnd()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Matcher#requireEnd()Z");
	};

});

//"java/util/regex/Pattern"
Java["java/util/regex/Pattern"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/regex/Pattern");
	klass["UNIX_LINES"] = (1);
	klass["CASE_INSENSITIVE"] = (2);
	klass["COMMENTS"] = (4);
	klass["MULTILINE"] = (8);
	klass["LITERAL"] = (16);
	klass["DOTALL"] = (32);
	klass["UNICODE_CASE"] = (64);
	klass["CANON_EQ"] = (128);
	klass["UNICODE_CHARACTER_CLASS"] = (256);
	klass["compile(Ljava/lang/String;)Ljava/util/regex/Pattern;"] = function(ref0){
		var cc = new RegExp(ref0.val);
		var obj = new (Java["java/util/regex/Pattern"]())()
		obj.val = cc;
		return obj;
	};
	klass["compile(Ljava/lang/String;I)Ljava/util/regex/Pattern;"] = function(ref0,i1){
		var self = null;
		throw new Error("NotImplemented: java/util/regex/Pattern#compile(Ljava/lang/String;I)Ljava/util/regex/Pattern;");
	};
	proto["pattern()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Pattern#pattern()Ljava/lang/String;");
	};
	proto["toString()Ljava/lang/String;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Pattern#toString()Ljava/lang/String;");
	};
	proto["matcher(Ljava/lang/CharSequence;)Ljava/util/regex/Matcher;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Pattern#matcher(Ljava/lang/CharSequence;)Ljava/util/regex/Matcher;");
	};
	proto["flags()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Pattern#flags()I");
	};
	klass["matches(Ljava/lang/String;Ljava/lang/CharSequence;)Z"] = function(ref0,ref1){
		var self = null;
		throw new Error("NotImplemented: java/util/regex/Pattern#matches(Ljava/lang/String;Ljava/lang/CharSequence;)Z");
	};
	proto["split(Ljava/lang/CharSequence;I)[Ljava/lang/String;"] = function(ref0,i1){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Pattern#split(Ljava/lang/CharSequence;I)[Ljava/lang/String;");
	};
	proto["split(Ljava/lang/CharSequence;)[Ljava/lang/String;"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/regex/Pattern#split(Ljava/lang/CharSequence;)[Ljava/lang/String;");
	};
	klass["quote(Ljava/lang/String;)Ljava/lang/String;"] = function(ref0){
		var self = null;
		throw new Error("NotImplemented: java/util/regex/Pattern#quote(Ljava/lang/String;)Ljava/lang/String;");
	};

});

//"java/lang/Math"
Java["java/lang/Math"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/lang/Object"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/lang/Math");
	klass["E"] = (2.718281828459045);
	klass["PI"] = (3.141592653589793);
	klass["sin(D)D"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#sin(D)D");
	};
	klass["cos(D)D"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#cos(D)D");
	};
	klass["tan(D)D"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#tan(D)D");
	};
	klass["asin(D)D"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#asin(D)D");
	};
	klass["acos(D)D"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#acos(D)D");
	};
	klass["atan(D)D"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#atan(D)D");
	};
	klass["toRadians(D)D"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#toRadians(D)D");
	};
	klass["toDegrees(D)D"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#toDegrees(D)D");
	};
	klass["exp(D)D"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#exp(D)D");
	};
	klass["log(D)D"] = function(db0){
		return Math.log(db0);
	};
	klass["log10(D)D"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#log10(D)D");
	};
	klass["sqrt(D)D"] = function(db0){
		return Math.sqrt(db0);
	};
	klass["cbrt(D)D"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#cbrt(D)D");
	};
	klass["IEEEremainder(DD)D"] = function(db0,db1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#IEEEremainder(DD)D");
	};
	klass["ceil(D)D"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#ceil(D)D");
	};
	klass["floor(D)D"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#floor(D)D");
	};
	klass["rint(D)D"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#rint(D)D");
	};
	klass["atan2(DD)D"] = function(db0,db1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#atan2(DD)D");
	};
	klass["pow(DD)D"] = function(db0,db1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#pow(DD)D");
	};
	klass["round(F)I"] = function(flt0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#round(F)I");
	};
	klass["round(D)J"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#round(D)J");
	};
	klass["random()D"] = function(){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#random()D");
	};
	klass["abs(I)I"] = function(i0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#abs(I)I");
	};
	klass["abs(J)J"] = function(l0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#abs(J)J");
	};
	klass["abs(F)F"] = function(flt0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#abs(F)F");
	};
	klass["abs(D)D"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#abs(D)D");
	};
	klass["max(II)I"] = function(i0,i1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#max(II)I");
	};
	klass["max(JJ)J"] = function(l0,l1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#max(JJ)J");
	};
	klass["max(FF)F"] = function(flt0,flt1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#max(FF)F");
	};
	klass["max(DD)D"] = function(db0,db1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#max(DD)D");
	};
	klass["min(II)I"] = function(i0,i1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#min(II)I");
	};
	klass["min(JJ)J"] = function(l0,l1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#min(JJ)J");
	};
	klass["min(FF)F"] = function(flt0,flt1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#min(FF)F");
	};
	klass["min(DD)D"] = function(db0,db1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#min(DD)D");
	};
	klass["ulp(D)D"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#ulp(D)D");
	};
	klass["ulp(F)F"] = function(flt0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#ulp(F)F");
	};
	klass["signum(D)D"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#signum(D)D");
	};
	klass["signum(F)F"] = function(flt0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#signum(F)F");
	};
	klass["sinh(D)D"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#sinh(D)D");
	};
	klass["cosh(D)D"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#cosh(D)D");
	};
	klass["tanh(D)D"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#tanh(D)D");
	};
	klass["hypot(DD)D"] = function(db0,db1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#hypot(DD)D");
	};
	klass["expm1(D)D"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#expm1(D)D");
	};
	klass["log1p(D)D"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#log1p(D)D");
	};
	klass["copySign(DD)D"] = function(db0,db1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#copySign(DD)D");
	};
	klass["copySign(FF)F"] = function(flt0,flt1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#copySign(FF)F");
	};
	klass["getExponent(F)I"] = function(flt0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#getExponent(F)I");
	};
	klass["getExponent(D)I"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#getExponent(D)I");
	};
	klass["nextAfter(DD)D"] = function(db0,db1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#nextAfter(DD)D");
	};
	klass["nextAfter(FD)F"] = function(flt0,db1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#nextAfter(FD)F");
	};
	klass["nextUp(D)D"] = function(db0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#nextUp(D)D");
	};
	klass["nextUp(F)F"] = function(flt0){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#nextUp(F)F");
	};
	klass["scalb(DI)D"] = function(db0,i1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#scalb(DI)D");
	};
	klass["scalb(FI)F"] = function(flt0,i1){
		var self = null;
		throw new Error("NotImplemented: java/lang/Math#scalb(FI)F");
	};

});

//"java/io/StringReader"
Java["java/io/StringReader"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/io/Reader"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/io/StringReader");

	proto["<init>(Ljava/lang/String;)V"] = function(ref0){
		this.buf = ref0.val;
		this.ptr = 0;
	};
	proto["read()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/StringReader#read()I");
	};
	proto["read([CII)I"] = function(arr_ch0,i1,i2){
		if(this.buf.length === this.ptr){
			return -1;
		}
		var len = Math.min(this.buf.length - this.ptr, i2);
		for(var i=0;i<len;i++){
			arr_ch0[i+i1] = this.buf.charCodeAt(i+this.ptr);
		}
		this.ptr += len;
		return len;
	};
	proto["skip(J)J"] = function(l0){
		var self = this;
		throw new Error("NotImplemented: java/io/StringReader#skip(J)J");
	};
	proto["ready()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/StringReader#ready()Z");
	};
	proto["markSupported()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/StringReader#markSupported()Z");
	};
	proto["mark(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/io/StringReader#mark(I)V");
	};
	proto["reset()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/io/StringReader#reset()V");
	};
	proto["close()V"] = function(){
	};

});

//"java/util/AbstractSet"
Java["java/util/AbstractSet"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/util/AbstractCollection"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/AbstractSet");

	proto["equals(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractSet#equals(Ljava/lang/Object;)Z");
	};
	proto["hashCode()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractSet#hashCode()I");
	};
	proto["removeAll(Ljava/util/Collection;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/AbstractSet#removeAll(Ljava/util/Collection;)Z");
	};

});

//"java/util/HashSet"
Java["java/util/HashSet"] = Java.mkNativeClass(function(klass){
	var proto = klass.prototype = Object.create(Java["java/util/AbstractSet"]().prototype);
	proto.constructor = klass;
	proto["__class__"] = Java.mkClassObj(klass, "java/util/HashSet");

	proto["<init>()V"] = function(){
		this.set = {};
		this.size = 0;
	};
	proto["<init>(Ljava/util/Collection;)V"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/HashSet#<init>(Ljava/util/Collection;)V");
	};
	proto["<init>(IF)V"] = function(i0,flt1){
		var self = this;
		throw new Error("NotImplemented: java/util/HashSet#<init>(IF)V");
	};
	proto["<init>(I)V"] = function(i0){
		var self = this;
		throw new Error("NotImplemented: java/util/HashSet#<init>(I)V");
	};
	proto["iterator()Ljava/util/Iterator;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/HashSet#iterator()Ljava/util/Iterator;");
	};
	proto["size()I"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/HashSet#size()I");
	};
	proto["isEmpty()Z"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/HashSet#isEmpty()Z");
	};
	proto["contains(Ljava/lang/Object;)Z"] = function(ref0){
		var self = this;
		throw new Error("NotImplemented: java/util/HashSet#contains(Ljava/lang/Object;)Z");
	};
	proto["add(Ljava/lang/Object;)Z"] = function(ref0){
		var has = Object.prototype.hasOwnProperty(this.set, ref0);
		this.set[ref0] = true;
		return has;
	};
	proto["remove(Ljava/lang/Object;)Z"] = function(ref0){
		var has = Object.prototype.hasOwnProperty(this.set, ref0);
		delete this.set[ref0];
		return has;
	};
	proto["clear()V"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/HashSet#clear()V");
	};
	proto["clone()Ljava/lang/Object;"] = function(){
		var self = this;
		throw new Error("NotImplemented: java/util/HashSet#clone()Ljava/lang/Object;");
	};

});


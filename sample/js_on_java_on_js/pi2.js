function calc() {
	var pi = 16.0 * arcTan(1.0 / 5.0) - 4.0 * arcTan(1.0 / 239.0);
	return pi;
}

function arcTan(x) {
	var ret = 0.0;
	var sig = x;
	var sqx = x * x;
	for (var i = 0; sig != 0.0; i++) {
			ret += sig / (i + i + 1);
			sig = -sig * sqx;
	}
	return ret;
}

calc();
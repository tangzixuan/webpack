"use strict";

module.exports = function supportArrowFunctionExpression() {
	try {
		eval(
			"var foo = function(fn) {return fn.toString()}; foo(() => {return 'a'})"
		);
		return true;
	} catch (_err) {
		return false;
	}
};

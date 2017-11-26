/**
 * simplest closure
 * 
 * passed is available in the
 * 
 */
"use strict";
var addTo = function(passed) {
	var add = function(inner) {
		return passed + inner;
	};
	return add;
};

var addThree = addTo(3);
console.dir(addThree);
console.log(addThree(1));// give 4

console.log(addTo(4)(1)); // give 5

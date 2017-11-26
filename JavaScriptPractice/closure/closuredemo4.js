/**
 * simplest closure
 * 
 * passed is available in the
 * 
 */

var passed = 3;
var addTo = function() {
	var inner = 2;
	return inner + passed;
};
console.log(addTo());
var passed = 4;
console.dir(addTo);
console.log(addTo());

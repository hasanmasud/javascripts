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
}

console.dir(addTo);
console.log(addTo());

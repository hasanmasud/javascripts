"use strict";

let add = function(a,b){
	return a + b;
};

let multiply = function(a,b){
	return a * b;
};

let calc = function(a,b,calculation){
	return calculation(a,b);
};

console.log(calc(2,3,add));
console.log(calc(2,3,multiply));


"use strict";

var foo = {
	a : 'hahahaha'
};

var bar = Object.create(foo); // foo is prototype of bar
bar.b = "hello world";
console.log(bar.a);
console.log(bar.b);

console.log(bar.hasOwnProperty("a")); //false
console.log(bar.hasOwnProperty("b")); // true

console.log(foo.isPrototypeOf(bar));//true , foo is prototype of bar








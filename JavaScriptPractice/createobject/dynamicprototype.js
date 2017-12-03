"use strict";
/**
 * dynamic prototype to create objects
 */

var personDynamicProto = function(name, age) {
	this.name = name;
	this.age = age;

	if (typeof this.printPerson !== 'function') {
		personDynamicProto.prototype.printPerson = function() {
			console.log("name : " + this.name + " , age : " + this.age);
		};
	}
};

console.log(personDynamicProto.prototype);
var person1 = new personDynamicProto("masud", 30);
console.log(personDynamicProto.prototype);
person1.printPerson();

var person2 = new personDynamicProto("ali", 30);
console.log(person2.hasOwnProperty("printPerson"));// will be false

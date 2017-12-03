"use strict";

/**
 * constructor pattern to create objects
 */
var personFactory = function(name, age) {
	this.name = name;
	this.age = age;
	this.printPerson = function() {
		console.log("name :" + this.name + "," + "age :" + this.age);
	};
};

var person1 = new personFactory("masud", 30);
var person2 = new personFactory("ali", "29");
person1.printPerson();
person2.printPerson();
"use strict";
/**
 * prototype pattern to create instance
 */
var perso
nProto = function() {
};
// create the prototype space
personProto.prototype.age = 0;
personProto.prototype.name = "no name";
personProto.prototype.prinPerson = function() {
	console.log("age :" + this.age + " , name :" + this.name);
};

var person1 = new personProto();
person1.prinPerson();
// now overriding the properties
person1.age = 23;
person1.name = "masud";
person1.prinPerson();

console.log("name" in person1); // will give true
console.log(person1.hasOwnProperty("name")); // will give true


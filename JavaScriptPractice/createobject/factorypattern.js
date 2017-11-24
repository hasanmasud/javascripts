/**
 * factory pattern for creating objects
 */

var personFactory = function(name, age) {
	var temp = {};
	temp.name = name;
	temp.age = age;
	temp.printPerson = function() {
		console.log("name :" + this.name + "," + "age :" + this.age);
	};
	return temp;
};

var person1 = personFactory("masud", 30);
var person2 = personFactory("ali", "29");
person1.printPerson();
person2.printPerson();

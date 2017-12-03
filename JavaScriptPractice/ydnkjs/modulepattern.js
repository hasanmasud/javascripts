"use strict";

/*
* Module Pattern
*
*the most common usage of closure in javascript is the module pattern.
*modules let you define private implementation details (variables, functions) that are hidden from
*outside world , as well as public api that is accessible from outside.
*
*/
function User(name){
	
	var name = name;

	var user = {
		//this getName function has a closure on the attribute name,
		//meaning that it will retain connection to this even the User function has finished execution
		"getName" : function(){return name;}
	};
	return user;
}

var user1 =  User("masud");
var user2 =  User("vikas");
console.log(user1 == user2);

console.log(user1.name); // undefined
console.log(user2.getName()); // vikas

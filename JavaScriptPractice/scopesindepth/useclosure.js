
require('util');

//--------- calbacks are implemented using closure
var a = 10;
//wait for 5 seconds
var fn = function(){
	console.log(a);
}
setTimeout(fn,1000);
console.log("done")
//--------------------

var person = {
	"firstname": "masud",
	"lastName": "hasan",
	"getName": function(){
		return this.firstname + " " + this.lastName;
	}
}
console.log(person.getName());

//-----------------------
// closure is used to create private variable -- this is called the "module patter"
function createPerson(){
	var name =  "masud";
	var person = {
		"getName": function(){
			return name ;
		},
		"setName": function(nam){
			name = nam;
		}
	}
	return person;
}
var person = createPerson();
console.log(person.name);// gives undefined because name
console.log(person.getName());//gives masud, use of closure to make attribute private
person.setName("HAHAHAHA")
console.log(person.getName());





//-----------------------------------------

/**
*
* compilation step --> scope chain is created
* 4 variable are create 
* in global scope 	:  	a and myFunc
* in myFunc scope 	: 	b , c
*
*/
var a = 10;
function myFunc(){
	var b = 100;
	var c = 200;
}
//-----------------------------------------

function myFun1(){
	d = 1000; // variable in global scope, this is bad
}
//-----------------------------------------

console.log(global);
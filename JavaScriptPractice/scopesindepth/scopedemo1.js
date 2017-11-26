

//------------------------------------------------------------------------
var name = "masud"
function callMe(name){//this shadows the global variable called name
	console.log("Hello " + name);
}
callMe("hasan");

//------------------------------------------------------------------------

//self executing function - IIFE (immediately invoked function expression)
(function(){
	var a = 10;
	var b = 10;
	console.log(a+b);
})();

//-----------------------------------------------------------------------

x1 = 10; //ok as it is s write operation , variable x1 is created in the global scope
//console.log(x2)//not ok, as x2 is not defined and it is a read operation

//-------------------------------------------------------------------------



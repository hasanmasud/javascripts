(function function1() {
	var x = "Helo";
	function function2() {
		return x + " " + "from function"
	}
	console.log(function2());
}());
//closure: Closure is special object which contains the environment in which it was created. 
//In the below example fn3 is a closure and it knows x because x was present at the time when the closure was created.
function function3() {
	var x = "Helo";
	return function() {
		return x + " " + "Masud";
	}
}
var fn3 = function3(); //fn3 has become a closure which is a special object having the value of x and a function
console.log(fn3());

function addMaker(x) {
	return function(y) {
		return x + y;
	}
}
var adder5 = addMaker(5);
console.log(adder5(10));

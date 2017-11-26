//----------------------------------
var a = 10;
function outer(){
	var b = 20;
	function inner(){
		console.log(a);
		console.log(b);
	}
	inner();
}
outer(); // 10 20

//------------------------------------
console.log("-----------------------");
//------------------------------------
var x = 10;
function outerX(){
	var y = 20;
	var innerY = function(){
		console.log(x);
		console.log(y);
	}
	return innerY;
}
var innerF = outerX();
innerF()// 10 20 --> clousre in action
//-----------------------

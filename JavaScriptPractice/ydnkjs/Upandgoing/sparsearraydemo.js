/*
	
*/

var arra1 = Array(3);

console.log(arra1.length);

arra1.forEach(function(e){
	console.log("element : " + e);
});

arra1[1] = 100;

arra1.forEach(function(e){
	console.log("element : " + e);
});

/*for(var i = 0 ; i<arra1.length ; i++){
	console.log("element : " + arra1[i]);
}*/

var arra2 = Array.apply(null,Array(3)); // this is really equivalent to ['undefined','undefined','undefined']
arra2.forEach(function(e){
	console.log("element : " + e);
});
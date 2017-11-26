"use strict";
var mypromise = new Promise(function(resolve,reject){
	let clean = true;
	if(clean){
		resolve('clean');
	}else{
		reject('not clean');
	}
});

mypromise.then(function(fromResolve){
	console.log("room is " + fromResolve)
}).catch(function(fromReject){
	console.log("room is " + fromReject)
});



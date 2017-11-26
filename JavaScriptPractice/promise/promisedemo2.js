"use strict"

var cleanTheRoom = function(){
	return new Promise(function(resolve,reject){
		resolve("i have cleaned the room");
	});
};

var removeTheTrash = function(){
	return new Promise(function(resolve,reject){
		resolve("I have removed the trash");
	});
};

var winIceCream = function(){
	return new Promise(function(resolve,reject){
		resolve("I have won the ice cream");
	});
};

Promise.all([cleanTheRoom(),removeTheTrash(),winIceCream()]).then(function(){
	console.log("all are done");
});

Promise.any([cleanTheRoom(),removeTheTrash(),winIceCream()]).then(function(){
	console.log("one of them are done");
});


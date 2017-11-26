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

cleanTheRoom().then(function(resolve){
	console.log(resolve);
	return removeTheTrash();
}).then(function(resolve){
	console.log(resolve);
	return winIceCream()
}).then(function(resolve){
	console.log(resolve);
	console.log("I am happy")
});

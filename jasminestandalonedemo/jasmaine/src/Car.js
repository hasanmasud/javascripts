"use strict";
var Car = function(maker,model,price,fueltype){
	var maker = maker;
	var model = model;
	var price = price;
	var fueltype = fueltype;

	var thecar = {
		"getModel" : function(){
			return model;
		},
		"getMaker" : function(){
			return maker;
		},
		"getPrice" : function(){
			return price;
		},
		"getFuelType" : function(){
			return fueltype;
		},
		"drive" : function(){
			return model + " is driven on " + fueltype;
		}
	};
	return thecar;
}

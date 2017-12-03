"use strict";

describe("Test Car",function(){

	var car1 = new Car("ford","focus",120000,"petrol");

	describe("test the getter methods" , function(){

		beforeEach(function(){
			jasmine.addMatchers({
				"checkPriceRange" : function(exp){
					return {
						"compare" : function(actual,expected){
							var result = {};
							result.pass = actual <= expected;
							result.message = "price " + actual + " is not in range, your budget is " + expected;
							return result;
						}
					};
				}
			});
		});

		it("shold return ford",function(){
			expect(car1.getMaker()).toEqual("ford");
		});

		it("shold return focus",function(){
			expect(car1.getModel()).toEqual("focus");
		});

		it("shold return 120000",function(){
			expect(car1.getPrice()).toEqual(120000);
		});

		//skipping the test
		xit("shold return petrol",function(){
			expect(car1.getFuelType()).toEqual("petrol");
		});

		//custom mathcer, this is failing check
		it("check if price in range",function(){
			expect(car1.getPrice()).checkPriceRange(110000);
		});

	});
	//skipppping the entire suite
	xdescribe("test actual methods",function(){
		it("test teh drive method",function(){
			expect(car1.drive())
		});
	});


});
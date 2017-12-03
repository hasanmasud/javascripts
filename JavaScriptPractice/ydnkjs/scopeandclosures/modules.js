var MyModule = (function(){
	var modules = {};

	function define(name,deps,impl){
		for(let i = 0 ; i < deps.length; i++){
			deps[i] = modules[deps[i]];
		}
		modules[name] = impl.apply(impl,deps);
	}

	function get(name){
		return modules[name];
	}

	return{
		"define" : define,
		"get" : get
	}
})();

MyModule.define("foo",[],function(){
	var x = "i am module"
	function greet(){
		return x;
	}
	return {
		greet : greet
	}
});
console.log(MyModule.get("foo").greet());

MyModule.define("bar",["foo"],function(bar){
	function greetInUpper(){
		return bar.greet().toUpperCase();
	}
	return {
		greetInUpper : greetInUpper
	}
});
console.log(MyModule.get("bar").greetInUpper());
function foo(){
	console.log(this.bar);
}

var bar = "global";

var obj1 = {
	"bar" : "obj1",
	foo : foo
};

var obj2 = {"bar" : "obj2"};

foo(); // global in non strict mode (undefined in done)
obj1.foo(); // obj1
foo.call(obj2);// obj2
new foo(); // undefined

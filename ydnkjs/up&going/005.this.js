// for "this" , the context is very important


bar = "hello";

function foo() {
    console.log(this.bar);
}

foo(); //"hello"
new foo(); // undefined

var obj = {
    bar: "hi",
    foo: foo
};

obj.foo();

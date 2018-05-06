var myObj = {a: 2};

var des = Object.getOwnPropertyDescriptor(myObj, 'a');
console.log(des);


var myObject = {};
Object.defineProperty(myObject, "a", {
    value: 20,
    writable: true,
    configurable: true,
    enumerable: true
});
console.log(myObject.a);


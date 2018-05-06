var myObj = {

    get a() {
        return 2;
    }

};

console.log(myObj.a)


var myObject = {
// define a getter for `a`
    get a() {
        return this._a_;
    },
// define a setter for `a`
    set a(val) {
        this._a_ = val * 2;
    }
};
myObject.a = 2;
myObject.a; // 4


var myObject1 = {
    a: 20
};
("a" in myObject1); // true
("b" in myObject1); // false
myObject1.hasOwnProperty("a"); // true
myObject1.hasOwnProperty("b"); // false



for (var k in myObject1) {
    console.log( k, myObject1[k] );
}
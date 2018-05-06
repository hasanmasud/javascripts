function outer() {
    var a = 1;

    function inner() {
        var b = 3;
        console.log(b + a);
    }

    inner();

    console.log(a);
}

outer();

////////////////////////////////////////////////////////////////////////////////////////////

function foo() {
    return 42;
}

foo.bar = "hello";
console.log(typeof foo);
console.log(foo.bar);

////////////////////////////////////////////////////////////////////////////////////////////

(function () {
    console.log("i immediately executed");
})();

////////////////////////////////////////////////////////////////////////////////////////////


(function () {

    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);

})();







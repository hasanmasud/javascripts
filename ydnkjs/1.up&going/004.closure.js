//simplest example of closure
function makeAdder(x) {

    function add(y) {
        return y + x;
    }

    return add;
}

var plusOne = makeAdder(1);

// function makeAdder already returned , but still remembers x
console.log(plusOne(2))
console.log(plusOne(3))
console.log(plusOne(4))


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function User() {

    var userName;
    var passWord;

    function doLogin(usr, pass) {
        userName = usr;
        passWord = pass;
        console.log("log in is successful");
    }

    var publicApi = {
        login: doLogin
    };

    return publicApi;

}

var masud = User();
masud.login("masud", "welcome");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


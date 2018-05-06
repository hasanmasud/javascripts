for (var i = 0; i < 5; i++) {

    setTimeout(function timer() {
        // console.log(i);
    }, i * 1000);

}


for (var x = 0; x < 5; x++) {

    (function () {

        var j = x;
        setTimeout(function timer() {
            // console.log(j);
        }, j * 1000);


    })();

}


for (let i = 0; i < 5; i++) {

    let j = i;
    setTimeout(function timer() {
        console.log(j);
    }, j * 1000);

}





for (var i = 0; i <= 5; i++) {
  setTimeout(function() {
    console.log("example_1 : " + i);
  }, 1000);
}


for (var y = 0; y <= 5; y++) {
  (function() {
    var z = y;
    setTimeout(function() {
      console.log("example_2 : " + z);
    }, 1000);
  })();
}
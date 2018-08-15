

var fizzbuzz = function(number) {
    var print = "";
    for (var i = 0; i <= number; i++) {
        if (i % 3 == 0) {
            print += "fizz";
            if (i % 5 == 0) {
                print += "buzz";
            }
        }
        else if (i % 5 == 0) {
            print += "buzz";
        }
        else {
            print = i;
        }
        console.log(print);
        print = "";
    }
}

var msg = "Enter a number";
fizzbuzz(parseInt(prompt(msg)));

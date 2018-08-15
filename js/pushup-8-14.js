

function fizzbuzz(num) {

    for (var i=1; i <=num; i++) {
        if ((i%3==0) && (i%5==0)) {
            console.log("fizzbuzz");
        }
        else if (i%3==0) {
            console.log("fizz");
        }
        else if (i%5==0) {
            console.log("buzz");
        }
        else {
            console.log(i);
        }

    }
}


var msg = "Please enter a number: ";
var usernum = prompt(msg);
fizzbuzz(usernum);



function writeout(input) {
    for (var i = 0; i < input.length; i++) {
        console.log(input[i]);
    }
}


var aryay = ['fun', 'yay', 'words', 'huzzah', 'programming'];
writeout(aryay);


var msg;

//problem a
function showMultiplicationTable (num) {
    for (var i = 1; i <= 10; i++) {
        msg = num + " x " + i + " = " + (num*i);
        console.log(msg);
    }
}

showMultiplicationTable(7);


//problem b
function oddEven (testnum) {
    if (testnum%2 === 0)
        msg = testnum + " is even. ";
    else {
        msg = testnum + " is odd. ";
    }
    console.log(msg);
}

for (var i=0; i< 10; i++) {
    var rando = Math.floor(Math.random() * 180) + 20;
    oddEven(rando);
}


//problem c
for (var i=1; i<10; i++) {
    var string = "";
    for (var k=1; k<=i; k++) {
        string += i;
    }
    console.log(string);
}


//problem d
for (var i=100; i>0; i-=5) {
    console.log(i);
}



var msg = "Please enter a number between 1 & 50:";


var usernum = 0;

/*
while ((typeof usernum !== "number") || (usernum < 1) || (usernum > 50)) {
    var usernum = prompt(msg);
} */

while (true) {
    var usernum = parseInt(prompt(msg));
    if ((typeof usernum === "number") && (usernum > 1) && (usernum < 50) && (usernum % 2 === 1)) {
        break;
    }
}

msg = "Number to skip: " + usernum;
console.log(msg);

var count = 0;
while (count < 50) {
    count++;

    if (count == usernum) {
        msg = "Yikes! Skipping number: " + count;
        console.log(msg);
        continue;
    }

    if (count % 2 === 1) {
        msg = "Here is an odd number: " + count;
        console.log(msg);
    }
}



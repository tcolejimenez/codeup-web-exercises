
//while loops

//problem a
var num = 2;
while (num < 70000) {
    console.log(num);
    num *= 2;
}

//problem b
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
var msg = "You've got " + allCones + "cones. Let's get selling!";
do {
    allCones = sellCones(allCones);

} while (allCones > 0);

function sellCones (cones) {
    var sold = Math.floor(Math.random() * 5) + 1;

    if (sold > cones) {
        msg = "Can't sell " + sold + " cones, only have " + cones + " cones left :(";
        console.log(msg);
    }
    else if (sold == cones) {
        cones -= sold;
        msg = "Yay! sold all my cones!";
        console.log(msg);
    }
    else {
        cones -= sold;
        msg = "Sold "  + sold + " cones... " + cones + " left!";
        console.log(msg);
    }
    return cones;
}


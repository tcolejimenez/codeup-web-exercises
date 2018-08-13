var hitMe = function () {
    return Math.floor((Math.random() * 11) +1);
}

var count = 0;

if (confirm ("Do you want to play Blackjack?")) {
    while (count <= 21) {
            var cardnum = hitMe();
            if (cardnum === 1) {
                if (alert("You got an ace, would you like to use it as a 1 or 11?")) {
                    cardnum=11;
                }
            }
            if (cardnum === 11) {
                cardnum = "face card";
            }

        if (confirm("Your score is currently " + count + ". Do you want another card?")) {
            count+= hitMe();
        } else {
            break;
        }
    }
    if (count > 21) {
        alert("You busted!!");
    }
    else {
        alert("Your score is " + count);
    }
} else {

    alert("No hard feelings, bro.");
}
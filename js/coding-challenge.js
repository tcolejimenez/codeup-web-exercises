var productSign = function (a, b, c) {
    var product = a * b * c;
    if (product >= 0) {
        return "+";
    } else {
        return "-";
    }
};


//console.log(productSign(5, -7, -2));
//console.log(productSign(-8, 8, 4));
//console.log(productSign(-5, -7, 10));


var sort = function (a, b, c, d, e) {
    var sorted = [parseFloat(a), parseFloat(b), parseFloat(c), parseFloat(d), parseFloat(e)];
    sorted = sorted.sort(function (a, b) {
        return a - b
    });
    return sorted;

    // var placeholder;
    // for (var i=0; i > 5; i++) {
    //     if (e >= a) {
    //         sorted.unshift(e);
    //     } else {
    //         sorted.push(e);
    //     }
    //
    //     if (d >= sorted[0]){
    //         sorted.unshift(d);
    //     } else if (d >= sorted[1]){
    //       d.
    //     } else {
    //         sorted.push(d);
    //     }
    //
    //     if (c >= sorted[0]){
    //         sorted.unshift(c);
    //     } else {
    //         sorted.push
    //     }
    // }
};

//console.log(sort(-16, 17, -2.5, -18, 2.6));
//console.log(sort(2, 5, 1, -7, 10));
//console.log(sort(2.2, 5, -1, -7, 10.11));
//console.log(sort(2, 1, 0, -7, 4));


var eighty = function (a, b) {
    if (a === 80 || b === 80 || (a + b) === 80) {
        return true;
    } else {
        return false;
    }
};

//console.log(eighty(65, 15));
//console.log(eighty(-80, 0));
//console.log(eighty(80, 30));
//console.log(eighty(40, 40));
//console.log(eighty(100, 10));


var pyAdder = function (string) {
    //console.log(string.substring(0,2));
    if (string.substring(0, 2) === 'py') {
        return string;
    } else {
        string = 'py' + string;
        return string;
    }
};

//console.log(pyAdder("pyro"));
//console.log(pyAdder("as"));
//console.log(pyAdder("romania"));
//console.log(pyAdder("pyromaniac"));


var greatestRepeat = function (string) {
    string = string.toLowerCase();
    var words = string.split(" ");

    var highestCount = 0;
    var highestWord;

    words.forEach(function(word) {

        if (countLetters(word) >= highestCount) {
            highestCount = countLetters(word);
            highestWord = word;
        }

         console.log(word + " " + countLetters(word));
    });

//     if (highest == 0) {
//        return false;
//     } else {

    return highestWord;
//     }

};

var countLetters = function (word) {
    for (var i = 0; i < word.length; i++) {
        var letter = word[i];
        var count = 0;

        for (var j = 0; j < word.length; j++) {
            if (letter === word[j]) {
                count++;
            }
        }
    }

    return count;
};

//console.log(greatestRepeat("have a great day"));
//console.log(greatestRepeat("I love the ultimate taco bar"));

//console.log(greatestRepeat("Hello World"));
//console.log(greatestRepeat("alowv bbbbb got wes"));
//console.log(greatestRepeat("al unq word"));
//console.log(greatestRepeat("World Hello"));





















































var countRepeating = function(word) {
    var mostRepetitions = 0;
    var count = 1;

    console.log(word);

    for (var i = 0; i <word.length; i++) {
        count = 1;
        //console.log("i = " + word[i]);

        for (var j = 0; j <word.length; j++) {
            //console.log("j = " + word[j]);
            if ((i != j) && (word[i] == word[j])) {
                count++;
                //console.log(count);
            }
        }
         if (count > mostRepetitions) {
            mostRepetitions = count;
         }
    }

    return mostRepetitions;
};


var problem5 = function(string) {
    string = string.toLowerCase();
    var words = string.split(" ");
    
}



console.log(countRepeating("banana"));
console.log(countRepeating("mississippi"));
console.log(countRepeating('hello'));
console.log(countRepeating("world"));


//
//     console.log(word[i]);
//
//     for (var j = 0; j > word.length; j++) {
//         console.log(word[i] + " " + word[j]);
//         if (word[i] === word[j]) {
//             repetitions++;
//             console.log(repetitions);
//         }
//     }
//     if (repetitions > mostRepetitions) {
//         mostRepetitions = repetitions;
//     }
// }
// return mostRepetitions;
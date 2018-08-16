


var longestWord = function(sentence) {
    var words = sentence.split(" ");
    var longestWord = 0;

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord) {
            longestWord = words[i].length;
        }
    }

    return longestWord;
}

var test = prompt("Please enter a sentence:");
console.log(longestWord(test));

var pythagorean = function(a, b, c) {
    console.log(a + " " + b +  " " + c);
    var abSquared = Math.pow(a, 2) + Math.pow(b, 2);
    var cSquared = Math.pow(c, 2);
    if (abSquared == cSquared){
        return true;
    } else {
        return false;
    }
}

test = prompt("Please enter three values, separated by space:");
test = test.split(" ");
console.log(pythagorean(parseInt(test[0]), parseInt(test[1]), parseInt(test[2])));


var titleCase = function(string) {
    string = string.split(" ");
    for (var i = 0; i < string.length; i++) {

    }
}
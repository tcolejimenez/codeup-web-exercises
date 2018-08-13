"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */


// //asks user if they want to play a game
// var message = "Would you like to enter a number?";
// confirm(message);
//
// //prompts user to enter number (userNum)
// message = "Yayayayay! Enter a number: (integers only at this time)";
// var userNum = parseInt(prompt(message));
//
//
// //tests based on conditions given
// //outer if - tests if input is number
// if (!(isNaN(userNum))) {
//     //tests if number is even
//     //else sends odd message
//     if ((userNum % 2) === 0) {
//         message = "Looks even steven to me.";
//         alert(message);
//     } else {
//         message = "That guys a little odd if you ask me. ";
//         alert(message);
//     }
//
//
//     //adds 100 to number
//     //using new variable to save original value
//     var userNum100 = userNum + 100;
//     message = "Did you know if you add 100 to that number it'd be " + userNum100 + "?";
//     alert(message);
//
//     //tests if number is positive
//     //else sends negative message
//     if (userNum > 0) {
//         message = "Looking positive today!";
//         alert(message);
//     } else {
//         message = "Awfully negative today..";
//         alert(message);
//     }
// } else {
//     message = "Looks like we didn't enter a number there, did we?";
//     alert(message);
//
// }



/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
//
// function analyzeColorIf(color) {
//     //defines variable for message out side of conditional blocks
//     var message;
//
//     //very complicated if-else block to handle each color
//     //else if unknown color entered
//     if (color === "red") {
//         message = "Red burns the fire in my heart.";
//     } else if (color === "orange") {
//         message = "Orange you glad you got orange this time?";
//     } else if (color === "yellow") {
//         message = "Sunflowers are yellow, so that's kind of cool.";
//     } else if (color === "green") {
//         message = "Our earth lives and breaths green, we should too. ";
//     } else if (color === "blue") {
//         message = "Why, blue is the striking color of the deep sea. ";
//     } else if (color === "indigo") {
//         message = "Does anyone know what color indigo is anyway? ";
//     } else if (color === "violet") {
//         message = "Violet is both a lovely name and lovely color. ";
//     } else {
//         message = "I don't know nothing about no " + color + "!! ";
//     }
//     return message;
// }
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color everytime the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your function and console.log the results.
//  * You should see a different message everytime you refresh the page
//  */
// var consolemsg = "Let's get this show on the road!";
// console.log(consolemsg);
//
// //selects color once to be reused
// //cannot use random color variable as new color is selected everytime
// var color = randomColor;
//
// //shows user what color was selected
// consolemsg = "Looks like you got " + color + ". ";
// console.log(consolemsg);
//
// //prints message for color selected
// consolemsg = analyzeColorSwitch(color);
// console.log(consolemsg);
//
// /**
//  * TODO:
//  * Refactor your above function to use a switch-case statement
//  */
//
// //much easier to read switch statement setup
// function analyzeColorSwitch(color) {
//     //defines variable for message out side of conditional blocks
//     var message;
//
//     //very complicated if-else block to handle each color
//     //else if unknown color entered
//     switch (color) {
//         case "red":
//             message = "Red burns the fire in my heart.";
//             break;
//         case "orange":
//             message = "Orange you glad you did orange this time?";
//             break;
//         case "yellow":
//             message = "Sunflowers are yellow, so that's kind of cool.";
//             break;
//         case "green":
//             message = "Our earth lives and breaths green, we should too. ";
//             break;
//         case "blue":
//             message = "Why, blue is the striking color of the deep sea. ";
//             break;
//         case "indigo":
//             message = "Does anyone know what color indigo is anyway? ";
//             break;
//         case "violet":
//             message = "Violet is both a lovely name and lovely color. ";
//             break;
//         default:
//             message = "I don't know nothing about no " + color + "!! ";
//             break;
//     }
//             //returns message selected based on color in switch
//             return message;
//
//     }
//
//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//
//     message = "Please enter a color";
//     var userColor = prompt(message);
//     message = analyzeColorSwitch(userColor);
//     alert(message);


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5.
 * If your lucky number is 0 you have no discount,
 * if your lucky number is 1 you'll get a 10% discount,
 * if it's 2, the discount is 25%,
 * if it's 3, 35%,
 * if it's 4, 50%,
 * and if it's 5 you'll get all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

//function to calculate total given lucky number and total as arguments
function calculateTotal(luckynum, total) {
    //declaring discount var outside of switch
    var discount;

    //switch block to decide discount percentage
    switch(luckynum) {
        case 0:
            discount = 0;
            break;
        case 1:
            discount = .1;
            break;
        case 2:
            discount = .25;
            break;
        case 3:
            discount = .35;
            break;
        case 4:
            discount = .5;
            break;
        case 5:
            discount = 1;
            break;
    }
    //calculates actual dollar amount based on discount percentage
    var discountamt = total * discount;

    //calculates new total minus discount amount
    total -= discountamt;

    //returns new total
    return total;
}


//prompts user to enter total
//alert("Let's pass all of em shall we?");
 var userTotal = parseInt(prompt("What's your total? "));


//test code to calculate every discount based on given total
var newtotal = calculateTotal(1, userTotal);
var message = "if your luck number was 1, your total would be $" + newtotal + ".00";
alert(message);

newtotal = calculateTotal(2, userTotal);
message = "if your luck number was 2, your new total would be $" + newtotal + ".00";
alert(message);

newtotal = calculateTotal(3, userTotal);
message = "if your luck number was 3, your new total would be $" + newtotal + ".00";
alert(message);

newtotal = calculateTotal(4, userTotal);
message = "if your luck number was 4 your new total would be $" + newtotal + ".00 ";
alert(message);

newtotal = calculateTotal(5, userTotal);
message = "if your luck number was 5 your new total would be $" + newtotal + ".00 ";
alert(message);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
 //Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 6);

 //calculates new total based on random discount
 var newtotal = calculateTotal(luckyNumber, userTotal);

 //alerts user of new total and lucky number
 var message = "Your lucky number was " + luckyNumber + "! Your new total is $" + newtotal + ".00.";
 alert(message);
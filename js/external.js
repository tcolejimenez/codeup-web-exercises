"use strict";

console.log("Hello from external Javascript");
alert("Welcome to my website!");
var color = prompt("what's your fav color?");
var message = "No way, " + color + " is my favorite color, too!"
alert(message);

/*

    You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

    Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

    A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her current schedule.

    A product offer can be applied only if people buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

    When the exercise asks you to use a number, instead use a prompt to ask the user for that number.

    Use an alert to show the results of each problem.

 */

//welcome message
//only defined message once - reassign for all displayed text
var message = "let's rent some movies! Each will be $3 per day.";
alert(message);
var perday = 3;

//user chooses first movie
message = "What's your first choice?";
var movie1 = prompt(message);

//how long to rent first movie
message = "Good one. And how many days would you like to rent " + movie1 + "?";
var days1 = parseInt(prompt(message));

//calculates the cost for first movie
var cost1 = days1 * perday;

//user selects second movie
message = "Got it - we're doing " + movie1 + " for " + days1 + " days. What's your next choice?";
var movie2 = prompt(message);

//how long to rent second movie
message = "Rad. And how long would you like to rent " + movie2 + "?";
var days2 = parseInt(prompt(message));

//calculates cost for second movie
var cost2 = days2 * perday;

//user enters third movie
message = "No prob - you got " + movie2 + " for " + days2 + ". What's your last choice?";
var movie3 = prompt(message);

//how long for third movie
message = "And how long would you like to hang on to that one?";
var days3 = prompt(message);

//calculate cost for third day
var cost3 = days3 * perday;

//confirmation message
message = "So just to confirm, you'd like to rent " + movie1 + " for " + days1 + " days, " +
    movie2 + " for " + days2 + " days, and "  + movie3 + " for " + days3 + " days. Sound good?";
alert(message);

var total = cost1 + cost2 + cost3;

//displays total for user
message = "Your total comes out to $" +  total + ".00. Don't forget to paypal me asap dude.";
alert(message);
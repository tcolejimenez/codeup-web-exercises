(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ['Daniel','Mishael','Hananiah','Azariah'];
    //console.log(names);






    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("My array has " + names.length + " elements.");






    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0] + " is a name printed individually.");
    console.log(names[1] + " is a name printed individually.");
    console.log(names[2] + " is a name printed individually.");
    console.log(names[3] + " is a name printed individually.");






    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var i=0; i<names.length; i++){
        console.log(names[i] + " is a name printed from a loop.");
    }






    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name){
        console.log(name + " is a name printed from a foreach (fancy).");
        }
    );






    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


    var test = ['a','b','c','d','e','f','g'];

    var first = function(array) {
        return array[0];
    }
    var second = function(array) {
        return array[1];
    }
    var third = function(array) {
        return array[2];
    }

    console.log("Running our first function returns: " + first(test));
    console.log("Running our second function returns: " + second(test));
    console.log("Running our third function returns: " + third(test));

    var test2= [];
    console.log("Running our first function on le empty: " + first(test2));

})();

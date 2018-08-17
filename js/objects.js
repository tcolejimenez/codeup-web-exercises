(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    console.log("Problem 1: ");
    var person = {
        firstName: "Rick",
        lastName: "Sanchez"
    };

     console.log(person.firstName); // "Rick"
     console.log(person.lastName); // "Sanchez"

    console.log("--------------------");

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    console.log("Problem 2: ");

    person.sayHello = function() {
      return "Hello from " + this.firstName + " " + this.lastName + "! ";
    };

    console.log(person.sayHello());



    console.log("--------------------");

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320.
     * Your program will have to display a line with the name of the person, the amount before the
     * discount,
     * the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    console.log("Problem 3: ");

    var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];


     var discount = function (shoppers) {
         var discountamt;
         var newtotal;

         // for (var i=0; i < shoppers.length; i++) {
         //
         //         if (shoppers[i].amount > 200) {
         //             discountamt = shoppers[i].amount * .12;
         //             newtotal = shoppers[i].amount - discountamt;
         //         } else {
         //             discountamt = 0;
         //             newtotal = shoppers[i].amount;
         //         }
         //
         //         var msg = "Hey " + shoppers[i].name + ", your total was $" + shoppers[i].amount
         //             + ", which earns you a discount of $" + discountamt + ", so your new total is $" + newtotal + "! ";
         //         console.log(msg);
         // }


         shoppers.forEach(function(shopper) {
             var gotDiscount;

             if (shopper.amount > 200) {
                 discountamt = shopper.amount * .12;
                 newtotal = shopper.amount - discountamt;
                 gotDiscount = "Yay!";
             } else {
                 discountamt = 0;
                 newtotal = shopper.amount;
                 gotDiscount = "Sorry..";
             }

             var msg = "Hey " + shopper.name + ", your total was $" + shopper.amount.toFixed(2)
                 + ", which earns you a discount of $" + discountamt.toFixed(2)
                 + ", so your new total is $" + newtotal.toFixed(2) + "! " + gotDiscount;

             console.log(msg);
         }
         );



    }

    discount(shoppers);
    console.log("--------------------");


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    console.log("Problem 4: ");

    var books =[
        {
            title: "The Salmon of Doubt",
            author: {
                firstName: "Douglas",
                lastName: "Adams"
            }
        },
        {
            title: "Better Book: a sequel",
            author: {
                firstName: "Charly",
                lastName: "Rutger"
            }
        },
        {
            title: "Bad Book: a story",
            author: {
                firstName: "Someone",
                lastName: "Terrible"
            }
        },
        {
            title: "Fat Salt Sugar",
            author: {
                firstName: "Micheal",
                lastName: "Moss"
            }
        },
        {
            title: "Great Book: the movie adaptation",
            author: {
                firstName: "Not So",
                lastName: "Awesome"
            }
        }
    ];


    console.log(books[0].title) // "The Salmon of Doubt"
    console.log(books[0].author.firstName) // "Douglas"
    console.log(books[0].author.lastName) // "Adams"

    console.log("--------------------");

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    console.log("Problem 5: ");


    for(var i = 0; i < books.length; i++) {
        console.log("Book #" + i);
        console.log("Title: " + books[i].title);
        console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
        console.log("---");
    }

    console.log("--------------------");



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     *
     *
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    console.log("Bonus: ");

    var createBook = function(title, author) {
        var names = author.split(" ");

        var book = {
            title: title,
            author: {
                firstName: names[0],
                lastName: names[1],
            }
        }
        return book;
    };


    var testBook = createBook("Books are good", "Johnny Thompson");


    var showBookInfo = function(book) {

        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("---");
    }

    showBookInfo(testBook);


    for(var i = 0; i < books.length; i++) {
        console.log("Book #" + i);
        showBookInfo(books[i]);
    }

    books.forEach(function(book, index) {
        console.log("Book #" + index);
        showBookInfo(book);
    })

    console.log("--------------------");

})();

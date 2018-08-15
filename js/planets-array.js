(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log("Started with:");
    console.log(planets);

    console.log('Adding "The Sun" to the beginning of the planets array.');
    //your code here
    planets.unshift("The Sun");
    //end your code
    console.log(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
    //your code here
    planets.push("Pluto");
    //end your code
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    //your code here
    planets.shift();
    //end your code
    console.log(planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    //your code here
    planets.pop();
    //end your code
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    //your code here
    console.log(planets.indexOf("Earth"));
    //end your code

    console.log("Reversing the order of the planets array.");
    //your code here
    planets.reverse();
    //end your code
    console.log(planets);

    console.log("Sorting the planets array.");
    //your code here
    planets.sort();
    //end your code
    console.log(planets);
})();

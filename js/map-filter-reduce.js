/*Exercises

x    Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
x    Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
x    Use .map to create an array of strings where each element is a user's email address
x    Use reduce to get the total years of experience from the list of users.
x       Once you get the total of years you can use the result to calculate the average.
x   Use reduce to get the longest email from the list of users.
x   Use reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

Bonus

Use reduce to get the unique list of languages from the list of users.



*/

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const threePlusLanguages = users.filter(user => user.languages.length >= 3);

//confirm answer
//console.log(threePlusLanguages);



//Use .map to create an array of strings where each element is a user's email address
const emails = users.map(user => user.email);

//confirm answer
//console.log(emails);



//Use reduce to get the total years of experience from the list of users.
const totalExp = users.reduce(((total, user) => total += user.yearsOfExperience), 0);

//confirm answer
//console.log(totalExp);



//Once you get the total of years you can use the result to calculate the average.
const avgExp = totalExp/users.length;

//confirm answer
//console.log(avgExp);



//Use reduce to get the longest email from the list of users.
const longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest.length) {
        longest = user.email;
    }
    return longest;
} , "");

//test answer
//console.log(longestEmail);



//Use reduce to get the list of user's names in a single string.
const namesString = users.reduce((allnames, user) => allnames += user.name + ", " , "Your instructors names are: ");

//test answer
//console.log(namesString.substring(0, namesString.length-2));



//Use reduce to get the unique list of languages from the list of users.
const uniqueLanguages = users.reduce((languagesArr, user) => {
    for (language of user.languages) {
        if (!(languagesArr.includes(language))) {
            languagesArr.push(language);
        }
    }
    return languagesArr;
}, []);

//test answer
//console.log(uniqueLanguages);
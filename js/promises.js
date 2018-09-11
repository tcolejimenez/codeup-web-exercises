/*
Exercises

   1 Create a file named promises.js inside of your js directory.

   2 Write a function named wait that accepts a number as a parameter,
   and returns a promise that resolves after the passed number of milliseconds.

    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
-----------------------------------------------------------------------------------------------------------
   1 Generate a Personal Access Token for the github api.
        We will use this so that we don't get rate limited when talking to the github api.
        You can add the token to your requests like this:

        fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})

   2 Create a function that accepts a github username,
   and returns a promise that resolves with the date of the last commit that user made.
   Reference the github api documentation to achieve this.
 */

/*
let wait = (milliseconds) => {
    return new Promise(((resolve, reject) => {
            if (milliseconds == 1000)
                setTimeout(() => {resolve("You'll see this after " + milliseconds/1000 + " second.")}, milliseconds);
            else
                setTimeout(() => {resolve("You'll see this after " + milliseconds/1000 + " seconds.")}, milliseconds);
        }
    ));
};

wait(4000).then(
    result => console.log(result)
);

wait(1000).then(
    result => console.log(result)
);

wait(3000).then(
    result => console.log(result)
);

wait(500).then(
    result => console.log(result)
);

wait(2000).then(
    result => console.log(result)
);

*/

//GET
let lastCommitDate = function (user){
    fetch(`https://api.github.com/users/${user}/events/public`, {headers: {'Authorization': `token ${localStorage.gitHubAPIToken}`}})
    .then(response => response.json())
    .then(data => {
             for (event of data) {
                if (event.type == "PushEvent") {
                    return event.payload.commits[event.payload.commits.length-1].url;
                }
             }
        }
    ).then(url => {
        fetch(url).then(response => response.json().then(data => {
            console.log(data.commit.committer.date);
            }
        ));

    });
};

lastCommitDate("tcolejimenez");
lastCommitDate("jameskevinayoung");
console.log(localStorage.gitHubAPIToken);


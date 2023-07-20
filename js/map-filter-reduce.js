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

//Problem 2

const languageUsers = users.filter((user) => {
        return user.languages.length >= 3



});
    console.log(languageUsers);

//Problem 3

const getEmailsFromArray = users.map((user) => {
   return user.email
});

console.log(getEmailsFromArray);

// Problem 4

const totalExperience = users.reduce((accumulator, user) => {
    return accumulator + user.yearsOfExperience

}, 0);

console.log(totalExperience);

const averageExperience = totalExperience / 5;

console.log(averageExperience);

//Problem 5

const longestEmail = users.reduce((accumulator, user) => {
        if (user.email.length > longestEmail.length) {
            accumulator = user.email
        }
        return longestEmail;
}, '');



console.log(longestEmail)

//Problem 6

const listOfInstructors = users.reduce ((accumulator, user) => {
       return accumulator += ` ${user.name}`;

}, 'Your instructors are:');

console.log(listOfInstructors);

//Bonus

const languagesOfInstructors = users.reduce ((accumulator, user) => {
       for (let language of user.languages) {
           accumulator.add(language);
       }

       return accumulator;
}, new Set([]))

console.log(languagesOfInstructors);


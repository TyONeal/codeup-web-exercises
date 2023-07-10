//assumes array is always 3 items and nothing more or less.

// function returnProduct([num1, num2, num3]) {
//     if (num1 !== NaN && num2 !== NaN && num3 !== NaN) {
//         return [num1 * num2 * num3];
//     } else return false
// }
//
// console.log(returnProduct([3, 4, 5]));
// console.log(returnProduct([10, 10, 10]));
// console.log(returnProduct(["0", 3, 1]));


// function returnProduct(nums) {
//     let product = 1;
//     for (let num of nums) {
//          product *= num;
//     } return product;
// }
//
// console.log(returnProduct([4, 3, 3]));
// console.log(returnProduct([2, 2, 2, 2]));


// const neighborhood1 = {
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: 22
// };
//
// const neighborhood2 = {
//     neighborhood: "Luminous Estates",
//     medianHomePrice: 270000,
//     pool: true,
//     tennis: false,
//     crimeRate: "high",
//     schools: 24
// }
//
// const neighborhood3 = {
//     neighborhood: "Oak Mountain",
//     medianHomePrice: 290000,
//     pool: false,
//     tennis: false,
//     crimeRate: "low",
//     schools: 24
// }
//
// const neighborhood4 = {
//     neighborhood: "Ginormous Acres",
//     medianHomePrice: 350000,
//     pool: true,
//     tennis: true,
//     crimeRate: "low",
//     schools: 27
// }
//
//
// function desirableNeighborhood(neighborhood) {
//
//     const isRightPrice = neighborhood.medianHomePrice < 300000;
//     const isRightCrimeRate = neighborhood.crimeRate === "low";
//     const isRightSchoolRating = neighborhood.schools >= 24;
//
//     const isDesirable = isRightPrice && isRightCrimeRate && isRightSchoolRating;
//
//     return isDesirable;
// }
//
// //desirableNeighborhood();
//
// console.log(desirableNeighborhood(neighborhood1), false);
// console.log(desirableNeighborhood(neighborhood2), false);
// console.log(desirableNeighborhood(neighborhood3), true);
// console.log(desirableNeighborhood(neighborhood4), false);


// function printOneHundred() {
//
//     for (let i = 1; i < 101; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizzbuzz")
//         } else if (i % 5 === 0) {
//             console.log("buzz")
//         } else if (i % 3 === 0) {
//              console.log("fizz")
//         } else
//         console.log(`This number is ${i}`);
//
//     }
// }
//
// printOneHundred();


// You are given an array of runner objects, where each object represents a
// runner with properties name, age, and lapTimes (in seconds). Write a
// function called getTopRunners that takes the runners array as input and
// returns an array of top runners. A runner is considered top if their
// average lap time is 50 seconds or faster. If there are no top runners in
// the input array, the function should return an empty array


// HINT: You might want to create a function called calculateLapTimeAverage
// that takes in an array of numbers and returns the average


// Input:
const runners = [
    { name: "Alice", age: 25, lapTimes: [50.5, 45.2, 48.8, 47.1] },
    { name: "Bob", age: 28, lapTimes: [55.2, 50.7, 53.3, 52.9] },
    { name: "Charlie", age: 24, lapTimes: [48.9, 46.3, 50.1, 49.5] },
    { name: "David", age: 27, lapTimes: [51.4, 50.2, 49.8, 52.3] },
    { name: "Eve", age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3] },
];



// function getTopRunners(runnersArray) {
//     let topRunners = [];
//
//     for (let runner of runnersArray) {
//         if(calculateLapTimeAverage(runner.lapTimes) <= 50) {
//             topRunners.push(runner);
//         }
//     } return topRunners;
// }
//
// function calculateLapTimeAverage(lapTimesArray) {
//     let total = 0;
//     let count = 0;
//     for (let lapTime of lapTimesArray) {
//         total += lapTime;
//         count++;
//     }
//
//         return total/count;
//
// }
//
// console.log(getTopRunners(runners));

// Expected Output:
// [
//     { name: 'Alice', age: 25, lapTimes: [50.5, 45.2, 48.8, 47.1] },
//     { name: 'Charlie', age: 24, lapTimes: [48.9, 46.3, 50.1, 49.5] },
//     { name: 'Eve', age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3] }
// ]



// BONUS: Each runner in the resulting array should be represented as an
// object containing only the name and age properties.


// Expected Bonus Output:
//     [
//     { name: "Alice", age: 18 },
//         { name: "Charlie", age: 19 },
//         { name: "Eve", age: 17 }
//     ]
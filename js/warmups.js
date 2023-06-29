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
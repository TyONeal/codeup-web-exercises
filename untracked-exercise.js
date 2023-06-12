"use strict"

// // Problem 3 - Variable Exercises
//
// let pricePaidRentalDollars = 3;
// let littleMermaid =3, brotherBear = 5, hercules = 1;
//
// totalPricePaidDollars = pricePaidRentalDollars * (littleMermaid + brotherBear+ hercules);
//
// //--------
//
// let google = 400, amazon = 380, facebook = 350;
//
// weeklyPayDay = (google * 6) + (amazon * 4) + (facebook * 10);
//
// //--------
//
// let classFull = false, noClassConflict = true;
//
// enrollInClass = !classFull && noClassConflict;
//
// //--------
//
// let buyMoreThanTwo = true, offerNotExpired = true;
// let premiumMember = buyMoreThanTwo;
//
// validPurchase = buyMoreThanTwo && offerNotExpired
// validPremiumPurchase = premiumMember && offerNotExpired;
// //--------
//
// //Problem 4 - Variable Exercises
//
// let username = 'codeup';
// let password= 'notastrongpassword';
//
//
//
// let passwordLongerThanFiveCharacters;
// let passwordDoesNotIncludeUsername;
// let passwordShorterThanTwentyCharacters;
// let passwordNoStartEndWhitespace;
//
// function(passwordDoesNotIncludeUsername) {
//
// } (passwordDoesNotIncludeUsername) {
//     passwordDoesNotIncludeUsername.includes('codeup')
//     console.log("Password type is incorrect");
// }   else {
//     console.log("Password type is correct");
// }
//
// if (passwordNoStartEndWhitespace) {
//     passwordNoStartEndWhitespace.trim()
//     console.log("Password type is correct");
// }   else {
//     console.log("Password type is incorrect");
// }
//
// if (passwordShorterThanTwentyCharacters) {
//    passwordShorterThanTwentyCharacters.length < 20
//     console.log("Password type is correct");
// }   else {
//     console.log("Password type is incorrect");
// }
//
// if (passwordLongerThanFiveCharacters) {
//     passwordLongerThanFiveCharacters > 5
//     console.log("Password type is correct");
// }   else {
//     console.log("Password type is incorrect");
// }

function sumIsEqual(input1, input2, input3) {
    if (typeof input1 !== 'number' || typeof input2 !== 'number' || typeof input3 !== 'number') {
        return false;
    } else {
        return input1 + input2 === input3;
    }
}
console.log(sumIsEqual(2, 4, 6));
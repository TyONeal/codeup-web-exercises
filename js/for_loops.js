"use strict"

//Problem 1

function showMultiplicationTable(x) {
    x = parseInt(x);
    for (let i = 0; i < 11; i++) {
        console.log(`${x} x ${i} = ${x * i}`);

    }
}

showMultiplicationTable(4);

//Problem 2

function forRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const randomInt = forRandomNumbers(20, 200);
console.log(randomInt);

function numberIsEven(input) {
    if (input % 2 === 0) {
        console.log("Your number is even");
        return true
    } else {
        console.log("Your number is odd.");
        return false
    }

}

console.log(numberIsEven(randomInt));
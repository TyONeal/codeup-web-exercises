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
        return "even."
    } else {
        return "odd."
    }

}

console.log(numberIsEven(randomInt));

for (let i = 1; i < 11; i++) {

    const randomNumber = forRandomNumbers(20, 200);
    console.log("in Iteration " + i + " the random number is " + randomNumber + " which is " + numberIsEven(randomNumber))

    }


for (let i = 1; i <= 9; i++) {
    let res = [];
    for (let a = 1; a <= i; a++) {
        res.push(i);
    }
    console.log(res.join(""));
}


for (let i = 100; i >= 5; i-=5){
    console.log(i);
}


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

function forRandomNumbers(x) {
    x = parseInt(x);
    for (let i = 0; i > 20 && i < 200; i) {
     return Math.random();
     console.log(Math.random());
    }
}

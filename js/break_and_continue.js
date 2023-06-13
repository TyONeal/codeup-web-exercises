"use strict";

let userOddResponse = prompt("Please enter an odd number between 1 and 50.");
parseInt(userOddResponse);
if (userOddResponse % 2 === 0) {

    prompt("Please enter a valid odd number.");

} else {
    for (let i = 1; i >=1, i<=100; i+=2) {
        console.log(i);
        if (Number(userOddResponse) === i) {
            continue;

        }

    }
}

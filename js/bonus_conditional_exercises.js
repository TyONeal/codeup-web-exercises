function isOdd(num) {
    if (num % 2 > 0) {
        return "Number is odd."
    } else return "Number is not odd."
}

console.log(isOdd(8));

//============================================================

function isEven(num){
    if (num % 2 === 0) {
        return "Number is even."
    } else return "Number is not even."
}

console.log(isEven(9));

//===========================================================

function identity(input) {
    return input;
}

console.log(identity(27));

//===========================================================

function isFive(num) {
    if (num === 5) {
        return true;
    } else return false
}

console.log(isFive(4));
console.log(isFive(5));

//===========================================================

function addFive(num) {
    return num + 5;
}

console.log(addFive(4));
console.log(addFive(55));

//===========================================================

function isMultipleOfFive(num) {
    if (num % 5 === 0) {
        return true
    } else return false
}

console.log(isMultipleOfFive(4));
console.log(isMultipleOfFive(10));

//===========================================================

function isThree(num) {
    if (num === 3) {
        return true
    } else return false
}

console.log(isThree(5000));
console.log(isThree(3));

//===========================================================

function isMultipleOfThree(num) {
    if (num % 3 === 0) {
        return true
    } else return false
}

console.log(isMultipleOfThree(44));
console.log(isMultipleOfThree(33));

//===========================================================

function isMultipleOfThreeAndFive(num) {
    if (num % 5 === 0 && num % 3 === 0) {
        return true
    } else return false
}

console.log(isMultipleOfThreeAndFive(15));
console.log(isMultipleOfThreeAndFive(14));

//==========================================================

function isMultipleOf(target, number) {
    if (target % number === 0) {
        return true
    } else return false
}

console.log(isMultipleOf(33, 11));
console.log(isMultipleOf(40, 6));

//==========================================================

function isTrue(boolean) {
    if (boolean === true) {
        return "Yes, this is true."
    } else return "No, this is false."
}

console.log(isTrue(0 > 2));
console.log(isTrue(3 * 3 === 10));
console.log(isTrue("Tyler"));
console.log(isTrue(4 * 4 === 16));

//==========================================================

function isFalse(boolean) {
    if (boolean === false) {
        return "Yes, this is false"
    } else return "No, this is true."
}

console.log(isFalse(3 + 5 === 9));
console.log(isFalse(3 + 5 === 8));

//=========================================================


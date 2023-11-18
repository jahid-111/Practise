

// ===================FIND THE MAX NUMBER ~~~~~DONE

function the_max_number(number1, number2, number3) {

    if (number1 > number2 && number1 > number3) {
        return number1;
    }
    else if (number2 > number3 && number2 > number1) {
        return number2;
    }
    else {
        return number3;
    }
}

const myNumber = 99;
const yourNumber = 90;
const yoursNumber = 86;

const theMaxNumber = the_max_number(myNumber, yourNumber, yoursNumber)
console.log("Here is the", theMaxNumber, " max number, ", '>>To Used Func Min')






// ================================= FIND THE MIN NUMBER ~~~~~DONE

function the_min_number(number1, number2, number3) {

    if (number1 < number2 && number1 < number3) {
        return number1;
    }
    else if (number2 < number3 && number2 < number1) {
        return number2;
    }
    else {
        return number3;
    }
}

const myNum1 = 89;
const yourNum2 = 90;
const yoursNum3 = 86;
const theMinNumber = the_min_number(myNum1, yourNum2, yoursNum3);

console.log("Here is the", theMinNumber, " min number:", ">>To Used Func Min");





// ================== FIND NUMBER BY MATH

const myNum = 89;
const yourNum = 90;
const yoursNum = 86;

const sumMax = Math.max(myNum, yourNum, yoursNum);
console.log("Used math max", sumMax);

const sumMin = Math.min(myNum, yourNum, yoursNum);
console.log("Used math min", sumMin);



// ===========  LARGEST NUMBER FROM ARRAY


function the_max_number(digit) {

    let theMaxNumber = digit[0];
    for (let i = 0; i < digit.length; i++) {
        const values = digit[i];

        if (values > theMaxNumber) {
            theMaxNumber = values;
        }
    }
    return theMaxNumber;
}

const digit = [23, 34, 4, 55, 3, 543, 53, 21]
const output = the_max_number(digit);
console.log("The Largest number is", output);
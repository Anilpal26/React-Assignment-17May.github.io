// ## Assignment:

// 1. Write a logic to check whether a number is a prime number or not.

let chk = 0;
const num = 10;

for (let i = 2; i < num; i++) {
    if (num % 2 == 0) {
        chk++;
        break;
    }
}
if (chk == 0) {
    console.log(num + " is a Prime Number");
}
else {
    console.log(num + " is not a Prime Number");
}


// 2. write FizzBuzz program

/*
 div by 3 & 5 -> FizzBuzz
 div by 3 -> Fizz
 div by 5 -> Buzz
 Otherwise -> Number
*/

const number = 89;

if (number % 3 && number % 5) {
    console.log("FizzBuzz")
} else if (number % 3) {
    console.log("Fizz");
} else if (number % 5) {
    console.log("Buzz")
} else {
    console.log("Number is" + number);
}


// Write a loop to print this series from 1 to 200.

for (let i = 0; i <= 200; i++) {
    console.log(i);
}
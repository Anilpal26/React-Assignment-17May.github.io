// ### Assignment:

// 1. Write a function to swap two numbers.without third variable


function swap(a, b) {

    a = a + b;
    b = a - b;
    a = a - b;

    console.log(a, b);
}

swap(10, 20);

// 2. Write a function to generate random string.This function takes in the length as a parameter and 
//then returns a random string of that length.


function randomString(length) {
    var result = '';
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

console.log(randomString(10));
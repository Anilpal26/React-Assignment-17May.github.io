// # Asignment:
// 1. Create an array and calculate the sum of that array and console it.

arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
console.log(sum);


// 2. Create another array and console the largest number from that array.

arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let largest = 0;
for (let i = 0; i < arr.length; i++) {

    if (largest < arr[i]) {
        largest = arr[i];
    }

}

console.log(largest);
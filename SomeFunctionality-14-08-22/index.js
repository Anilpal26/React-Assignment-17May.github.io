console.log("Sunday Test");

// Join All Elements
myColor = ["Red", "Green", "White", "Black"];

function AddColor (Arr){
    console.log(Arr);
   let newArr = [];
   newArr = Arr.join()
   console.log(newArr);
}

AddColor(myColor);

// Sort The Array
arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];

function sortedArr(Arr){
   console.log(Arr);
   let newArr = [];
   newArr = Arr.sort()
   console.log(newArr);
}

sortedArr(arr1);


// find the sum of squares of a numeric vector
function sumSquare(array) {
    console.log(array);
    var sum = 0, 
        i = array.length;
    while (i--) 
     sum += Math.pow(array[i], 2);
    return sum;
  }
   
  console.log(sumSquare([0,1,2,3,4])); 
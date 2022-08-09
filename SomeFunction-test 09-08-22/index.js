console.log("Some Functionality");

// Reverse Functionality
function reverseToNumber(num){
	num = num + "";
	return num.split("").reverse().join("");
}
console.log(Number(reverseToNumber(123456789)));

// Upper Case Functionality
function upperCase(string){
  var arr = string.split(' ');
  var newArr = [];
    
  for(let i = 0; i < arr.length; i++){
    newArr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
  }
  return newArr.join(' ');
}
console.log(upperCase("the quick brown fox"));


// Vowel Count
function countVowel(string){
  var vowels = 'AEIOUaeiou';
  var vowelCount = 0;
  
  for(let i = 0; i < string.length ; i++){
    if (vowels.indexOf(string[i]) !== -1)
    {
        vowelCount += 1;
    }
  
  }
  return vowelCount;
}
console.log(countVowel("The quick brown fox"));


// Possible Combination
let Combinations = (string) =>{
    let combinations = [];
      for(let i = 0 ;i < string.length; i++){
        for(let j = i + 1; j< string.length + 1; j++){
            combinations.push(string.slice(i , j));
        }
    }
   return combinations;
}
console.log(Combinations('Dog'));

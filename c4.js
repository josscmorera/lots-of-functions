// #### `fiveMoreOdd`

// Write a function called `fiveMoreOdd` that takes in an array of numbers and adds 5 to each odd number then returns the updated array.

// function name : fiveMoreOdd
// parameter : 1 array of numbers
// return : array of numbers
// for loop to go through the array
// if statement to check if number is odd
// number + 5 for the odd numbers
// return array

function fiveMoreOdd(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            arr[i] += 5;
        }
    }
    return arr;
}
console.log(fiveMoreOdd([1, 22, 36, 53, 72, 90, 111]));


// #### `bigNumber`

// Write a function called `bigNumber` that takes in 2 numbers and returns which one is greater. If the numbers are equal return a string that indicates the two numbers are equal instead.

// function name : bigNumber
// parameter : 2 numbers
// return : number
// if statements to compare which number is greater
// else if satements to compare which number is greater
// else return "The numbers are equal"

let num1 = 5;
let num2 = 35;

function bigNumber(num1, num2){
    if(num1 > num2){
        return num1;
    } else if(num2 > num1){
        return num2;
    } else {
        return "The numbers are equal";
    }
}
console.log(bigNumber(num1, num2));
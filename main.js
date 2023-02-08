const prompt = require('prompt-sync')({sigint: true});

// #### `sayHi`
console.log("- Say Hi -");
console.log();
// Write a function called `sayHi` that takes in a name string and adds "Hi, " before the name.  Return the newly modified string.


function sayHi(name){
    return `Hi, ${name}`;
}
console.log(sayHi("John"));
console.log();


// #### `bigString`
console.log("- Big String -");
console.log();
// Write a function called `bigString` that takes in 2 strings and returns which one is bigger.  If the strings are equal in size, return a string that indicates this to the user instead.


function bigString(x, y){
    if(x.length > y.length){
        return x;
    } else if(y.length > x.length){
        return y;
    } else {
        return "The strings are the same length";
    }
}

console.log(bigString("LinkinPark", "Dinosaur"));
console.log();


// #### `bigNumber`
console.log("- Big Number -");
console.log();
// Write a function called `bigNumber` that takes in 2 numbers and returns which one is greater. If the numbers are equal return a string that indicates the two numbers are equal instead.


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
console.log();


// #### `fiveMoreOdd`
console.log("- Five More Odd -");
console.log();
// Write a function called `fiveMoreOdd` that takes in an array of numbers and adds 5 to each odd number then returns the updated array.


function fiveMoreOdd(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            arr[i] += 5;
        }
    }
    return arr;
}
console.log(fiveMoreOdd([1, 22, 36, 53, 72, 90, 111]));
console.log();


// #### `arraySummer`
console.log("- Array Summer -");
console.log();
// Write a function called `arraySummer` that takes in an array of numbers and adds each number in the array together.  Return the total.


function arraySummer(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}
console.log(arraySummer([1, 8, 24, 50]));
console.log();


// #### `everyDivisible`
console.log("- Every Divisible -");
console.log();
// Write a function called `everyDivisible` that takes in a number `n` then prints every number less than or equal to 100 that is divisible that number `n`. - For example, if `n = 7`


function everyDivisible(n){
    for(let i = 0; i <= 100; i++){
        if(i % n === 0){
            console.log(i);
        }
    }
}

let n = prompt('input a number: ');
console.log("If " + n + " = ");
everyDivisible(n);
console.log();

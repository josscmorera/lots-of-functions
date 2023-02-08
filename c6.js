const prompt = require('prompt-sync')({sigint: true});
// #### `everyDivisible`

// Write a function called `everyDivisible` that takes in a number `n` then prints every number less than or equal to 100 that is divisible that number `n`.

// For example, if `n = 7`


// function name : everyDivisible
// parameter : 1 number (n)
// return : nothing
// for loop
// if i % n === 0
// console.log(i)

function everyDivisible(n){
    for(let i = 0; i <= 100; i++){
        if(i % n === 0){
            console.log(i);
        }
    }
}
let n = prompt('input a number: ');
console.log("Numbers divisible by " + n + " between 0 and 100: ");
everyDivisible(n);
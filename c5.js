// #### `arraySummer`

// Write a function called `arraySummer` that takes in an array of numbers and adds each number in the array together.  Return the total.

// function name : arraySummer
// parameter : 1 array of numbers
// return : number 
// for loop to go through array
// total = 0  to start 
// total += array[i] to add to total
// return total 

function arraySummer(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}
console.log(arraySummer([1, 8, 24, 50]));

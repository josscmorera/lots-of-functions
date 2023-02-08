// #### `bigString`

// Write a function called `bigString` that takes in 2 strings and returns which one is bigger.  If the strings are equal in size, return a string that indicates this to the user instead.

// function name : bigString
// parameter : 2 strings
// return : the larger string or one equal string
// if statements to compare the length of the strings
// else if statements to compare the length of the strings
// else return "The strings are the same length"


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
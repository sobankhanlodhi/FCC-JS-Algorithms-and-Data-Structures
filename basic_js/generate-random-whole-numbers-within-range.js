/*
                Generate Random Whole Numbers within a Range
Instead of generating a random whole number between zero and a given number like we did before, 
we can generate a random whole number that falls within a range of two specific numbers.

To do this, we'll define a minimum number min and a maximum number max.
Here's the formula we'll use. Take a moment to read it and try to understand what this code is doing:
Math.floor(Math.random() * (max - min + 1)) + min
*/

/*
Task: 
function randomRange(myMin, myMax) {
  // Only change code below this line
  return 0;
  // Only change code above this line
}
Create a function called randomRange that takes a range myMin and myMax and returns a 
random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.
*/

var myMax = 10;
var myMin = 1 ;

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
/*
Explanation
- Math.random() generates our random number between 0 and ≈ 0.9.
- Before multiplying it, it resolves the part between parenthesis (myMax - myMin + 1) 
  because of the grouping operator ( ).
- The result of that multiplication is followed by adding myMin and then “rounded” to the 
    largest integer less than or equal to it (eg: 9.9 would result in 9)
- If the values were myMin = 1, myMax= 10, one result could be the following:

-> Math.random() = 0.8244326990411024
-> (myMax - myMin + 1) = 10 - 1 + 1 -> 10
-> a * b = 8.244326990411024
-> c + myMin = 9.244326990411024
-> Math.floor(9.244326990411024) = 9
*/
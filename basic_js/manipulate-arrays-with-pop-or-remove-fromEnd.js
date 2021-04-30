/*
                    Manipulate Arrays With pop()
Another way to change the data in an array is with the .pop() function.

In other words, .pop() removes the last element from an array and returns that element.

Any type of entry can be popped off of an array - numbers, strings, even nested arrays.

Example:
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);           //The first console.log will display the value 6,
console.log(threeArr);          //and the second will display the value [1, 4].
*/

/* Task:
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray;

Use the .pop() function to remove the last item from myArray, 
assigning the popped off value to removedFromMyArray.
*/

var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
console.log(myArray);
console.log(removedFromMyArray);
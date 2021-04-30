/*
                    Manipulate Arrays With shift()
pop() always removes the last element of an array. What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(), 
except it removes the first element instead of the last.

Example:

var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
removedFromOurArray would have a value of the string Stimpson, and ourArray would have ["J", ["cat"]].
*/

/* Task:
var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray;

Use the .shift() function to remove the first item from myArray, 
assigning the "shifted off" value to removedFromMyArray.
*/

var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();
console.log(myArray);
console.log(removedFromMyArray);
/*
                    Manipulate Arrays With unshift()
Not only can you shift elements off of the beginning of an array, 
you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

.unshift() works exactly like .push(), but instead of adding the element at the end of the array, 
unshift() adds the element at the beginning of the array.

Example:
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();               //After the shift, ourArray would have the value ["J", "cat"].
ourArray.unshift("Happy");      //After the unshift, ourArray would have the value ["Happy", "J", "cat"].
*/

/* Task:
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

Add ["Paul",35] to the beginning of the myArray variable using unshift().
*/

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul",35]);
console.log(myArray);
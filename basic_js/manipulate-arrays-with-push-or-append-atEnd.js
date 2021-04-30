/*
                        Manipulate Arrays With push()
An easy way to append data to the end of an array is via the push() function.
.push() takes one or more parameters and "pushes" them onto the end of the array.

Examples:
var arr1 = [1,2,3];
arr1.push(4);

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

arr1 now has the value [1, 2, 3, 4] and 
arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]].
*/

/*
Task: 
var myArray = [["John", 23], ["cat", 2]];
Push ["dog", 3] onto the end of the myArray variable.

*/

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
console.log(myArray);
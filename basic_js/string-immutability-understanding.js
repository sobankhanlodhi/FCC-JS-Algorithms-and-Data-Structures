/*
In JavaScript, String values are immutable, which means that they cannot be altered once created.


For example, the following code:
var myStr = "Bob";
myStr[0] = "J";
cannot change the value of myStr to Job, because the contents of myStr cannot be altered. 
Note that this does not mean that myStr cannot be changed, 
just that the individual characters of a string literal cannot be changed. 

The only way to change myStr would be to assign it with a new string, like this:
var myStr = "Bob";
myStr = "Job";

*/


/*
Task:
var myStr = "Jello World";
myStr[0] = "H"; // Change this line
Correct the assignment to myStr so it
contains the string value of Hello World 
using the approach shown in the example above.
*/
var myStr = "Jello World";
myStr = "Hello World";
console.log(myStr);
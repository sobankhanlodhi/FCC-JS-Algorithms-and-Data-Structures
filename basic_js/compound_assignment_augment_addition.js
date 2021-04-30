/* 
                Compound Assignment With Augmented Addition +=

In programming, it is common to use assignments to modify the contents of a variable
myVar = myVar + 5;
we can do above with operators which do both a mathematical operation and assignment in one step.
with += operator.

*/

/* 
var myVar = 1;
myVar += 5;     is equivalent to myVar = myVar + 5;
console.log(myVar); 6 would be displayed in the console.

*/


/* Task: 
var a = 3;
var b = 17;
var c = 12;
a = a + 12;
b = 9 + b;
c = c + 7;
Convert the assignments for a, b, and c to use the += operator.
*/

var a = 3;
var b = 17;
var c = 12;

a += 12;
b += 9;
c += 7;

console.log(a);
console.log(b);
console.log(c);
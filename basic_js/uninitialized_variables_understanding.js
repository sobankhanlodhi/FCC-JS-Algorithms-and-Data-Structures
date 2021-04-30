/* 
When JavaScript variables are declared, they have an initial value of undefined. 
If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number".
If you concatenate a string with an undefined variable, you will get a literal string of undefined.
*/

//Task: Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively 
//so that they will not be undefined.
/*
a should be defined and evaluated to have the value of 6.

b should be defined and evaluated to have the value of 15.

c should not contain undefined and should have a value of the string I am a String!
*/


var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

console.log(a);
console.log(b);
console.log(c);
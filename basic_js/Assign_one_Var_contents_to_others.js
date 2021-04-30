/* 
After a value is assigned to a variable using the assignment operator, 
you can assign the value of that variable to another variable using the assignment operator. 
*/

var myVar;                  //declares a myVar variable with no value
myVar =5;                   //then assigns it the value 5
var myVar_new;              // a variable named myVar_new is declared with no value
myVar_new = myVar;          /*the contents of myVar (which is 5) is assigned to the variable myVar_new. 
                              Now, myVar_new also has the value of 5   */

// Task: Assign the contents of a to variable b.
var a;
a=7;
var b;
b = a;

console.log(a);
console.log(b);
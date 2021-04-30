/*
In JavaScript, We can also use the += operator to concatenate a string onto the 
end of an existing string variable. 
This can be very helpful to break a long string over several lines.

Example:

var ourStr = "I come first. ";
ourStr += "I come second.";
ourStr now has a value of the string 
I come first. I come second..

*/

/* 
Task: Build myStr over several lines by concatenating 
these two strings: This is the first sentence. and This is the second sentence. using the += operator.
*/

var myStr = "This is the first sentence. ";
myStr+="This is the second sentence.";

console.log(myStr);
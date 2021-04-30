/*
            Use Bracket Notation to Find the First Character in a String
Bracket notation is a way to get a character at a specific index within a string.

Most modern programming languages, like JavaScript, don't start counting start at 0
This is referred to as Zero-based indexing.

For example, 
the character at index 0 in the word Charles is C. 
So if var firstName = "Charles",
you can get the value of the first letter of the string by using firstName[0].

Example:

var firstName = "Soban";
var firstLetter = firstName[0];
firstLetter would have a value of the string S.
*/



/* Task:
var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName; // Change this line
Use bracket notation to find the first character in the lastName variable
 and assign it to firstLetterOfLastName.
*/

var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);
/*
            Use Bracket Notation to Find the Last Character in a String
In order to get the last letter of a string, you can subtract one from the string's length.

For example, if var firstName = "Charles", you can get the value 
of the last letter of the string by using firstName[firstName.length - 1].

Example:

var firstName = "Charles";
var lastLetter = firstName[firstName.length - 1];
lastLetter would have a value of the string s.

*/



/* Task:
var lastName = "Lovelace";

var lastLetterOfLastName = lastName; // Change this line
Use bracket notation to find the last character in the lastName variable.
*/

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];

console.log(lastLetterOfLastName);
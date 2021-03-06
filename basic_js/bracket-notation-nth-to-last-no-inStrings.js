/*
            Use Bracket Notation to Find the Nth-to-Last Character in a String
You can use the same principle we just used to retrieve the last character in a string to retrieve 
the Nth-to-last character.

For example, you can get the value of the third-to-last letter of the 
var firstName = "Charles" string by using firstName[firstName.length - 3]

Example:

var firstName = "Charles";
var thirdToLastLetter = firstName[firstName.length - 3];
thirdToLastLetter would have a value of the string l.

*/



/* Task:
var lastName = "Lovelace";

var secondToLastLetterOfLastName = lastName; // Change this line
Use bracket notation to find the second-to-last character in the lastName string.
*/

var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

console.log(secondToLastLetterOfLastName);
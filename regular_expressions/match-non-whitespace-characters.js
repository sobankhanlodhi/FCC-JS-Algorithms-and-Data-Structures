/*
                            Match Non-Whitespace Characters
You learned about searching for whitespace using \s, with a lowercase s. You can also search for 
everything except whitespace.

Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, 
carriage return, tab, form feed, and new line characters. You can think of it being similar to 
the character class [^ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
The value returned by the .length method would be 32.

Task:
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);

Change the regex countWhiteSpace to look for multiple whitespace characters in a string.
*/

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);
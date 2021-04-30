/*  Escaping Literal Quotes in Strings
What happens when you need a literal quote: " or ' inside of your string?

In JavaScript, you can escape a quote from considering it as an end of string quote by 
  placing a backslash (\) in front of the quote.

Remember: The backslash \ should not be confused with the forward slash /. They do not do the same thing

*/

/* 
var sampleStr = "Alan said, \"Peter is learning JavaScript\".";
This signals to JavaScript that the following quote is not the end of the string,
but should instead appear inside the string. So if you were to print this to the console, you would get:

Alan said, "Peter is learning JavaScript".
*/

//Task: Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:

//  I am a "double quoted" string inside "double quotes".

var myStr = "I am a \"double quoted\" string inside \"double quotes\"."

console.log(myStr);
/*
Escape Sequences in Strings
Quotes are not the only characters that can be escaped inside a string. 
There are two reasons to use escaping characters:
    1: To allow you to use characters you may not otherwise be able to type out,
       such as a carriage return.
    2: To allow you to represent multiple quotes in a string without JavaScript misinterpreting 
       what you mean.

    Some Escaping
    \'	single quote
    \"	double quote
    \\	backslash
    \n	newline
    \r	carriage return
    \t	tab
    \b	word boundary
    \f	form feed
Note that the backslash itself must be escaped in order to display as a backslash.
*/


/*
 Task: Assign the following three lines of text into the single variable myStr using escape sequences.

FirstLine
    \SecondLine
ThirdLine

*/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);
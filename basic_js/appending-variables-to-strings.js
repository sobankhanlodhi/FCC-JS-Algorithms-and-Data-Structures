/*
Just as we can build a string over multiple lines out of string literals, 
we can also append variables to a string using the plus equals (+=) operator.

Example:

var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
ourStr would have the value freeCodeCamp is awesome!.
*/

/*
Task: 
var someAdjective;
var myStr = "Learning to code is ";

Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.
*/

var someAdjective = "sweet as sugar hard as ice";
var myStr = "Learning to code is ";
myStr+=someAdjective;
console.log(myStr);
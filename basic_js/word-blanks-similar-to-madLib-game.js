/*
                                            Word Blanks
We will now use our knowledge of strings to build a "Mad Libs" style word game we're calling "Word Blanks".
You will create an (optionally humorous) "Fill in the Blanks" style sentence.

In a "Mad Libs" game, you are provided sentences with some missing words, like nouns, verbs,
adjectives and adverbs. You then fill in the missing pieces with words of your choice in a way 
that the completed sentence makes sense.

Consider this sentence - It was really ____, and we ____ ourselves ____. 
This sentence has three missing pieces- an adjective, a verb and an adverb, 
and we can add words of our choice to complete it. 
We can then assign the completed sentence to a variable as follows:

var sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
*/

/*
Task:
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = ""; // Change this line
In this challenge, we provide you with a noun, a verb, an adjective and an adverb. 
You need to form a complete sentence using words of your choice, along with the words we provide.
*/

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "My " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; 
console.log(wordBlanks);
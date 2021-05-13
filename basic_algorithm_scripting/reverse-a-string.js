/*
                            Reverse a String

Given:
function reverseString(str) {
  return str;
}
reverseString("hello");

Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.

*/

function reverseString(str) {
    return [...str].reverse().join('');
}

console.log(reverseString("hello"));

/*
Code Explanation
Our goal is to take the input, str, and return it in reverse. Our first step is to split the string by 
characters using split('') or by spread operator. 
we split the string by each character using [...str]
Next we chain the reverse() function, which takes our array of characters and reverses them.
Finally, we chain join('') to put our characters back together into a string. 
Notice once again that we left no spaces in the argument for join, this makes sure that the array of characters 
is joined back together by each character.
*/
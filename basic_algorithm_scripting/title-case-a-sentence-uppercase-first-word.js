/*
                            Title Case a Sentence
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.

Given:
function titleCase(str) {
  return str;
}
console.log(titleCase("I'm a little tea pot"));
*/

function titleCase(str) {
    let newStr = str.toLowerCase().split(' ');
    for(let i = 0; i<newStr.length; i++){
      newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1);
    }
    
    return newStr.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
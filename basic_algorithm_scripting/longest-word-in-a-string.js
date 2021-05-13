/*
                            Find the Longest Word in a String

Given:
function findLongestWordLength(str) {
  return str.length;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

function findLongestWordLength(str) {  
    str = str.split(' ');
    let maxLen = 0;
    for(let i = 0; i<str.length; i++){
      if(str[i].length > maxLen){
        maxLen = str[i].length;
      }
    }  
    return maxLen;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
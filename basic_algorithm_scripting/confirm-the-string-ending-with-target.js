/*
                            Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
But for the purpose of this challenge, we would like you to use one of the 
JavaScript substring methods instead.

Given:
function confirmEnding(str, target) {
  return str;
}

confirmEnding("Bastian", "n");
*/

function confirmEnding(str, target) {
    if(str.match(new RegExp(target + "$"))){
      return true;
    }
    return false;
}

console.log(confirmEnding("Bastian", "n"));
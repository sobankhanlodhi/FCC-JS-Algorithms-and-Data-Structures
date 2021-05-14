/*
                            Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. For the purpose of this challenge, 
do not use the built-in .repeat() method.

Given:
function repeatStringNumTimes(str, num) {
  return str;
}
repeatStringNumTimes("abc", 3);

*/

function repeatStringNumTimes(str, num) {
    var newStr = ''; 
    //So, while num decremented is larger than 0…
    while (num-- > 0) newStr += str; 
    return newStr; 
}

console.log(repeatStringNumTimes("abc", 3));
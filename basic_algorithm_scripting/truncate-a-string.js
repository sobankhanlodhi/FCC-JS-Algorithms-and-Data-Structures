/*
                            Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string 
length (second argument). 
Return the truncated string with a ... ending.

Given:
function truncateString(str, num) {
  return str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

*/

function truncateString(str, num) {
    let newStr = '';
    if(str.length>num){
      newStr+=str.slice(0,num);
      return newStr+'...';
    }else{
      return str;
    }  
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
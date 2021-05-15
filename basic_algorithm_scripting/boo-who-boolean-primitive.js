/*
                            Boo who
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.

Given:
function booWho(bool) {
  return bool;
}
booWho(null);
*/

function booWho(bool) {
    if(typeof(bool)==='boolean'){
      return true;
    }
    return false
}
console.log(booWho(null));
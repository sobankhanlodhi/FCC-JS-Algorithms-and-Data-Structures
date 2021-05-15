/*
                            Falsy Bouncer
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.

Given:
function bouncer(arr) {
  return arr;
}
console.log(bouncer([7, "ate", "", false, 9]));

*/

function bouncer(arr) {
    let newArr = [];
    for(let i=0; i<arr.length; i++){
       if(Boolean(arr[i])===true){
         newArr[i] = arr[i];
       }     
    }
    return newArr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));
/*
                            Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) 
and returns them as a two-dimensional array.

Given:
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
*/

function chunkArrayInGroups(arr, size) {
    let newArr = [];
    while (arr.length > 0) {
      newArr.push(arr.splice(0, size));
    }
    return newArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
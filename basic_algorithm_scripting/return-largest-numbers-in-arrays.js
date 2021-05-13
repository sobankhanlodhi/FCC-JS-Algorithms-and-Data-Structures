/*
                            Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, 
the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member 
with array syntax arr[i].

Given:
function largestOfFour(arr) {
  return arr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

function largestOfFour(arr) {
    let maxArr = [];
    for(let i =0; i< arr.length; i++){
      let largestInSubArr = arr[i][0];
      for(let j=1; j<arr[i].length; j++){
        if(arr[i][j]>largestInSubArr){
          largestInSubArr = arr[i][j];        
        }
      }
      maxArr.push(largestInSubArr);  
    }
    return maxArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
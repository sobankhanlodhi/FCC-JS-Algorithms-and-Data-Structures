/*
                    Local Scope and Functions
Variables which are declared within a function, as well as the function parameters, have local scope. 
That means they are only visible within that function.

Here is a function myTest with a local variable called loc.
function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest();               //The myTest() function call will display the string foo in the console.
console.log(loc);       //It will throw an error, as loc is not defined outside of the function.
*/

/*
Task:
function myLocalScope() {

  // Only change code below this line

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

The editor has two console.logs to help you see what is happening. 
Check the console as you code to see how it changes. 
Declare a local variable myVar inside myLocalScope and run the tests.
*/


function myLocalScope() {

    // Only change code below this line
    var myVar = "Hello";
    console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar);
//The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail.
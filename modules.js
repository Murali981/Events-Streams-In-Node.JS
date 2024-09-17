// console.log(arguments); // argumnets is an array in javascript and this array contains all the values that were passed into a function
// // So when i log this arguments array to the console.

// console.log(require("module").wrapper);

// module.exports
const C = require("./test-module-1"); // We are importing a class Calculator to this file modules.js and since we are importing
// a class Calculator , we are putting a uppercase C and this require syntax is used to import a function (or) class from another
// file

const calc1 = new C(); // We are creating an instance of the Calculator class that we have imported from test-module-1.js file

console.log(calc1.add(2, 5)); // We are calling the add method of the Calculator class and passing two numbers as arguments

// exports
// const calc2 = require("./test-module-2"); // Here calc2 is a exported object

const { add, multiply, divide } = require("./test-module-2"); // Here calc2 is a exported object

console.log(multiply(2, 5));

// caching
require("./test-module-3")(); // We are directly calling the function that is returned from the module.exports in the test-module-3.js file

require("./test-module-3")();

require("./test-module-3")();

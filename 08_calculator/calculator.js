const add = function(x, y) {
	// Add two numbers
  result = x + y;
  // Return the sum
  return result;
};

const subtract = function(x, y) {
	// Subtract two numbers
  result = x - y;
  // Return the difference
  return result;
};

const sum = function(array) {
	let result = 0;
  // Loop through array
  for (i in array) {
    // Add each number to the sum
    result += array[i];
  }
  // Return the sum
  return result;
};

const multiply = function(...values) {
  // Loop through values
  // Multiply each value
  // Return the total
};

const power = function(x, y) {
	// Raise the first value to the power of the second
  // Return the total
};

const factorial = function(x) {
	// If 0 or 1 return 1
  // Loop through each value
  // Multiply each value by the next value and add to total
  // Return the total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

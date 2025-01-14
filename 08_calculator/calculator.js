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
  let result = 1;
  // Loop through values
  for (i in values) {
    // Multiply each value
    result *= values[i];
  }
  // Return the total
  return result;
};

const power = function(x, y) {
	// Raise the first value to the power of the second
  result = x ** y;
  // Return the total
  return result;
};

const factorial = function(x) {
	// If 0 or 1 return 1
  if (x == 0 || x == 1) {
    return 1;
  } else {
      // Loop through each value
      for (i = x - 1; i >= 1; i--) {
        // Multiply each value by the next value and add to total
        x *= i;
      }
    // Return the total
    return x;
  }
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

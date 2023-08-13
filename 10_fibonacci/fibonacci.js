const fibonacci = function(place) {
    // Declare an array
    let sequence = [1, 1];
    // Add each fibonacci number to an array up to place - 1
    for (i = 2; i < place; i++) {
        sequence[i] = sequence[i - 2] + sequence[i - 1];
    }
    // Return array item at index[place - 1]
    return sequence[place - 1];
};

// Do not edit below this line
module.exports = fibonacci;

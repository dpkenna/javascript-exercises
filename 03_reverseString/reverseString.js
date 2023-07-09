const reverseString = function(string) {
    // Turn string into array
    let stringArray = Array.from(string);
    // Reverse array
    let reversedArray = stringArray.reverse();
    // Join array back together WITHOUT COMMAS
    let reversedString = reversedArray.join('');

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

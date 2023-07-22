const removeFromArray = function(array, ...removeValues) {
    // Loop through the values to remove
    for (value of removeValues) {
        console.log(value);
        // Loop through the array
        for (item of array) {
            // Get the index of the array
            index = array.indexOf(value);
            console.log(index);
            // If value not found, ignore
            if (index == -1) {
                return;
            } else {
                // Remove the value
                array.splice(index, 1);
            }
        }
    }
};

console.log(removeFromArray([1,2,3], 3,2));

// Do not edit below this line
// module.exports = removeFromArray;

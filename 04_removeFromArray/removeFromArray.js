const removeFromArray = function(array, ...removeValues) {
    // Loop through the values to remove
    for (value of removeValues) {
        // Loop through the array
        for (item of array) {
            // Get the index of the array
            index = array.indexOf(value);
            // If value not found, ignore
            if (index != -1) {
                array.splice(index, 1);
            }
        }
    }
return array;
};

// Do not edit below this line
module.exports = removeFromArray;

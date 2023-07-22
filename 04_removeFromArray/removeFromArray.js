const removeFromArray = function(array, ...removeValues) {
    // Loop through the values to remove
    for (value in removeValues) {
        console.log(value);
        // Loop through the array
        for (item in array) {
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
return array;
};

// Do not edit below this line
module.exports = removeFromArray;

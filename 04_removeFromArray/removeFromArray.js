const removeFromArray = function(array, ...removeValues) {
    // Loop through the values to remove
    for (value of removeValues) {
        console.log("value: " + value);
        // Loop through the array
        for (item of array) {
            // Get the index of the array
            index = array.indexOf(value);
            console.log("index: " + index);
            // If value not found, ignore
            if (index != -1) {
                array.splice(index, 1);
            }
        }
    }
return array;
};

console.log(removeFromArray([1,2,3], 3,2));

// Do not edit below this line
// module.exports = removeFromArray;

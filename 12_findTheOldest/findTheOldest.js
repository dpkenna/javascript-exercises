const findTheOldest = function(array) {
    // Declare a result array
    let resultArray = [];
    // Loop through the array of objects
    for (i = 0; i < array.length; i++) {
        // If there is a death date
        if (array[i].yearOfDeath != undefined) {
            // Subtract the birth date from the death date
            let age = array[i].yearOfDeath - array[i].yearOfBirth;
            // Add the result to the result array
            resultArray[i] = age;
        } else {
        // Else
            // Subtract the birth date from today's date
            let date = new Date();
            let age = date.getFullYear() - array[i].yearOfBirth;
            // Add the result to the result array
            resultArray[i] = age;
        }
    }
    // Compare the items in the result array
    let oldest = Math.max(...resultArray);
    // Get the index of the largest item
    index = resultArray.indexOf(oldest);
    // Return the object at the same index
    return array[index];
};

// Do not edit below this line
module.exports = findTheOldest;

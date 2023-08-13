const findTheOldest = function(array) {
    // Declare a result array
    let resultArray = [];
    // Loop through the array of objects
    for (i = 0; i < array.length; i++) {
        // If there is a death date
        if (person[i].yearOfDeath != undefined) {
            // Subtract the birth date from the death date
            let age = person[i].yearOfDeath - person[i].yearOfBirth;
        } else {
        // Else
            // Subtract the birth date from today's date
            let date = new Date();
            let age = date.getFullYear() - person[i].yearOfBirth;
        }
        // Add the result to the result array
        resultArray[i] = age;
    }
    // Compare the items in the result array
    let oldest = Math.max(...resultArray);
    // Get the index of the largest item
    index = resultArray.indexOf(oldest);
    // Return the object at the same index
};

// Do not edit below this line
module.exports = findTheOldest;

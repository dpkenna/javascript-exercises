const findTheOldest = function(array) {
    // Declare a result array
    let resultArray = [];
    // Loop through the array of objects
    for (person in array) {
        // If there is a death date
        if (person.yearOfDeath != undefined) {
            // Subtract the birth date from the death date
            let age = person.yearOfDeath - person.yearOfBirth;
        } else {
        // Else
            // Subtract the birth date from today's date
            let date = new Date();
            let age = date.getFullYear() - person.yearOfBirth;
        }
        // Add the result to the result array
    }
    // Compare the items in the result array
    // Return the index of the largest item
    // Return the object at the same index
};

// Do not edit below this line
module.exports = findTheOldest;

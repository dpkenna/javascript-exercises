const getTheTitles = function(array) {
    // Declare a result array
    let titles = [];
    // Loop through the objects in the input array
    for (i = 0; i < array.length; i++) {
        // Add the value of title to the result array
        titles[i] = array.title;
    }
    // Return the result array
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;

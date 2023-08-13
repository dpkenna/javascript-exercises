const palindromes = function (string) {
    // Convert the string to lowercase
    lowString = string.toLowerCase();
    // Remove the spaces
    noSpaceString = lowString.split(' ').join('');
    // Remove the punctuation
    noPuncString = noSpaceString.replace(/[^a-z0-9]/gi, '');
    console.log(noPuncString);
    // Reverse the string
    revString = noPuncString.split('').reverse().join('');
    // Compare the strings
    console.log(revString);
    if (noPuncString == revString) {
        return true;
    } else {
        return false;
    }
};

palindromes('Racecar!');

// Do not edit below this line
// module.exports = palindromes;

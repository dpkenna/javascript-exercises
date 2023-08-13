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
    if (string == revString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

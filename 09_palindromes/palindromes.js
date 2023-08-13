const palindromes = function (string) {
    // Convert the string to lowercase
    lowString = string.toLowerCase();
    // Remove the spaces
    noSpaceString = lowString.split(' ').join('');
    // Remove the punctuation
    noPuncString = noSpaceString.replace(/[^a-z0-9]/gi, '');
    // Reverse the string
    revString = noPuncString.split('').reverse().join('');
    // Compare the strings
};

// Do not edit below this line
module.exports = palindromes;

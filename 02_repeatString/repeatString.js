const repeatString = function(string, num) {
    if (num >= 0) {
        repString = ''
        for (i = 1; i <= num; i++) {
            repString += string;
        }
        return repString;
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = repeatString;

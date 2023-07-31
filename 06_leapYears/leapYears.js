const leapYears = function(year) {
    // If the year is not divisible by 100
    // Determine whether the year is divisible by 4
    if (year % 100 != 0 && year % 4 == 0) {
        return true;
    // If the year is divisible by 100
    // Determine whether the year is divisible by 400
    } else if (year % 100 == 0 && year % 400 == 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

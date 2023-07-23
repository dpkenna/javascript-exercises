const sumAll = function(firstNum, secondNum) {
    // Create a variable to store the sum
    let sum = 0;
    // Return "ERROR" if a negative number is given or if a non-number is given
    if (firstNum < 0 || secondNum < 0 || typeof firstNum != "number" || typeof secondNum != "number") {
        return "ERROR";
    } else {
        // Arrange the numbers from smallest to largest in case the larger number is given first
        sortArray = [firstNum, secondNum];
        sortArray.sort(function(a,b){return a-b});
        // Loop through the numbers from first to last
        for (let i = sortArray[0]; i <= sortArray[1]; i++){
            // Add each number to the sum
            sum += i;
            console.log(sum);
        }
    }
    // Return the sum
    console.log(sum);
    return sum;
};

sumAll(1,10);

// Do not edit below this line
// module.exports = sumAll;

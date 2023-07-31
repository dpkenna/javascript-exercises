const convertToCelsius = function(temperature) {
  // Convert the temperature
  temp = (temperature - 32) / 1.8;
  // Round to nearest single decimal
  roundedTemp = Number(temp.toFixed(1));
  return roundedTemp;
};

const convertToFahrenheit = function(temperature) {
  // Convert the temperature
  temp = (temperature * 1.8) + 32;
  // Round to nearest single decimal
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

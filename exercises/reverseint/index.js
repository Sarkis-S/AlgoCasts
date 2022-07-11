// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(number) {
  let output = [];
  let isNegative = false;
  // handles 0 inputs
  if (number === 0) {
    return 0;
  }
  // convert the number into array of strings
  let stringifiedNumber = number.toString().split('');

  // iterate through the array
  for (let i = 0; i < stringifiedNumber.length; i++) {
    // if current value is - tick the isNegative flag
    // for all other number > 0 shift to front of output
    if (stringifiedNumber[i] === '-') {
      isNegative = true;
    } else if (stringifiedNumber[i] > 0) {
      output.unshift(stringifiedNumber[i]);
    }
  }
  // join all number values in output to final variable
  let final = output.join('');
  // return final output parsed and adding - as needed
  return isNegative ? -parseInt(final) : parseInt(final);
}

module.exports = reverseInt;

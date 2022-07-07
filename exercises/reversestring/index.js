// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reversedString = [];

  // Iterate through the entire length of the string starting from the end
  // We do so by letting i in the loop = length of the string
  // While i is greater than -1 we decrement its value though each iteration
  for (let i = str.length; i > -1; i--) {
    // As long as the value of the string is not an empty space
    if (str[i] !== '') {
      // We'll push the resulting value into variable reversed string
      // Note that push will insert the string value in the back of the array
      reversedString.push(str[i]);
    }
  }

  // Then return the array by joining the characters together
  return reversedString.join('');
}

module.exports = reverse;

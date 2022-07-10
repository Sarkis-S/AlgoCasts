// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// My solution:
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


// Solution 2:
function reverse(str) {
  let reversed = '';
  // Each iteration reversed variable is concat with new character
  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}


// Solution 3: Using JavaScript built in reverse method
function reverse(str) {
  // const arrayString = str.split('');
  // arrayString.reverse();
  // return arrayString.join('');
  return str.split('').reverse().join('');
}

// Solution 4: Complicated but cool
function reverse(str) {
  // return str.split('').reduce((reversed, character) => {
  //   return character + reversed;
  // });
  // 
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

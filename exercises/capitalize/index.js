// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// My solution:
function capitalize(str) {
  let capitalized = '';

  // iterate through the string
  for (let i = 0; i < str.length; i++) {
    let temp = '';

    // handles previous element for first letter of word
    if (str[i - 1] === undefined) {
      capitalized += str[i].toUpperCase();
    // checks if the prev element is an emnpty string
    // then concats the current letter to output capitalized
    } else if (str[i - 1] === ' ') {
      temp += str[i];
      capitalized += temp.toUpperCase();
    // if there is no empty string in prev iteration
    // simply concat to output
    } else {
      capitalized += str[i];
    }
  }

  // return output string
  return capitalized;
}

// Solution 2 (Simplified version)
function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

module.exports = capitalize;

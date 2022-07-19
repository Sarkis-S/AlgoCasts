// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // create array identifying all vowels
  const alphabet = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  // iterate through string
  for (let char of str) {
    // compare the current character to the array
    // if there is a match up the count
    if (alphabet.includes(char.toLowerCase())) {
      count++;
    }
  }
  // return the count
  return count;
}

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1 (My solution):
function palindrome(str) {
  // Start by reversing the string
  // let reversedString = str.split('').reduce((reversed, character) => {
  //   return character + reversed;
  // }, '');

  // Instead of reduce, reverse() can be an alternative
  let reversedString = str.split('').reduce((reversed, character) => character + reversed, '');
  // Then compare reversed string with originial string
    // If they match return true
    // Otherwise return false
  return reversedString === str;
}

module.exports = palindrome;

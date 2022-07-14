// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// My solution:
function anagrams(stringA, stringB) {
  // We're going to convert both string params to text and remove all
  // punctuations then make them lowercase
  // use string.replace(/[^\w]/g,'').toLowerCase();

  // store all character and occurences for string A and B in an object
  const letters1 = charMapper(stringA);
  const letters2 = charMapper(stringB);

  // check if the size of both object are the same
  if (Object.keys(letters1).length !== Object.keys(letters2).length) {
    return false;
  }

  // iterate through string1 and check if the occurence is the same as string2
  for (let char in letters1) {
    if (letters1[char] !== letters2[char]) {
      return false;
    }
  }
  
  // if all check passes return true
  return true;
}

// Helper function:
const charMapper = (string) => {
  const charMap = {};
  const newStr = string.replace(/[^\w]/g,'').toLowerCase();

  for (let char of newStr) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

// Solution 2: (Note: sort my cause issues depending on string)
const anagrams = (stringA, stringB) => {
  return cleanString(stringA) === cleanString(stringB);
}

const cleanString = (string) => {
  return string.replace(/[^\w]/g, '')
    .toLowerCase().split('')
    .sort()
    .join('');
}

module.exports = anagrams;

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // We're going to convert both string params to text and remove all
  // punctuations then make them lowercase
  // use string.replace(/[^\w]/g,'').toLowerCase();

  const string1 = stringA.replace(/[^\w]/g,'').toLowerCase();
  const string2 = stringB.replace(/[^\w]/g,'').toLowerCase();

  // store all character and occurences for string A and B in an object
  const letters1 = {};
  const letters2 = {};

  for (let char in string1) {
    if (!letters1[string1[char]]) {
      letters1[string1[char]] = 1;
    } else {
      letters1[string1[char]]++;
    }
  }

  for (let char in string2) {
    if (!letters2[string2[char]]) {
      letters2[string2[char]] = 1;
    } else {
      letters2[string2[char]]++;
    }
  }

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

module.exports = anagrams;

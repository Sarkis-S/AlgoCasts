// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // create the object variable
  let memory = {};
  let maxChar = '';
  let count = 0;

  // iterating through the string
  for (let char of str) {
    // check if the character is in object variable
    if (!memory[char]) {
      // if not, assign the character to object with a value of 1
      memory[char] = 1;
    } else {
      // otherwise we up the count
      memory[char]++;
    }
  }
  
  // return the character with the highest value
  for (let char in memory) {
    if (memory[char] > count) {
      maxChar = char;
      count = memory[char];
    }
  }

  return maxChar;
}

module.exports = maxChar;

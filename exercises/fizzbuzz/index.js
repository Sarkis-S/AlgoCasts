// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  // create a loops that iterates n times to console log n
  for (let i = 1; i <= n; i++) {
    // if the number is a multiple of 3 log fizz
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log('fizzbuzz');
    // if the number is a multiple of 5 log buzz
    } else if(i % 5 === 0) {
      console.log('buzz');
    // if the number is a multiple of 3 & 5 log fizzbuzz
    } else if (i % 3 === 0) {
      console.log('fizz');
    // otherwise just log current n
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;

// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// my solution:
const fib = (n) => {
  // create new array to store sequence
  let newArr = [0, 1];

  // use for loop to push and create the sequence
  for (let i = 2; i <= n; i++) {
    let prev = newArr[i - 2];
    let current = newArr[i - 1];
    
    newArr.push(prev + current);
  }

  // return the number in the sequence that matches n
  return newArr[n];
}


// recursive solution:
const fib = (n) => {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

module.exports = fib;

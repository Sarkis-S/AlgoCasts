// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  // My notes:
  // Looking at the pattern there are n columns and n rows
  // It may be a good idea to at some point subtract the column by 1 iteratively
  // And likewise the same could be said about the rows

  // There looks to be a nested for loop with calculations done within
  // I don't believe creating rows and then pushing it will be wise
  // It would be difficult to calculate and keep track of the position

  // create array output variable
  
  // iterate n times and push empty array to output
  // this will create out nested array matrix
  
  // Iterate through output array 
    // pushing the current element into array
      // if the iteration hits Nth column (need to figure this part out)
      // Challenging: revising another day
  // return output array matrix
}

matrix(3);

module.exports = matrix;

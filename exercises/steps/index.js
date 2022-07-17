// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  // Loop for creating rows of columns
  for (let row = 0; row < n; row++) {
    // this is output step
    let step = '';

    // 2nd loop (unfortunately) to create columns
    for (let column = 0; column < n; column++) {
      // if the column is less than or equal to current row
      if (column <= row) {
        // add # to the step
        step += '#';
        // otherwise add the space
      } else {
        step += ' ';
      }
    }
    // create the step downward
    console.log(step);
  }
}

module.exports = steps;

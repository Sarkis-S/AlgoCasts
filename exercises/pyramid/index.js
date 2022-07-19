// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const middle = Math.floor((2 * n - 1) / 2);
  // iterate through array from 0 to n (rows)
  for (let row = 0; row < n; row++) {
    let step = '';
    // iterate through column from 'both sides of n' (column)
    for (let column = 0; column < 2 * n - 1; column++) {
      if (middle - row <= column && middle + row >= column) {
        step += '#';
      } else {
        step += ' ';
      }
    }

    console.log(step);
  }
}

module.exports = pyramid;

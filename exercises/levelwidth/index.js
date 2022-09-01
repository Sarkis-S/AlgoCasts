// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  // initialize our array with root and stopper
  const arr = [root, 's'];
  // initialize counter array with zero
  const counters = [0];
  // make sure the array isn't empty otherwise
  // will cause inifinite loop with 's' stoppper
  while (arr.length > 1) {
    // take the node off the array
    const node = arr.shift();
    // if its a stopper
    if (node === 's') {
      // increase the counter
      counters.push(0);
      // and push stopper back into the array in the back
      arr.push('s');
    } else {
      // otherwise push all elements beind node
      arr.push(...node.children);
      // then increase the latest counter
      counters[counters.length -1]++;
    }
  }

  return counters;
}

module.exports = levelWidth;

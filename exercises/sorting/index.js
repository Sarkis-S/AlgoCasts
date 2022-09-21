// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // closing the window for bubble sort here
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        // swap if current is greather than next
        let tempA;
        let tempB;
        tempA = arr[j];
        tempB = arr[j + 1];
        arr[j] = tempB;
        arr[j + 1] = tempA;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  // from i = 0 to the array.length
  for (let i = 0; i < arr.length; i++) {
    // Assume i is the least in array, assign i to indexOfMin
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      // check if an element is of lower value
      if (arr[j] < arr[indexOfMin]) {
        // if so record its index
        indexOfMin = j;
      }
    }

    // if index of current element !== lowest index elment
    if (indexOfMin !== i) {
      // swap them
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

function mergeSort(arr) {
  // check if arr has one element
  if (arr.length == 1) {
    return arr;
  }
  // split arr in half
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);
  // call merge function on both left and right
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];
  // while there are elements in both arrays
  while (left.length && right.length) {
    // if the 1st left half element is less than 1st right half
    if (left[0] < right[0]) {
      // shift the lement from lefto into a result arr
      results.push(left.shift());
    } else {
      // shift the element from right into a result arr
      results.push(right.shift());
    }
  }
  // take everything from arr that still has elements and put into results
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

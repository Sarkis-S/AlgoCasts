// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// My solution:
function chunk(array, size) {
  // create final output array
  let output = [];
  // create a temp array
  let temp = [];
  // create a count variable
  let count = 0;

  // iterate through the array
  for (let number of array) {
    // find the last element
    const last = array[array.length - 1];
    
    // immediately up the count
    count++;

    // if the count equals size
    if (count === size) {
      // push the temp array to output array
      temp.push(number);
      output.push(temp);

      // reset count and temp
      count = 0;
      temp = [];
    } else {
      // check first if last element
      if (number === last) {
        temp.push(number);
        output.push(temp);
      } else {
        // treat it like any number and push to temp
        temp.push(number);
      }
    }
  }

  // return the output array
  return output;
}


// Solution 2:
function chunk(array, size) {
  // create empty array to hold chunks
  const chunked = [];

  // for each element in unchunked array
  for (let element of array) {
    // retreive the last element in chunked
    const last = chunked[chunked.length - 1];

    // if the element does not exist or length is = to chunk size
    if (!last || last.length === size) {
      // push a new chunk into chunked w current element
      chunked.push([element]);
    } else {
      // otherwise add the current element into chunk
      last.push(element);
    }
  }

  return chunked;
}


// Solution 3: (Best solution)
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

module.exports = chunk;

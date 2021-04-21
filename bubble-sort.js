// swaps the values at 2 indices in an array
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

// looks through adjacent pairs of values in the array
// if the values are in the wrong order, swap them around and increase swap counter
function bubbleSort(array) {
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
          swap(array, i, i + 1);
          swaps++;
      }
  }

  // if number of swaps is greater than zero, the list isn't in the correct order yet
  // need to call bubbleSort again to keep sorting
  // otherwise you have a sorted array which you can return
  if (swaps > 0) {
      return bubbleSort(array);
  }
  return array;
};
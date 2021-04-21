// breaks the array down into continually smaller chunks, then merges them back together in the correct order

function mergeSort(array) {
	// if array has 1 or 0 elements, then it is sorted and can return it
	if (array.length <= 1) {
		return array;
	}

	// slice the array in 2 halves and sort each half by recursively calling mergeSort
	// 2 sorted halves are then merged together in the correct order with the merge() function
	const middle = Math.floor(array.length / 2);
	let left = array.slice(0, middle);
	let right = array.slice(middle, array.length);

	left = mergeSort(left);
	right = mergeSort(right);
	return merge(left, right, array);
}

// to merge the two lists, keep choosing the lowest value from the left or right arrays that hasn't already been added to the output array
// when one of the arrays is empty, you add all of the remaining values from the other array to it 
function merge(left, right, array) {
	let leftIndex = 0;
	let rightIndex = 0;
	let outputIndex = 0;
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			array[outputIndex++] = left[leftIndex++];
		} else {
			array[outputIndex++] = right[rightIndex++];
		}
	}

	for (let i = leftIndex; i < left.length; i++) {
		array[outputIndex++] = left[i];
	}

	for (let i = rightIndex; i < right.length; i++) {
		array[outputIndex++] = right[i];
	}
  // console.log(array);
	return array;
}

const array1 = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
console.log(mergeSort(array1));

/*
[ 1, 21 ] - first call 
[ 26, 45 ] - second call 
[ 1, 21, 26, 45 ] - third call
[ 28, 29 ]
[ 2, 9 ]
[ 2, 9, 28, 29 ]
[
   1,  2,  9, 21,
  26, 28, 29, 45
]
[ 16, 49 ]
[ 27, 39 ]
[ 16, 27, 39, 49 ]
[ 34, 43 ]
[ 40, 46 ]
[ 34, 40, 43, 46 ]
[
  16, 27, 34, 39,
  40, 43, 46, 49
]
[
   1,  2,  9, 16, 21, 26,
  27, 28, 29, 34, 39, 40,
  43, 45, 46, 49
]
[
   1,  2,  9, 16, 21, 26,
  27, 28, 29, 34, 39, 40, - 16th call (sorted)
  43, 45, 46, 49
]
*/

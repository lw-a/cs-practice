function mergeSort(array) {
if (array.length < 2) return array;

const middle = array.length / 2;

// sort left half
const left = array.slice(0, middle);
// if (left.length)
mergeSort(left);

// sort right half
const right = array.slice(middle, array.length);
mergeSort(right);

// merge sorted halves
};

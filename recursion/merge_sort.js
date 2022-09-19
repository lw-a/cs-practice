function mergeSort(array) {
if (array.length <= 1) return array;

const middle = array.length / 2;

let left = array.slice(0, middle);
left = mergeSort(left);

let right = array.slice(middle, array.length);
right = mergeSort(right);

return merge(left, right);
};

function merge(left, right) {

  const merged = [];

  while (left.length > 0 && right.length > 0) {
    const smallerArray = left[0] < right[0] ? left : right;
    merged.push(smallerArray.shift());
  };

  return merged.concat(left, right);
};

console.log(mergeSort([5, 2, 11, 8, -1, 4, 12, 0, 22, 7])); // [ -1, 0,  2,  4,  5, 7, 8, 11, 12, 22 ]

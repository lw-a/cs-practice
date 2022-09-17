function sumRange(num) {
  return num === 1 ? num : num + sumRange(num - 1);
  }
  console.log(sumRange(3));

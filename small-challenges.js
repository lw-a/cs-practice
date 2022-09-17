function sumRange(num) {
return num === 1 ? num : num + sumRange(num - 1);
}
console.log(sumRange(3));

function power(base, exponent) {
  return exponent === 1 ? base : base * power(base, exponent - 1);
}
console.log(power(2, 4));

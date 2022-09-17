function sumRange(num) {
return num === 1 ? num : num + sumRange(num - 1);
}
console.log(sumRange(3)); // 6

function power(base, exponent) {
  return exponent === 1 ? base : base * power(base, exponent - 1);
}
console.log(power(2, 4)); // 16

function factorial(num) {
  return num === 1 ? num : num * factorial(num - 1);
};
console.log(factorial(5)); // 120

function all(array, callback) {

  if (array.length === 0) return true;

  if (callback(array[0])) {
    array.shift();
    return all(array, callback);
  } else {
    return false;
  };
};
const allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});
console.log(allAreLessThanSeven); // false

const allAreLessThanNine = all([1,2,6,5,7,8], function(num){
	return num < 9;
});
console.log(allAreLessThanNine); // true

function productOfArray(array) {

  if (array.length === 0) return 1;

  return array.shift() * productOfArray(array);
};
const six = productOfArray([1,2,3]);
console.log(six); // 6

const sixty = productOfArray([1,2,3,10]);
console.log(sixty); // 60

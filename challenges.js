// Sum Range
function sumRange(num) {
return num === 1 ? num : num + sumRange(num - 1);
}
console.log(sumRange(3)); // 6

// Power
function power(base, exponent) {
  return exponent === 1 ? base : base * power(base, exponent - 1);
}
console.log(power(2, 4)); // 16

// Factorial
function factorial(num) {
  return num === 1 ? num : num * factorial(num - 1);
};
console.log(factorial(5)); // 120

// All
function all(array, callback) {

  if (array.length === 0) return true;

  if (callback(array[0])) {
    array.shift();
    return all(array, callback);
  };

  return false;
};
const allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});
console.log(allAreLessThanSeven); // false

const allAreLessThanNine = all([1,2,6,5,7,8], function(num){
	return num < 9;
});
console.log(allAreLessThanNine); // true

// Product Of Array
function productOfArray(array) {

  if (array.length === 0) return 1;

  return array.shift() * productOfArray(array);
};
const six = productOfArray([1,2,3]);
console.log(six); // 6

const sixty = productOfArray([1,2,3,10]);
console.log(sixty); // 60

// Contains
function contains(object, value) {
	for(const key in object){
		if(typeof object[key] === 'object'){
			return contains(object[key], value);
		};

		if (object[key] === value){
			return true;
		};
	};

	return false;
}
const nestedObject = {
  data: {
      info: {
          stuff: {
              thing: {
                  moreStuff: {
                      magicNumber: 44,
                      something: 'foo2'
                  }
              }
          }
      }
  }
}
const hasIt = contains(nestedObject, 44);
console.log(hasIt); // true

const doesntHaveIt = contains(nestedObject, "foo");
console.log(doesntHaveIt) // false

// Total Integers
function totalIntegers(array) {
	if(array.length === 0) return 0;

	let total = 0;
	let first = array.shift();

	if (Array.isArray(first)){
    total += totalIntegers(first);
	} else if (Number.isInteger(first)) {
    total += 1;
	}

	return total + totalIntegers(array);
};
const seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]);
console.log(seven); // 7

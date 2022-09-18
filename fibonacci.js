// Iteration Version
function fibs(num) {
let a = 0;
let b = 1;
let array = [];

for (let i = 3; i <= num; i++) {
  let c = a + b;
  array.push(c);
  a = b;
  b = c;
};

return array;
}
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

// Recursion Version

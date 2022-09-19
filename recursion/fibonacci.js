// Iteration Version
function fibs(num) {
  let a = 0;
  let b = 1;
  let array = [a];

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
function fibsRec(length, sequence = [0, 1]) {
  if (sequence.length >= length) return sequence;

  sequence.push(sequence.at(-1) + sequence.at(-2));

  return fibsRec(length, sequence);
}
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

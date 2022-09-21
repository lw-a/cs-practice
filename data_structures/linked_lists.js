// Node
const Node = (value = null) => {
  return { value, nextNode: null };
};

// Linked List
const LinkedList = () => {

  let HEAD = null;
  let length = 0;

  // append(value)
  const append = (value) => {
    const node = Node(value);
    length ++;
    if (HEAD === null) return HEAD = node;
    let pointer = HEAD;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    };
    pointer.nextNode = node;
  };

  // prepend(value)
  const prepend = (value) => {
    const node = Node(value);
    length ++;
    if (HEAD === null) return HEAD = node;
    let temp = HEAD.nextNode;
    HEAD = node;
    HEAD.nextNode = temp;
  };

  // size
  const size = () => {
    return length;
  };

  // head
  const head = () => {
    if (!HEAD) return null;

    return HEAD;
  };

  // tail
  const tail = () => {
    if (!HEAD) return null;

    let pointer = HEAD;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    };
    return pointer;
  };

  // at(index)
  const at = (index) => {
    if (!HEAD) return null;

    if (index > length) return null;
    if (index === 0) return HEAD;
    let pointer = HEAD;
    for (let i = 1; i < index; i++) {
      pointer = pointer.nextNode;
    };
    return pointer;
  };

  // pop
  const pop = () => {
    if (!HEAD) return null;

    const popped = tail();

    at(length - 2).nextNode = null;
    length--;

    return popped;
  };

  // contains(value)
  const contains = (value) => {
    if (!HEAD) return null;

    let pointer = HEAD;
    while (pointer.nextNode !== null) {
      if (pointer.value === value) return true;
      pointer = pointer.nextNode;
    };
    return tail().value === value ? true : false;
  };

  // find(value)
  const find = (value) => {
    if (!HEAD) return null;

    let pointer = HEAD;
    let index = 1;
    if (pointer.value === value) return 0;
    while (pointer.nextNode !== null) {
      if (pointer.value === value) return index;
      pointer = pointer.nextNode;
      index++;
    };
    return tail().value === value ? index : null;
  };

  // toString
  const toString = () => {
    if (!HEAD) return null;

    let string = "";
    let pointer = HEAD;

    while (pointer.nextNode !== null) {
      string += `(${pointer.value}) -> `;
      pointer = pointer.nextNode;
    };

    return string += `(${tail().value}) -> null`
  };

  return { append, prepend, size, head, tail, at, pop, contains, find, toString };
};

const list = LinkedList();
// console.log(list);
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.prepend(0);
// how do I test if it works?
// console.log(list.size()); // 5
// console.log(list.head()); // node with 0
// console.log(list.tail()) // node with 4

// console.log(list.at(10)) // no index
// console.log(list.at(0)) // node with 0
// console.log(list.at(2)) // node with 2
// console.log(list.at(4)) // node with 4

// console.log(list.size()); // 5
// console.log(list.tail()) // node with 4
// console.log(list.pop()) // node with 4
// console.log(list.size()); // 4
// console.log(list.tail()) // node with 3

// console.log(list.contains(3)) // true
// console.log(list.contains(10)) // false

// console.log(list.find(0)) // 0
// console.log(list.find(2)) // 2
// console.log(list.find(3)) // 3
// console.log(list.find(5)) // null
// console.log(list.find(10)) // null

console.log(list.toString());

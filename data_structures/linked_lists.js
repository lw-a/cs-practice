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

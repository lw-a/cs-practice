// Node
const Node = (value = null) => {
  return { value, nextNode: null };
};

// console.log(Node())
// const test = Node(19);
// console.log(test.value)
// console.log(test.nextNode)

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
    while (pointer.nextNode != null) {
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
      return HEAD;
    };

    // tail
    const tail = () => {
      let pointer = HEAD;
      while (pointer.nextNode != null) {
        pointer = pointer.nextNode;
      };
      return pointer;
    };

    // at(index)
    const at = (index) => {
      if (index > length) return `no index of ${index}`;
      if (index === 0) return HEAD;
      let pointer = HEAD;
      for (let i = 1; i < index; i++) {
        pointer = pointer.nextNode;
      };
      return pointer;
    };

    // pop
    const pop = () => {
      let pointer = HEAD;
      const popped = tail();

      at(length - 2).nextNode = null;
      length--;

      return popped;
    };

  return { append, prepend, size, head, tail, at, pop };
};

const list = LinkedList();
console.log(list);
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

console.log(list.size()); // 5
console.log(list.tail()) // node with 4
console.log(list.pop()) // node with 4
console.log(list.size()); // 4
console.log(list.tail()) // node with 3

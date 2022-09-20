// Node
const Node = (value = null) => {

  return { value, nextNode: null };
};

console.log(Node())
const test = Node(19);
console.log(test.value)
console.log(test.nextNode)

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

    const size = () => {
      return length;
    };

    const head = () => {
      return HEAD;
    };

    const tail = () => {
      let pointer = HEAD;
      while (pointer.nextNode != null) {
        pointer = pointer.nextNode;
      };
      return pointer;
    };

  return { append, prepend, size, head, tail };
};

const list = LinkedList();
console.log(list);
list.append(1);
list.append(2);
list.append(3);
console.log(list.append(4));
// how do I test if it works?
list.prepend(0);
console.log(list.size()); // 5
console.log(list.head()); // node with 0
console.log(list.tail()) // node with 4

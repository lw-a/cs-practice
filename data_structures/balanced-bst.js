const Node = (value = null) => {
  return { value, leftChild: null, rightChild: null };
};

const Tree = (array) => {
  array.sort(function(a, b) { return a - b;})
  const removeDuplicates = (array) => {
    return array.filter((a, b) => array.indexOf(a) === b)
  };

  array = removeDuplicates(array);

  const buildTree = (arr, start, end) => {
    if (start > end) return null;

    const mid = parseInt((start + end) / 2);
    const root = Node(arr[mid]);
    root.leftChild = buildTree(arr, start, mid -1)
    root.rightChild = buildTree(arr, mid + 1, end)
    return root;
  };

  let root = buildTree(array, 0, array.length - 1);

  const insert = (value, rootNode = root) => {
    if (rootNode === null) return rootNode = Node(value);

    if (value < rootNode.value) {
      rootNode.leftChild = insert(value, rootNode.leftChild);
    } else if (value > rootNode.value) {
      rootNode.rightChild = insert(value, rootNode.rightChild);
    }

    return rootNode;
  };

  const prettyPrint = (node = root, prefix = '', isLeft = true) => {
    if (node.rightChild !== null) {
      prettyPrint(node.rightChild, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.leftChild !== null) {
      prettyPrint(node.leftChild, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

  return { root, insert, prettyPrint };
};

const tree = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
tree.prettyPrint();

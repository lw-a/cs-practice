const Node = (value = null) => {
  return { value, leftChild: null, rightChild: null };
};

const Tree = (array) => {
  console.log(array)
  array.sort(function(a, b) { return a - b;})
  console.log(array)

  const removeDuplicates = (array) => {
    return array.filter((a, b) => array.indexOf(a) === b)
  };

  array = removeDuplicates(array);
  console.log(array)

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

    if (value < rootNode.value) rootNode.leftChild = insert(value, rootNode.leftChild);
    if (value > rootNode.value) rootNode.rightChild = insert(value, rootNode.rightChild);

    return rootNode;
  };

  return { root, insert };
};

const tree = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
// console.log(tree.root)
console.log(tree.insert(10))

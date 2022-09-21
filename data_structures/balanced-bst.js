const Node = (value = null) => {
  return { value, leftChild: null, rightChild: null };
};

const Tree = (array) => {

  const buildTree = (arr, start, end) => {
    if (start > end) return null;

    const mid = (start + end) / 2;
    const root = Node(arr[mid]);
    root.leftChild = buildTree(arr, start, mid -1)
    root.rightChild = buildTree(arr, mid + 1, end)
    return root;
  };

  return { buildTree };
};

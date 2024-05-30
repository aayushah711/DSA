const dfsRecursivePreOrder = (node, arr = []) => {
	if (node) {
		arr.push(node.val);
		if (node.left) dfsRecursivePreOrder(node.left, arr);
		if (node.right) dfsRecursivePreOrder(node.right, arr);
	}
	return arr;
};

const dfsRecursiveInOrder = (node, arr = []) => {
	if (node) {
		if (node.left) dfsRecursiveInOrder(node.left, arr);
		arr.push(node.val);
		if (node.right) dfsRecursiveInOrder(node.right, arr);
	}
	return arr;
};

const dfsRecursivePostOrder = (node, arr = []) => {
	if (node) {
		if (node.left) dfsRecursivePostOrder(node.left, arr);
		if (node.right) dfsRecursivePostOrder(node.right, arr);
		arr.push(node.val);
	}
	return arr;
};

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	isEmpty() {
		return this.root === null;
	}

	insert(value) {
		const newNode = new Node(value);
		if (this.isEmpty()) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}

	insertNode(root, newNode) {
		if (newNode.value < root.value) {
			if (root.left === null) {
				root.left = newNode;
			} else {
				this.insertNode(root.left, newNode);
			}
		} else {
			if (root.right === null) {
				root.right = newNode;
			} else {
				this.insertNode(root.right, newNode);
			}
		}
	}

	search(root, value) {
		if (!root) {
			return false;
		} else {
			if (root.value === value) {
				return true;
			} else if (value < root.value) {
				return this.search(root.left, value);
			} else {
				return this.search(root.right, value);
			}
		}
	}
}

const bst = new BinarySearchTree();
console.log("Tree is empty?", bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);

console.log(bst.search(10));
console.log(bst.search(5));
console.log(bst.search(15));
console.log(bst.search(20));

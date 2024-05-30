// Definition for a Node.
function Node(val, neighbors) {
	this.val = val === undefined ? 0 : val;
	this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
	const visited = new Map();
	const cloning = (node) => {
		if (node) {
			const clonedNeighbors = [];
			node.neighbors.forEach((item) => {
				if (!visited.has(item)) {
					const clonedNode = new Node(node.val, []);
					visited.set(node, clonedNode);
					clonedNeighbors.push(cloning(item));
				} else {
					clonedNeighbors.push(visited.get(node));
				}
			});

			visited.set(node, new Node(node.val, clonedNeighbors));
			return visited.get(node);
		}
	};
	return cloning(node);
};

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

console.log(node1);
let cloneNode1 = cloneGraph(node1);
console.log(node1 === cloneNode1);

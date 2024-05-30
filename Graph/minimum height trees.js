class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = new Set();
		}
	}

	addEdge(vertex1, vertex2) {
		if (!this.adjacencyList[vertex1]) {
			this.addVertex(vertex1);
		}
		this.adjacencyList[vertex1].add(vertex2);

		// Comment this if directed graph
		if (!this.adjacencyList[vertex2]) {
			this.addVertex(vertex2);
		}
		this.adjacencyList[vertex2].add(vertex1);
	}

	hasEdge(vertex1, vertex2) {
		return (
			this.adjacencyList[vertex1].has(vertex2) &&
			this.adjacencyList[vertex2].has(vertex1)
		);
	}

	display() {
		for (let vertex in this.adjacencyList) {
			console.log(vertex, "->", [...this.adjacencyList[vertex]]);
		}
	}
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var validTree = function (n, edges) {
	if (n <= 2) {
		let leaves = [];
		for (let i = 0; i < n; i++) {
			leaves.push(i);
		}
		return leaves;
	}
	const graph = new Graph();
	for (let i = 0; i < n; i++) {
		graph.addVertex(i);
	}
	for (let i = 0; i < edges.length; i++) {
		graph.addEdge(...edges[i]);
	}

	let leaves = [];
	for (let i = 0; i < n; i++) {
		if (graph.adjacencyList[i].size === 1) {
			leaves.push(i);
		}
	}

	remainingNodes = n;
	while (remainingNodes > 0 && leaves.length > 0) {
		remainingNodes -= leaves.length;
		let newleaves = [];
		while (leaves.length > 0) {
			let leaf = leaves.pop();
			let head = graph.adjacencyList[leaf].values().next().value;
			if (graph.adjacencyList[head]) {
				graph.adjacencyList[head].delete(leaf);
				if (graph.adjacencyList[head].size === 1) {
					newleaves.push(head);
				}
			}
			if (graph.adjacencyList[leaf]) {
				graph.adjacencyList[leaf].delete(head);
			}
		}
		leaves = newleaves;
	}

	console.log(74, remainingNodes, remainingNodes < 3);
	return remainingNodes < 3;
};

validTree(4, [
	[0, 1],
	[2, 3],
]);

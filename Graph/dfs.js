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
	const graph = new Graph();
	for (let i = 0; i < n; i++) {
		graph.addVertex(i);
	}
	for (let i = 0; i < edges.length; i++) {
		graph.addEdge(...edges[i]);
	}
	let visited = new Set();

	function dfs(node) {
		if (visited.has(node)) {
			return false;
		}
		visited.add(node);
		let children = graph.adjacencyList[node];
		let valid = true;
		for (let child of children) {
			graph.adjacencyList[node].delete(child);
			graph.adjacencyList[child].delete(node);
			valid = valid && dfs(child);
		}
		return valid;
	}

	if (!dfs(0)) {
		return false;
	}
	for (let i = 0; i < n; i++) {
		if (!visited.has(i)) {
			return false;
		}
	}
	return true;
};

console.log(
	validTree(5, [
		[0, 1],
		[0, 2],
		[0, 3],
		[1, 4],
	])
);

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
var numIslands = function (island) {
	const graph = new Graph();
	let n = island.length;
	let m = island[0].length;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (island[i][j] === "1") {
				graph.addEdge(i, j);
			}
		}
	}
	// for (let i = 0; i < edges.length; i++) {
	// 	graph.addEdge(...edges[i]);
	// }
	graph.display();

	let visited = [...new Array(n).fill(-1)];
	let count = 0;

	var bfs = function (head) {
		visited[head] = 0;
		let queue = [head];
		while (queue.length > 0) {
			let current = queue.shift();
			let children = graph.adjacencyList[current].values();
			for (let child of children) {
				if (visited[child] === -1) {
					visited[child] = visited[current] + 1;
					queue.push(child);
				}
			}
		}
	};

	for (let key in n) {
		if (visited[key] === -1) {
			bfs(key);
			count++;
		}
	}

	return count;
};

console.log(numIslands([["1", "0", "1", "1", "0", "1", "1"]]));

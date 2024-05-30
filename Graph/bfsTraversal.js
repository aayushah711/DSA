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

const graph = new Graph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");

// graph.addEdge("A", "B");
// graph.addEdge("B", "C");

// graph.display();

let input = `10 10
8 1
8 3
7 4
7 5
2 6
10 7
2 8
10 9
2 10
5 10
2`;

input = input.trim().split("\n");
let [nodes, queries] = input[0].trim().split(" ").map(Number);
input.shift();

for (let i = 1; i <= nodes; i++) {
	graph.addVertex(i);
}

for (let i = 0; i < queries; i++) {
	let edge = input[i].trim().split(" ").map(Number);
	graph.addEdge(...edge);
}

let head = Number(input[queries].trim());
graph.display();

let visited = new Set();

function bfs(node) {
	let queue = [node];
	visited.add(node);
	while (queue.length > 0) {
		let popped = queue[0];
		queue.shift();
		let children = graph.adjacencyList[popped];
		for (let child of children) {
			if (!visited.has(child)) {
				console.log(child);
				queue.push(child);
				visited.add(child);
			}
		}
	}
}

for (let i = 1; i <= nodes; i++) {
	if (!visited.has(i)) {
		console.log(i);
		bfs(i);
	}
}

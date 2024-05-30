class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(a) {
		if (!this.adjacencyList[a]) {
			this.adjacencyList[a] = new Set();
		}
	}

	addEdge(a, b) {
		this.addVertex(a);
		this.addVertex(b);

		this.adjacencyList[a].add(b);
		this.adjacencyList[b].add(a);
	}
	display() {
		let vertices = Object.keys(this.adjacencyList);
		for (let vertex of vertices) {
			let children = this.adjacencyList[vertex];
			console.log(`${vertex}: {${[...children]}}`);
		}
	}
}
let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.display();

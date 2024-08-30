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
    this.addVertex(vertex1);
    this.adjacencyList[vertex1].add(vertex2);

    // Comment this if directed graph
    this.addVertex(vertex2);
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
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const graph = new Graph();
  let n = isConnected.length;
  let m = isConnected[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (isConnected[i][j] === 1) {
        graph.addEdge(i, j);
      }
    }
  }
  //   graph.display();

  let res = 0;
  let visited = new Set();
  function dfs(node) {
    if (!node) return;
    visited.add(node);
    let neighbors = graph.adjacencyList[node];
    for (let value of neighbors) {
      if (!visited.has(value)) {
        dfs(value);
      }
    }
  }

  for (let vertex in graph.adjacencyList) {
    if (!visited.has(Number(vertex))) {
      dfs(vertex);
      res++;
    }
  }

  return res;
};

console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); // 2

console.log(
  findCircleNum([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
); // 3

// Topological sorting for Directed Acyclic Graph (DAG). in-degree of 0
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.addVertex(vertex1);
    this.adjacencyList[vertex1].push(vertex2);

    // Comment this if directed graph
    // this.addVertex(vertex2);
    // this.adjacencyList[vertex2].push(vertex1);
  }

  // hasEdge(vertex1, vertex2) {
  //   return (
  //     this.adjacencyList[vertex1].has(vertex2) &&
  //     this.adjacencyList[vertex2].has(vertex1)
  //   );
  // }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex, "->", [...this.adjacencyList[vertex]]);
    }
  }
}
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let graph = new Graph();
  let indegree = new Array(numCourses).fill(0);
  for (let prerequisite of prerequisites) {
    indegree[prerequisite[1]]++;
  }
  for (let i in indegree) graph.addVertex(i);
  for (let val of prerequisites) graph.addEdge(...val);

  // graph.display();
  let q = [];

  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) {
      q.push(i);
    }
  }

  let tSort = [];
  while (q.length) {
    let node = q.shift();
    tSort.push(node);
    for (let adjacent of graph.adjacencyList[node]) {
      indegree[adjacent]--;
      if (indegree[adjacent] === 0) {
        q.push(adjacent);
      }
    }
  }
  return tSort.length === numCourses;
};

console.log(canFinish(2, [[1, 0]]));
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
);
console.log(
  canFinish(4, [
    [0, 2],
    [0, 3],
    [1, 2],
    [1, 3],
    [2, 3],
  ])
);

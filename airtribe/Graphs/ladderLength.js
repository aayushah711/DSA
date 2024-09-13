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
}
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  let dict = new Set(wordList);

  if (!dict.has(endWord)) return 0;
  dict.add(beginWord);
  let adjList = {};
  let n = beginWord.length;
  for (let word of dict) {
    for (let i = 0; i < n; i++) {
      let pattern = word.substring(0, i) + "*" + word.substring(i + 1);
      if (adjList[pattern]) {
        adjList[pattern].add(word);
      } else {
        adjList[pattern] = new Set([word]);
      }
    }
  }

  let graph = new Graph();

  for (let pattern in adjList) {
    let list = new Array(...adjList[pattern]);
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list.length; j++) {
        if (i !== j) {
          graph.addEdge(list[i], list[j]);
        }
      }
    }
  }

  let queue = [beginWord];
  let level = 1;
  let visited = new Set();

  while (queue.length) {
    let n = queue.length;
    for (let i = 0; i < n; i++) {
      let word = queue.shift();
      visited.add(word);
      let neighbors = graph.adjacencyList[word];
      if (neighbors) {
        for (let neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            if (neighbor === endWord) return level + 1;
            queue.push(neighbor);
          }
        }
      }
    }
    level++;
  }

  return 0;
};

// 5
console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);

// 0
console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));

// 0
console.log(ladderLength("hit", "cog", ["hot", "dog", "lot", "cog"]));

//2
console.log(ladderLength("hit", "hot", ["hot"]));

// 2
console.log(ladderLength("hot", "dog", ["dog"]));

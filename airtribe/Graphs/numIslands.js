/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let n = grid.length;
  let m = grid[0]?.length;
  let visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  );
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  function isOutOfBounds(row, col) {
    return row < 0 || col < 0 || row >= n || col >= m;
  }

  function bfs(row, col) {
    let queue = [[row, col]];
    while (queue.length) {
      let [r, c] = queue.shift();
      for (let val in directions) {
        let [nr, nc] = directions[val];
        nr += r;
        nc += c;
        if (!isOutOfBounds(nr, nc)) {
          if (grid[nr][nc] === "1" && !visited[nr][nc]) {
            visited[nr][nc] = 1;
            queue.push([nr, nc]);
          }
        }
      }
    }
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "1" && !visited[i][j]) {
        res++;
        bfs(i, j);
      }
    }
  }
  return res;
};

// 1
// console.log(
//   numIslands([
//     ["1", "1", "1", "1", "0"],
//     ["1", "1", "0", "1", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "0", "0", "0"],
//   ])
// );

// 3
// console.log(
//   numIslands([
//     ["1", "1", "0", "0", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "1", "0", "0"],
//     ["0", "0", "0", "1", "1"],
//   ])
// );

// console.log(numIslands(["0"]));

// 3
console.log(numIslands([["1", "0", "1", "1", "0", "1", "1"]]));

console.log(numIslands([["1"], ["0"], ["1"], ["1"], ["0"], ["1"], ["1"]]));

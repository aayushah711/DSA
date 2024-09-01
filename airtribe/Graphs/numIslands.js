/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let n = grid.length;
  let m = grid[0]?.length;
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  function isOutOfBounds(row, col) {
    return row < 0 || col < 0 || row >= n || col >= m;
  }

  function dfs(row, col) {
    if (isOutOfBounds(row, col) || grid[row][col] === "0") return;
    grid[row][col] = "0";
    for (let val in directions) {
      let [nr, nc] = directions[val];
      nr += row;
      nc += col;
      dfs(nr, nc);
    }
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === "1") {
        res++;
        dfs(i, j);
      }
    }
  }
  return res;
};

// 1
console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);

// 3
console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
);

console.log(numIslands([["0"]]));

// 3
console.log(numIslands([["1", "0", "1", "1", "0", "1", "1"]]));

console.log(numIslands([["1"], ["0"], ["1"], ["1"], ["0"], ["1"], ["1"]]));

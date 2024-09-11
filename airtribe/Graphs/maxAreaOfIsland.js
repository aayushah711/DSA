/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  if (!grid || !grid.length) return 0;
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let res = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        res = Math.max(res, bfs(i, j));
      }
    }
  }

  function isValidCell(r, c) {
    return r >= 0 && r < grid.length && c >= 0 && c < grid[0].length;
  }

  function bfs(i, j) {
    let queue = [[i, j]];
    let area = 0;
    while (queue.length) {
      let [row, col] = queue.shift();
      if (!grid[row][col]) continue;
      grid[row][col] = 0; // side effect
      area++;
      for (let dir of directions) {
        let [r, c] = dir;
        let nr = row + r;
        let nc = col + c;
        if (isValidCell(nr, nc) && grid[nr][nc]) {
          queue.push([nr, nc]);
        }
      }
    }
    return area;
  }
  return res;
};

console.log(maxAreaOfIsland([[0]])); // 0
console.log(maxAreaOfIsland([[1]])); // 1
console.log(
  maxAreaOfIsland([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 1, 1],
  ])
); // 4
console.log(
  maxAreaOfIsland([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
  ])
); // 4
console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
); // 6

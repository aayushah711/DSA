/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  if (!grid || !grid.length) return -1;

  let freshOranges = 0;
  let level = 0;
  let queue = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) freshOranges++;
      if (grid[i][j] === 2) queue.push([i, j]);
    }
  }

  if (!freshOranges) return 0;

  function isValidCell(r, c) {
    return r >= 0 && r < grid.length && c >= 0 && c < grid[0].length;
  }

  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  while (queue.length) {
    let n = queue.length;
    for (let i = 0; i < n; i++) {
      let [row, col] = queue.shift();
      if (grid[row][col] !== 2) continue;
      for (let dir of directions) {
        let [r, c] = dir;
        let nr = row + r;
        let nc = col + c;
        if (isValidCell(nr, nc) && grid[nr][nc] === 1) {
          grid[nr][nc] = 2;
          freshOranges--;
          queue.push([nr, nc]);
        }
      }
    }
    if (queue.length) level++;
  }

  return freshOranges > 0 ? -1 : level;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
); //4

console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ])
); //-1
console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 1],
    [0, 1, 2],
  ])
); //2

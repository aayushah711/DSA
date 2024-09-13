/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  if (!grid || !grid.length || !grid[0].length) return 0;
  let n = grid.length;
  let m = grid[0].length;
  let zeroGrid = new Array(m).fill(0);
  let newGrid = [[...zeroGrid], ...grid, [...zeroGrid]];
  newGrid = newGrid.map((item) => [0, ...item, 0]);
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let perimeter = 0;
  function isValid(r, c) {
    return r >= 0 && c >= 0 && r < newGrid.length && c < newGrid[0].length;
  }
  for (let i = 0; i < newGrid.length; i++) {
    for (let j = 0; j < newGrid[0].length; j++) {
      if (newGrid[i][j]) {
        for (let [r, c] of directions) {
          let nr = i + r;
          let nc = j + c;
          if (isValid(nr, nc) && !newGrid[nr][nc]) perimeter++;
        }
      }
    }
  }
  return perimeter;
};

//16
console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
//4
console.log(islandPerimeter([[1]]));
//4
console.log(islandPerimeter([[1, 0]]));

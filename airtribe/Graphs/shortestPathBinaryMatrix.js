/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  if (!grid || !grid.length || !grid[0].length) return -1;
  const n = grid.length;
  const visited = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => false)
  );
  const distances = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => Infinity)
  );

  if (grid[0][0] === 1) return -1;

  const directions = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];

  // let newPriorityQueue = new PriorityQueue();
  let queue = [[1, 0, 0]];
  distances[0][0] = 1;

  function isCellValid(r, c) {
    return (
      r >= 0 && c >= 0 && r < n && c < n && grid[r][c] === 0 && !visited[r][c]
    );
  }

  while (queue.length) {
    // queue.sort((a, b) => a[0] - b[0]);
    let closestCell = queue.shift();
    const [distance, cr, cc] = closestCell;
    if (cr === n - 1 && cc === n - 1) return distance;
    if (distances[cr][cc] === Infinity) continue;
    for (let direction of directions) {
      const [r, c] = direction;
      let nr = r + cr;
      let nc = c + cc;

      if (isCellValid(nr, nc)) {
        distances[nr][nc] = Math.min(distances[nr][nc], distance + 1);
        queue.push([distances[nr][nc], nr, nc]);
        visited[nr][nc] = true;
      }
    }
  }

  return -1;
};
console.log(
  shortestPathBinaryMatrix([
    [0, 1],
    [1, 0],
  ])
); // 2
console.log(
  shortestPathBinaryMatrix([
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ])
); // 4
console.log(
  shortestPathBinaryMatrix([
    [1, 0, 0],
    [1, 1, 0],
    [1, 1, 0],
  ])
); // -1

console.log(
  shortestPathBinaryMatrix([
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 1],
  ])
);

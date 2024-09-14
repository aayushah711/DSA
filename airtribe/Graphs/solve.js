/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (!board || !board.length || !board[0].length) return;
  let n = board.length;
  let m = board[0].length;

  function isBorder(r, c) {
    return r === 0 || c === 0 || r === n - 1 || c === m - 1;
  }
  function dfs(r, c) {
    if (r < 0 || c < 0 || r === n || c === m) return;
    if (board[r][c] === "O") {
      board[r][c] = false;
      dfs(r - 1, c);
      dfs(r, c + 1);
      dfs(r + 1, c);
      dfs(r, c - 1);
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === "O" && isBorder(i, j)) {
        dfs(i, j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === "O") board[i][j] = "X";
      else if (!board[i][j]) board[i][j] = "O";
    }
  }
};
console.log(
  solve([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ])
);

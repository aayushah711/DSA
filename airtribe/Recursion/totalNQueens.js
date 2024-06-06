/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let res = [];
  const memo = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => ".")
  );
  let posDiags = new Set();
  let negDiags = new Set();

  function rec(row) {
    if (row === n) {
      createCopy();
      return true;
    }
    for (let col = 0; col < n; col++) {
      if (isValidMove(row, col)) {
        posDiags.add(row - col);
        negDiags.add(row + col);
        memo[row][col] = "Q";
        rec(row + 1);
        memo[row][col] = ".";
        posDiags.delete(row - col);
        negDiags.delete(row + col);
      }
    }
  }

  function isValidMove(r, c) {
    let valid = true;
    let posDiag = r - c;
    let negDiag = r + c;

    for (let i = 0; i < n; i++) {
      if (
        [memo[r][i], memo[i][c]].includes("Q") ||
        posDiags.has(posDiag) ||
        negDiags.has(negDiag)
      ) {
        valid = false;
      }
    }
    return valid;
  }

  function createCopy() {
    let copy = [];
    memo.map((row) => {
      copy.push(row.join(""));
    });
    res.push(copy);
  }
  rec(0);
  return res.length;
};

console.log(totalNQueens(1));

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let res = [];
  const memo = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => ".")
  );

  //   for (let i = row; i < n; i++) {
  //     for (let j = col; j < n; j++) {}
  //   }

  console.log(memo);
  function rec(row) {
    if (row === n) {
      createCopy();
      return true;
    }
    let valid = false;
    for (let col = 0; col < n; col++) {
      if (isValidMove(row, col)) {
        memo[row][col] = "Q";
        rec(row + 1);
        memo[row][col] = ".";
      }
    }
    // if (isValidMove()) memo[i][j] = "Q";
    // rec(i + 1, j);
    // memo[i][j] = ".";
  }

  function isValidMove(r, c) {
    let valid = true;
    Math.min(r, c);
    let diaUpRow = r - Math.min(r, c);
    let diaUpCol = c - Math.min(r, c);

    let diaDnRow = r - Math.max(r, c);
    let diaDnCol = c + Math.max(r, c);

    for (let i = 0; i < n; i++) {
      if ([memo[r][i], memo[i][c]].includes("Q")) {
        valid = false;
      }
      if (
        diaUpRow + i >= 0 &&
        diaUpRow + i < n &&
        diaUpCol + i >= 0 &&
        diaUpCol + i < n
      ) {
        console.log(diaUpRow + i);
        console.log(diaUpCol + i);
      }

      if (
        diaDnRow - i >= 0 &&
        diaDnRow - i < n &&
        diaDnCol - i >= 0 &&
        diaDnCol - i < n
      ) {
        console.log(diaDnRow - i);
        console.log(diaDnCol - i);
      }

      //   console.log(r - i);
      //   console.log(c - i);

      //   console.log(r + i);
      //   console.log(c + i);

      //   console.log(r - i);
      //   console.log(c + i);

      //   console.log(c - i);
      //   console.log(r + i);
    }
    return valid;
  }

  isValidMove(2, 2);

  function createCopy() {
    let copy = [];
    memo.map((row) => {
      copy.push(row.join(""));
    });
    res.push(copy);
  }
  //   rec(0);
  return res;
};

console.log(solveNQueens(4));

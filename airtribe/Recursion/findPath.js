function findPath(m, n) {
  //code here
  const res = [];
  const arr = [];
  function rec(i, j) {
    if (i === n - 1 && j === n - 1) {
      res.push(arr.join(""));
    }

    let iMinus1 = Math.max(i - 1, 0);
    let jMinus1 = Math.max(j - 1, 0);
    let iPlus1 = Math.min(i + 1, n - 1);
    let jPlus1 = Math.min(j + 1, n - 1);

    // Left
    if ((m[i][jMinus1] || 0) !== 0) {
      m[i][jMinus1] = 0;
      arr.push("L");
      rec(i, jMinus1);
      m[i][jMinus1] = 1;
      arr.pop();
    }
    // Up
    if ((m[iMinus1][j] || 0) !== 0) {
      m[iMinus1][j] = 0;
      arr.push("U");
      rec(iMinus1, j);
      m[iMinus1][j] = 1;
      arr.pop();
    }

    // Down
    if ((m[iPlus1][j] || 0) !== 0) {
      m[iPlus1][j] = 0;
      arr.push("D");
      rec(iPlus1, j);
      m[iPlus1][j] = 1;
      arr.pop();
    }

    // Right
    if ((m[i][jPlus1] || 0) !== 0) {
      m[i][jPlus1] = 0;
      arr.push("R");
      rec(i, jPlus1);
      m[i][jPlus1] = 1;
      arr.pop();
    }
  }

  if (m[0][0] !== 0) {
    m[0][0] = 0;
    rec(0, 0);
  }
  return res;
}
//DDRDRR DRDDRR
console.log(
  findPath(
    [
      [1, 0, 0, 0],
      [1, 1, 0, 1],
      [1, 1, 0, 0],
      [0, 1, 1, 1],
    ],
    4
  )
);

// DDDDRRRR DDDDRRRULLURRRDD DDDDRRRULLURRULLURRRDDDD DDDDRRRULLURRULURRDDDD DDDDRRRULLURRURDDD DDDDRRRULLURRUURDDDD DDDDRRRULLURULURRDDRDD DDDDRRRULLURULURRDRDDD DDDDRRRULLURULURRRDDDD DDDDRRRULLURULURR
console.log(
  findPath(
    [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ],
    5
  )
);

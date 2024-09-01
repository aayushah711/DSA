/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let n = moves.length;
  function dfs(i, r, c) {
    if (i === n) {
      return r === 0 && c === 0;
    }
    let move = moves[i];
    switch (move) {
      case "U":
        return dfs(i + 1, r - 1, c);
      case "R":
        return dfs(i + 1, r, c + 1);
      case "L":
        return dfs(i + 1, r, c - 1);
      case "D":
        return dfs(i + 1, r + 1, c);
      default:
        return false;
    }
  }
  return dfs(0, 0, 0);
};
console.log(judgeCircle("UD"));
console.log(judgeCircle("LL"));

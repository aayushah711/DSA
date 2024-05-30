/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  function rec(oCount, cCount, currString) {
    if (oCount === n && cCount === n) {
      res.push(currString);
      return;
    }
    if (oCount < n) {
      rec(oCount + 1, cCount, currString + "(");
    }
    if (oCount > cCount) {
      rec(oCount, cCount + 1, currString + ")");
    }
    return;
  }
  rec(0, 0, "");
  return res;
};

console.log(generateParenthesis(3));

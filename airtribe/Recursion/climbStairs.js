/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = new Map();
  let recursion = (i) => {
    if (dp.has(i)) {
      return dp.get(i);
    }
    if (i === 0) {
      dp.set(i, 0);
      return 0;
    }
    if (i === 1) {
      dp.set(i, 1);
      return 1;
    }
    if (i === 2) {
      dp.set(i, 2);
      return 2;
    }
    dp.set(i, recursion(i - 1) + recursion(i - 2));
    return dp.get(i);
  };
  return recursion(n);
};
console.log(climbStairs(4));

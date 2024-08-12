/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let dp = new Map();
  function rec(i, sumSoFar) {
    if (dp.has([i, sumSoFar].join(" "))) {
      return dp.get([i, sumSoFar].join(" "));
    }
    if (i === nums.length) {
      if (sumSoFar === target) {
        dp.set([i, sumSoFar].join(" "), 1);
      } else {
        dp.set([i, sumSoFar].join(" "), 0);
      }
      return dp.get([i, sumSoFar].join(" "));
    }
    let add = rec(i + 1, sumSoFar + nums[i]);
    let sub = rec(i + 1, sumSoFar - nums[i]);
    dp.set([i, sumSoFar].join(" "), add + sub);
    return dp.get([i, sumSoFar].join(" "));
  }

  return rec(0, 0);
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));

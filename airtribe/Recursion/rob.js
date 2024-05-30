/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp = {};
  return rec(0);
  function rec(i) {
    if (dp[i] >= 0) {
      return dp[i];
    }
    if (i >= nums.length) {
      dp[i] = 0;
      return 0;
    }
    // rob
    let maxi = -Infinity;
    maxi = Math.max(maxi, nums[i] + rec(i + 2));
    maxi = Math.max(maxi, rec(i + 1));
    dp[i] = maxi;
    return maxi;
  }
};

console.log(rob([1, 2, 3, 1]));

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let n = nums.length;
  let dp = new Array(n).fill(1);
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (nums[i] < nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); //4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); //4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); //1

// TC O(N^2)
// SC O(N)

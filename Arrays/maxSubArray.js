/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let totalSum = nums[0];
  let currSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (currSum + nums[i] > nums[i]) {
      currSum += nums[i];
    } else {
      currSum = nums[i];
    }
    totalSum = Math.max(currSum, totalSum);
  }
  return totalSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([5, 4, -1, 7, 8]));

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxSum = 0;
  let currSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currSum++;
    } else {
      currSum = 0;
    }
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));

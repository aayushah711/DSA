/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let r = nums.length - 1;
  let l = 0;
  while (l < r) {
    let sum = nums[l] + nums[r];
    if (sum < target) {
      l++;
    } else if (sum > target) {
      r--;
    } else {
      return [l + 1, r + 1];
    }
  }
};
// console.log(twoSum([2, 7, 11, 15], 9)); // [1,2]
// console.log(twoSum([3, 2, 4], 6)); // [2,3]
// console.log(twoSum([3, 3], 6)); // [1,2]

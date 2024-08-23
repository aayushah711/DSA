/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let n = nums.length;
  let farthest = 0;
  for (let i = 0; i < n; i++) {
    farthest = Math.max(farthest, nums[i] + i);
    if (i === farthest && i != n - 1) return false;
  }
  return n - 1 <= farthest;
};
console.log(canJump([0]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([3, 3, 2, 3, 4]));

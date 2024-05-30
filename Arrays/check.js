/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      count++;
    }
  }
  if (count === 0) {
    return true;
  }
  if (count === 1 && nums[nums.length - 1] <= nums[0]) {
    return true;
  }
  return false;
};
console.log(check([1, 2, 3]));

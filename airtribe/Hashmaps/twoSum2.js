/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (obj[target - num] >= 0) {
      return [obj[target - num] + 1, i + 1];
    }

    obj[num] = i;
  }
};
console.log(twoSum([2, 7, 11, 15], 9)); // [1,2]
console.log(twoSum([3, 2, 4], 6)); // [2,3]
console.log(twoSum([3, 3], 6)); // [1,2]
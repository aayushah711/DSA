/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return true;
    }
    if (nums[mid] === nums[left]) {
      left = left + 1;
    } else if (nums[mid] > target) {
      if (nums[left] <= target) {
        right = mid - 1;
      } else if (nums[left] > nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[right] >= target) {
        left = mid + 1;
      } else if (nums[right] < nums[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return false;
};
console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
console.log(search([2, 5, 6, 0, 0, 1, 2], 3));
console.log(search([1, 0, 1, 1, 1], 0));
console.log(search([1, 1, 1, 0, 1], 0));
// console.log(search([4, 5, 6, 7, 8, 0, 1, 2], 6));
// console.log(search([4, 5, 6, 7, 8, 0, 1, 2], 8));
// console.log(search([7, 0, 1, 2, 4, 5, 6], 0));
// console.log(search([0, 1, 2, 4, 5, 6, 7], 4));
// console.log(search([6, 7, 0, 1, 2, 4, 5], 4));
// console.log(search([6, 7, 0, 1, 2, 4, 5], 7));
// 4
// 2
// 4
// 1
// 3
// 5
// 1

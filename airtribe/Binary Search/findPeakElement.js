/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    let leftNeighbor = nums[mid - 1] || -Infinity;
    let rightNeighbor = nums[mid + 1] || -Infinity;
    if (nums[mid] > leftNeighbor && nums[mid] > rightNeighbor) {
      return mid;
    }
    if (leftNeighbor > nums[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
};
console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([3, 2, 1]));

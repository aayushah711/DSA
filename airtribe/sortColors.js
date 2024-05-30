/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let i = 0;
  let swap = (s, e) => {
    let temp = nums[s];
    nums[s] = nums[e];
    nums[e] = temp;
  };

  while (i <= r) {
    if (nums[i] === 2) {
      swap(i, r);
      r--;
    } else if (nums[i] === 1) {
      i++;
    } else if (nums[i] === 0) {
      swap(i, l);
      i++;
      l++;
    }
  }
  nums;
};
console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
console.log(sortColors([1, 0]));

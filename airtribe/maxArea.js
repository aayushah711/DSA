/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let maxSum = 0;
  while (l < r) {
    let smaller = Math.min(height[l], height[r]);
    maxSum = Math.max(maxSum, (r - l) * smaller);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return maxSum;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

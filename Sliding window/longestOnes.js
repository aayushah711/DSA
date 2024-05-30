/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let [s, e] = [0, 0];
  let maxCount = 0;
  let zeroCount = 0;
  let summa = 0;
  while (e < nums.length) {
    let val = nums[e];
    if (val === 1) {
      summa++;
      e++;
    } else if (zeroCount < k) {
      zeroCount++;
      summa++;
      e++;
    } else {
      maxCount = Math.max(summa, maxCount);
      while (nums[s] === 1 && s <= e) {
        s++;
        summa--;
      }
      s++;
      e++;
    }
  }
  maxCount = Math.max(summa, maxCount);
  return maxCount;
};
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(longestOnes([0, 0, 0, 1], 4));

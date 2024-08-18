/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let n = nums.length;
  let total = nums.reduce((a, c) => a + c);
  let target = total / 2;
  let dp = new Set();
  dp.add(0);

  for (let i = 0; i < n; i++) {
    let num = nums[i];
    let arr = Array.from(dp);
    for (let j = 0; j < arr.length; j++) {
      let summa = num + arr[j];
      if (summa === target) return true;
      dp.add(summa);
    }
  }
  return false;
};
console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 3, 4]));
console.log(canPartition([1, 2, 3, 5]));

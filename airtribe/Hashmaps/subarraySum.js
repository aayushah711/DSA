/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0;
  let n = nums.length;
  let hm = { 0: 1 };
  let sum = 0;
  let arr = [0, ...nums];

  for (let i = 1; i <= n; i++) {
    sum += arr[i];
    let diff = sum - k;
    if (hm[diff]) {
      count += hm[diff];
    }

    if (hm[sum]) {
      hm[sum]++;
    } else {
      hm[sum] = 1;
    }
  }

  return count;
};

console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3, 4], 3));
console.log(subarraySum([1, 2, 1, 2, 1], 3)); // 4
console.log(subarraySum([1], 0)); // 4

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let n = nums.length;
  let piles = [nums[0]];

  function binarySearch(key) {
    let left = 0;
    let right = piles.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (piles[mid] === key) return mid;
      if (piles[mid] > key) {
        right = mid;
      } else left = mid + 1;
    }
    return right;
  }

  for (let i = 1; i < n; i++) {
    let num = nums[i];

    let idx = binarySearch(num);
    if (idx === piles.length) {
      piles.push(num);
    } else {
      piles[idx] = num;
    }
  }

  // TC O(NlogN)
  // SC O(N)

  return piles.length;
  // let dp = new Array(n).fill(1);
  // for (let i = n - 1; i >= 0; i--) {
  //   for (let j = i; j < n; j++) {
  //     if (nums[i] < nums[j]) {
  //       dp[i] = Math.max(dp[i], dp[j] + 1);
  //     }
  //   }
  // }
  // return Math.max(...dp);

  // TC O(N^2)
  // SC O(N)
};
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); //4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); //4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); //1

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {boolean}
 */
class Solution {
  //Function to check whether there is a subarray present with 0-sum or not.
  subArrayExists(arr, n) {
    // code here
    let count = 0;
    let hm = { 0: 1 };
    let sum = 0;
    arr = [0, ...arr];

    for (let i = 1; i <= n; i++) {
      sum += arr[i];
      if (hm[sum]) {
        count += hm[sum];
      }

      if (hm[sum]) {
        hm[sum]++;
      } else {
        hm[sum] = 1;
      }
    }

    return count > 0;
  }
}

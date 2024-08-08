/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let obj = {};
  nums.map((num) => {
    if (obj[num]) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  });
  let sorted = Object.entries(obj).sort((a, b) => {
    return b[1] - a[1];
  });
  let res = [];
  for (let i = 0; i < k; i++) {
    res.push(Number(sorted[i][0]));
  }
  return res;
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); //[1,2]
console.log(topKFrequent([1], 1)); //[1]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = [];
  let freqMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (freqMap.has(nums[i])) {
      freqMap.set(nums[i], freqMap.get(nums[i]) + 1);
    } else {
      freqMap.set(nums[i], 1);
    }
  }
  const currArr = [];

  function rec() {
    if (currArr.length === nums.length) {
      res.push([...currArr]);
      return;
    }
    for (let [key, val] of freqMap.entries()) {
      if (val > 0) {
        currArr.push(key);
        freqMap.set(key, freqMap.get(key) - 1);
        rec();
        currArr.pop();
        freqMap.set(key, freqMap.get(key) + 1);
      }
    }
  }

  rec();
  return res;
};
// console.log(permute([0, 1]));
// console.log(permuteUnique([1, 2, 3]));
// console.log(permuteUnique([1, 1, 2]));
// console.log(permuteUnique([1, 1, 0, 0, 1, -1, -1, 1]));

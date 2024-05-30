/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = [];
  const currArr = [];

  function rec(curr) {
    if (curr === nums.length) {
      res.push([...currArr]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!currArr.includes(nums[i])) {
        currArr.push(nums[i]);
        rec(curr + 1);
        currArr.pop();
      }
    }
  }
  rec(0);
  return res;
};
console.log(permuteUnique([0, 1]));
console.log(permuteUnique([1, 2, 3]));

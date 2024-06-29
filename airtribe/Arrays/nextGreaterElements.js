// @ts-nocheck
// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var nextGreaterElements = function (nums) {
//   const res = [];
//   const stack = [];

//   let i = nums.length - 1;

//   while (i >= 0) {
//     while (stack.length && stack[stack.length - 1] <= nums[i]) {
//       stack.pop();
//     }
//     if (stack.length) {
//       res.unshift(stack[stack.length - 1]);
//     } else {
//       res.unshift(-1);
//     }
//     stack.push(nums[i]);
//     i--;
//   }
//   return res;
// };

// console.log(nextGreaterElements([1, 2, 1])); // [2,-1,2]
// console.log(nextGreaterElements([5, 2, 3, 4, 3, 3, 2])); // [-1,3,4,5,5,5,5]

var nextGreaterElements = function (nums) {
  const n = nums.length;
  const res = new Array(n).fill(-1);
  const stack = [];

  for (let i = 0; i < n; i++) {
    const current = nums[i];
    while (stack.length > 0 && current > nums[stack[stack.length - 1]]) {
      const popped = stack.pop();
      res[popped] = current;
    }
    stack.push(i);
  }
  for (let i = 0; i < n; i++) {
    const current = nums[i];
    while (stack.length > 0 && current > nums[stack[stack.length - 1]]) {
      const popped = stack.pop();
      res[popped] = current;
    }
    stack.push(i);
  }
  console.log(res);
};
console.log(nextGreaterElements([13, 7, 8, 7, 11, 10, 12])); // [-1,8,11,11,12,12,13]
console.log(nextGreaterElements([1, 2, 3, 4])); // [ 2, 3, 4, -1 ]

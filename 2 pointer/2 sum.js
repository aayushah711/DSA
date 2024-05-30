/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let start = 0;
  let end = numbers.length - 1;
  while (start < end) {
    const sum = numbers[start] + numbers[end];
    if (sum === target) {
      return [start + 1, end + 1];
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
  return [];
};

// var twoSum = function (nums, target) {
//   const obj = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (obj[target - nums[i]] >= 0) {
//       return [obj[target - nums[i]], i];
//     }
//     obj[nums[i]] = i;
//   }
// };

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

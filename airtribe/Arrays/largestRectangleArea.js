/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let res = 0;
  let stack = [];
  let n = heights.length;

  for (let i = 0; i < n; i++) {
    let height = heights[i];
    let start = i;
    while (stack.length && stack[stack.length - 1][1] > height) {
      let [ind, top] = stack.pop();
      res = Math.max(res, top * (i - ind));
      start = ind;
    }
    stack.push([start, height]);
  }

  while (stack.length) {
    let [ind, top] = stack.pop();
    res = Math.max(res, top * (n - ind));
  }

  return res;
};
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10
console.log(largestRectangleArea([2, 4])); // 4
console.log(largestRectangleArea([4, 2, 0, 3, 2, 4, 3, 4])); // 10

// let i = 0;
//   let n = heights.length;
//   while (i < n) {
//     let num = heights[i];
//     while (stack.length > 0 && heights[stack[stack.length - 1][0]] > num) {
//       let [ind, num] = stack[stack.length - 1];
//       const height = (i - ind) * heights[ind];
//       res = Math.max(res, height);
//       stack.pop();
//     }
//     let j = i;
//     while (j > 0 && heights[j] >= num) {
//       j--;
//     }
//     stack.push([j, num]);
//     i++;
//   }

//   stack.map((item) => {
//     let [ind, num] = item;
//     const height = (i - ind) * num;
//     res = Math.max(res, height);
//   });

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let n = intervals.length;
  let result = 1;
  let last = intervals[0];
  for (let i = 1; i < n; i++) {
    let val = intervals[i];
    if (val[0] >= last[1]) {
      last = val;
      result++;
    }
  }
  return n - result;
};

// 1
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
);
// 2
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ])
);
// 0
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
  ])
);

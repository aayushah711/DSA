/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  let n = days.length;
  let dp = {};
  function dfs(idx, validity) {
    if (idx === n) {
      return 0;
    }
    if ([idx, validity].join(" ") in dp) {
      return dp[[idx, validity].join(" ")];
    }
    let mini = Infinity;
    if (days[idx] < validity) {
      mini = dfs(idx + 1, validity);
    }
    mini = Math.min(
      mini,
      dfs(idx + 1, days[idx] + 1) + costs[0],
      dfs(idx + 1, days[idx] + 7) + costs[1],
      dfs(idx + 1, days[idx] + 30) + costs[2]
    );
    dp[[idx, validity].join(" ")] = mini;
    return mini;
  }

  return dfs(0, 0);
};
console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]));
// console.log(
//   mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15])
// );

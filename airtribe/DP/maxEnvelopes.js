/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  let sorted = envelopes.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  let n = envelopes.length;
  let dp = new Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    let [h, w] = sorted[i];
    for (let j = 0; j < i; j++) {
      let [height, width] = sorted[j];
      if (h > height && w > width) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);

  //   function rec(i, h, w) {
  //     if (i === envelopes.length) return 0;
  //     let [height, width] = sorted[i];
  //     let val = rec(i + 1, h, w);
  //     if (height > h && width > w) {
  //       val = Math.max(val, rec(i + 1, height, height) + 1);
  //     }
  //     return val;
  //   }
  //   return rec(0, 0, 0);
};

console.log(
  maxEnvelopes([
    [5, 4],
    [6, 4],
    [6, 7],
    [2, 3],
  ])
);
//3
console.log(
  maxEnvelopes([
    [1, 1],
    [1, 1],
    [1, 1],
  ])
);
1;
console.log(
  maxEnvelopes([
    [10, 17],
    [10, 19],
    [16, 2],
    [19, 18],
    [5, 6],
  ])
);
//3

// TC O(N^2)
// SC O(N)

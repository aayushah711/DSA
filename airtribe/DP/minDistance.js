/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let n = word1.length;
  let m = word2.length;
  if (!n) return m;
  if (!m) return n;
  let dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => 0)
  );
  for (let i = 0; i <= n; i++) {
    dp[i][0] = i;
  }
  for (let i = 0; i <= m; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[n][m];
};

console.log(minDistance("horse", "ros")); //3
console.log(minDistance("intention", "execution")); //5
console.log(minDistance("horse", "")); //5
console.log(minDistance("horse", "h")); //4
console.log(minDistance("horse", "horse")); //0
console.log(minDistance("zoologicoarchaeologist", "zoogeologist")); //10
console.log(minDistance("zoo", "zo")); //1

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const dp = Array.from({ length: text1.length + 1 }, () =>
    Array.from({ length: text2.length + 1 }, () => 0)
  );

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      let maxi = -Infinity;
      if (text1[i - 1] === text2[j - 1]) {
        maxi = Math.max(maxi, dp[i - 1][j - 1] + 1);
      } else {
        maxi = Math.max(maxi, dp[i][j - 1]);
        maxi = Math.max(maxi, dp[i - 1][j]);
      }
      dp[i][j] = maxi;
    }
  }

  return dp[text1.length][text2.length];
};

console.log(longestCommonSubsequence("abcde", "ace"));
console.log(longestCommonSubsequence("bsbininm", "jmjkbkjkv"));

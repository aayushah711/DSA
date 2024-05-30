/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let n = word1.length;
  let m = word2.length;
  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => undefined)
  );

  function rec(i, j) {
    if (dp[i][j]) {
      return dp[i][j];
    }
    if (i === n) {
      dp[i][j] = m - j;
      return dp[i][j];
    }
    if (j === m) {
      dp[i][j] = n - i;
      return dp[i][j];
    }

    let mini = Infinity;

    if (word1[i] === word2[j]) {
      mini = Math.min(mini, rec(i + 1, j + 1));
    }
    // Insert
    mini = Math.min(mini, 1 + rec(i, j + 1));
    // Replace
    mini = Math.min(mini, 1 + rec(i + 1, j + 1));
    // Delete
    mini = Math.min(mini, 1 + rec(i + 1, j));

    dp[i][j] = mini;
    return dp[i][j];
  }

  return rec(0, 0);
};
// console.log(minDistance("ros", "hor"));
console.log(minDistance("horse", "ros"));
console.log(minDistance("intention", "execution"));
console.log(minDistance("mart", "karma"));
console.log(minDistance("t", "ma"));
console.log(minDistance("tt", "t"));
console.log(minDistance("park", "spake"));
console.log(minDistance("park", "spake"));
console.log(minDistance("phenylhydrazine", "phenylhydrazine"));
console.log(minDistance("dinitrophenylhydrazine", "acetylphenylhydrazine"));
// function helper(currWord, word2, i) {
//   return word2.slice(0, i + 1) + currWord.slice(i);
// }
// console.log(helper("park", "spake", 0));

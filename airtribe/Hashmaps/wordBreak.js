/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let hm = new Set(wordDict);
  let n = s.length;
  let dp = new Array(n + 1).fill(false);
  dp[0] = true;
  for (let start = 0; start <= n; start++) {
    if (dp[start]) {
      for (let end = 0; end <= n; end++) {
        let word = s.slice(start, end);
        dp[end] = dp[end] || hm.has(word);
      }
    }
  }
  return dp[n];
};

console.log(wordBreak("leetcode", ["leet", "code"]));
// console.log(wordBreak("leetcode", ["leetcode", "code"]));
// console.log(wordBreak("applepenapple", ["apple", "pen"]));
// console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
// console.log(wordBreak("aaaaaaa", ["aaaa", "aaa"]));

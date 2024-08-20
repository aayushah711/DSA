/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  let hm = new Set(wordDict);
  let n = s.length;
  let res = new Set();
  function rec(start, end, sent) {
    if (start === n || end === n) {
      if (start === end) {
        res.add(sent.trim());
      }
      return;
    }
    let word = s.slice(start, end + 1);
    if (hm.has(word)) {
      rec(end + 1, end + 1, sent + " " + word);
    }
    rec(start, end + 1, sent);
  }
  rec(0, 0, "");
  return Array.from(res);
};

console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"])); //["cats and dog","cat sand dog"]
console.log(
  wordBreak("pineapplepenapple", [
    "apple",
    "pen",
    "applepen",
    "pine",
    "pineapple",
  ])
);
//["pine apple pen apple", "pineapple pen apple", "pine applepen apple"];
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); //[]

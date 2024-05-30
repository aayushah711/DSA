/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const chars = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  let res = -Infinity;
  for (let i = 0; i < chars.length; i++) {
    res = Math.max(res, findLongest(chars[i]));
  }
  return res;

  function findLongest(char) {
    let l = 0;
    let r = 0;
    let freqMap = new Map();
    for (let i = 0; i < s.length; i++) {
      const letter = s[i];
      if (freqMap.has(letter)) {
        freqMap.set(letter, freqMap.get(letter) + 1);
      } else {
        freqMap.set(letter, 1);
      }
    }
    let count = k;
    let resultLength = -Infinity;

    while (r < s.length) {
      let rLetter = s[r];
      while (rLetter !== char && count === 0) {
        if (r - l > resultLength) {
          resultLength = r - l;
        }
        let lLetter = s[l];
        if (lLetter !== char) {
          freqMap.set(lLetter, freqMap.get(lLetter) + 1);
          count++;
        }
        l++;
      }
      if (rLetter !== char) {
        freqMap.set(rLetter, freqMap.get(rLetter) - 1);
        count--;
      }
      r++;
    }
    if (r - l > resultLength) {
      resultLength = r - l;
    }

    return resultLength;
  }
};

console.log(characterReplacement("ABAB", 2));

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let freqMap = {};
  for (let i = 0; i < s.length; i++) {
    let l = s[i];
    if (freqMap[l]) {
      freqMap[l]++;
    } else {
      freqMap[l] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (freqMap[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};
console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));
console.log(firstUniqChar("aabb"));

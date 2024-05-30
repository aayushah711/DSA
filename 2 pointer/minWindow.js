/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let freqMap = new Map();
  for (let i = 0; i < t.length; i++) {
    let letter = t[i];
    if (freqMap.has(letter)) {
      freqMap.set(letter, freqMap.get(letter) + 1);
    } else {
      freqMap.set(letter, 1);
    }
  }

  let l = 0;
  let r = 0;
  let minLength = Infinity;
  let count = freqMap.size;
  let result = "";

  while (r < s.length) {
    let rLetter = s[r];
    if (freqMap.has(rLetter)) {
      freqMap.set(rLetter, freqMap.get(rLetter) - 1);
      if (freqMap.get(rLetter) === 0) count--;
    }

    r++;

    while (count === 0) {
      if (minLength > r - l) {
        minLength = r - l;
        result;
        result = s.slice(l, r);
      }
      let lLetter = s[l];
      if (freqMap.has(lLetter)) {
        freqMap.set(lLetter, freqMap.get(lLetter) + 1);
        if (freqMap.get(lLetter) > 0) count++;
      }
      l++;
    }
  }

  return result;
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("bba", "ab"));
console.log(minWindow("aa", "aa"));
// console.log(minWindow("a", "a"));
// console.log(minWindow("a", "aa"));

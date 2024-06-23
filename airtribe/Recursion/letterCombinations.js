/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) {
    return [];
  }
  let res = [];
  let curr = [];
  let n = digits.length;
  let mapping = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  recursion(0);
  function recursion(i) {
    if (i === n) {
      res.push(curr.join(""));
      return;
    }
    let letters = mapping[digits[i]];
    for (let j = 0; j < letters.length; j++) {
      curr.push(letters[j]);
      recursion(i + 1);
      curr.pop();
    }
  }
  return res;
};
console.log(letterCombinations(""));

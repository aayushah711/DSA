/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (["(", "{", "["].includes(s[i])) {
      stack.push(s[i]);
    } else {
      let opening = stack.pop();
      switch (s[i]) {
        case "}":
          if (opening !== "{") return false;
          break;
        case ")":
          if (opening !== "(") return false;
          break;
        case "]":
          if (opening !== "[") return false;
          break;

        default:
          break;
      }
    }
  }
  return !stack.length;
};
console.log(isValid("()"));
console.log(isValid("((()))"));
console.log(isValid("()()()"));
console.log(isValid("("));

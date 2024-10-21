/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let num = 0;
  let sign = "+";
  let stack = [];
  let i = 0;
  const helper = (op, operand) => {
    console.log(op);
    switch (op) {
      case "+":
        stack.push(num);
        break;

      case "-":
        stack.push(-num);
        break;

      case "*":
        stack.push(stack.pop() * operand);
        break;

      case "/":
        stack.push(Math.floor(stack.pop() / operand));
        break;

      default:
        break;
    }
  };

  while (i < s.length) {
    if (!isNaN(Number(s[i]))) {
      num = num * 10 + Number(s[i]);
    } else if (s[i] === "(") {
      stack.push(sign);
      num = 0;
      sign = "+";
    }

    if (["+", "-", "*", "/", ")"].includes(s[i])) {
      helper(sign, num);
      num = 0;
      if (s[i] === ")") {
        while (stack.length && Number.isInteger(stack[stack.length - 1])) {
          num += stack.pop();
        }
        helper(stack.pop(), num);
      }

      sign = s[i];
    }
    i++;
  }
  helper(sign, num);

  return stack.reduce((a, c) => a + c);
};

// console.log(calculate("1+1")); // 2
// console.log(calculate("1+(1+(1+1)+1)")); // 5
console.log(calculate("6-4/2")); // 4
console.log(calculate("1*4+5*2")); // 14
console.log(calculate("1*4*5*2")); // 40
console.log(calculate("2*(5+5*2)/3+(6/2+8)")); // 21

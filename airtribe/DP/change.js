/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let memo = {};
  function dfs(idx, amt) {
    if (amt === amount) return 1;
    if (amt > amount) return 0;
    if (idx === coins.length) return 0;
    let key = [idx, amt].join(" ");
    if (key in memo) return memo[key];
    memo[key] = dfs(idx, amt + coins[idx]) + dfs(idx + 1, amt);
    return memo[key];
  }
  return dfs(0, 0);
};

console.log(change(5, [1, 2, 5]));
console.log(change(3, [2]));
console.log(change(10, [10]));

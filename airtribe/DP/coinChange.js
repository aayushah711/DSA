/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (!amount) return 0;
  let dp = new Array(amount + 1).fill(-1);
  function rec(amt) {
    if (dp[amt] > -1) return dp[amt];
    if (amt < 0) {
      return Infinity;
    }
    if (amt === 0) {
      dp[amt] = 0;
      return 0;
    }
    let mini = Infinity;
    for (let i = 0; i < coins.length; i++) {
      let coin = coins[i];
      mini = Math.min(mini, rec(amt - coin));
    }
    dp[amt] = mini + 1;
    return mini + 1;
  }

  rec(amount);
  dp;
  let res = dp[amount];
  if (res === Infinity) return -1;
  return res;
};

console.log(coinChange([1, 2, 5], 11));
// console.log(coinChange([2], 3));
// console.log(coinChange([1], 0));

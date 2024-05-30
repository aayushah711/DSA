/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let resProfit = 0;
	let buyDp = {};
	let sellDp = {};

	function recursion(ind, qty) {
		let profit = 0;
		if (qty === 1) {
			if (buyDp[ind]) {
				return buyDp[ind];
			}
			for (let i = ind + 2; i < prices.length; i++) {
				let temp = recursion(i, 0);
				profit = Math.max(temp, profit);
			}
			buyDp[ind] = profit;
			return profit;
		} else {
			if (sellDp[ind]) {
				return sellDp[ind];
			}
			for (let i = ind; i < prices.length; i++) {
				let temp = prices[i] - prices[ind] + recursion(i, 1);
				profit = Math.max(temp, profit);
			}
			sellDp[ind] = profit;
			return profit;
		}
	}

	for (let priceInd = 0; priceInd < prices.length; priceInd++) {
		let temp = recursion(priceInd, 0);
		resProfit = Math.max(resProfit, temp);
	}
	return resProfit;
};
console.log(maxProfit([1, 2, 3, 0, 2]));

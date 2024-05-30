/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
	let dp = Array.from({ length: n + 2 }, () =>
		Array.from({ length: n + 1 }, () => 0)
	);

	for (let len = 2; len <= n; len++) {
		for (let start = 1; start <= n - len + 1; start++) {
			let end = start + len - 1;
			let curMin = Infinity;
			for (let pivot = start; pivot <= end; pivot++) {
				curMin = Math.min(
					curMin,
					pivot + Math.max(dp[start][pivot - 1], dp[pivot + 1][end])
				);
			}
			dp[start][end] = curMin;
		}
	}

	console.log(dp);
	return dp[1][n];
};
console.log(getMoneyAmount(7));

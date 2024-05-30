/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
	let n = nums.length;
	nums = [1, ...nums, 1];
	let dp = {};
	return recursion(1, n);
	function recursion(start, end) {
		if (start > end) {
			return 0;
		}
		if (dp[[start, end].join("-")] >= 0) {
			return dp[[start, end].join("-")];
		}
		let currMax = 0;
		for (let i = start; i <= end; i++) {
			let coins = nums[start - 1] * nums[i] * nums[end + 1];
			currMax = Math.max(
				currMax,
				recursion(start, i - 1) + coins + recursion(i + 1, end)
			);
		}
		dp[[start, end].join("-")] = currMax;
		return dp[[start, end].join("-")];
	}
};
console.log(maxCoins([3, 1, 5, 8]));

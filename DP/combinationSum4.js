/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
	let dp = {};
	return recursion(0);

	function recursion(sumSoFar) {
		if (Object.keys(dp).includes(sumSoFar.toString())) {
			return dp[sumSoFar];
		}

		let temp = 0;
		for (let i = 0; i < nums.length; i++) {
			let newSum = nums[i] + sumSoFar;
			if (newSum === target) {
				temp += 1;
			}
			if (newSum < target) {
				temp += recursion(newSum);
			}
		}
		dp[sumSoFar] = temp;
		return temp;
	}
};
console.log(combinationSum4([2, 1, 3], 35));

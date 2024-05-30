/**
 * @param {number[]} nums
 * @return {number}
 */
// { '0': 4, '1': 3, '2': 3, '3': 1, '4': 2, '5': 1 }
var lengthOfLIS = function (nums) {
	let dp = new Array(nums.length).fill(0);
	dp[nums.length - 1] = 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		let max = 0;
		for (let j = nums.length - 1; j > i; j--) {
			if (nums[i] < nums[j]) {
				max = Math.max(max, dp[j]);
			}
		}
		dp[i] = max + 1;
	}
	console.log(dp);
	return Math.max(...dp);

	// let dp = {};
	// let res = 0;
	// for (let i = 0; i < nums.length; i++) {
	// 	res = Math.max(recursion(i), res);
	// }
	// console.log(dp);
	// return res;
	// function recursion(ind) {
	// 	if (dp[ind]) {
	// 		return dp[ind];
	// 	}
	// 	let max = 0;
	// 	for (let i = ind + 1; i < nums.length; i++) {
	// 		if (nums[i] > nums[ind]) {
	// 			max = Math.max(max, recursion(i));
	// 		}
	// 	}
	// 	dp[ind] = max + 1;
	// 	return max + 1;
	// }
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));

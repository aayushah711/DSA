/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var sortTransformedArray = function (nums, a, b, c) {
	let arr1 = [];
	let arr2 = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			arr1.push(calculateValue(a, b, c, nums[i]));
		} else {
			arr2.push(calculateValue(a, b, c, nums[i]));
		}
	}

	console.log(arr2, arr1);
	function calculateValue(a, b, c, x) {
		return a * x * x + b * x + c;
	}
};
console.log(sortTransformedArray([-4, -2, 0, 2, 4, 5], 1, 3, 5));

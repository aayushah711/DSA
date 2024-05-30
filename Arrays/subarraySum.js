/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
	let n = nums.length;
	for (let i = 1; i < n; i++) {
		nums[i] = nums[i] + nums[i - 1];
	}
	nums.unshift(nums[0]);
	n = nums.length;
	let count = 0;
	let i = 0;
	let j = 0;
	let currSum = nums[0];

	while (j < n) {
		if (currSum === k) {
			if (i < j) {
				count++;
			}
			i++;
			j++;
		} else if (currSum > k) {
			i++;
		} else {
			j++;
		}
		currSum = nums[j] - nums[i];
	}

	console.log(count);
};

subarraySum([-1, -1, 1], 0);

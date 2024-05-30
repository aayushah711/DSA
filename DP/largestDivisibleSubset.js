/**
 * @param {number[]} nums
 * @return {number[]}
 */

var largestDivisibleSubset = function (nums) {
	let sortedNums = nums.sort((a, b) => a - b);
	let memo = {};
	let res = [];
	for (let i = 0; i < sortedNums.length; i++) {
		let temp = recursion(i);
		if (temp.length > res.length) {
			res = temp;
		}
	}
	return res;
	// will return an array & input is index
	function recursion(ind) {
		if (memo[ind]) {
			return memo[ind];
		}
		if (ind >= sortedNums.length) {
			console.log(15);
			return [];
		}
		let arr = [];
		for (let j = ind + 1; j < sortedNums.length; j++) {
			if (sortedNums[j] % sortedNums[ind] === 0) {
				let temp = recursion(j);
				if (temp.length > arr.length) {
					arr = temp;
				}
			}
		}

		memo[ind] = [sortedNums[ind], ...arr];
		return memo[ind];
	}
	// let maxi = -Infinity;
	// let res;
	// for (let i = 0; i < sortedNums.length; i++) {
	// 	let arr = [sortedNums[i]];
	// 	for (let j = i + 1; j < sortedNums.length; j++) {
	// 		if (sortedNums[j] % arr[arr.length - 1] === 0) {
	// 			arr.push(sortedNums[j]);
	// 		}
	// 	}
	// 	if (maxi < arr.length) {
	// 		maxi = arr.length;
	// 		res = arr;
	// 	}
	// }
	// return res;
};
console.log(
	largestDivisibleSubset([5, 9, 18, 54, 108, 540, 90, 180, 360, 720])
);

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
	var permArr = [],
		usedChars = [];
	return permute(nums);

	function permute(input) {
		var i, ch;
		for (i = 0; i < input.length; i++) {
			ch = input.splice(i, 1)[0];
			usedChars.push(ch);
			if (input.length == 0) {
				permArr.push(usedChars.slice());
			}
			permute(input);
			input.splice(i, 0, ch);
			usedChars.pop();
		}
		return permArr;
	}

	// return recursion(0, nums.length - 1);
	// function recursion(start, end) {
	// 	if (start >= end) {
	// 		return [[nums[end]]];
	// 	}
	// 	let res = [];
	// 	for (let k = start; k < end; k++) {
	// 		res.push([nums[k], ...recursion(start + 1, end)]);
	// 	}
	// 	return res;
	// }
	// for (let i = 0; i < nums.length; i++) {
	// 	let newArr = [nums[i]];
	// 	for (let j = 0; j < nums.length; j++) {
	// 		if (i !== j) {
	// 			newArr.push(nums[j]);
	// 		}
	// 	}
	// 	console.log(newArr);
	// }
};

console.log(nextPermutation([1, 2, 3]));

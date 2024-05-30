/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
	let stack = [];
	let res = {};

	for (let ind = 0; ind < nums2.length; ind++) {
		let current = nums2[ind];
		while (stack.length > 0 && current > stack[stack.length - 1]) {
			let popped = stack.pop();
			res[popped] = current;
		}
		stack.push(current);
	}

	stack.forEach((item) => {
		res[item] = -1;
	});

	nums1 = nums1.map((item) => res[item]);

	console.log(nums1);
	return nums1;
};
nextGreaterElement([1, 3, 2, 4], [1, 3, 2, 4]);

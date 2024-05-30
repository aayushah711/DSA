/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
	const len = nums.length;
	if (len === 2) {
		if (nums[0] > nums[1]) {
			swap(0, 1);
		}
	}
	for (let i = 0; i < len; i++) {
		if (i % 2 === 1) {
			if (nums[i] === nums[i - 1]) {
				for (let j = i + 1; j < len; j++) {
					if (nums[j] < nums[i]) {
						swap(j, i);
						break;
					}
				}
			}
			if (nums[i] < nums[i - 1]) {
				swap(i, i - 1);
			}
		} else {
			if (nums[i] === nums[i - 1]) {
				for (let j = i + 1; j < len; j++) {
					if (nums[j] > nums[i]) {
						swap(j, i);
						break;
					}
				}
			}
			if (nums[i] > nums[i - 1]) {
				swap(i, i - 1);
			}
		}
	}

	function swap(ind1, ind2) {
		let temp = nums[ind1];
		nums[ind1] = nums[ind2];
		nums[ind2] = temp;
	}

	console.log(nums);
};

wiggleSort([1, 3, 2, 2, 3, 1]);

function subarraySum(nums, k) {
	let count = 0;
	let sum = 0;
	const sumOccurrences = new Map();

	// Initialize the sumOccurrences map with a default entry
	// to handle the case where a subarray starts from the beginning
	sumOccurrences.set(0, 1);

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];

		if (sumOccurrences.has(sum - k)) {
			count += sumOccurrences.get(sum - k);
		}

		if (sumOccurrences.has(sum)) {
			sumOccurrences.set(sum, sumOccurrences.get(sum) + 1);
		} else {
			sumOccurrences.set(sum, 1);
		}
	}

	return count;
}
console.log(subarraySum([-1, -1, 1], 0));

var longestConsecutive = function (nums) {
	let numsSet = new Set(nums);
	console.log(numsSet);
	let longestStreak = 0;
	for (let val of numsSet) {
		if (!numsSet.has(val - 1)) {
			currentVal = val;
			currentStreak = 1;
			while (numsSet.has(currentVal + 1)) {
				currentVal++;
				currentStreak++;
			}
			longestStreak = Math.max(currentStreak, longestStreak);
		}
	}
	console.log(longestStreak);
	return longestStreak;
};
longestConsecutive([1, 2]);

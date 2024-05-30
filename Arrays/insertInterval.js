/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
	let [start, end] = newInterval;
	let startPointer, endPointer;

	intervals.forEach((interval, ind) => {
		const [currStart, currEnd] = interval;
		if (startPointer === undefined) {
			if (start >= currStart && start <= currEnd) {
				startPointer = ind;
			}
		}
		if (endPointer === undefined) {
			if (end >= currStart && end <= currEnd) {
				endPointer = ind;
			}
		}
	});
	const mergedInterval = [
		Math.min(intervals[startPointer][0], start),
		Math.max(intervals[endPointer][1], end),
	];
	intervals.splice(startPointer, endPointer, mergedInterval);
	return intervals;
};

console.log(
	insert(
		[
			[1, 3],
			[6, 9],
		],
		[2, 5]
	)
);

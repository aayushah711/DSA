/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	let res = [intervals[0]];

	intervals.forEach((interval) => {
		const [start, end] = interval;
		for (let i = 0; i < res.length; i++) {
			const [currStart, currEnd] = res[i];
			if (start < currStart && end >= currStart) {
				res[i] = [
					Math.min(currStart, start),
					Math.max(currEnd, currEnd),
				];
			}
      else if ( )
		}
	});

	return res;
};
console.log(
	merge([
		[1, 3],
		[2, 6],
		[8, 10],
		[15, 18],
	])
);

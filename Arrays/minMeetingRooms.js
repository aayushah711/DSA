/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
	let startArr = [];
	let endArr = [];
	intervals.forEach((interv) => {
		startArr.push(interv[0]);
		endArr.push(interv[1]);
	});

	startArr.sort((a, c) => a - c);
	endArr.sort((a, c) => a - c);

	let endInd = 0;
	let res = 1;
	for (let startInd = 1; startInd < startArr.length; startInd++) {
		let start = startArr[startInd];
		let end = endArr[endInd];
		if (start < end) {
			res++;
		}

		if (start >= end) {
			// new end time
			endInd++;
		}
	}
	return res;
};

console.log(
	minMeetingRooms([
		[11, 30],
		[8, 12],
		[1, 10],
		[10, 20],
		[3, 19],
		[2, 7],
	])
);

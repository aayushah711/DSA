/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
	citations.sort((a, c) => c - a);
	let i;
	for (i = 0; i < citations.length; i++) {
		if (citations[i] <= i) {
			break;
		}
	}

	return i;
};
console.log(hIndex([1, 3, 1]));

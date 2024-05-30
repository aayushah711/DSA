/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
	const n = people.length;

	let newPeople = people.sort((a, c) => {
		return a[0] - c[0];
	});

	let res = Array.from({ length: n }, () => -1);
	for (let i = 0; i < n; i++) {
		let count = newPeople[i][1];
		for (let j = 0; j < n; j++) {
			if (res[j] === -1 && count === 0) {
				res[j] = newPeople[i];
				break;
			} else if (res[j][0] >= newPeople[i][0] || res[j] === -1) {
				count--;
			}
		}
	}

	return res;
};
console.log(
	reconstructQueue([
		[7, 1],
		[5, 0],
		[4, 4],
		[7, 0],
		[6, 1],
		[5, 2],
	])
);

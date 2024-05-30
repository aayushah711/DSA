/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, k) {
	let colors = k - 1;

	const sameColor = Array.from({ length: n + 1 }, () => 0);
	const diffColor = Array.from({ length: n + 1 }, () => 0);

	sameColor[1] = k;
	sameColor[2] = k;
	diffColor[2] = k * colors;

	for (let i = 3; i <= n; i++) {
		sameColor[i] = diffColor[i - 1];
		diffColor[i] = (sameColor[i - 1] + diffColor[i - 1]) * colors;
	}
	return sameColor[n] + diffColor[n];
};
console.log(numWays(7, 2));

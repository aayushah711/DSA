/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	const n = matrix.length;
	const m = matrix[0].length;
	let total = m * n;
	const res = [];
	let i = 0;
	let j = 0;
	let isIfixed = true;
	while (total) {
		while (isIfixed && j < m - 1) {
			res.push(matrix[i][j]);
			j++;
			total--;
		}
		i++;
		while (isIfixed && i < n - 1) {
			res.push(matrix[i][j]);
			i++;
			total--;
		}
		j++;
		isIfixed = false;

		while (!isIfixed && j > 0) {
			res.push(matrix[i][j]);
			j--;
			total--;
		}
		j++;

		isIfixed = true;
	}
	return res;
};

console.log(
	spiralOrder([
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12],
	])
);

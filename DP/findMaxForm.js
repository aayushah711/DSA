/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
	let res = recursion(0, 0, 0);
	return res;

	function countFn(x, str) {
		let count = 0;
		for (let i = 0; i < str.length; i++) {
			if (str[i] === x) {
				count++;
			}
		}
		return count;
	}
	function recursion(ind, curr0s, curr1s) {
		if (ind >= strs.length) {
			return 0;
		}
		let currStr = strs[ind];
		let max = 0;
		for (let i = 0; i < currStr.length; i++) {
			let total0s = countFn("0", currStr);
			let total1s = countFn("1", currStr);
			if (total0s + curr0s <= m && total1s + curr1s <= n) {
				max = Math.max(
					max,
					1 + recursion(ind + 1, total0s + curr0s, total1s + curr1s)
				);
			}
			max = Math.max(max, recursion(ind + 1, curr0s, curr1s));
		}
		return max;
	}
};
console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3));

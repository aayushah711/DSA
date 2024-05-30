/**
 * @param {number} n
 * @return {number}
 */
function isUnique(num) {
	let numString = num.toString();
	let numSet = new Set();
	for (let i = 0; i < numString.length; i++) {
		numSet.add(numString[i]);
	}
	return numString.length === numSet.size;
}
var countNumbersWithUniqueDigits = function (n) {
	let count = 0;
	for (let i = 0; i < 10 ** n; i++) {
		if (!isUnique(i)) {
			count++;
		}
	}
	return 10 ** n - count;
	// let memo = { 0: 1, 1: 10 };
	// let recursion = (n) => {
	// 	if (memo[n]) {
	// 		return memo[n];
	// 	}
	// 	memo[n] = 10 ** n - (recursion(n - 1) - recursion(n - 2));
	// 	return memo[n];
	// };
	// return recursion(n);
};
console.log(countNumbersWithUniqueDigits(5));

// (n - 1)(n - 2);
// let obj = { 0: 1, 1: 10, 2: 91, 3: 739, 4: 5275 };

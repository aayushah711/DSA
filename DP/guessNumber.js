/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
	return recursion(1, n);
};
var recursion = function (startValue, endValue) {
	const mid = getMid(startValue, endValue);
	const ans = guess(mid);
	if (ans === 0) {
		return mid;
	}
	if (ans === -1) {
		return recursion(startValue, mid - 1);
	}
	if (ans === 1) {
		return recursion(mid + 1, endValue);
	}
};
var getMid = function (startValue, endValue) {
	const n = endValue - startValue;
	let mid;
	if (n % 2 === 1) {
		mid = Math.round(n / 2);
	} else {
		mid = n / 2;
	}
	return startValue + mid;
};

function guess(mid) {
	let pick = 7;
	if (mid === pick) {
		return 0;
	}
	if (mid < pick) {
		return 1;
	}
	if (mid > pick) {
		return -1;
	}
}
console.log(guessNumber(10));

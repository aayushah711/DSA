/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	for (let i = digits.length; i >= 0; i--) {
		const digit = Number(digits[i]);
		if (digit < 9) {
			digits[i] = digit + 1;
			return digits;
		}
		if (digit === 9) {
			digits[i] = 0;
		}
		if (i === 0) {
			digits.unshift(1);
			return digits;
		}
	}
};
console.log(plusOne([9]));

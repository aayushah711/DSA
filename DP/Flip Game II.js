/**
 * @param {string} currentState
 * @return {boolean}
 */
var canWin = function (currentState) {
	if (currentState.length < 2) {
		return false;
	}
	for (let i = 0; i < currentState.length - 1; i++) {
		if (currentState.startsWith("++", i)) {
			let t =
				currentState.substring(0, i) +
				"--" +
				currentState.substring(i + 2);

			if (!canWin(t)) {
				return true;
			}
		}
	}
	return false;
};
console.log(canWin("-+-+"));

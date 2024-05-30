/**
 * @param {string} currentState
 * @return {string[]}
 */
var generatePossibleNextMoves = function (currentState) {
	const res = [];
	for (let i = 1; i < currentState.length; i++) {
		if (currentState[i - 1] === "+" && currentState[i] === "+") {
			res.push(
				currentState.substring(0, i - 1) +
					"--" +
					currentState.substring(i + 1)
			);
		}
	}
	return res;
};
console.log(generatePossibleNextMoves("+++++"));

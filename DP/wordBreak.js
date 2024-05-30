/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
	const dp = {};
	let dp2 = [...new Array(3)].map(() => new Array(3).fill("a"));
	console.log(dp2);
	dp2[0][0] = 1;
	console.log(dp2);

	// let final = recursion(0, 1);
	// console.log(dp);
	// return final;

	function recursion(startInd, endInd) {
		const key = [startInd, endInd].join(",");
		if (dp[key] === true || dp[key] === false) {
			return dp[key];
		}
		if (startInd === s.length) {
			return true;
		}
		if (endInd > s.length) {
			return false;
		}
		let res = false;
		let newWord = s.slice(startInd, endInd);
		console.log(17, newWord, startInd, endInd);
		if (wordDict.includes(newWord)) {
			res = res || recursion(endInd, endInd + 1);
		}
		res = res || recursion(startInd, endInd + 1);
		dp[key] = res;
		return res;
	}
};
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));

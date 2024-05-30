// Given an array Arr of N positive integers and another number X.
// Determine whether or not there exist two elements in Arr whose sum is exactly X.

// Example 1:

// Input:
// N = 6, X = 16
// Arr[] = {1, 4, 45, 6, 10, 8}
// Output: Yes
// Explanation: Arr[3] + Arr[4] = 6 + 10 = 16
// Example 2:

// Input:
// N = 5, X = 10
// Arr[] = {1, 2, 4, 3, 6}
// Output: Yes
// Explanation: Arr[2] + Arr[4] = 4 + 6 = 10

// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(N)

// Constraints:
// 1 ≤ N ≤ 105
// 1 ≤ Arr[i] ≤ 105

function hasArrayTwoCandidates(arr, n, x) {
	//code here
	let obj = {};
	for (let i = 0; i < n; i++) {
		if (obj[x - arr[i]]) {
			return true;
		} else {
			obj[arr[i]] = true;
		}
	}
	return false;
}

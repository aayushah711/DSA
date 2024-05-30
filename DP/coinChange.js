// Dynamic Programming Javascript implementation
// of Coin Change problem

function count(coins, n, sum) {
	// table[i] will be storing the
	// number of solutions for value i.
	// We need n+1 rows as the table
	// is constructed in bottom up manner
	// using the base case (sum = 0)
	let table = new Array(sum + 1);
	table.fill(0);

	// Base case (If given value is 0)
	table[0] = 1;

	// Pick all coins one by one and
	// update the table[] values after
	// the index greater than or equal
	// to the value of the picked coin
	for (let i = 0; i < n; i++)
		for (let j = coins[i]; j <= sum; j++) {
			table[j] += table[j - coins[i]];
		}

	console.log(table);
	return table[sum];
}

let coins = [2, 5, 3, 6];
let n = coins.length;
let sum = 10;
count(coins, n, sum);

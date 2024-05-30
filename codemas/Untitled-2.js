function runProgram(input) {
	// Write code here
	input = input.trim().split("\n");
	let [h, w] = input[0].trim().split(" ").map(Number);
	input = input.slice(1).map((item) => item.trim().split(" ").map(Number));
	let res1 = [];
	let res2 = [];
	for (let i = 0; i < h + 1; i++) {
		res1.push(new Array(w + 1).fill(0));
		res2.push(new Array(w + 1).fill(0));
		for (let j = 0; j < w; j++) {
			res2[i][j] = new Set();
		}
	}
	for (let i = h; i > 0; i--) {
		for (let j = w; j > 0; j--) {
			let output = 0;
			if (!res2[i][j + 1].has(input[i - 1][j - 1])) {
				output += res1[i][j + 1];
			}
			if (!res2[i + 1][j].has(input[i - 1][j - 1])) {
				output += res1[i + 1][j];
			}
			res1[i][j] = output;
		}
	}

	console.log(res1);
	// console.log(res2);
}
function create2DArray(rows, columns) {
	return Array.from({ length: 3 }, () => Array.from({ length: 4 }, () => 0));
}

// console.log(
// 	runProgram(
// 		`3 3
//     3 2 2
//     2 1 3
//     1 5 4
//     `
// 	)
// );
let a = create2DArray(3, 4);
a[0][1] = 2;
console.log(a);

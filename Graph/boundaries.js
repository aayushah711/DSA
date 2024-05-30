let board = [
	[0, 1, 0],
	[0, 0, 1],
	[1, 1, 1],
	[0, 0, 0],
];

let rows = board.length;
let cols = board[0].length;
let newBoard = [...new Array(rows)].map(() => [...new Array(cols)].fill(null));

for (let row = 0; row < rows; row++) {
	for (let col = 0; col < cols; col++) {
		newBoard[row][col] = board[row][col];
	}
}
console.log("newBoard", newBoard);

for (let row = 0; row < rows; row++) {
	for (let col = 0; col < cols; col++) {
		let liveNeighbors = 0;

		let top = Math.max(0, row - 1);
		let bottom = Math.min(rows - 1, row + 1);
		let left = Math.max(0, col - 1);
		let right = Math.min(cols - 1, col + 1);

		for (let i = top; i <= bottom; i++) {
			for (let j = left; j <= right; j++) {
				if (!(i == row && j == col) && newBoard[i][j] == 1) {
					liveNeighbors++;
				}
			}
		}

		if (liveNeighbors < 2 || liveNeighbors > 3) {
			board[row][col] = 0;
		} else if (liveNeighbors == 3) {
			board[row][col] = 1;
		}
	}
}
console.log("Result", board);

var getModifiedArray = function (length, updates) {
	let arr = Array(length).fill(0);

	for (let i = 0; i < updates.length; i++) {
		let [start, end, val] = updates[i];
		arr[start] += val;

		if (end < length - 1) {
			arr[end + 1] -= val;
		}
	}

	for (let i = 1; i < arr.length; i++) {
		arr[i] = arr[i - 1] + arr[i];
	}

	return arr;
};
console.log(
	getModifiedArray(5, [
		[1, 3, 2],
		[2, 4, 3],
		[0, 2, -2],
	])
);

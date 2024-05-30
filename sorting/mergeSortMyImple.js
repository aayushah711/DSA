let arr = [9, 7, 5, 11, 12, 2, 14, 3, 12, 10, 6];
function mergeSort(arr, l, r) {
	if (l === r) {
		return [arr[l]];
	}
	if (l < r) {
		let median = Math.floor((l + r) / 2);

		let arr1 = mergeSort(arr, l, median);
		let arr2 = mergeSort(arr, median + 1, r);
		return mergeSortedArrays(arr1, arr2);
	}
}
function mergeSortedArrays(arr1, arr2) {
	let i = 0;
	let j = 0;
	let res = [];

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			res.push(arr1[i]);
			i++;
		} else {
			res.push(arr2[j]);
			j++;
		}
	}
	while (i !== arr1.length) {
		res.push(arr1[i]);
		i++;
	}
	while (j !== arr2.length) {
		res.push(arr2[j]);
		j++;
	}
	return res;
}
console.log(mergeSort(arr, 0, arr.length - 1));

// This function partitions given array and returns
//  the index of the pivot.
var quickSort = function (array, p, r) {
	// This code has been purposefully obfuscated,
	// as you will implement it yourself in next challenge
	if (p < r) {
		let ind = partition(array, p, r);
		quickSort(array, p, ind - 1);
		quickSort(array, ind + 1, r);
	}
};

var partition = function (array, p, r) {
	var pivot = array[r];
	var i = p;
	var j = r;
	while (i < j) {
		while (array[j] >= pivot && j > p) {
			j--;
		}
		while (array[i] <= pivot && i < r) {
			i++;
		}
		if (i < j) {
			swap(i, j, array);
		}
	}
	if (i < r) {
		swap(i, r, array);
	}
	return i;
};
var swap = function (i, j, array) {
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 12, 10, 6];
quickSort(array, 0, array.length - 1);
console.log("Array after sorting: " + array);
// Program.assertEqual(array, [2,3,5,6,7,9,10,11,12,14]);

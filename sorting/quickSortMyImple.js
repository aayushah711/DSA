function runProgram(input) {
	const arr = input.trim().split(" ").map(Number);
	quicksort(arr, 0, arr.length - 1);

	function quicksort(arr, lo, hi) {
		if (lo < hi) {
			let ind = partition(arr, lo, hi);
			quicksort(arr, lo, ind - 1);
			quicksort(arr, ind + 1, hi);
		}
	}

	function partition(arr, lo, hi) {
		let left = lo;
		let right = hi;
		let mid = Math.floor((lo + hi) / 2);
		let piv = arr[hi]; // arr[mid];
		while (left < right) {
			while (arr[left] < piv && left < hi) {
				left++;
			}
			while (arr[right] >= piv && right > lo) {
				right--;
			}
			if (left < right) {
				swap(left, right);
			}
		}
		swap(hi, left);
		return left;
	}

	function swap(i, j) {
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	console.log(arr);
}

runProgram(`9 11 5 18 22 7 4 9`);

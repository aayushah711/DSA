function aggressiveCows(n, k, arr) {
  let sorted = arr.sort((a, b) => a - b);
  let low = 1;
  let high = sorted[n - 1] - sorted[0];
  let res = 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (isValid(mid)) {
      res = Math.max(res, mid);
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return res;

  function isValid(key) {
    let count = 1;
    for (let i = 1; i < n; i++) {
      if (arr[i] - arr[i - 1] >= key) {
        count++;
      }
    }
    count++;
    return count >= k;
  }
}

console.log(aggressiveCows(3, 2, [1, 2, 3]));
console.log(aggressiveCows(6, 4, [0, 3, 4, 7, 10, 9]));
console.log(aggressiveCows(5, 2, [4, 2, 1, 3, 6]));

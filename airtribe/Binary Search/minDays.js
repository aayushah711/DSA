/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
  let res = -1;
  let low = Math.min(...bloomDay);
  let high = Math.max(...bloomDay);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (isValid(mid)) {
      res = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  function isValid(key) {
    let count = 0;
    let flowers = k;
    let i = 0;
    while (i < bloomDay.length) {
      if (bloomDay[i] <= key) {
        flowers--;
        if (flowers === 0) {
          count++;
          flowers = k;
        }
      } else {
        flowers = k;
      }
      i++;
    }
    return count >= m;
  }

  return res;
};

console.log(minDays([1, 10, 3, 10, 2], 3, 1)); // 3
console.log(minDays([1, 10, 3, 10, 2], 3, 2)); // -1
console.log(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3)); // 12
console.log(minDays([7, 7, 7, 7, 12, 7, 7, 7], 2, 3)); // 7

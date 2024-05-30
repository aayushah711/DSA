/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let n = piles.length;
  let low = 1;
  let high = Math.max(...piles);
  let res = high;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (fn(mid)) {
      res = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  function fn(val) {
    let i = 0;
    let sum = 0;
    while (i < n) {
      sum += Math.ceil(piles[i] / val);
      i++;
    }
    return sum <= h;
  }
  return res;
};
console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // 30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // 23
console.log(minEatingSpeed([312884470], 312884469)); // 23

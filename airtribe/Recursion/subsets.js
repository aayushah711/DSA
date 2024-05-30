/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [];

  function rec(end) {
    if (end === nums.length) {
      return [];
    }
    const curr = [[nums[end]]];
    let arr2 = rec(end + 1);

    arr2.map((item) => {
      curr.push([nums[end], ...item]);
    });
    res.push(...curr);
    return res;
  }
  rec(0);
  if (nums.length) {
    res.push([]);
  }
  return res;
};
console.log(subsets([1, 2, 3]));

// // 1,2
// [
//     [],
//     [1],[1,2],
//     [2]
// ]

// //1,2,3
// [[],
// [1],[1,2],[1,2,3],[1,3],
// [2], [2,3],
// [3]]

// //1,2,3,4
// [
//     [],
//     [1],[1,2],[1,2,3],[1,2,3,4],[1,2,4],[1,3],[1,3,4],[1,4],
//     [2],[2,3],[2,3,4],[2,4],
//     [3],[3,4],
//     [4]
// ]

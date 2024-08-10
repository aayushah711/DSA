/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let hm = {};
  let hm2 = {};
  nums1.map((num) => (hm[num] = true));
  nums2.map((num) => {
    if (hm[num]) {
      hm2[num] = true;
    }
  });
  return Object.keys(hm2).map(Number);
};
console.log(intersection([1, 2, 2, 1], [2, 2]));

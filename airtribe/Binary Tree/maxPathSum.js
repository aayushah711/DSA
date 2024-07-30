// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let res = -Infinity;
  summer(root);

  function summer(node) {
    if (!node) return 0;

    let leftSum = Math.max(0, summer(node.left));
    let rightSum = Math.max(0, summer(node.right));

    res = Math.max(res, leftSum + rightSum + node.val);

    return node.val + Math.max(leftSum, rightSum);
  }

  return res;
};

let a = new TreeNode(1, new TreeNode(-2), new TreeNode(3));
console.log(maxPathSum(a));

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true;
  let valid = true;
  rec(root);
  function rec(node) {
    if (!node) return 0;
    let l = rec(node.left);
    let r = rec(node.right);
    if (valid && Math.abs(l - r) > 1) {
      valid = false;
    }
    return Math.max(l, r) + 1;
  }
  return valid;
};

let a = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(isBalanced(a));

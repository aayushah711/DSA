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
var isValidBST = function (root) {
  if (!root) return true;

  function dfs(node, l, r) {
    if (!node) return true;

    if (node.val <= l || node.val >= r) {
      return false;
    }

    return dfs(node.left, l, node.val) && dfs(node.right, node.val, r);
  }

  return dfs(root, -Infinity, Infinity);
};

let a = new TreeNode(5, new TreeNode(1), new TreeNode(4));
console.log(isValidBST(a));

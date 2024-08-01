//   Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  if (!root) return 0;
  let res = 0;
  function dfs(node) {
    if (!node) return 0;
    let l = dfs(node.left);
    let r = dfs(node.right);
    res = Math.max(res, l + r);
    return Math.max(l, r) + 1;
  }
  dfs(root);
  return res;
};

// let a = new TreeNode(
//   1,
//   new TreeNode(2, new TreeNode(4), new TreeNode(5)),
//   new TreeNode(3, new TreeNode(6), new TreeNode(7))
// );

let a = new TreeNode(
  1,
  null,
  new TreeNode(
    2,
    new TreeNode(3, new TreeNode(5, null, null), new TreeNode(6, null, null)),
    new TreeNode(4, new TreeNode(7, null, null), new TreeNode(8, null, null))
  )
);

console.log(diameterOfBinaryTree(a));

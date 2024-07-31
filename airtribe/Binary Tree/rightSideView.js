// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) return [];
  let res = [];
  let queue = [root];
  while (queue.length) {
    res.push(queue[queue.length - 1].val);
    let n = queue.length;
    for (let i = 0; i < n; i++) {
      let leaf = queue.shift();
      if (leaf?.left) queue.push(leaf.left);
      if (leaf?.right) queue.push(leaf.right);
    }
  }
  return res;
};

console.log(
  rightSideView(
    new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(5)),
      new TreeNode(3, null, new TreeNode(4))
    )
  )
);

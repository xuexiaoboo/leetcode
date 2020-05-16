/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
        return null
    }
    var temp = root.right;
    root.right = root.left;
    root.left = temp;
    invertTree(root.right)
    invertTree(root.left)
    return root

    // 可以通过解构赋值进行递归
    // [root.left, root.right] = [invertTree(root.left), invertTree(root.left)]
};
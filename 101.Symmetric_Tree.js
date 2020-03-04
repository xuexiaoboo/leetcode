/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // 递归
    var isMirror = function(root1, root2) {
        if (root1 === null && root2 === null) {
            return true;
        }
        if (root1 === null || root2 === null) {
            return false;
        }
        return (root1.val === root2.val && isMirror(root1.left, root2.right) && isMirror(root1.right, root2.left));
    }

    return isMirror(root, root);


    // 还可以中序遍历树，若结果为回文则是对称二叉树
};
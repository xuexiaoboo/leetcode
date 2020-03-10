/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    var res = 0
    depth(root)
    return res

    function depth(node) {
        if (!node) {
            return 0
        }
        var deepl = depth(node.left) //遍历左子树
        var deepr = depth(node.right) //遍历右子树
        res = Math.max(deepl + deepr, res)
        return Math.max(deepl, deepr) + 1
    }
};
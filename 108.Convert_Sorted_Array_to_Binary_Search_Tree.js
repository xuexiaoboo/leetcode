/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    }
    if (nums.length === 1) {
        return new TreeNode(nums[0]); //返回的是一个节点，而不是一个数组元素
    }

    var mid = Math.floor(nums.length / 2);
    var root = new TreeNode(nums[mid]); //根节点
    var left = nums.slice(0, mid); //左子树节点
    var right = nums.slice(mid + 1); //右子树节点

    root.left = sortedArrayToBST(left);
    root.right = sortedArrayToBST(right);

    return root;
};
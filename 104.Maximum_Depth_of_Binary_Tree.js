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
var maxDepth = function(root) {
    // DFS
    // if (root === null) {
    //     return 0;
    // }

    // return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;

    // BFS
    if (root === null) {
        return 0;
    }
    var que = [root];
    var deep = 0;
    while (que.length > 0) { //有一层节点，深度加一
        deep++;
        var len = que.length;
        while (len > 0) {
            var curr = que.shift();
            if (curr.left !== null) {
                que.push(curr.left);
            }
            if (curr.right !== null) {
                que.push(curr.right);
            }
            len--;
        }
    }
    return deep;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // node是需要删除节点的引用，并不是题目所述的节点值
    node.val = node.next.val;
    node.next = node.next.next;
};
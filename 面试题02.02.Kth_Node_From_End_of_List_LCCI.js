/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function(head, k) {
    // 快慢指针
    var fast = head;
    var slow = head;
    var i = 0;
    while (i <= k - 1) {
        fast = fast.next;
        i++;
    }
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow.val;
};
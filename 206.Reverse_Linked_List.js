/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 边遍历，边翻转
    var prev = null;
    var curr = head;
    while (head !== null) {
        curr = head;
        head = head.next;
        curr.next = prev;
        prev = curr;
    }
    return prev;
};
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
var removeDuplicateNodes = function(head) {
    var slow = head
    while(slow) {
        var fast = slow  //定义在while里边，每一次循环都将fast定位到当前的slow位置
        while(fast.next) {
            if(fast.next.val === slow.val) {
                fast.next = fast.next.next
            } else {
                fast = fast.next
            }
        }
        slow = slow.next
    }
    return head
};
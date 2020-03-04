/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 哈希
    // var map = new Map();
    // while(head) {
    //     if(map.has(head)) {
    //         return true;
    //     }
    //     map.set(head, 1);
    //     head = head.next;
    // }
    // return false;


    // 快慢指针
    var fast = head,
        slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) {
            return true;
        }
    }
    return false;
};
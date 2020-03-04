/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // hash
    // var map = new Map()
    // while(headA){
    //     map.set(headA, true)
    //     headA = headA.next
    // }
    // while(headB){
    //     if(map.get(headB)) {
    //         return headB;
    //     }
    //     headB = headB.next
    // }
    // return null;


    // 链表长度差（还可用双链表循环执向来解决长度差）
    var lenA = 0,
        lenB = 0;
    var a = headA,
        b = headB;
    while (a) {
        lenA++;
        a = a.next;
    }
    while (b) {
        lenB++;
        b = b.next;
    }
    var more = Math.abs(lenA - lenB);

    if (lenA > lenB) {
        while (more--) {
            headA = headA.next;
        }
    } else {
        while (more--) {
            headB = headB.next;
        }
    }
    while (headA && headB) {
        if (headA === headB) {
            return headA;
        }
        headA = headA.next;
        headB = headB.next;
    }
    return null;
};
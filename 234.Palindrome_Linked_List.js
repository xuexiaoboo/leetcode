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

// 判断回文链表

var isPalindrome = function(head) {
    // 快慢指针
    // var prev = null;
    // var curr = head;
    // var slow = head;
    // var fast = head;

    // if(head === null || head.next === null) {
    //     return true;
    // }

    // fast判断偶数个节点的List，fast.next判断奇数个节点的List
    // while(fast !== null && fast.next !== null) {
    //     curr = slow;
    //     slow = slow.next;
    //     fast = fast.next.next;
    //     curr.next = prev;
    //     prev = curr;
    // }

    // if(fast !== null) {
    //     slow = slow.next;
    // }

    // while(prev !== null && slow !== null) {
    //     if(prev.val !== slow.val) {
    //         return false;
    //     }
    //     prev = prev.next;
    //     slow = slow.next;
    // }
    // return true;



    //数组api
    var res = [];
    while (head !== null) {
        res.push(head.val);
        head = head.next;
    }

    while (res.length > 1) {
        if (res.pop() !== res.shift()) {
            return false;
        }
    }
    return true;
};
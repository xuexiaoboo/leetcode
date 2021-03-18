/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
  /**
   * 将要反转的链表部分，从第二个开始一个一个往前边插，知道反转链表结束及完成反转
   * 
   * 1 -> 2 -> 3 -> 4  ==>  2 -> 1 -> 3 -> 4  ==>   3 -> 2 -> 1 -> 4   ==>  4 -> 3 -> 2 -> 1
   */

  // 设置 dummyNode 是这一类问题的一般做法
  const dummy_node = new ListNode(-1);
  dummy_node.next = head;
  let pre = dummy_node;
  for (let i = 0; i < left - 1; ++i) {
      pre = pre.next;
  }

  let cur = pre.next;
  for (let i = 0; i < right - left; ++i) {
      const next = cur.next;
      cur.next = next.next;
      next.next = pre.next;
      pre.next = next;
  }
  return dummy_node.next;
};
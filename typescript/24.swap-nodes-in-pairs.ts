/*
 * @lc app=leetcode id=24 lang=typescript
 *
 * [24] Swap Nodes in Pairs
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
    if (head && head.next) {
        let temp: ListNode | null = head.next.next;
        let pairNode: ListNode | null = head.next;
        head.next.next = head;
        head.next = temp;
        head = pairNode;
    } else {
        return head;
    }
    head.next.next = swapPairs(head.next.next);
    return head;
};
// @lc code=end


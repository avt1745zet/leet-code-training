/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
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

function reverseList(head: ListNode | null, result: ListNode | null = null): ListNode | null {
    if (!head)
        return result;

    let temp: ListNode | null = head.next;

    head.next = result;
    result = head;

    return reverseList(temp, result);
};
// @lc code=end


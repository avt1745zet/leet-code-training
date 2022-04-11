/*
 * @lc app=leetcode id=61 lang=typescript
 *
 * [61] Rotate List
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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next || k === 0) {
        return head;
    }
    let temp: ListNode | null = head;
    let lastNode: ListNode | null = null;
    let length: number = 1;
    while (head.next) {
        lastNode = head;
        head = head.next;
        length++;
    }
    k %= length;
    if (k === 0) {
        return temp;
    }
    lastNode.next = null;
    head.next = temp;
    return rotateRight(head, k - 1);
};
// @lc code=end


/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
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
//* Reference to https://en.wikipedia.org/wiki/Cycle_detection#Floyd's_tortoise_and_hare
function hasCycle(head: ListNode | null): boolean {
    if (!head)
        return false;
    let walker: ListNode | null = head;
    let runner: ListNode | null = head;
    while (runner.next && runner.next.next) {
        walker = walker.next;
        runner = runner.next.next;
        if (walker === runner)
            return true;
    }
    return false;
};
// @lc code=end


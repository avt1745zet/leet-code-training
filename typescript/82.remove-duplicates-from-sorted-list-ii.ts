/*
 * @lc app=leetcode id=82 lang=typescript
 *
 * [82] Remove Duplicates from Sorted List II
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let result: ListNode | null = null;
    let vals: Array<number> = new Array<number>();
    let duplicates: Array<number> = new Array<number>();
    let curNode: ListNode | null = head;
    while (curNode) {
        if (!duplicates.includes(curNode.val) && vals.includes(curNode.val))
            duplicates.push(curNode.val);
        vals.push(curNode.val);
        curNode = curNode.next;
    }
    curNode = head;
    let curResultNode: ListNode | null = null;
    while (curNode) {
        if (!duplicates.includes(curNode.val)) {
            if (!curResultNode) {
                result = curNode;
                curResultNode = result;
            } else {
                curResultNode.next = curNode;
                curResultNode = curResultNode.next;
            }
        } else if (curResultNode) {
            curResultNode.next = null;
        }
        curNode = curNode.next;
    }

    return result;
};
// @lc code=end


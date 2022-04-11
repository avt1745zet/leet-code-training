/*
 * @lc app=leetcode id=1721 lang=typescript
 *
 * [1721] Swapping Nodes in a Linked List
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

function swapNodes(head: ListNode | null, k: number): ListNode | null {
    let arr: Array<ListNode> = new Array<ListNode>();
    let curNode: ListNode = head;
    while (curNode) {
        arr.push(curNode);
        curNode = curNode.next;
    }
    let temp: number = arr[k - 1].val;
    arr[k - 1].val = arr[arr.length - k].val;
    arr[arr.length - k].val = temp;
    return head;
};
// @lc code=end


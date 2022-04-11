/*
 * @lc app=leetcode id=148 lang=typescript
 *
 * [148] Sort List
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

function sortList(head: ListNode | null): ListNode | null {
    const listNodeToArray = (head: ListNode | null) => {
        let result: Array<number> = new Array<number>();
        let curNode: ListNode = head;
        while (curNode) {
            result.push(curNode.val);
            curNode = curNode.next;
        }
        return result;
    }
    const arrayToListNode = (arr: Array<number>) => {
        let result: ListNode | null = null;
        let curNode: ListNode | null = null;
        for (let i: number = 0; i < arr.length; i++) {
            if (curNode) {
                curNode.next = new ListNode(arr[i]);
                curNode = curNode.next;
            }
            else
                curNode = new ListNode(arr[i]);
            if (i === 0)
                result = curNode;
        }
        return result;
    }
    let arr: Array<number> = listNodeToArray(head);
    arr.sort((a, b) => a - b);
    let result: ListNode | null = arrayToListNode(arr);
    return result;
};
// @lc code=end


/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
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
    let result: ListNode = null;
    let curHead: ListNode = null;
    while (head) {
        if (isListHasNum(result, head.val)) {
            //
        } else {
            if (!result) {
                result = new ListNode(head.val);
                curHead = result;
            } else {
                curHead.next = new ListNode(head.val);
                curHead = curHead.next;
            }
        }
        head = head.next;
    }
    return result;
};

function isListHasNum(list: ListNode | null, num: number): boolean {
    let head: ListNode = list;
    while (head) {
        if (num === head.val) {
            return true;
        } else {
            head = head.next;
        }
    }
    return false;
}
// @lc code=end


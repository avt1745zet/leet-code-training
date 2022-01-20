/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
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

function removeNthFromEnd ( head: ListNode | null, n: number ): ListNode | null {
	let arr: Array<ListNode> = [];
	let node: ListNode = head;
	while ( node ) {
		arr.push( node );
		node = node.next;
	}
	let removeNode: ListNode = arr[ arr.length - n ];
	let fatherNode: ListNode = arr[ arr.length - n - 1 ];
	let childNode: ListNode = removeNode.next;

	if ( fatherNode ) {
		fatherNode.next = childNode;
	} else {
		head = childNode;
	}

	return head;
};
// @lc code=end


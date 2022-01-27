/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

function mergeTwoLists ( list1: ListNode | null, list2: ListNode | null ): ListNode | null {
	let result: ListNode;
	if ( list1 === null ) {
		result = list2;
		return result;
	}
	if ( list2 === null ) {
		result = list1;
		return result;
	}
	let resultNext: ListNode;
	while ( true ) {
		if ( !list1 ) {
			resultNext.next = list2;
			break;
		}
		if ( !list2 ) {
			resultNext.next = list1;
			break;
		}
		if ( list2.val > list1.val ) {
			if ( resultNext ) {
				resultNext.next = new ListNode( list1.val );
				resultNext = resultNext.next;
			} else {
				result = new ListNode( list1.val );
				resultNext = result;
			}
			list1 = list1.next;
		} else {
			if ( resultNext ) {
				resultNext.next = new ListNode( list2.val )
				resultNext = resultNext.next;
			} else {
				result = new ListNode( list2.val );
				resultNext = result;
			}
			list2 = list2.next;
		}
	}

	return result;
};
// @lc code=end


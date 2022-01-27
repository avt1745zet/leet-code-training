/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates ( nums: number[] ): number {
	let lastNum: number;
	let temp: Array<number> = [];
	for ( let i: number = 0; i < nums.length; i++ ) {
		if ( nums[ i ] !== lastNum ) {
			temp.push( nums[ i ] );
			lastNum = nums[ i ];
		}
	}
	nums.splice( 0, nums.length );
	nums.push( ...temp );
	return nums.length;
};
// @lc code=end


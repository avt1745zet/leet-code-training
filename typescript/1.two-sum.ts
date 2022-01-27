/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum ( nums: Array<number>, target: number ): Array<number> {
	for ( let i: number = 0; i < nums.length; i++ ) {
		const num1: number = nums[ i ];
		for ( let j: number = i + 1; j < nums.length; j++ ) {
			const num2: number = nums[ j ];
			if ( num1 + num2 === target ) {
				return [ i, j ];
			}
		}
	}
};
// @lc code=end


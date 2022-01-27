/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome ( x: number ): boolean {
	let result: boolean = true;
	if ( x >= 0 ) {
		let str: string = x.toString();
		let leftStartIndex: number;
		let rightStartIndex: number;
		let checkBlockSize: number;

		if ( str.length === 1 ) {
			return true;
		}
		if ( str.length % 2 === 0 ) {
			checkBlockSize = str.length / 2;
			leftStartIndex = checkBlockSize - 1;
			rightStartIndex = checkBlockSize;
		} else {
			checkBlockSize = ( str.length - 1 ) / 2;
			leftStartIndex = checkBlockSize - 1;
			rightStartIndex = checkBlockSize + 1;
		}

		for ( let i: number = 0; i < checkBlockSize; i++ ) {
			if ( str[ leftStartIndex ] !== str[ rightStartIndex ] ) {
				return false;
			}
			leftStartIndex--;
			rightStartIndex++;
		}
	} else {
		return false;
	}
	return result;
};
// @lc code=end


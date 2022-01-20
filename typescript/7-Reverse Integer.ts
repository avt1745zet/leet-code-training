/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse ( x: number ): number {
	let result: number;
	let reverseStr: string = Math.abs( x ).toString().split( '' ).reverse().join( '' );
	if ( Math.sign( x ) === -1 ) {
		reverseStr = '-' + reverseStr;
	}
	result = Number( reverseStr );
	result = result >= Math.pow( 2, 31 ) - 1 ? 0 : result;
	result = result <= -Math.pow( 2, 31 ) ? 0 : result;
	return result;
};
// @lc code=end


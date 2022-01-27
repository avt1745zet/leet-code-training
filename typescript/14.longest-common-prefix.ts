/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix ( strs: string[] ): string {
	let result: string = undefined;
	for ( let i: number = 0; i < strs.length; i++ ) {
		let prefix: string = '';
		for ( let j: number = 0; j < strs[ i ].length; j++ ) {
			if ( result === undefined || result[ j ] === strs[ i ][ j ] ) {
				prefix += strs[ i ][ j ];
			} else {
				break;
			}
		}
		result = prefix;
		if ( result === '' ) {
			break;
		}
	}
	return result;
};
// @lc code=end


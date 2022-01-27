/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring ( s: string ): number {
	let result: number = 0;

	let blockSize: number = 0;
	let startIdx: number = 0;
	let endIdx: number;

	if ( s.length === 0 ) {
		return 0;
	}

	while ( true ) {
		endIdx = startIdx + blockSize > s.length - 1 ? s.length - 1 : startIdx + blockSize;
		if ( hasSameChar( s.slice( startIdx, endIdx + 1 ) ) ) {
			blockSize--;
			startIdx++;
		} else {
			if ( blockSize >= result ) {
				result = blockSize + 1;
			}
			if ( endIdx === s.length - 1 ) {
				break;
			}
			blockSize++;
		}
	}
	return result;
};

function hasSameChar ( s: string ): boolean {
	let result: boolean = false;
	for ( let i: number = 0; i < s.length; i++ ) {
		if ( s.includes( s[ i ], i + 1 ) ) {
			result = true;
			break;
		}
	}
	return result;
}
// @lc code=end


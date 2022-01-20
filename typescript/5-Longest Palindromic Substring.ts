/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome ( s: string ): string {
	let result: string = '';

	let resultLeftIndex: number = 0;
	let resultRightIndex: number = 0;
	let resultLength: number = 0;

	const strCenterIndex: number = ( s.length - 1 ) / 2;

	for ( let i: number = 0; i <= ( s.length - 1 ) / 2; i += 0.5 ) {
		let currentCenterIndex: number;
		// Right Search
		currentCenterIndex = strCenterIndex + i;

		let leftIndex: number;
		let rightIndex: number;

		if ( Number.isInteger( currentCenterIndex ) ) {
			leftIndex = currentCenterIndex - 1;
			rightIndex = currentCenterIndex + 1;
		} else {
			leftIndex = Math.floor( currentCenterIndex );
			rightIndex = Math.ceil( currentCenterIndex );
		}

		while ( leftIndex >= 0 && rightIndex <= s.length - 1 ) {
			if ( s[ leftIndex ] === s[ rightIndex ] ) {
				if ( rightIndex - leftIndex + 1 > resultLength ) {
					resultLeftIndex = leftIndex;
					resultRightIndex = rightIndex;
					resultLength = resultRightIndex - resultLeftIndex + 1;
				}
			} else {
				break;
			}
			leftIndex--;
			rightIndex++;
		}

		// Left Search
		currentCenterIndex = strCenterIndex - i;

		if ( Number.isInteger( currentCenterIndex ) ) {
			leftIndex = currentCenterIndex - 1;
			rightIndex = currentCenterIndex + 1;
		} else {
			leftIndex = Math.floor( currentCenterIndex );
			rightIndex = Math.ceil( currentCenterIndex );
		}

		while ( leftIndex >= 0 && rightIndex <= s.length - 1 ) {
			if ( s[ leftIndex ] === s[ rightIndex ] ) {
				if ( rightIndex - leftIndex + 1 > resultLength ) {
					resultLeftIndex = leftIndex;
					resultRightIndex = rightIndex;
					resultLength = resultRightIndex - resultLeftIndex + 1;
				}
			} else {
				break;
			}
			leftIndex--;
			rightIndex++;
		}
	}

	result = s.slice( resultLeftIndex, resultRightIndex + 1 );

	return result;
};
// @lc code=end


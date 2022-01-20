/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
function convert ( s: string, numRows: number ): string {
	let result: string = '';
	const arr2d: Array<Array<string>> = new Array<Array<string>>();
	for ( let i: number = 0; i < s.length; i++ ) {
		//* cut head & foot
		const middleCount: number = numRows >= 2 ? numRows - 2 : 0;
		const groupCount: number = numRows + middleCount;
		const groupWidth: number = numRows >= 2 ? numRows - 1 : numRows;
		const quotient: number = Math.floor( i / groupCount );
		const remainder: number = i % groupCount;

		const column: number =
			quotient * groupWidth + ( remainder > numRows - 1 ? remainder - numRows + 1 : 0 );
		const row: number =
			remainder < numRows ? remainder : ( numRows - 2 ) - ( remainder - numRows );
		if ( !arr2d[ column ] ) {
			arr2d[ column ] = new Array<string>();
		}
		arr2d[ column ][ row ] = s[ i ];
	}

	for ( let row: number = 0; row < numRows; row++ ) {
		for ( let column: number = 0; column < arr2d.length; column++ ) {
			if ( arr2d[ column ][ row ] ) {
				result += arr2d[ column ][ row ];
			}
		}
	}

	return result;
};
// @lc code=end


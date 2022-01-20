/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
function convert ( s: string, numRows: number ): string {
	if ( numRows === 1 ) {
		return s;
	}
	let result: string = '';
	for ( let row: number = 0; row < numRows; row++ ) {
		let belowAngle: number = ( numRows - 1 - row ) * 2;
		let upperAngle: number = row * 2;

		if ( belowAngle === 0 ) {
			belowAngle = upperAngle;
		}
		if ( upperAngle === 0 ) {
			upperAngle = belowAngle;
		}

		let curAngle: number = NaN;
		for ( let index: number = row; index < s.length; index += curAngle ) {
			result += s[ index ];

			if ( isNaN( curAngle ) ) {
				curAngle = belowAngle;
			} else {
				if ( curAngle === belowAngle ) {
					curAngle = upperAngle;
				} else {
					curAngle = belowAngle;
				}
			}
		}
	}

	return result;
};
// @lc code=end


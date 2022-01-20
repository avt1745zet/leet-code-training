/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
interface IBracket {
	leftSymbol: string;
	rightSymbol: string;
}

const BRACKETS: Array<IBracket> = [
	{ leftSymbol: '(', rightSymbol: ')' },
	{ leftSymbol: '[', rightSymbol: ']' },
	{ leftSymbol: '{', rightSymbol: '}' }
]

function isValid ( s: string ): boolean {
	let paringSymbols: string = '';

	for ( let i: number = 0; i < s.length; i++ ) {
		let direction: number = 0;
		let pairSymbol: string;

		for ( let j: number = 0; j < BRACKETS.length; j++ ) {
			if ( s[ i ] === BRACKETS[ j ].leftSymbol ) {
				direction = -1;
				pairSymbol = BRACKETS[ j ].rightSymbol;
				break;
			} else if ( s[ i ] === BRACKETS[ j ].rightSymbol ) {
				direction = 1;
				pairSymbol = BRACKETS[ j ].leftSymbol;
				break;
			}
		}

		if ( direction === -1 ) {
			paringSymbols += s[ i ];
		} else if ( direction === 1 && paringSymbols[ paringSymbols.length - 1 ] === pairSymbol ) {
			paringSymbols = paringSymbols.slice( 0, - 1 );
		} else {
			return false;
		}
	}

	return paringSymbols.length === 0;
};
// @lc code=end


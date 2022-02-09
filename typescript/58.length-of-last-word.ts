/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
const SPACE_LETTER: string = ' ';

function lengthOfLastWord(s: string): number {
    let result: number = 0;
    for (let i: number = s.length - 1; i >= 0; i--) {
        if (s[i] === SPACE_LETTER ) {
            if( result === 0 ){
                continue;
            } else {
                break;
            }
        }
        result++;
    }
    return result;
};
// @lc code=end


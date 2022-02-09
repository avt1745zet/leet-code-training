/*
 * @lc app=leetcode id=2027 lang=typescript
 *
 * [2027] Minimum Moves to Convert String
 */

// @lc code=start
function minimumMoves(s: string): number {
    let result: number = 0;
    for (let i: number = 0; i < s.length; i++) {
        if (s[i] === 'X') {
            result++;
            i += 2;
        }
    }
    return result;
};
// @lc code=end


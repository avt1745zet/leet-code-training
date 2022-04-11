/*
 * @lc app=leetcode id=1688 lang=typescript
 *
 * [1688] Count of Matches in Tournament
 */

// @lc code=start
function numberOfMatches(n: number): number {
    let result: number = 0;
    while (n > 1) {
        result += Math.floor(n / 2);
        n = Math.ceil(n / 2);
    }
    return result;
};
// @lc code=end


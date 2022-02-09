/*
 * @lc app=leetcode id=2119 lang=typescript
 *
 * [2119] A Number After a Double Reversal
 */

// @lc code=start
function isSameAfterReversals(num: number): boolean {
    if (num < 10) {
        return true;
    }
    return num % 10 !== 0;
};
// @lc code=end


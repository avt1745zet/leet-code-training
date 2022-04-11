/*
 * @lc app=leetcode id=29 lang=typescript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
function divide(dividend: number, divisor: number): number {
    return Math.min(2147483647, dividend / divisor > 0 ? Math.floor(dividend / divisor) : Math.ceil(dividend / divisor));
};
// @lc code=end


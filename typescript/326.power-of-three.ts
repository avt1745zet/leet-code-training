/*
 * @lc app=leetcode id=326 lang=typescript
 *
 * [326] Power of Three
 */

// @lc code=start
function isPowerOfThree(n: number): boolean {
    // 3^19 = 1162261467
    return n <= 0 ? false : 1162261467 % n === 0;
};
// @lc code=end


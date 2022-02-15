/*
 * @lc app=leetcode id=191 lang=typescript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
function hammingWeight(n: number): number {
    let result: number = 0;
    while (n > 0) {
        result += (n % 2);
        n = Math.floor(n / 2);
    }
    return result;
};
// @lc code=end


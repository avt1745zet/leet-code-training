/*
 * @lc app=leetcode id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPow(x: number, n: number): number {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    return n % 2 === 0 ? myPow(x * x, n / 2) : x * myPow(x * x, n / 2 - 0.5);
};
// @lc code=end


/*
 * @lc app=leetcode id=1716 lang=typescript
 *
 * [1716] Calculate Money in Leetcode Bank
 */

// @lc code=start
function totalMoney(n: number): number {
    let result: number = 0;
    for (let i: number = 1; i <= n; i++) {
        result += (Math.ceil(i / 7) - 1 + (i % 7 > 0 ? i % 7 : 7));
    }
    return result;
};
// @lc code=end


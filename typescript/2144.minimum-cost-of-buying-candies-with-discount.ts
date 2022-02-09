/*
 * @lc app=leetcode id=2144 lang=typescript
 *
 * [2144] Minimum Cost of Buying Candies With Discount
 */

// @lc code=start
function minimumCost(cost: number[]): number {
    let result: number = 0;
    cost.sort((a, b) => b - a);
    for (let i: number = 0; i < cost.length; i++) {
        if (i % 3 < 2) {
            result += cost[i];
        }
    }
    return result;
};
// @lc code=end


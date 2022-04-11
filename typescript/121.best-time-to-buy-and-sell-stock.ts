/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let result: number = 0;

    let curMaxIdx: number = undefined;
    let curMinIdx: number = undefined;

    for (let i: number = 0; i < prices.length; i++) {
        if (curMinIdx === undefined || prices[i] < prices[curMinIdx]) {
            curMinIdx = i;
            curMaxIdx = undefined
        } else if (curMaxIdx === undefined || prices[i] > prices[curMaxIdx]) {
            curMaxIdx = i;
            if (prices[curMaxIdx] - prices[curMinIdx] > result) {
                result = prices[curMaxIdx] - prices[curMinIdx];
            }
        }
    }

    return result;
};
// @lc code=end


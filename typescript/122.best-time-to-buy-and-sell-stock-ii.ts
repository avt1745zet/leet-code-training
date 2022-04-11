/*
 * @lc app=leetcode id=122 lang=typescript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let result: number = 0;

    let curMinIndex: number = undefined;
    let curMaxIndex: number = undefined;

    for (let i: number = 0; i < prices.length; i++) {
        if (curMinIndex === undefined || prices[i] <= prices[curMaxIndex]) {
            if (curMaxIndex !== undefined && curMinIndex !== undefined) {
                result += (prices[curMaxIndex] - prices[curMinIndex]);
            }
            curMinIndex = i;
            curMaxIndex = i;
        } else if (curMaxIndex === undefined || prices[i] > prices[curMaxIndex]) {
            curMaxIndex = i;
        }
    }
    if (curMaxIndex === prices.length - 1) {
        result += (prices[curMaxIndex] - prices[curMinIndex]);
    }

    return result;
};
// @lc code=end


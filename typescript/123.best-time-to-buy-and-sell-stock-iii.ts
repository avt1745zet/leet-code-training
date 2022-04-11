/*
 * @lc app=leetcode id=123 lang=typescript
 *
 * [123] Best Time to Buy and Sell Stock III
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let result: number = 0;

    let curMaxIdx: number = undefined;
    let curMinIdx: number = undefined;
    let maxIdx: number = undefined;
    let minIdx: number = undefined;

    for (let i: number = 0; i < prices.length; i++) {
        if (curMinIdx === undefined || prices[i] < prices[curMinIdx]) {
            curMinIdx = i;
            curMaxIdx = undefined
        } else if (curMaxIdx === undefined || prices[i] > prices[curMaxIdx]) {
            curMaxIdx = i;
            if (prices[curMaxIdx] - prices[curMinIdx] > result) {
                result = prices[curMaxIdx] - prices[curMinIdx];
                maxIdx = curMaxIdx;
                minIdx = curMinIdx;
            }
        }
    }

    let leftPrices: Array<number> = prices.slice(0, minIdx);
    let rightPrices: Array<number> = prices.slice(maxIdx, prices.length);

    let leftResult: number = 0;

    curMaxIdx = undefined;
    curMinIdx = undefined;
    maxIdx = undefined;
    minIdx = undefined;

    for (let i: number = 0; i < leftPrices.length; i++) {
        if (curMinIdx === undefined || leftPrices[i] < leftPrices[curMinIdx]) {
            curMinIdx = i;
            curMaxIdx = undefined
        } else if (curMaxIdx === undefined || leftPrices[i] > leftPrices[curMaxIdx]) {
            curMaxIdx = i;
            if (leftPrices[curMaxIdx] - leftPrices[curMinIdx] > leftResult) {
                leftResult = leftPrices[curMaxIdx] - leftPrices[curMinIdx];
                maxIdx = curMaxIdx;
                minIdx = curMinIdx;
            }
        }
    }

    let rightResult: number = 0;

    curMaxIdx = undefined;
    curMinIdx = undefined;
    maxIdx = undefined;
    minIdx = undefined;

    for (let i: number = 0; i < rightPrices.length; i++) {
        if (curMinIdx === undefined || rightPrices[i] < rightPrices[curMinIdx]) {
            curMinIdx = i;
            curMaxIdx = undefined
        } else if (curMaxIdx === undefined || rightPrices[i] > rightPrices[curMaxIdx]) {
            curMaxIdx = i;
            if (rightPrices[curMaxIdx] - rightPrices[curMinIdx] > rightResult) {
                rightResult = rightPrices[curMaxIdx] - rightPrices[curMinIdx];
                maxIdx = curMaxIdx;
                minIdx = curMinIdx;
            }
        }
    }
    [1, 6, 2, 7]
    result += Math.max(leftResult, rightResult);

    return result;
};
// @lc code=end


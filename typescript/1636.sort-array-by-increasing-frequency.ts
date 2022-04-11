/*
 * @lc app=leetcode id=1636 lang=typescript
 *
 * [1636] Sort Array by Increasing Frequency
 */

// @lc code=start
function frequencySort(nums: number[]): number[] {
    let numberAmountArray: Array<{ num: number, amount: number }> =
        new Array<{ num: number, amount: number }>();
    nums.sort((a, b) => a - b);
    let amount: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        amount++;
        if (nums[i + 1] === undefined || nums[i + 1] !== nums[i]) {
            numberAmountArray.push({ num: nums[i], amount: amount });
            amount = 0;
        }
    }
    numberAmountArray.sort((a, b) =>
        a.amount - b.amount === 0 ? b.num - a.num : a.amount - b.amount);
    return numberAmountArray.map(item => {
        let result: Array<number> = new Array<number>();
        for (let i: number = 0; i < item.amount; i++) {
            result.push(item.num);
        }
        return result;
    }).reduce((a, b) => [...a, ...b]);
};
// @lc code=end


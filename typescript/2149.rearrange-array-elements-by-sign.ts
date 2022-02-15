/*
 * @lc app=leetcode id=2149 lang=typescript
 *
 * [2149] Rearrange Array Elements by Sign
 */

// @lc code=start
function rearrangeArray(nums: number[]): number[] {
    let result: Array<number> = new Array<number>();
    let positiveNums: Array<number> = nums.filter(num => num >= 0);
    let negativeNums: Array<number> = nums.filter(num => num < 0);
    for (let i: number = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            result.push(positiveNums[Math.floor(i / 2)]);
        } else {
            result.push(negativeNums[Math.floor(i / 2)]);
        }
    }
    return result;
};
// @lc code=end


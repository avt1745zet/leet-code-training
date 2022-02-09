/*
 * @lc app=leetcode id=2016 lang=typescript
 *
 * [2016] Maximum Difference Between Increasing Elements
 */

// @lc code=start
function maximumDifference(nums: number[]): number {
    let result: number = -1;
    let minNum: number = Infinity;

    for (let i: number = 0; i < nums.length; i++) {
        result = Math.max(result, nums[i] - minNum);
        minNum = Math.min(nums[i], minNum);
    }

    result = result === 0 ? -1 : result;

    return result;
};
// @lc code=end


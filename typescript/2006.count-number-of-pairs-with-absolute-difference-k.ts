/*
 * @lc app=leetcode id=2006 lang=typescript
 *
 * [2006] Count Number of Pairs With Absolute Difference K
 */

// @lc code=start
function countKDifference(nums: number[], k: number): number {
    let result: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[j] - nums[i]) === k) {
                result++;
            }
        }
    }
    return result;
};
// @lc code=end


/*
 * @lc app=leetcode id=1984 lang=typescript
 *
 * [1984] Minimum Difference Between Highest and Lowest of K Scores
 */

// @lc code=start
function minimumDifference(nums: number[], k: number): number {
    let result: number = Infinity;
    if (nums.length === 1 || k === 1) {
        return 0;
    }
    nums.sort((a, b) => a - b);

    for (let i: number = 0; i < nums.length - (k - 1); i++) {
        let diff: number = nums[i + (k - 1)] - nums[i];
        if (diff < result) {
            result = diff;
        }
    }

    return result;
};
// @lc code=end


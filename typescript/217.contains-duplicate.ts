/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    nums.sort((a, b) => a - b);
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i - 1] !== undefined && nums[i] === nums[i - 1]) {
            return true;
        }
    }
    return false;
};
// @lc code=end


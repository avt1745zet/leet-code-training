/*
 * @lc app=leetcode id=41 lang=typescript
 *
 * [41] First Missing Positive
 */

// @lc code=start
function firstMissingPositive(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let lastNum: number = 0;
    for (let i: number = nums.findIndex(num => num > 0); i < nums.length; i++) {
        if (i === -1 || nums[i] > lastNum + 1) {
            return lastNum + 1;
        }
        lastNum = nums[i];
    }
    return nums[nums.length - 1] + 1;
};
// @lc code=end


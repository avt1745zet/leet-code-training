/*
 * @lc app=leetcode id=2057 lang=typescript
 *
 * [2057] Smallest Index With Equal Value
 */

// @lc code=start
function smallestEqual(nums: number[]): number {
    for (let i: number = 0; i < nums.length; i++) {
        if (i % 10 === nums[i]) {
            return i;
        }
    }
    return -1;
};
// @lc code=end


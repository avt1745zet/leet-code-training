/*
 * @lc app=leetcode id=905 lang=typescript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
function sortArrayByParity(nums: number[]): number[] {
    nums.sort(a => a % 2 === 0 ? -1 : 0);
    return nums;
};
// @lc code=end


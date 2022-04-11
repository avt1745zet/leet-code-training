/*
 * @lc app=leetcode id=1470 lang=typescript
 *
 * [1470] Shuffle the Array
 */

// @lc code=start
function shuffle(nums: number[], n: number): number[] {
    for (let i: number = 0; i < n; i++) {
        nums.splice(i * 2 + 1, 0, ...nums.splice(n + i, 1));
    }
    return nums;
};
// @lc code=end


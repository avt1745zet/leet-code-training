/*
 * @lc app=leetcode id=2154 lang=typescript
 *
 * [2154] Keep Multiplying Found Values by Two
 */

// @lc code=start
function findFinalValue(nums: number[], original: number): number {
    let curNum: number = original;
    while (nums.includes(curNum)) {
        curNum *= 2;
    }
    return curNum;
};
// @lc code=end


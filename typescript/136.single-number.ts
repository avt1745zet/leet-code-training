/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {
    let result: number;
    nums.sort((a, b) => a - b);
    for (let i: number = 0; i < nums.length;) {
        if (nums[i + 1] !== undefined && nums[i] === nums[i + 1]) {
            i += 2;
        } else {
            result = nums[i];
            break;
        }
    }
    return result;
};
// @lc code=end


/*
 * @lc app=leetcode id=1608 lang=typescript
 *
 * [1608] Special Array With X Elements Greater Than or Equal X
 */

// @lc code=start
function specialArray(nums: number[]): number {
    let result: number = -1;
    nums.sort((a, b) => b - a);
    for (let i: number = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i], i + 1) === -1) {
            if ((i + 1) <= nums[i] && (nums[i + 1] === undefined || nums[i + 1] < i + 1)) {
                return i + 1;
            }
        }
    }
    return result;
};
// @lc code=end


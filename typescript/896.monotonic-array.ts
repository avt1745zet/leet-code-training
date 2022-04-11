/*
 * @lc app=leetcode id=896 lang=typescript
 *
 * [896] Monotonic Array
 */

// @lc code=start
function isMonotonic(nums: number[]): boolean {
    if (nums.length === 1)
        return true;
    let isIncreasing: boolean = undefined;
    for (let i: number = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            if (isIncreasing === true)
                return false;
            isIncreasing = false;
        } else if (nums[i - 1] < nums[i]) {
            if (isIncreasing === false)
                return false;
            isIncreasing = true;
        }
    }
    return true;
};
// @lc code=end


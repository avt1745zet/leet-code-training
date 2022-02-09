/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
    let result: number;
    let sum: number;
    nums.forEach(num => {
        if (sum === undefined || sum + num < num) {
            sum = num;
        } else {
            sum += num;
        }
        if (result === undefined || sum > result) {
            result = sum;
        }
    });
    return result;
};
// @lc code=end


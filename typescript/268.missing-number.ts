/*
 * @lc app=leetcode id=268 lang=typescript
 *
 * [268] Missing Number
 */

// @lc code=start
function missingNumber(nums: number[]): number {
    let expectedSum: number = 0;
    for (let i: number = 1; i <= nums.length; i++) {
        expectedSum += i;
    }
    let sum: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return expectedSum - sum;
};
// @lc code=end


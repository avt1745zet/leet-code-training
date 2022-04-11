/*
 * @lc app=leetcode id=643 lang=typescript
 *
 * [643] Maximum Average Subarray I
 */

// @lc code=start
function findMaxAverage(nums: number[], k: number): number {
    let sum: number = 0;
    for (let i: number = 0; i < k; i++) {
        sum += nums[i];
    }
    let max: number = sum;
    for (let i: number = k; i < nums.length; i++) {
        sum += nums[i];
        sum -= nums[i - k];
        max = Math.max(max, sum);
    }
    return max / k;
};
// @lc code=end


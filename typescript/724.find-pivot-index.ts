/*
 * @lc app=leetcode id=724 lang=typescript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
function pivotIndex(nums: number[]): number {
    let result: number = -1;
    for (let i: number = 0; i < nums.length; i++) {
        let leftSum: number = 0;
        let rightSum: number = 0;
        for (let j: number = 0; j < i; j++) {
            leftSum += nums[j];
        }
        for (let j: number = i + 1; j < nums.length; j++) {
            rightSum += nums[j];
        }
        if (leftSum === rightSum) {
            result = i;
            break;
        }
    }
    return result;
};
// @lc code=end


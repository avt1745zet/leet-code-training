/*
 * @lc app=leetcode id=75 lang=typescript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let leftIdx: number = 0;
    let rightIdx: number = nums.length - 1;
    for (let i: number = leftIdx; i <= rightIdx;) {
        if (nums[i] === 0) {
            nums[i] = nums[leftIdx];
            nums[leftIdx] = 0;
            leftIdx++;
            i++;
        } else if (nums[i] === 2) {
            nums[i] = nums[rightIdx];
            nums[rightIdx] = 2;
            rightIdx--;
        } else {
            i++;
        }
    }
};
// @lc code=end


/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let moveCount: number = 0;
    let index: number = 0;
    while (moveCount < nums.length) {
        if (nums[index] === 0) {
            nums.push(0);
            nums.splice(index, 1);
        } else {
            index++;
        }
        moveCount++;
    }
};
// @lc code=end


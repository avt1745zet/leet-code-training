/*
 * @lc app=leetcode id=2148 lang=typescript
 *
 * [2148] Count Elements With Strictly Smaller and Greater Elements 
 */

// @lc code=start
function countElements(nums: number[]): number {
    let result: number = 0;
    let min: number = Infinity;
    let max: number = -Infinity;
    nums.forEach(num => {
        min = num < min ? num : min;
        max = num > max ? num : max;
    });
    nums.forEach(num => {
        if (num > min && num < max) {
            result++;
        }
    });
    return result;
};
// @lc code=end


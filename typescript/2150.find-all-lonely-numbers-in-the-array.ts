/*
 * @lc app=leetcode id=2150 lang=typescript
 *
 * [2150] Find All Lonely Numbers in the Array
 */

// @lc code=start
function findLonely(nums: number[]): number[] {
    let result: Array<number> = new Array<number>();
    nums.sort((a, b) => a - b);
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1] && nums[i] !== nums[i + 1] - 1 &&
            nums[i] !== nums[i - 1] && nums[i] !== nums[i - 1] + 1) {
            result.push(nums[i]);
        }
    }
    return result;
};
// @lc code=end


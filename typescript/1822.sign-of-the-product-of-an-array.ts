/*
 * @lc app=leetcode id=1822 lang=typescript
 *
 * [1822] Sign of the Product of an Array
 */

// @lc code=start
function arraySign(nums: number[]): number {
    if (nums.includes(0)) {
        return 0;
    } else if (nums.filter(num => num < 0).length % 2 === 1) {
        return -1;
    } else {
        return 1;
    }
};
// @lc code=end


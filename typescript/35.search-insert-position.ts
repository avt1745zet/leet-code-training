/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
    let result: number;
    for (let i: number = 0; i < nums.length; i++) {
        if (target === nums[i] || nums[i] > target) {
            result = i;
            break;
        }
    }
    if( result === undefined ){
        result = nums.length;
    }
    return result;
};
// @lc code=end


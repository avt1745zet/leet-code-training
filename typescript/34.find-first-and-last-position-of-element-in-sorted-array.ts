/*
 * @lc app=leetcode id=34 lang=typescript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
    let result: Array<number> = new Array<number>(-1, -1);
    if (nums.length === 0)
        return result;
    let startIndex: number = 0;
    let endIndex: number = nums.length - 1;
    while (true) {
        let idx: number = Math.floor((startIndex + endIndex) / 2);
        if (nums[idx] === target) {
            if ((nums[idx - 1] === undefined || nums[idx - 1] < target)) {
                result[0] = idx;
                break;
            } else {
                endIndex = idx - 1;
            }
        } else if (startIndex === endIndex || startIndex > endIndex) {
            return result;
        } else if (nums[idx] > target) {
            endIndex = idx - 1;
        } else {
            startIndex = idx + 1;
        }
    }
    startIndex = 0;
    endIndex = nums.length - 1;
    while (true) {
        let idx: number = Math.floor((startIndex + endIndex) / 2);
        if (nums[idx] === target) {
            if ((nums[idx + 1] === undefined || nums[idx + 1] > target)) {
                result[1] = idx;
                break;
            } else {
                startIndex = idx + 1;
            }
        } else if (nums[idx] > target) {
            endIndex = idx - 1;
        } else {
            startIndex = idx + 1;
        }
    }
    return result;
};
// @lc code=end


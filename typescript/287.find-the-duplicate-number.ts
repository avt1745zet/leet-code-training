/*
 * @lc app=leetcode id=287 lang=typescript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
    let arr: Array<boolean> = new Array<boolean>(nums.length);
    for (let i: number = 0; i < nums.length; i++) {
        if (arr[nums[i]])
            return nums[i];
        else
            arr[nums[i]] = true;
    }
};
// @lc code=end


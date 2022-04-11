/*
 * @lc app=leetcode id=45 lang=typescript
 *
 * [45] Jump Game II
 */

// @lc code=start
function jump(nums: number[]): number {
    let result: number = 0;
    let goalIdx: number = nums.length - 1;
    for (let i: number = 0; i < goalIdx; i++) {
        if (nums[i] >= goalIdx - i) {
            goalIdx = i;
            result++;
            if (goalIdx === 0) {
                break;
            } else {
                i = -1;
            }
        }
    }
    return result;
};
// @lc code=end


/*
 * @lc app=leetcode id=1991 lang=typescript
 *
 * [1991] Find the Middle Index in Array
 */

// @lc code=start
function findMiddleIndex(nums: number[]): number {
    let result: number = -1;
    for (let i: number = 0; i < nums.length; i++) {
        let leftSum: number = i === 0
            ? 0
            : nums.slice(0, i).reduce((a, b) => a + b);
        let rightSum: number = i === nums.length - 1
            ? 0
            : nums.slice(i + 1, nums.length).reduce((a, b) => a + b);
        if (leftSum === rightSum) {
            result = i;
            break;
        }
    }
    return result;
};
// @lc code=end


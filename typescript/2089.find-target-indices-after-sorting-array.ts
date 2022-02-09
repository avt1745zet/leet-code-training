/*
 * @lc app=leetcode id=2089 lang=typescript
 *
 * [2089] Find Target Indices After Sorting Array
 */

// @lc code=start
function targetIndices(nums: number[], target: number): number[] {
    let result: Array<number> = [];
    nums.sort((a, b) => a - b);
    let firstIndex: number = nums.indexOf(target);
    if (firstIndex === -1) {
        return result;
    }
    let lastIndex: number = nums.lastIndexOf(target);
    for (let i: number = firstIndex; i <= lastIndex; i++) {
        result.push(i);
    }
    return result;
};
// @lc code=end


/*
 * @lc app=leetcode id=1920 lang=typescript
 *
 * [1920] Build Array from Permutation
 */

// @lc code=start
function buildArray(nums: number[]): number[] {
    let result: Array<number> = new Array<number>();
    nums.forEach((num, index, array) => {
        result.push(array[num]);
    });
    return result;
};
// @lc code=end


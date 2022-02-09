/*
 * @lc app=leetcode id=2099 lang=typescript
 *
 * [2099] Find Subsequence of Length K With the Largest Sum
 */

// @lc code=start
function maxSubsequence(nums: number[], k: number): number[] {
    let result: Array<number> = [];
    let requiredNums: Array<number> =
        [...nums].sort((a, b) => b - a).slice(0, k);
    for (let i: number = 0; result.length < k; i++) {
        if (requiredNums.includes(nums[i])) {
            result.push(nums[i]);
            requiredNums.splice(requiredNums.indexOf(nums[i]), 1);
        }
    }
    return result;
};
// @lc code=end


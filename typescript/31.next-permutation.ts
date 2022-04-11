/*
 * @lc app=leetcode id=31 lang=typescript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    let mins: Array<number> = new Array<number>();
    for (let i: number = nums.length - 1; i > -1; i--) {
        let smallestBigger: number = mins.filter(num => num > nums[i])[0];
        if (smallestBigger === undefined) {
            mins.push(nums[i]);
            mins.sort((a, b) => a - b);
        } else {
            let replace: number = nums[i];
            nums[i] = smallestBigger;
            mins[mins.indexOf(smallestBigger)] = replace;
            mins.sort((a, b) => a - b);
            nums.splice(i + 1, nums.length);
            nums.push(...mins);
            return;
        }
    }
    nums.sort((a, b) => a - b);
};
// @lc code=end


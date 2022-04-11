/*
 * @lc app=leetcode id=922 lang=typescript
 *
 * [922] Sort Array By Parity II
 */

// @lc code=start
function sortArrayByParityII(nums: number[]): number[] {
    let oddIdx: number = nums.length - 1;
    for (let i: number = 0; i < nums.length / 2;) {
        if (nums[i] % 2 === 1) {
            let temp: number = nums[i];
            nums[i] = nums[oddIdx]
            nums[oddIdx] = temp;
            oddIdx -= 1;
        } else {
            i++;
        }
    }
    for (let i: number = 1; i < nums.length / 2; i += 2) {
        let temp: number = nums[i];
        nums[i] = nums[nums.length - 1 - i]
        nums[nums.length - 1 - i] = temp;
    }
    return nums;
};
// @lc code=end


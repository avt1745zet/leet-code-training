/*
 * @lc app=leetcode id=1909 lang=typescript
 *
 * [1909] Remove One Element to Make the Array Strictly Increasing
 */

// @lc code=start
function canBeIncreasing(nums: number[]): boolean {
    let result: boolean = true;
    const checkIncreasing = (nums: Array<number>) => {
        let result: boolean = true;
        for (let i: number = 0; i < nums.length; i++) {
            if (nums[i - 1] && nums[i] <= nums[i - 1]) {
                result = false;
            }
        }
        return result;
    }
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i - 1] && nums[i] <= nums[i - 1]) {
            if (checkIncreasing([...nums.slice(0, i - 1), ...nums.slice(i, nums.length)]) ||
                checkIncreasing([...nums.slice(0, i), ...nums.slice(i + 1, nums.length)])) {
                    result = true;
                    break;
            } else {
                result = false;
                break;
            }
        }
    }
    return result;
};
// @lc code=end


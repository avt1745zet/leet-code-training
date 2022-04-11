/*
 * @lc app=leetcode id=1365 lang=typescript
 *
 * [1365] How Many Numbers Are Smaller Than the Current Number
 */

// @lc code=start
function smallerNumbersThanCurrent(nums: number[]): number[] {
    let result: Array<number> = nums.map((num, idx, arr) => {
        let result: number = 0;
        for (let i: number = 0; i < arr.length; i++) {
            if (arr[i] < num) {
                result++;
            }
        }
        return result;
    });
    return result;
};
// @lc code=end


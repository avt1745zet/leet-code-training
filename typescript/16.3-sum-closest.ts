/*
 * @lc app=leetcode id=16 lang=typescript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
    let result: number;
    let min: number = Infinity;
    nums.sort((a, b) => a - b);
    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = i + 1; j < nums.length; j++) {
            let num: number = target - (nums[i] + nums[j]);
            //* find closest num.
            let minDiff: number = Infinity;
            let idx: number;
            for (let k: number = j + 1; k < nums.length; k++) {
                let diff: number = Math.abs(num - nums[k]);
                if (diff <= minDiff) {
                    minDiff = diff;
                    idx = k;
                } else {
                    break;
                }
            }
            if (minDiff <= min && idx !== undefined) {
                min = minDiff;
                result = nums[i] + nums[j] + nums[idx];
            }
        }
    }
    return result;
};
// @lc code=end


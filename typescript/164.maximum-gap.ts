/*
 * @lc app=leetcode id=164 lang=typescript
 *
 * [164] Maximum Gap
 */

// @lc code=start
function maximumGap(nums: number[]): number {
    if (nums.length < 2) {
        return 0;
    } else {
        let maxGap: number = 0;
        nums.sort((a, b) => a - b);
        for (let i: number = 1; i < nums.length; i++) {
            let gap: number = nums[i] - nums[i - 1];
            if (gap > maxGap) {
                maxGap = gap;
            }
        }
        return maxGap;
    }

};
// @lc code=end


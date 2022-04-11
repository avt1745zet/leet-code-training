/*
 * @lc app=leetcode id=1051 lang=typescript
 *
 * [1051] Height Checker
 */

// @lc code=start
function heightChecker(heights: number[]): number {
    let result: number = 0;
    let copy: Array<number> = new Array<number>(...heights);
    copy.sort((a, b) => a - b);
    for (let i: number = 0; i < heights.length; i++) {
        if (heights[i] !== copy[i]) {
            result++;
        }
    }
    return result;
};
// @lc code=end


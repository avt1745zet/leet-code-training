/*
 * @lc app=leetcode id=1351 lang=typescript
 *
 * [1351] Count Negative Numbers in a Sorted Matrix
 */

// @lc code=start
function countNegatives(grid: number[][]): number {
    let result: number = 0;
    for (let i: number = 0; i < grid.length; i++) {
        for (let j: number = grid[i].length - 1; j >= 0; j--) {
            if (grid[i][j] < 0) {
                result++;
            } else {
                break;
            }
        }
    }
    return result;
};
// @lc code=end


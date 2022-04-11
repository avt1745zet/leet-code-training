/*
 * @lc app=leetcode id=1029 lang=typescript
 *
 * [1029] Two City Scheduling
 */

// @lc code=start
function twoCitySchedCost(costs: number[][]): number {
    let result: number = 0;
    costs.sort((a, b) => Math.abs(b[1] - b[0]) - Math.abs(a[1] - a[0]));
    let aCount: number = 0;
    let bCount: number = 0;
    for (let i: number = 0; i < costs.length; i++) {
        if (aCount === costs.length / 2) {
            result += costs[i][1];
            bCount++;
            continue;
        }
        if (bCount === costs.length / 2) {
            result += costs[i][0];
            aCount++;
            continue;
        }
        if (costs[i][0] < costs[i][1]) {
            result += costs[i][0];
            aCount++;
        } else {
            result += costs[i][1];
            bCount++;
        }
    }
    return result;
};
// @lc code=end


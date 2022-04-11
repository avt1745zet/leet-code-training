/*
 * @lc app=leetcode id=1791 lang=typescript
 *
 * [1791] Find Center of Star Graph
 */

// @lc code=start
function findCenter(edges: number[][]): number {
    for (let i: number = 0; i < 2; i++) {
        for (let j: number = 0; j < 2; j++) {
            if (edges[0][i] === edges[1][j]) {
                return edges[0][i];
            }
        }
    }
    return 0;
};
// @lc code=end


/*
 * @lc app=leetcode id=1260 lang=typescript
 *
 * [1260] Shift 2D Grid
 */

// @lc code=start
function shiftGrid(grid: number[][], k: number): number[][] {
    let result: Array<Array<number>> = grid.map(g => new Array<number>(g.length));
    const getNewPosition = (position: number[]) => {
        position[1] += k;
        position[0] += Math.floor(position[1] / grid[0].length);
        position[1] %= grid[0].length;
        position[0] %= grid.length;
        return position;
    }
    for (let i: number = 0; i < grid.length; i++) {
        for (let j: number = 0; j < grid[i].length; j++) {
            let newPosition: Array<number> = getNewPosition([i, j]);
            result[newPosition[0]][newPosition[1]] = grid[i][j];
        }
    }
    return result;
};
// @lc code=end


/*
 * @lc app=leetcode id=1631 lang=typescript
 *
 * [1631] Path With Minimum Effort
 */

/**
 * Refer to: https://leetcode.com/problems/path-with-minimum-effort/discuss/1036518/Java-3-clean-codes%3A-Dijkstra's-algo-Union-Find-Binary-search
 */
// @lc code=start
function minimumEffortPath(heights: number[][]): number {
    const direction: Array<Array<number>> =
        new Array([-1, 0], [1, 0], [0, -1], [0, 1]);
    const m: number = heights.length;
    const n: number = heights[0].length;
    const dist: Array<Array<number>> = new Array<Array<number>>(m);
    for (let i: number = 0; i < dist.length; i++) {
        const arr: Array<number> = new Array<number>(n);
        arr.fill(Infinity);
        dist[i] = arr;
    }
    dist[0][0] = 0;
    const array: Array<Array<number>> = new Array<Array<number>>();
    array.push([0, 0, 0]);
    while (array.length > 0) {
        const p: Array<number> = array.shift();
        const i: number = p[0];
        const j: number = p[1];
        if (i == m - 1 && j == n - 1) break;
        for (let k: number = 0; k < direction.length; k++) {
            const dir: Array<number> = direction[k];
            const x: number = i + dir[0];
            const y: number = j + dir[1];
            if (x < 0 || x >= m || y < 0 || y >= n)
                continue;
            const newDist: number =
                Math.max(p[2], Math.abs(heights[i][j] - heights[x][y]));
            if (newDist < dist[x][y]) {
                dist[x][y] = newDist;
                array.push([x, y, dist[x][y]]);
            }
        }
        array.sort((a, b) => a[2] - b[2]);
    }
    return dist[m - 1][n - 1];
};
// @lc code=end


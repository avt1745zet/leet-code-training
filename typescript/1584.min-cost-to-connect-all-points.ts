/*
 * @lc app=leetcode id=1584 lang=typescript
 *
 * [1584] Min Cost to Connect All Points
 */

// @lc code=start
function minCostConnectPoints(points: number[][]): number {
    let result: number = 0;
    const TOTAL: number = points.length;
    const edges: Array<{
        start: number;
        end: number;
        distance: number;
    }> = [];
    for (let i: number = 0; i < TOTAL; i++) {
        for (let j: number = i + 1; j < TOTAL; j++) {
            edges.push({
                start: i,
                end: j,
                distance:
                    Math.abs(points[j][0] - points[i][0]) +
                    Math.abs(points[j][1] - points[i][1])
            });
        }
    }
    edges.sort((a, b) => a.distance - b.distance);
    let visited: Array<boolean> = new Array<boolean>(TOTAL);
    let connected: number = 1;
    let current: number = 0;
    while (connected < TOTAL) {
        visited[current] = true;

        for (let i: number = 0; i < edges.length; i++) {
            if (visited[edges[i].start] && !visited[edges[i].end]) {
                current = edges[i].end;
                result += edges[i].distance;
                break;
            } else if (visited[edges[i].end] && !visited[edges[i].start]) {
                current = edges[i].start;
                result += edges[i].distance;
                break;
            }
        }

        connected++;
    }
    return result;
};
// @lc code=end
/*
 * @lc app=leetcode id=1436 lang=typescript
 *
 * [1436] Destination City
 */

// @lc code=start
function destCity(paths: string[][]): string {
    let startPoints: Array<string> = new Array<string>();
    for (let i: number = 0; i < paths.length; i++) {
        startPoints.push(paths[i][0]);
    }

    for (let i: number = 0; i < paths.length; i++) {
        if (!startPoints.includes(paths[i][1]))
            return paths[i][1];
    }
};
// @lc code=end


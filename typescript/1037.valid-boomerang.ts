/*
 * @lc app=leetcode id=1037 lang=typescript
 *
 * [1037] Valid Boomerang
 */

// @lc code=start
function isBoomerang(points: number[][]): boolean {
    let k1: number = (points[1][1] - points[0][1]) / (points[1][0] - points[0][0]);
    let k2: number = (points[2][1] - points[1][1]) / (points[2][0] - points[1][0]);
    let k3: number = (points[0][1] - points[2][1]) / (points[0][0] - points[2][0]);
    if (isNaN(k1) || isNaN(k2) || isNaN(k3)) {
        return false;
    } else if (Math.abs(k1) === Math.abs(k2) && Math.abs(k2) === Math.abs(k3)) {
        return false;
    } else {
        return true;
    }
};
// @lc code=end


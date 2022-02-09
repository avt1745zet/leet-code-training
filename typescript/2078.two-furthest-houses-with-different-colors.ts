/*
 * @lc app=leetcode id=2078 lang=typescript
 *
 * [2078] Two Furthest Houses With Different Colors
 */

// @lc code=start
function maxDistance(colors: number[]): number {
    let result: number = 0;
    let firstColor: number = colors[0];
    for (let i: number = colors.length - 1; i >= 0; i--) {
        let color: number = colors[i];
        if (color !== firstColor) {
            result = i;
            break;
        }
    }
    let lastColor: number = colors[colors.length - 1];
    for (let i: number = 0; i < colors.length; i++) {
        let color: number = colors[i];
        if (color !== lastColor) {
            result = (colors.length - 1 - i) > result ? (colors.length - 1 - i) : result;
            break;
        }
    }
    return result;
};
// @lc code=end


/*
 * @lc app=leetcode id=2022 lang=typescript
 *
 * [2022] Convert 1D Array Into 2D Array
 */

// @lc code=start
function construct2DArray(original: number[], m: number, n: number): number[][] {
    let result: Array<Array<number>> = new Array<Array<number>>();
    if (original.length === m * n) {
        for (let i: number = 0; i < original.length; i += n) {
            result.push(original.slice(i, i + n));
        }
    }
    return result;
};
// @lc code=end


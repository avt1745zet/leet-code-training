/*
 * @lc app=leetcode id=867 lang=typescript
 *
 * [867] Transpose Matrix
 */

// @lc code=start
function transpose(matrix: number[][]): number[][] {
    let result: Array<Array<number>> = new Array<Array<number>>();
    for (let i: number = 0; i < matrix[0].length; i++) {
        result.push(new Array<number>());
        for (let j: number = 0; j < matrix.length; j++) {
            result[i].push(matrix[j][i]);
        }
    }
    return result;
};
// @lc code=end


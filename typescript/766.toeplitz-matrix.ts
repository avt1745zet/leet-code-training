/*
 * @lc app=leetcode id=766 lang=typescript
 *
 * [766] Toeplitz Matrix
 */

// @lc code=start
function isToeplitzMatrix(matrix: number[][]): boolean {
    for (let i: number = 0; i < matrix.length; i++) {
        let num: number;
        for (let j: number = 0; matrix[i + j] !== undefined && matrix[i + j][j] !== undefined; j++) {
            if (num !== undefined && num !== matrix[i + j][j]) {
                return false;
            }
            num = matrix[i + j][j];
        }
    }
    for (let i: number = 1; i < matrix[0].length; i++) {
        let num: number;
        for (let j: number = 0; matrix[j] !== undefined && matrix[j][i + j] !== undefined; j++) {
            if (num !== undefined && num !== matrix[j][i + j]) {
                return false;
            }
            num = matrix[j][i + j];
        }
    }
    return true;
};
// @lc code=end


/*
 * @lc app=leetcode id=73 lang=typescript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                for (let row: number = 0; row < matrix.length; row++) {
                    if (matrix[row][j] !== 0) {
                        matrix[row][j] = NaN;
                    }
                }
                for (let col: number = 0; col < matrix[i].length; col++) {
                    if (matrix[i][col] !== 0) {
                        matrix[i][col] = NaN;
                    }
                }
            }
        }
    }
    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix[i].length; j++) {
            if (isNaN(matrix[i][j])) {
                matrix[i][j] = 0;
            }
        }
    }
};
// @lc code=end


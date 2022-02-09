/*
 * @lc app=leetcode id=2133 lang=typescript
 *
 * [2133] Check if Every Row and Column Contains All Numbers
 */

// @lc code=start
function checkValid(matrix: number[][]): boolean {
    for (let i: number = 0; i < matrix.length; i++) {
        let temp: Array<number> = [];
        for (let j: number = 0; j < matrix.length; j++) {
            if (temp.includes(matrix[i][j])) {
                return false;
            } else {
                temp.push(matrix[i][j]);
            }
        }
    }
    for (let i: number = 0; i < matrix.length; i++) {
        let temp: Array<number> = [];
        for (let j: number = 0; j < matrix.length; j++) {
            if (temp.includes(matrix[j][i])) {
                return false;
            } else {
                temp.push(matrix[j][i]);
            }
        }
    }
    return true;
};
// @lc code=end


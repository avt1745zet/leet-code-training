/*
 * @lc app=leetcode id=36 lang=typescript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
    //* Validate each row.
    for (let rowIndex: number = 0; rowIndex < board.length; rowIndex++) {
        let numsInRow: Array<number> = new Array<number>();
        for (let colIndex: number = 0; colIndex < board[rowIndex].length; colIndex++) {
            if (board[rowIndex][colIndex] !== '.') {
                let num: number = parseInt(board[rowIndex][colIndex]);
                if (numsInRow.includes(num)) {
                    return false;
                } else {
                    numsInRow.push(num);
                }
            }
        }
    }
    //* Validate each col.
    for (let colIndex: number = 0; colIndex < board[0].length; colIndex++) {
        let numsInCol: Array<number> = new Array<number>();
        for (let rowIndex: number = 0; rowIndex < board.length; rowIndex++) {
            if (board[rowIndex][colIndex] !== '.') {
                let num: number = parseInt(board[rowIndex][colIndex]);
                if (numsInCol.includes(num)) {
                    return false;
                } else {
                    numsInCol.push(num);
                }
            }
        }
    }
    //* Validate each box
    for (let boxIndex: number = 0; boxIndex < 9; boxIndex++) {
        let numsInBox: Array<number> = new Array<number>();
        for (let rowIndex: number = Math.floor(boxIndex / 3) * 3; rowIndex < (Math.floor(boxIndex / 3) + 1) * 3; rowIndex++) {
            for (let colIndex: number = boxIndex % 3 * 3; colIndex < (boxIndex % 3 + 1) * 3; colIndex++) {
                if (board[rowIndex][colIndex] !== '.') {
                    let num: number = parseInt(board[rowIndex][colIndex]);
                    if (numsInBox.includes(num)) {
                        return false;
                    } else {
                        numsInBox.push(num);
                    }
                }
            }
        }
    }
    return true;
};
// @lc code=end


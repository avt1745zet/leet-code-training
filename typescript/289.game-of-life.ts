/*
 * @lc app=leetcode id=289 lang=typescript
 *
 * [289] Game of Life
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
    let modifyCells: Array<Array<number>> = new Array<Array<number>>();
    for (let i: number = 0; i < board.length; i++) {
        for (let j: number = 0; j < board[i].length; j++) {
            let liveNeighbors: number = 0;
            for (let k: number = -1; k < 2; k++) {
                for (let l: number = -1; l < 2; l++) {
                    if (k === 0 && l === 0 || !board[i + k] || !board[i + k][j + l])
                        continue;
                    if (board[i + k][j + l] === 1)
                        liveNeighbors++;
                }
            }
            if (board[i][j] === 1) {
                if (liveNeighbors < 2 || liveNeighbors > 3) {
                    modifyCells.push([i, j]);
                }
            } else {
                if (liveNeighbors === 3) {
                    modifyCells.push([i, j]);
                }
            }
        }
    }
    modifyCells.forEach(cell => {
        board[cell[0]][cell[1]] = board[cell[0]][cell[1]] === 0 ? 1 : 0;
    });
};
// @lc code=end


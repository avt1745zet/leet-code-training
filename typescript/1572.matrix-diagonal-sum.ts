/*
 * @lc app=leetcode id=1572 lang=typescript
 *
 * [1572] Matrix Diagonal Sum
 */

// @lc code=start
interface Vector2 {
    x: number;
    y: number;
}

function diagonalSum(mat: number[][]): number {
    let result: number = 0;
    let startPosition: Vector2 = { x: 0, y: 0 };
    for (let i: number = 0; i < mat.length; i++) {
        let position: Vector2 = { x: startPosition.x + i, y: startPosition.y + i };
        result += mat[position.x][position.y];
    }
    startPosition = { x: 0, y: mat.length - 1 };
    for (let i: number = 0; i < mat.length; i++) {
        let position: Vector2 = { x: startPosition.x + i, y: startPosition.y - i };
        result += mat[position.x][position.y];
    }
    if (mat.length % 2 === 1) {
        result -= mat[(mat.length - 1) / 2][(mat.length - 1) / 2];
    }
    return result;
};
// @lc code=end


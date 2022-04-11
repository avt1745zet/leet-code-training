/*
 * @lc app=leetcode id=54 lang=typescript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
    let result: Array<number> = new Array<number>();
    //* up, right, down, left.
    const boundary: Array<number> = [0, matrix[0].length - 1, matrix.length - 1, 0];
    const totalMoves: number = matrix.length * matrix[0].length;

    let currentPosition: Array<number> = [0, 0];
    let direction: Array<number> = [1, 0];

    for (let i: number = 0; i < totalMoves; i++) {
        result.push(matrix[currentPosition[1]][currentPosition[0]]);
        if (direction[0] === 1) {
            if (currentPosition[0] + direction[0] > boundary[1]) {
                direction = [0, 1];
                boundary[0] += 1;
            }
        } else if (direction[0] === -1) {
            if (currentPosition[0] + direction[0] < boundary[3]) {
                direction = [0, -1];
                boundary[2] -= 1;
            }
        } else if (direction[1] === 1) {
            if (currentPosition[1] + direction[1] > boundary[2]) {
                direction = [-1, 0];
                boundary[1] -= 1;
            }
        } else if (direction[1] === -1) {
            if (currentPosition[1] + direction[1] < boundary[0]) {
                direction = [1, 0];
                boundary[3] += 1;
            }
        }
        currentPosition = [
            currentPosition[0] + direction[0],
            currentPosition[1] + direction[1]
        ];
    }

    return result;
};
// @lc code=end


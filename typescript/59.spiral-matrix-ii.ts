/*
 * @lc app=leetcode id=59 lang=typescript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
function generateMatrix(n: number): Array<Array<number>> {
    let result: Array<Array<number>> = new Array<Array<number>>(n);
    for (let i: number = 0; i < result.length; i++) {
        result[i] = new Array<number>(n).fill(0);
    }

    let num: number = 1;
    let x: number = 0;
    let y: number = 0;
    let direction: { x: number, y: number } = { x: 1, y: 0 };

    while (result[y] && result[y][x] === 0) {
        result[y][x] = num;
        if (result[y + direction.y] === undefined ||
            result[y + direction.y][x + direction.x] === undefined ||
            result[y + direction.y][x + direction.x] !== 0) {
            if (direction.x === 1) {
                direction.x = 0;
                direction.y = 1;
            } else if (direction.x === -1) {
                direction.x = 0;
                direction.y = -1;
            } else if (direction.y === 1) {
                direction.y = 0;
                direction.x = -1;
            } else if (direction.y === -1) {
                direction.y = 0;
                direction.x = 1;
            }
        }
        x += direction.x;
        y += direction.y;
        num++;
    }
    return result;
};
// @lc code=end


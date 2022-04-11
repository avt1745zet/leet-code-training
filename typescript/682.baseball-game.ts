/*
 * @lc app=leetcode id=682 lang=typescript
 *
 * [682] Baseball Game
 */

// @lc code=start
function calPoints(ops: string[]): number {
    for (let i: number = 0; i < ops.length; i++) {
        if (ops[i] === 'C') {
            let j: number = i - 1;
            while (isNaN(parseInt(ops[j])))
                j--;
            ops[j] = 'X';
            ops[i] = 'X';
        } else if (ops[i] === 'D') {
            let j: number = i - 1;
            while (isNaN(parseInt(ops[j])))
                j--;
            ops[i] = (parseInt(ops[j]) * 2).toString();
        } else if (ops[i] === '+') {
            let j: number = i - 1;
            while (isNaN(parseInt(ops[j])))
                j--;
            let j2: number = j - 1;
            while (isNaN(parseInt(ops[j2])))
                j2--;
            ops[i] = (parseInt(ops[j]) + parseInt(ops[j2])).toString();
        }
    }
    return ops.filter(op => op !== 'X').map(op => parseInt(op)).reduce((a, b) => a + b);
};
// @lc code=end


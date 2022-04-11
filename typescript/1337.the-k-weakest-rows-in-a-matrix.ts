/*
 * @lc app=leetcode id=1337 lang=typescript
 *
 * [1337] The K Weakest Rows in a Matrix
 */

// @lc code=start
function kWeakestRows(mat: number[][], k: number): number[] {
    let arr: Array<{ count: number, index: number }> = mat.map((arr, idx) => {
        return {
            count: arr.reduce((a, b) => a + b),
            index: idx
        }
    });
    let result: Array<number> = arr.sort((a, b) => {
        if (a.count === b.count)
            return a.index - b.index;
        else
            return a.count - b.count;
    }).map(arr => arr.index);

    return result.splice(0, k);
};
// @lc code=end


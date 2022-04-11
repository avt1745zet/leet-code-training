/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
function generate(numRows: number): number[][] {
    let result: Array<Array<number>> = [[1]];
    for (let i: number = 1; i < numRows; i++) {
        let arr: Array<number> = new Array<number>(i + 1);
        for (let j: number = 0; j < arr.length; j++) {
            if (j === 0 || j === result[result.length - 1].length)
                arr[j] = 1;
            else
                arr[j] =
                    result[result.length - 1][j - 1] +
                    result[result.length - 1][j];
        }
        result.push(arr);
    }
    return result;
};
// @lc code=end


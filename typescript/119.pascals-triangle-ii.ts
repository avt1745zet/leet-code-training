/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
    let result: Array<number> = [1];
    for (let i: number = 0; i < rowIndex; i++) {
        let arr: Array<number> = new Array<number>(i + 2);
        for (let j: number = 0; j < arr.length; j++) {
            if (j === 0 || j === result.length)
                arr[j] = 1;
            else
                arr[j] = result[j - 1] + result[j];
        }
        result = arr;
    }
    return result;
};
// @lc code=end


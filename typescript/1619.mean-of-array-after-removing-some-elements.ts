/*
 * @lc app=leetcode id=1619 lang=typescript
 *
 * [1619] Mean of Array After Removing Some Elements
 */

// @lc code=start
function trimMean(arr: number[]): number {
    let result: number = 0;
    arr.sort((a, b) => a - b);
    let startIndex: number = arr.length / 20;
    let endIndex: number = arr.length - arr.length / 20 - 1;
    for (let i: number = startIndex; i <= endIndex; i++) {
        result += arr[i];
    }
    result /= (endIndex + 1 - startIndex);
    return result;
};
// @lc code=end


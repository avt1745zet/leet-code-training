/*
 * @lc app=leetcode id=1539 lang=typescript
 *
 * [1539] Kth Missing Positive Number
 */

// @lc code=start
function findKthPositive(arr: number[], k: number): number {
    let missingArray: Array<number> = new Array<number>();

    for (let i: number = 0; i < arr.length; i++) {
        let lastNum: number = i === 0 ? 0 : arr[i - 1];
        for (let j: number = lastNum + 1; j < arr[i]; j++) {
            missingArray.push(j);
        }
    }

    return missingArray[k - 1] ? missingArray[k - 1] : arr.length + k;
};
// @lc code=end


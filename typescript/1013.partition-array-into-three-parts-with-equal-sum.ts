/*
 * @lc app=leetcode id=1013 lang=typescript
 *
 * [1013] Partition Array Into Three Parts With Equal Sum
 */

// @lc code=start
function canThreePartsEqualSum(arr: number[]): boolean {
    const expetedSum: number = arr.reduce((a, b) => a + b) / 3;
    let sumList: Array<number> = [];
    for (let i: number = 0; i < arr.length; i++) {
        if (sumList.length === 0 || sumList[sumList.length - 1] === expetedSum && sumList.length < 3) {
            sumList.push(0);
        }
        sumList[sumList.length - 1] += arr[i];
    }
    return sumList.length === 3 && sumList.every(sum => sum === expetedSum);
};
// @lc code=end


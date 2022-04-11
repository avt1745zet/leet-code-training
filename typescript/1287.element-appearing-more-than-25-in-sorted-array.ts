/*
 * @lc app=leetcode id=1287 lang=typescript
 *
 * [1287] Element Appearing More Than 25% In Sorted Array
 */

// @lc code=start
function findSpecialInteger(arr: number[]): number {
    let numAmtMap: Map<number, number> = new Map<number, number>();
    for (let i: number = 0; i < arr.length; i++) {
        numAmtMap.set(arr[i],
            numAmtMap.has(arr[i]) ? numAmtMap.get(arr[i]) + 1 : 1);
        if (numAmtMap.get(arr[i]) > arr.length / 4)
            return arr[i];
    }
};
// @lc code=end


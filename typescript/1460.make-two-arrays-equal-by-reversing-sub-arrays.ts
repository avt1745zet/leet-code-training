/*
 * @lc app=leetcode id=1460 lang=typescript
 *
 * [1460] Make Two Arrays Equal by Reversing Sub-arrays
 */

// @lc code=start
function canBeEqual(target: number[], arr: number[]): boolean {
    if (target.length !== arr.length)
        return false;
    let numberAmountMap1: Map<number, number> = new Map<number, number>();
    let numberAmountMap2: Map<number, number> = new Map<number, number>();
    for (let i: number = 0; i < target.length; i++) {
        numberAmountMap1.set(target[i],
            numberAmountMap1.has(target[i]) ? numberAmountMap1.get(target[i]) + 1 : 1);
    }
    for (let i: number = 0; i < arr.length; i++) {
        if (numberAmountMap1.has(arr[i])) {
            numberAmountMap2.set(arr[i],
                numberAmountMap2.has(arr[i]) ? numberAmountMap2.get(arr[i]) + 1 : 1);
            if (numberAmountMap2.get(arr[i]) > numberAmountMap1.get(arr[i])) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
};
// @lc code=end


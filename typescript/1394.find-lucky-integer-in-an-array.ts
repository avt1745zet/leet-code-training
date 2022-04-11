/*
 * @lc app=leetcode id=1394 lang=typescript
 *
 * [1394] Find Lucky Integer in an Array
 */

// @lc code=start
function findLucky(arr: number[]): number {
    let result: number = -1;

    let numberAmountMap: Map<number, number> = new Map<number, number>();
    for (let i: number = 0; i < arr.length; i++) {
        numberAmountMap.set(arr[i], numberAmountMap.has(arr[i]) ? numberAmountMap.get(arr[i]) + 1 : 1);
    }

    let nums: Array<number> = [...numberAmountMap.keys()];
    nums.sort((a, b) => b - a);
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] === numberAmountMap.get(nums[i])) {
            result = nums[i];
            break;
        }
    }

    return result;
};
// @lc code=end


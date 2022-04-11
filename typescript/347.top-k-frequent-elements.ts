/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
    let numberAmountMap: Map<number, number> = new Map<number, number>();
    nums.forEach(num => {
        numberAmountMap.set(num,
            numberAmountMap.has(num) ? numberAmountMap.get(num) + 1 : 1);
    });
    let arr: Array<[number, number]> = [...numberAmountMap.entries()];
    arr.sort((a, b) => b[1] - a[1]);
    return arr.map(item => item[0]).splice(0, k);
};
// @lc code=end


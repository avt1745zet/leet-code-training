/*
 * @lc app=leetcode id=1512 lang=typescript
 *
 * [1512] Number of Good Pairs
 */

// @lc code=start
function numIdenticalPairs(nums: number[]): number {
    let result: number = 0;
    const getSumAmount = (amount: number) => {
        let result: number = 0;
        for (let i: number = amount - 1; i > 0; i--) {
            result += i;
        }
        return result;
    }
    let numberAmountMap: Map<number, number> = new Map<number, number>();
    nums.forEach(num => {
        numberAmountMap.set(num,
            numberAmountMap.has(num) ? numberAmountMap.get(num) + 1 : 1);
    });
    numberAmountMap.forEach(amount => {
        result += getSumAmount(amount);
    });
    return result;
};
// @lc code=end


/*
 * @lc app=leetcode id=338 lang=typescript
 *
 * [338] Counting Bits
 */

// @lc code=start
function countBits(n: number): number[] {
    let result: Array<number> = new Array<number>(n + 1);
    for (let i: number = 0; i < result.length; i++) {
        let amount: number = 0;
        let num: number = i;
        while (num > 1) {
            let remain: number = num % 2;
            if (remain === 1) {
                amount++;
            }
            num = Math.floor(num / 2);
        }
        if (num === 1) {
            amount++;
        }
        result[i] = amount;
    }
    return result;
};
// @lc code=end


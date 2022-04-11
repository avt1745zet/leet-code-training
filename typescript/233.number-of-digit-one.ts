/*
 * @lc app=leetcode id=233 lang=typescript
 *
 * [233] Number of Digit One
 */

// @lc code=start
function countDigitOne(n: number): number {
    let result: number = 0;
    if (n == 0)
        return 0;
    for (let i: number = 10; true; i *= 10) {
        let num: number = 0;
        if (Math.floor(n / (i / 10)) % 10 > 1) {
            num = i / 10;
        } else if (Math.floor(n / (i / 10)) % 10 === 1) {
            num = n % (i / 10) + 1;
        }
        result += Math.floor(n / i) * (i / 10) + num;
        if (Math.floor(n / i) === 0) {
            break;
        }
    }
    return result;
};
// @lc code=end


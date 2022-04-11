/*
 * @lc app=leetcode id=258 lang=typescript
 *
 * [258] Add Digits
 */

// @lc code=start
function addDigits(num: number): number {
    if (num < 10)
        return num;

    let result: number = 0;
    while (num > 0) {
        result += num % 10;
        num = Math.floor(num / 10);
    }

    return addDigits(result);
};
// @lc code=end


/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
    let addNumber: number = 1;
    for (let i: number = digits.length - 1; i >= 0; i--) {
        digits[i] += addNumber;
        addNumber = 0;
        if (digits[i] >= 10) {
            digits[i] = 0;
            addNumber = 1;
        } else {
            break;
        }
    }
    if (addNumber > 0) {
        digits = new Array<number>(addNumber, ...digits);
    }
    return digits;
};
// @lc code=end


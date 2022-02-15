/*
 * @lc app=leetcode id=415 lang=typescript
 *
 * [415] Add Strings
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
    let result: string = '';
    let maxLength: number = Math.max(num1.length, num2.length);
    let carry: number = 0;
    for (let i: number = 0; i < maxLength || carry !== 0; i++) {
        let sum: number =
            (num1[num1.length - 1 - i] ? parseInt(num1[num1.length - 1 - i]) : 0) +
            (num2[num2.length - 1 - i] ? parseInt(num2[num2.length - 1 - i]) : 0) + carry;
        carry = Math.floor(sum / 10);
        result = (sum - carry * 10) + result;
    }
    return result;
};
// @lc code=end


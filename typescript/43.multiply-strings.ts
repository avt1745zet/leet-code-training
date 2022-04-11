/*
 * @lc app=leetcode id=43 lang=typescript
 *
 * [43] Multiply Strings
 */

// @lc code=start
function multiply(num1: string, num2: string): string {
    let result: string = '0';
    const sum = (str1: string, str2: string) => {
        let result: string = '';
        let carry: number = 0;
        let length: number = Math.max(str1.length, str2.length);
        for (let i: number = 0; i < length || carry > 0; i++) {
            let num1: number =
                str1[str1.length - 1 - i] === undefined ? 0 : parseInt(str1[str1.length - 1 - i]);
            let num2: number =
                str2[str2.length - 1 - i] === undefined ? 0 : parseInt(str2[str2.length - 1 - i]);
            let num: number = num1 + num2 + carry;
            carry = Math.floor(num / 10);
            result = (num % 10) + result;
        }
        return result;
    }
    for (let i: number = 0; i < num1.length; i++) {
        for (let j: number = 0; j < num2.length; j++) {
            let n1: number = parseInt(num1[num1.length - 1 - i]);
            let n2: number = parseInt(num2[num2.length - 1 - j]);
            let zeros: string = ''.padEnd(n1 !== 0 && n2 !== 0 ? i + j : 0, '0');
            result = sum(result, (n1 * n2).toString() + zeros)
        }
    }
    return result;
};
// @lc code=end


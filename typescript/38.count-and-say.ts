/*
 * @lc app=leetcode id=38 lang=typescript
 *
 * [38] Count and Say
 */

// @lc code=start
function countAndSay(n: number, input?: string): string {
    let result: string = '';

    if (n === 0) {
        return input;
    }

    if (input === undefined) {
        result = '1';
    } else {
        let amount: number = 0;
        for (let i: number = 0; i < input.length; i++) {
            amount++;
            if (input[i + 1] === undefined || input[i + 1] !== input[i]) {
                result += (amount.toString() + input[i]);
                amount = 0;
            }
        }
    }

    return countAndSay(n - 1, result);
};
// @lc code=end


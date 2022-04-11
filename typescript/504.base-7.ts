/*
 * @lc app=leetcode id=504 lang=typescript
 *
 * [504] Base 7
 */

// @lc code=start
function convertToBase7(num: number): string {
    let result: string = '';
    let sign: string = num < 0 ? '-' : '';
    num = num < 0 ? -num : num;
    do {
        result = num % 7 + result;
        num = Math.floor(num / 7);
    }
    while (num >= 7);
    if (num != 0) {
        result = num + result;
    }
    result = sign + result;
    return result;
};
// @lc code=end


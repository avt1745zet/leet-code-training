/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
    let result: number = undefined;
    let sign: number = 1;
    for (let i: number = 0; i < s.length; i++) {
        if (/[a-zA-Z.]+/.test(s[i])) {
            break;
        }
        if (result === undefined) {
            if (s[i] === ' ') {
                continue;
            } else if (s[i] === '-' || s[i] === '+') {
                if (s[i + 1] && /[0-9]/.test(s[i + 1])) {
                    sign = s[i] === '-' ? -1 : 1;
                } else {
                    break;
                }
            } else if (/[0-9]/.test(s[i])) {
                result = parseInt(s[i]);
            }
        } else {
            if (/[0-9]/.test(s[i])) {
                result = result * 10 + parseInt(s[i]);
            } else {
                break;
            }
        }
    }
    result = result === undefined ? 0 : result * sign;
    if (result > Math.pow(2, 31) - 1) {
        result = Math.pow(2, 31) - 1;
    } else if (result < -Math.pow(2, 31)) {
        result = -Math.pow(2, 31);
    }
    return result;
};
// @lc code=end


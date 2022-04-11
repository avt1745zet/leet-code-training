/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    for (let i: number = 0; i < s.length;) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') {
                s = s.slice(0, i - 1) + s.slice(i + 1, s.length);
                i--;
            } else {
                return false;
            }
        } else if (s[i] === ']') {
            if (s[i - 1] === '[') {
                s = s.slice(0, i - 1) + s.slice(i + 1, s.length);
                i--;
            } else {
                return false;
            }
        } else if (s[i] === '}') {
            if (s[i - 1] === '{') {
                s = s.slice(0, i - 1) + s.slice(i + 1, s.length);
                i--;
            } else {
                return false;
            }
        } else {
            i++;
        }
    }
    return s.length === 0;
};
// @lc code=end


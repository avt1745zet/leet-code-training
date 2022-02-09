/*
 * @lc app=leetcode id=2124 lang=typescript
 *
 * [2124] Check if All A's Appears Before All B's
 */

// @lc code=start
function checkString(s: string): boolean {
    let result: boolean = true;
    let lastChar: string = 'a';
    for (let i: number = 0; i < s.length; i++) {
        if (lastChar === 'b' && s[i] === 'a') {
            result = false;
            break;
        }
        lastChar = s[i];
    }
    return result;
};
// @lc code=end


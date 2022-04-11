/*
 * @lc app=leetcode id=1576 lang=typescript
 *
 * [1576] Replace All ?'s to Avoid Consecutive Repeating Characters
 */

// @lc code=start
function modifyString(s: string): string {
    let result: string = '';
    for (let i: number = 0; i < s.length; i++) {
        if (s[i] === '?') {
            result += pickNonDuplicateChar([result[i - 1], s[i + 1]]);
        } else {
            result += s[i];
        }
    }
    return result;
};

function pickNonDuplicateChar(charArr: Array<string>): string {
    let result: string;
    for (let i: number = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
        if (!charArr.includes(String.fromCharCode(i))) {
            result = String.fromCharCode(i);
            break;
        }
    }
    return result;
}
// @lc code=end


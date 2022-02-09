/*
 * @lc app=leetcode id=2138 lang=typescript
 *
 * [2138] Divide a String Into Groups of Size k
 */

// @lc code=start
function divideString(s: string, k: number, fill: string): string[] {
    let result: Array<string> = [''];
    for (let i: number = 0; i < s.length; i++) {
        if (result[result.length - 1].length < k) {
            result[result.length - 1] += s[i];
        } else {
            result.push(s[i]);
        }
    }
    while (result[result.length - 1].length < k) {
        result[result.length - 1] += fill;
    }
    return result;
};
// @lc code=end


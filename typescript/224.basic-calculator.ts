/*
 * @lc app=leetcode id=224 lang=typescript
 *
 * [224] Basic Calculator
 */

// @lc code=start
function calculate(s: string): number {
    let arr: Array<string> = new Array<string>();
    for (let i: number = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            continue;
        } else {
            if (isNaN(parseInt(s[i]))) {
                arr.push(s[i]);
            } else {
                if (isNaN(parseInt(arr[arr.length - 1]))) {
                    arr.push(s[i]);
                } else {
                    arr[arr.length - 1] += s[i];
                }
            }
        }
    }
};
// @lc code=end


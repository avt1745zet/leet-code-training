/*
 * @lc app=leetcode id=1249 lang=typescript
 *
 * [1249] Minimum Remove to Make Valid Parentheses
 */

// @lc code=start
function minRemoveToMakeValid(s: string): string {
    let pIndices: Array<number> = new Array<number>();
    for (let i: number = 0; i < s.length;) {
        if (s[i] === '(') {
            pIndices.push(i);
            i++;
        } else if (s[i] === ')') {
            if (pIndices[pIndices.length - 1] !== undefined) {
                pIndices.splice(pIndices.length - 1, 1);
                i++;
            } else {
                s = s.slice(0, i) + s.slice(i + 1, s.length);
            }
        } else {
            i++;
        }
    }
    for (let i: number = pIndices.length - 1; i > -1; i--) {
        s = s.slice(0, pIndices[i]) + s.slice(pIndices[i] + 1, s.length);
    }
    return s;
};
// @lc code=end


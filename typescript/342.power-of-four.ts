/*
 * @lc app=leetcode id=342 lang=typescript
 *
 * [342] Power of Four
 */

// @lc code=start
function isPowerOfFour(n: number): boolean {
    let oneAmount: number = 0;
    let str: string = n.toString(4);
    for (let i: number = 0; i < str.length; i++) {
        if (str[i] === '1') {
            oneAmount++;
            if (oneAmount > 1) {
                return false
            }
        } else if (str[i] !== '0') {
            return false;
        }
    }
    return oneAmount === 1;
};
// @lc code=end


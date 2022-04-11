/*
 * @lc app=leetcode id=693 lang=typescript
 *
 * [693] Binary Number with Alternating Bits
 */

// @lc code=start
function hasAlternatingBits(n: number): boolean {
    let str: string = n.toString(2);
    for (let i: number = 0; i < str.length; i += 2) {
        if (str[i] === '0' || (str[i + 1] !== undefined && str[i + 1] === '1')) {
            return false;
        }
    }
    return true;
};
// @lc code=end


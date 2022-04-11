/*
 * @lc app=leetcode id=190 lang=typescript
 *
 * [190] Reverse Bits
 */

// @lc code=start
function reverseBits(n: number): number {
    let result: number = 0;
    let str: string = n.toString(2).padStart(32, '0');
    for (let i: number = 0; i < str.length; i++) {
        result += (Math.pow(2, i) * parseInt(str[i]));
    }
    return result;
};
// @lc code=end


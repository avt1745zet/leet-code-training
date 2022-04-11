/*
 * @lc app=leetcode id=717 lang=typescript
 *
 * [717] 1-bit and 2-bit Characters
 */

// @lc code=start
function isOneBitCharacter(bits: number[]): boolean {
    let result: boolean = bits.length % 2 === 1;
    return result;
};
// @lc code=end


/*
 * @lc app=leetcode id=476 lang=typescript
 *
 * [476] Number Complement
 */

// @lc code=start
function findComplement(num: number): number {
    let numStr: string = num.toString(2);
    let str: string = '';
    for (let i: number = 0; i < numStr.length; i++) {
        str += (numStr[i] === '0' ? '1' : '0');
    }
    let result: number = parseInt(str, 2);
    return result;
};
// @lc code=end


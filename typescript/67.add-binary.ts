/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
    let result: string = '';
    let aIndex: number = a.length - 1;
    let bIndex: number = b.length - 1;
    let carry: number = 0;
    while (aIndex >= 0 || bIndex >= 0 || carry !== 0 ) {
        let sum: number = Number(a[aIndex] ? a[aIndex] : 0) + Number(b[bIndex] ? b[bIndex] : 0) + carry;
        carry = sum >= 2 ? 1 : 0;
        sum -= carry * 2;
        result = sum + result;
        aIndex--;
        bIndex--;
    }
    return result;
};
// @lc code=end


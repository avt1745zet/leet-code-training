/*
 * @lc app=leetcode id=168 lang=typescript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
function convertToTitle(columnNumber: number): string {
    let result: string = '';
    let arr: Array<number> = new Array<number>();
    const numberToChar = (num: number) => {
        return String.fromCharCode(num === 0 ? 25 + 65 : num - 1 + 65);
    }
    while (columnNumber > 26) {
        let a: number = columnNumber % 26;
        if (a === 0) {
            result = numberToChar(columnNumber % 26) + result;
            columnNumber = Math.floor(columnNumber / 26) - 1;
        } else {
            result = numberToChar(columnNumber % 26) + result;
            columnNumber = Math.floor(columnNumber / 26);
        }
    }
    result = numberToChar(columnNumber) + result;
    return result;
};
// @lc code=end


/*
 * @lc app=leetcode id=1556 lang=typescript
 *
 * [1556] Thousand Separator
 */

// @lc code=start
function thousandSeparator(n: number): string {
    let str: string = n.toString();
    let arr: Array<string> = new Array<string>();
    while (str.length >= 3) {
        arr = [str.slice(str.length - 3, str.length), ...arr];
        str = str.slice(0, str.length - 3);
    }
    if (str.length !== 0) {
        arr = [str, ...arr];
        str = '';
    }
    return arr.join('.');
};
// @lc code=end


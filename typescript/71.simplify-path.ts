/*
 * @lc app=leetcode id=71 lang=typescript
 *
 * [71] Simplify Path
 */

// @lc code=start
function simplifyPath(path: string): string {
    let arr: Array<string> = path.split('/');
    for (let i: number = 0; i < arr.length;) {
        if (arr[i] === '') {
            arr.splice(i, 1);
        } else if (arr[i] === '.') {
            arr.splice(i, 1);
        } else if (arr[i] === '..') {
            if (i - 1 > -1) {
                arr.splice(i - 1, 2);
                i--;
            } else {
                arr.splice(i, 1);
            }
        } else {
            i++;
        }
    }
    let result: string = arr.join('/');
    result = '/' + result;
    return result;
};
// @lc code=end


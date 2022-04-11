/*
 * @lc app=leetcode id=1528 lang=typescript
 *
 * [1528] Shuffle String
 */

// @lc code=start
function restoreString(s: string, indices: number[]): string {
    let arr: Array<string> = new Array<string>();
    indices.forEach((val, idx) => {
        arr[val] = s[idx];
    });
    return arr.join('');
};
// @lc code=end


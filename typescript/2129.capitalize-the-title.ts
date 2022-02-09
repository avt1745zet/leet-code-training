/*
 * @lc app=leetcode id=2129 lang=typescript
 *
 * [2129] Capitalize the Title
 */

// @lc code=start
function capitalizeTitle(title: string): string {
    let result: string;
    let arr: Array<string> = title.split(' ');
    for (let i: number = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase();
        if (arr[i].length > 2) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1, arr[i].length);
        }
    }
    result = arr.join(' ');
    return result;
};
// @lc code=end


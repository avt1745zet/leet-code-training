/*
 * @lc app=leetcode id=389 lang=typescript
 *
 * [389] Find the Difference
 */

// @lc code=start
function findTheDifference(s: string, t: string): string {
    let result: string = '';
    let sArr: Array<string> = s.split('').sort();
    let tArr: Array<string> = t.split('').sort();
    for (let i: number = 0; i < tArr.length; i++) {
        if (tArr[i] !== sArr[i]) {
            result = tArr[i];
            break;
        }
    }
    return result;
}
// @lc code=end


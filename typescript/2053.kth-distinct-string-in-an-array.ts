/*
 * @lc app=leetcode id=2053 lang=typescript
 *
 * [2053] Kth Distinct String in an Array
 */

// @lc code=start
function kthDistinct(arr: string[], k: number): string {
    let result: string;
    let strDistinctMap: Map<string, boolean> = new Map<string, boolean>();
    arr.forEach(str => {
        if (strDistinctMap.has(str)) {
            if (strDistinctMap.get(str)) {
                strDistinctMap.set(str, false);
            }
        } else {
            strDistinctMap.set(str, true);
        }
    });
    let distinctStrArray: Array<string> = [];
    strDistinctMap.forEach((isDistinct, str) => {
        if (isDistinct) {
            distinctStrArray.push(str);
        }
    });
    result = distinctStrArray[k - 1] ? distinctStrArray[k - 1] : '';
    return result;
};
// @lc code=end


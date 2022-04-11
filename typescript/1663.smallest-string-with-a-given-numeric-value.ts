/*
 * @lc app=leetcode id=1663 lang=typescript
 *
 * [1663] Smallest String With A Given Numeric Value
 */

// @lc code=start
function getSmallestString(n: number, k: number): string {
    let result: string = '';

    while (k > 0) {
        let max: number = Math.min(26, k - (n - result.length - 1));
        result = String.fromCharCode('a'.charCodeAt(0) + (max - 1)) + result;
        k -= max;
    }

    return result;
};
// @lc code=end


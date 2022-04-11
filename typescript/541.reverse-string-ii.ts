/*
 * @lc app=leetcode id=541 lang=typescript
 *
 * [541] Reverse String II
 */

// @lc code=start
function reverseStr(s: string, k: number): string {
    let result: string = s;
    for (let i: number = 0; i < s.length; i++) {
        if (i % (2 * k) < k) {
            if (Math.floor(i / (2 * k)) === Math.floor((s.length - 1) / (2 * k))
                && (s.length - 1) % (2 * k) + 1 < k) {
                let newK: number = (s.length - 1) % (2 * k) + 1;
                result = result.slice(0, i) + s[(((newK - 1) - (i % k)) + Math.floor(i / (2 * k)) * 2 * k)] + result.slice(i + 1, s.length);
            } else {
                result = result.slice(0, i) + s[(((k - 1) - (i % k)) + Math.floor(i / (2 * k)) * 2 * k)] + result.slice(i + 1, s.length);
            }
        }
    }
    return result;
};
// @lc code=end


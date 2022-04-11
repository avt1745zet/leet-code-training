/*
 * @lc app=leetcode id=392 lang=typescript
 *
 * [392] Is Subsequence
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
    let result: boolean = true;
    let lastCheckIndex: number = -1;
    let pairCount: number = 0;
    for (let i: number = 0; i < s.length; i++) {
        while (lastCheckIndex < t.length) {
            lastCheckIndex++;
            if (s[i] === t[lastCheckIndex]) {
                pairCount++;
                break;
            }
        }
    }
    result = pairCount === s.length;
    return result;
};
// @lc code=end


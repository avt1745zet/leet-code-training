/*
 * @lc app=leetcode id=1446 lang=typescript
 *
 * [1446] Consecutive Characters
 */

// @lc code=start
function maxPower(s: string): number {
    let maxLength: number = 0;
    let curLength: number = 0;
    for (let i: number = 0; i < s.length; i++) {
        if (i === 0 || s[i] === s[i - 1]) {
            curLength += 1;
            if (i === s.length - 1)
                maxLength = Math.max(maxLength, curLength);
        } else {
            maxLength = Math.max(maxLength, curLength);
            curLength = 1;
        }
    }
    return maxLength;
};
// @lc code=end


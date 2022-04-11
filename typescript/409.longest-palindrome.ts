/*
 * @lc app=leetcode id=409 lang=typescript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
function longestPalindrome(s: string): number {
    let result: number = 0;
    let letterAmountMap: Map<string, number> = new Map<string, number>();
    for (let i: number = 0; i < s.length; i++) {
        letterAmountMap.set(s[i],
            letterAmountMap.has(s[i]) ? letterAmountMap.get(s[i]) + 1 : 1);
    }
    letterAmountMap.forEach(amount => {
        if (amount > 1) {
            if (amount % 2 === 0) {
                result += amount;
            } else {
                result += amount - 1;
            }
        }
    })
    return result === 0 ? 1 : s.length > result ? result + 1 : result;
};
// @lc code=end


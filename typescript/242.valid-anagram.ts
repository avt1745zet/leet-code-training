/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    let letterAmountMap: Map<string, number> = new Map<string, number>();

    for (let i: number = 0; i < s.length; i++) {
        letterAmountMap.set(s[i],
            letterAmountMap.has(s[i]) ? letterAmountMap.get(s[i]) + 1 : 1);
    }

    for (let i: number = 0; i < t.length; i++) {
        if (letterAmountMap.has(t[i])) {
            if (letterAmountMap.get(t[i]) > 1) {
                letterAmountMap.set(t[i], letterAmountMap.get(t[i]) - 1);
            } else {
                letterAmountMap.delete(t[i]);
            }
        } else {
            return false;
        }
    }

    return true;
};
// @lc code=end


/*
 * @lc app=leetcode id=1941 lang=typescript
 *
 * [1941] Check if All Characters Have Equal Number of Occurrences
 */

// @lc code=start
function areOccurrencesEqual(s: string): boolean {
    let charAmountMap: Map<string, number> = new Map<string, number>();
    for (let i: number = 0; i < s.length; i++) {
        charAmountMap.set(s[i], charAmountMap.has(s[i]) ? charAmountMap.get(s[i]) + 1 : 1);
    }
    let lastAmount: number = -1;
    let keys: Array<string> = new Array<string>(...charAmountMap.keys());
    for (let i: number = 0; i < keys.length; i++) {
        let amount: number = charAmountMap.get(keys[i]);
        if (lastAmount != -1 && amount != lastAmount) {
            return false;
        }
        lastAmount = amount;
    }
    return true;
};
// @lc code=end


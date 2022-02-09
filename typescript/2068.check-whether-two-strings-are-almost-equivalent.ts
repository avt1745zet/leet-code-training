/*
 * @lc app=leetcode id=2068 lang=typescript
 *
 * [2068] Check Whether Two Strings are Almost Equivalent
 */

// @lc code=start
function checkAlmostEquivalent(word1: string, word2: string): boolean {
    let result: boolean = true;
    const MOST_AMOUNT: number = 3;
    let charAmountMap1: Map<string, number> = new Map<string, number>();
    for (let i: number = 0; i < word1.length; i++) {
        charAmountMap1.set(word1[i],
            charAmountMap1.has(word1[i]) ? charAmountMap1.get(word1[i]) + 1 : 1);
    }
    let charAmountMap2: Map<string, number> = new Map<string, number>();
    for (let i: number = 0; i < word2.length; i++) {
        charAmountMap2.set(word2[i],
            charAmountMap2.has(word2[i]) ? charAmountMap2.get(word2[i]) + 1 : 1);
    }
    charAmountMap1.forEach((amount, char) => {
        if (charAmountMap2.has(char)) {
            if (Math.abs(charAmountMap2.get(char) - amount) > MOST_AMOUNT) {
                result = false;
            }
            charAmountMap2.delete(char);
        } else {
            if (amount > MOST_AMOUNT) {
                result = false;
            }
        }
    });
    if (!result) {
        return result;
    }
    charAmountMap2.forEach((amount) => {
        if (amount > MOST_AMOUNT) {
            result = false;
        }
    });
    return result;
};
// @lc code=end


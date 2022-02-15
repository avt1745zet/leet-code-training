/*
 * @lc app=leetcode id=1189 lang=typescript
 *
 * [1189] Maximum Number of Balloons
 */

// @lc code=start
function maxNumberOfBalloons(text: string): number {
    let result: number = Infinity;
    const validateMap: Map<string, number> = new Map<string, number>([
        ['b', 1],
        ['a', 1],
        ['l', 2],
        ['o', 2],
        ['n', 1]
    ]);
    const charAmountMap: Map<string, number> = new Map<string, number>();
    validateMap.forEach((amount, char) => {
        charAmountMap.set(char, 0);
    });
    for (let i: number = 0; i < text.length; i++) {
        if (validateMap.has(text[i])) {
            charAmountMap.set(text[i], charAmountMap.get(text[i]) + 1);
        }
    }
    charAmountMap.forEach((amount, char) => {
        result = Math.min(result, Math.floor(amount / validateMap.get(char)));
    });
    return result === Infinity ? 0 : result;
};
// @lc code=end


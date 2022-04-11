/*
 * @lc app=leetcode id=991 lang=typescript
 *
 * [991] Broken Calculator
 */

// @lc code=start
function brokenCalc(startValue: number, target: number): number {
    let result: number = 0;
    while (startValue != target) {
        if (startValue > target || target % 2 === 1) {
            target += 1;
        } else {
            target /= 2;
        }
        result++;
    }
    return result;
};
// @lc code=end


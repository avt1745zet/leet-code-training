/*
 * @lc app=leetcode id=202 lang=typescript
 *
 * [202] Happy Number
 */

// @lc code=start
function isHappy(n: number, appearList: Array<number> = []): boolean {
    if (n === 1)
        return true;
    else if (appearList.includes(n))
        return false;

    let temp: number = n;
    let sum: number = 0;
    while (n > 0) {
        sum += Math.pow(n % 10, 2);
        n = Math.floor(n / 10);
    }

    return isHappy(sum, [...appearList, temp]);
};
// @lc code=end


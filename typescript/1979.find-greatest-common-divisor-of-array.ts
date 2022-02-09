/*
 * @lc app=leetcode id=1979 lang=typescript
 *
 * [1979] Find Greatest Common Divisor of Array
 */

// @lc code=start
function findGCD(nums: number[]): number {
    let result: number;
    let smallesttNum: number = Math.min(...nums);
    let largestNum: number = Math.max(...nums);
    result = getGCD(largestNum, smallesttNum);
    return result;
};

function getGCD(num1: number, num2: number): number {
    let divided: number = num1;
    let divisor: number = num2;
    let remainder: number = divided % divisor;
    if (remainder === 0) {
        return divisor;
    } else {
        return getGCD( divisor, remainder );
    }
}
// @lc code=end


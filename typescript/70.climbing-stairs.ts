/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
    return fibonacci(0, 1, 1, n);
};

function fibonacci(num1: number, num2: number, curCount: number, count: number): number {
    if (curCount === count) {
        return num1 + num2;
    }
    curCount++;
    return fibonacci(num2, num1 + num2, curCount, count);
}
// @lc code=end


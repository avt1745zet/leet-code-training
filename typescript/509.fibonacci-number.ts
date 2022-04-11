/*
 * @lc app=leetcode id=509 lang=typescript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
function fib(n: number): number {
    let result: number = 0;
    let a: number = 0;
    let b: number = 1;
    for (let i: number = 0; i < n; i++) {
        let temp: number = a;
        a = b;
        b = temp + b;
        result = a;
    }
    return result;
};
// @lc code=end


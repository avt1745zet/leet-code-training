/*
 * @lc app=leetcode id=2011 lang=typescript
 *
 * [2011] Final Value of Variable After Performing Operations
 */

// @lc code=start
function finalValueAfterOperations(operations: string[]): number {
    let result: number = 0;
    operations.forEach(operation => {
        // operation[1] can only be '+' or '-'.
        result += operation[1] === '+' ? 1 : -1;
    });
    return result;
};
// @lc code=end


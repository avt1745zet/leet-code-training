/*
 * @lc app=leetcode id=946 lang=typescript
 *
 * [946] Validate Stack Sequences
 */

// @lc code=start
function validateStackSequences(pushed: number[], popped: number[]): boolean {
    let result: boolean;
    let arr: Array<number> = new Array<number>();
    while (true) {
        if (popped[0] === arr[arr.length - 1]) {
            arr.pop();
            popped.shift();
            if (popped.length === 0) {
                result = true;
                break;
            }
            continue;
        } else if (pushed.length === 0) {
            result = false;
            break;
        }
        if (pushed.length > 0) {
            arr.push(pushed[0]);
            pushed.shift();
        }
    }
    return result;
};
// @lc code=end


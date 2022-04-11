/*
 * @lc app=leetcode id=2165 lang=typescript
 *
 * [2165] Smallest Value of the Rearranged Number
 */

// @lc code=start
function smallestNumber(num: number): number {
    let result: number = 0;
    let nums: Array<number> = new Array<number>();
    let sign: number = Math.sign(num);

    num *= sign;

    while (num > 0) {
        nums.push(num % 10);
        num = Math.floor(num / 10);
    }

    nums.sort((a, b) => a - b);

    if (sign > 0) {
        let index: number = nums.findIndex(num => num > 0);
        nums = [...nums.splice(index, 1), ...nums];
        for (let i: number = 0; i < nums.length; i++) {
            result *= 10;
            result += nums[i];
        }
    } else if (sign < 0) {
        for (let i: number = nums.length - 1; i > -1; i--) {
            result *= 10;
            result += nums[i];
        }
    }

    result *= sign;

    return result;
};
// @lc code=end


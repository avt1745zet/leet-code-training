/*
 * @lc app=leetcode id=179 lang=typescript
 *
 * [179] Largest Number
 */

// @lc code=start
function largestNumber(nums: number[]): string {
    let result: string;
    nums.sort((a, b) => {
        let ba: number = parseInt(b.toString() + a.toString());
        let ab: number = parseInt(a.toString() + b.toString());
        return ba - ab;
    });
    result = nums.join('');
    if (result[0] === '0')
        result = '0';
    return result;
};
// @lc code=end


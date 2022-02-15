/*
 * @lc app=leetcode id=1748 lang=typescript
 *
 * [1748] Sum of Unique Elements
 */

// @lc code=start
function sumOfUnique(nums: number[]): number {
    let uniqueNums: Array<number> = new Array<number>();
    let duplicatedNums: Array<number> = new Array<number>();
    nums.forEach(num => {
        if (!duplicatedNums.includes(num)) {
            if (uniqueNums.includes(num)) {
                duplicatedNums.push(num);
                uniqueNums.splice(uniqueNums.indexOf(num), 1);
            } else {
                uniqueNums.push(num);
            }
        }
    });
    return uniqueNums.length > 0 ? uniqueNums.reduce((a, b) => a + b) : 0;
};
// @lc code=end


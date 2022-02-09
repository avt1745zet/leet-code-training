/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    let result: Array<Array<number>> = new Array<Array<number>>();
    nums.sort((a, b) => a - b);

    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i - 1] !== undefined && nums[i] === nums[i - 1]) {
            continue;
        }

        let leftIndex: number = i + 1;
        let rightIndex: number = nums.length - 1;
        let expectedSum: number = -nums[i];

        while (leftIndex < rightIndex) {
            let sum: number = nums[leftIndex] + nums[rightIndex];
            if (sum === expectedSum) {
                result.push([nums[i], nums[leftIndex], nums[rightIndex]]);
                while (nums[leftIndex] === nums[leftIndex + 1]) {
                    leftIndex++;
                }
                leftIndex++;
                while (nums[rightIndex] === nums[rightIndex - 1]) {
                    rightIndex--;
                }
                rightIndex--;
            } else if (sum < expectedSum) {
                while (nums[leftIndex] === nums[leftIndex + 1]) {
                    leftIndex++;
                }
                leftIndex++;
            } else {
                while (nums[rightIndex] === nums[rightIndex - 1]) {
                    rightIndex--;
                }
                rightIndex--;
            }
        }
    }
    return result;
};
// @lc code=end


/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
    let result: number = 0;
    let leftIndex: number = 0;
    let rightIndex: number = height.length - 1;
    while (leftIndex < rightIndex) {
        result = Math.max(result, Math.min(
            height[leftIndex], height[rightIndex]) * (rightIndex - leftIndex));
        if (height[leftIndex] < height[rightIndex]) {
            leftIndex++;
        } else {
            rightIndex--;
        }
    }
    return result;
};
// @lc code=end


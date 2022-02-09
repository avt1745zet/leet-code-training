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
    while (rightIndex != leftIndex) {
        let leftHight: number = height[leftIndex];
        let rightHight: number = height[rightIndex];
        result = Math.max(
            result, Math.min(leftHight, rightHight) * (rightIndex - leftIndex));

        if (leftHight > rightHight) {
            rightIndex--;
        } else {
            leftIndex++;
        }
    }
    return result;
};
// @lc code=end


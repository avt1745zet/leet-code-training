/*
 * @lc app=leetcode id=350 lang=typescript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
    let arr: Array<Array<number>> = [nums1, nums2].sort((a, b) => a.length - b.length);
    for (let i: number = 0; i < arr[0].length;) {
        let index: number = arr[1].indexOf(arr[0][i]);
        if (index >= 0) {
            arr[1].splice(index, 1);
            i++;
        } else {
            arr[0].splice(i, 1);
        }
    }
    return arr[0];
};
// @lc code=end


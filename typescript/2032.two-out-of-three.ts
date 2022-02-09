/*
 * @lc app=leetcode id=2032 lang=typescript
 *
 * [2032] Two Out of Three
 */

// @lc code=start
function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
    let result: Array<number> = new Array<number>();

    let totalNums: Array<number> =
        removeArraySameItem([...nums1, ...nums2, ...nums3]);

    totalNums.forEach(num => {
        if ((nums1.includes(num) ? 1 : 0) +
            (nums2.includes(num) ? 1 : 0) +
            (nums3.includes(num) ? 1 : 0) > 1) {
            result.push(num);
        }
    });
    
    return result;
};

function removeArraySameItem<T>(array: Array<T>): Array<T> {
    let result: Array<T> = new Array<T>();
    array.forEach(item => {
        if (!result.includes(item)) {
            result.push(item);
        }
    });
    return result;
}
// @lc code=end


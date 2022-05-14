/*
 * @lc app=leetcode id=581 lang=typescript
 *
 * [581] Shortest Unsorted Continuous Subarray
 */

// @lc code=start
function findUnsortedSubarray(nums: number[]): number {
    let min: number = Infinity;
    let maxIndex: number = 0;
    let minIndex: number = 0;

    for( let i: number = 0; i < nums.length - 1; i++ ){
        if( nums[i + 1] < nums[i]){
            if(min === Infinity)
                minIndex = i;
            min = Math.min(min, nums[i + 1])
            nums[i + 1] = nums[i];
            maxIndex = i + 1;
        }
    }

    for( let i: number = 0; i < minIndex; i++ ){
        if( min < nums[i]){
            minIndex = i;
            break;
        }
    }

    return min === Infinity? 0: maxIndex - minIndex + 1;
};
// @lc code=end


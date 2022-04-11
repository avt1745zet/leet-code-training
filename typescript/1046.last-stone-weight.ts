/*
 * @lc app=leetcode id=1046 lang=typescript
 *
 * [1046] Last Stone Weight
 */

// @lc code=start
function lastStoneWeight(stones: number[]): number {
    stones.sort((a, b) => b - a);
    while (stones.length > 1) {
        if (stones[0] === stones[1]) {
            stones.splice(0, 2);
        } else if (stones[0] > stones[1]) {
            stones[0] = stones[0] - stones[1];
            stones.splice(1, 1);
        } else {
            stones[1] = stones[1] - stones[0];
            stones.splice(0, 1);
        }
        stones.sort((a, b) => b - a);
    }
    return stones.length > 0 ? stones[0] : 0;
};
// @lc code=end


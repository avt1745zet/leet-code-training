/*
 * @lc app=leetcode id=605 lang=typescript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    for (let i: number = 0; i < flowerbed.length && n > 0; i++) {
        if (flowerbed[i] === 0 &&
            (flowerbed[i - 1] === undefined || flowerbed[i - 1] === 0) &&
            (flowerbed[i + 1] === undefined || flowerbed[i + 1] === 0)) {
            n--;
            i++;
        }
    }
    return n === 0;
};
// @lc code=end


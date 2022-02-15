/*
 * @lc app=leetcode id=1974 lang=typescript
 *
 * [1974] Minimum Time to Type Word Using Special Typewriter
 */

// @lc code=start
function minTimeToType(word: string): number {
    let result: number = 0;
    let currentIndex: number = 'a'.charCodeAt(0);
    let typeTime: number = 1;

    for (let i: number = 0; i < word.length; i++) {
        const targetIndex: number = word.charCodeAt(i);
        if (currentIndex != targetIndex) {
            let minSec: number = Math.min(
                26 - Math.abs(targetIndex - currentIndex),
                Math.abs(targetIndex - currentIndex)
            );
            currentIndex = targetIndex;
            result += (minSec + typeTime);
        } else {
            result += typeTime;
        }
    }
    return result;
};
// @lc code=end


/*
 * @lc app=leetcode id=1668 lang=typescript
 *
 * [1668] Maximum Repeating Substring
 */

// @lc code=start
function maxRepeating(sequence: string, word: string): number {
    let result: number = 0;
    for (let i: number = 0; i < sequence.length; i++) {
        let repeatCount: number = 0;
        let wordIdx: number = 0;
        for (let j: number = i; j < sequence.length; j++) {
            if (sequence[j] === word[wordIdx]) {
                if (wordIdx < word.length - 1) {
                    wordIdx++;
                } else {
                    wordIdx = 0;
                    repeatCount++;
                    result = Math.max(result, repeatCount);
                }
            } else {
                break;
            }
        }
    }
    return result;
};
// @lc code=end


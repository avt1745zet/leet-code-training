/*
 * @lc app=leetcode id=2000 lang=typescript
 *
 * [2000] Reverse Prefix of Word
 */

// @lc code=start
function reversePrefix(word: string, ch: string): string {
    let result: string = word;
    for (let i: number = 0; i < word.length; i++) {
        if (word[i] === ch) {
            result = '';
            for (let j: number = i; j >= 0; j--) {
                result += word[j];
            }
            result += word.slice(i + 1, word.length);
            break;
        }
    }
    return result;
};
// @lc code=end


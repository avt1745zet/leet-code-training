/*
 * @lc app=leetcode id=520 lang=typescript
 *
 * [520] Detect Capital
 */

// @lc code=start
function detectCapitalUse(word: string): boolean {
    let result: boolean = true;
    let isFirstCharUppercase: boolean = word.charCodeAt(0) < 97;
    let isLastCharUppercase: boolean = isFirstCharUppercase;
    for (let i: number = 1; i < word.length; i++) {
        let isCurrentCharUppercase: boolean = word[i].charCodeAt(0) < 97;
        if (isFirstCharUppercase) {
            if (!isLastCharUppercase && isCurrentCharUppercase) {
                result = false;
                break;
            }
            if (i > 1 && isLastCharUppercase && !isCurrentCharUppercase) {
                result = false;
                break;
            }
        } else {
            if (isCurrentCharUppercase) {
                result = false;
                break;
            }
        }
        isLastCharUppercase = word[i].charCodeAt(0) < 97;
    }
    return result;
};
// @lc code=end


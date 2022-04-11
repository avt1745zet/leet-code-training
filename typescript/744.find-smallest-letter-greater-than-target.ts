/*
 * @lc app=leetcode id=744 lang=typescript
 *
 * [744] Find Smallest Letter Greater Than Target
 */

// @lc code=start
function nextGreatestLetter(letters: string[], target: string): string {
    let result: string;
    const targetCharCode: number = target.charCodeAt(0);
    for (let i: number = 0; i < letters.length; i++) {
        if (letters[i].charCodeAt(0) > targetCharCode) {
            result = letters[i];
            break;
        }
    }
    if (!result)
        result = letters[0];
    return result;
};
// @lc code=end


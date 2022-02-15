/*
 * @lc app=leetcode id=1935 lang=typescript
 *
 * [1935] Maximum Number of Words You Can Type
 */

// @lc code=start
function canBeTypedWords(text: string, brokenLetters: string): number {
    let result: number = 0;
    let words: Array<string> = text.split(' ');
    let brokenLetterArr: Array<string> = brokenLetters.split('');
    words.forEach(word => {
        let hasBrokenLatter: boolean = false;
        for (let i: number = 0; i < brokenLetterArr.length; i++) {
            if (word.includes(brokenLetterArr[i])) {
                hasBrokenLatter = true;
                break;
            }
        }
        if (!hasBrokenLatter) {
            result++;
        }
    });
    return result;
};
// @lc code=end


/*
 * @lc app=leetcode id=1684 lang=typescript
 *
 * [1684] Count the Number of Consistent Strings
 */

// @lc code=start
function countConsistentStrings(allowed: string, words: string[]): number {
    let result: number = 0;

    let allowedArr: Array<string> = allowed.split('');

    words.forEach(word => {
        let pass: boolean = true;
        for (let i: number = 0; i < word.length; i++) {
            if (!allowedArr.includes(word[i])) {
                pass = false;
                break;
            }
        }
        if (pass) {
            result++;
        }
    });

    return result;
};
// @lc code=end


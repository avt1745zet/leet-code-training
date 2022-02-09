/*
 * @lc app=leetcode id=2042 lang=typescript
 *
 * [2042] Check if Numbers Are Ascending in a Sentence
 */

// @lc code=start
function areNumbersAscending(s: string): boolean {
    let result: boolean = true;
    let lastNum: number = -Infinity;
    for (let i: number = 0; i < s.length; i++) {
        let num: number = parseInt(s[i]);
        if (isNaN(num)) {
            continue;
        } else {
            // check num length
            for (let j: number = i + 1; j < s.length; j++) {
                let followNum: number = parseInt(s[j]);
                if (isNaN(followNum)) {
                    i = j;
                    break;
                } else {
                    num = num * 10 + followNum;
                }
            }
        }
        if (num > lastNum) {
            lastNum = num;
        } else {
            result = false;
            break;
        }
    }
    return result;
};
// @lc code=end


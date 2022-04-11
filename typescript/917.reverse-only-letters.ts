/*
 * @lc app=leetcode id=917 lang=typescript
 *
 * [917] Reverse Only Letters
 */

// @lc code=start
function reverseOnlyLetters(s: string): string {
    let arr1: Array<string> = new Array<string>(s.length);
    let arr2: Array<string> = new Array<string>();
    for (let i: number = 0; i < s.length; i++) {
        if ((s[i].charCodeAt(0) >= 97 && s[i].charCodeAt(0) <= 122) ||
            (s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90)) {
            arr2.push(s[i]);
        } else {
            arr1[i] = s[i];
        }
    }
    arr2.reverse();
    for (let i: number = 0; i < arr1.length; i++) {
        if (arr1[i] === undefined) {
            arr1[i] = arr2.splice(0, 1)[0];
        }
    }
    return arr1.join('');
};
// @lc code=end


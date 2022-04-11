/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
    let result: boolean = true;
    let str: string = '';

    for (let i: number = 0; i < s.length; i++) {
        //* A ~ Z (65 ~ 90)
        //* a ~ z (97 ~ 122)
        //* 0 ~ 9 (48 ~ 57)
        let charCode: number = s[i].charCodeAt(0);
        if (charCode > 64 && charCode < 91) {
            str += s[i].toLowerCase();
        } else if ((charCode > 96 && charCode < 123) || (charCode > 47 && charCode < 58)) {
            str += s[i];
        }
    }

    for (let i: number = 0;
        i < (s.length % 2 === 0 ? s.length / 2 : (s.length - 1) / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            result = false;
            break;
        }
    }

    return result;
};
// @lc code=end


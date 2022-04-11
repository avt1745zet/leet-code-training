/*
 * @lc app=leetcode id=564 lang=typescript
 *
 * [564] Find the Closest Palindrome
 */

// @lc code=start
function nearestPalindromic(n: string): string {
    const isPalindromic = (str: string) => {
        for (let i: number = 0; i <= str.length - 1 - i; i++) {
            if (str[i] !== str[str.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
    let num: number = parseInt(n);

    let leftStr: string = n.slice(0, n.length % 2 === 1 ? (n.length + 1) / 2 : n.length / 2);

    let n1 = parseInt(leftStr) + 1;
    let n2 = parseInt(leftStr);
    let n3 = parseInt(leftStr) - 1;
    99 999 9999 99999
    if (n1.toString().length > leftStr.length) {

    } else {
        if (n1.toString().length % 2 === 0) {
            n1 = parseInt(n1.toString() + n1.toString().split('').reverse().join(''));
        } else {
            n1 = parseInt(Math.floor(n1 / 10).toString() + (n1 % 10) + Math.floor(n1 / 10).toString().split('').reverse().join(''));
        }
    }

    if (n3.toString().length < leftStr.length) {

    } else {

    }
};
// @lc code=end


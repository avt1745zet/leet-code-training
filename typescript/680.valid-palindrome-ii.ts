/*
 * @lc app=leetcode id=680 lang=typescript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
function validPalindrome(s: string): boolean {
    const isPalindromic = (str: string) => {
        for (let i: number = 0; i <= str.length - 1 - i; i++) {
            if (str[i] !== str[str.length - 1 - i]) {
                return i + ',' + (str.length - 1 - i);
            }
        }
        return 'true';
    }
    let p: string = isPalindromic(s);
    if (p === 'true') {
        return true;
    } else {
        let indices: Array<number> = p.split(',').map(str => parseInt(str));
        for (let i: number = 0; i < indices.length; i++) {
            if (isPalindromic(s.slice(0, indices[i]) + s.slice(indices[i] + 1, s.length)) === 'true') {
                return true;
            }
        }
    }
    return false;
};
// @lc code=end


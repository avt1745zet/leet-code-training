/*
 * @lc app=leetcode id=1763 lang=typescript
 *
 * [1763] Longest Nice Substring
 */

// @lc code=start
function longestNiceSubstring(s: string): string {
    let result: string = '';

    const getPairLetter = (letter: string) => {
        let result: string = '';
        let charCode: number = letter.charCodeAt(0);
        //* letter is uppercase.
        if (charCode < 97) {
            result = letter.toLowerCase();
        } else {
            result = letter.toUpperCase();
        }
        return result;
    }

    let substring: string = '';
    let isNiceSubstring: boolean = false;
    for (let i: number = 0; i < s.length; i++) {
        if (i === 0 || s[i] === s[i - 1]) {
            substring += s[i];
        } else {
            let pairLetter: string = getPairLetter(s[i]);
            if (pairLetter === s[i - 1]) {
                substring += s[i];
                isNiceSubstring = true;
            } else {
                if (isNiceSubstring && i + 1 <= s.length - 1 && (s[i] === s[i + 1] || pairLetter === s[i + 1])) {
                    substring += s[i];
                } else {
                    substring = s[i];
                }
                isNiceSubstring = false;
            }
        }
        if (isNiceSubstring && substring.length > result.length)
            result = substring;
    }

    return result;
};
// @lc code=end


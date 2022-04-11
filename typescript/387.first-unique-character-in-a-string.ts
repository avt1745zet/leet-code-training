/*
 * @lc app=leetcode id=387 lang=typescript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
function firstUniqChar(s: string): number {
    let copy: string = s;
    for (let i: number = 0; i < s.length;) {
        let letter: string = s[i];
        let index: number = s.indexOf(letter, i + 1);
        if (index >= 0) {
            s = s.slice(0, i) + s.slice(i + 1, s.length);
            index -= 1;
        } else {
            return copy.indexOf(letter);
        }
        while (index >= 0) {
            s = s.slice(0, index) + s.slice(index + 1, s.length);
            index = s.indexOf(letter, i);
        }
    }
    return -1;
};
// @lc code=end


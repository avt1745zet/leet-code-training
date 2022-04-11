/*
 * @lc app=leetcode id=1859 lang=typescript
 *
 * [1859] Sorting the Sentence
 */

// @lc code=start
function sortSentence(s: string): string {
    let arr: Array<string> = new Array<string>();
    for (let i: number = 0; i < s.length; i++) {
        let order: number = parseInt(s[i]) - 1;
        if (!isNaN(order)) {
            let j: number = i - 1;
            while (s[j] !== undefined && s[j] !== ' ') {
                j--;
            }
            j++;
            arr[order] = s.slice(j, i);
        }
    }
    return arr.join(' ');
};
// @lc code=end


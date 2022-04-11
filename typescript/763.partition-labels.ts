/*
 * @lc app=leetcode id=763 lang=typescript
 *
 * [763] Partition Labels
 */

// @lc code=start
function partitionLabels(s: string): number[] {
    let result: Array<number> = new Array<number>();
    let lidx: number = 0;
    let ridx: number = 0;
    let letters: Array<string> = new Array<string>();
    for (let i: number = lidx; i < s.length; i++) {
        if (letters.includes(s[i])) {
            if (i === ridx) {
                letters = new Array<string>();
                result.push(ridx - lidx + 1);
                lidx = ridx + 1;
                ridx = lidx;
            }
            continue;
        }
        for (let j: number = ridx; j < s.length; j++) {
            if (s[j] === s[i]) {
                ridx = j;
            }
        }
        letters.push(s[i]);
        if (lidx === ridx) {
            letters = new Array<string>();
            result.push(ridx - lidx + 1);
            lidx = ridx + 1;
            ridx = lidx;
        }
    }
    return result;
};
// @lc code=end


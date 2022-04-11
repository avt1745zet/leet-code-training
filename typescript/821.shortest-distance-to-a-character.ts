/*
 * @lc app=leetcode id=821 lang=typescript
 *
 * [821] Shortest Distance to a Character
 */

// @lc code=start
function shortestToChar(s: string, c: string): number[] {
    let result: Array<number> = new Array<number>(s.length);
    let indices: Array<number> = new Array<number>();
    for (let i: number = 0; i < s.length; i++) {
        if (s[i] === c)
            indices.push(i);
    }
    for (let i: number = 0; indices.length > 0; i++) {
        for (let j: number = 0; j < indices.length;) {
            let l: number = indices[j] - i;
            let r: number = indices[j] + i;
            let completed: boolean = true;
            if (l > -1 && result[l] === undefined) {
                result[l] = i;
                completed = false;
            }
            if (r < s.length && result[r] === undefined) {
                result[r] = i;
                completed = false;
            }
            if (completed) {
                indices.splice(j, 1);
            } else {
                j++;
            }
        }
    }
    return result;
};
// @lc code=end


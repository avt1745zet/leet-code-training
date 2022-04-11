/*
 * @lc app=leetcode id=1640 lang=typescript
 *
 * [1640] Check Array Formation Through Concatenation
 */

// @lc code=start
function canFormArray(arr: number[], pieces: number[][]): boolean {
    for (let i: number = 0; i < arr.length;) {
        let matchIndex: number = pieces.findIndex(piece => piece[0] === arr[i]);
        if (matchIndex >= 0) {
            for (let j: number = 1; j < pieces[matchIndex].length; j++) {
                i++;
                if (pieces[matchIndex][j] !== arr[i]) {
                    return false;
                }
            }
            pieces.splice(matchIndex, 1);
        } else {
            return false;
        }
        i++;
    }
    return true;
};
// @lc code=end


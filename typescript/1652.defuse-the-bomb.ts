/*
 * @lc app=leetcode id=1652 lang=typescript
 *
 * [1652] Defuse the Bomb
 */

// @lc code=start
function decrypt(code: number[], k: number): number[] {
    let result: Array<number> = new Array<number>(code.length);
    for (let i: number = 0; i < code.length; i++) {
        result[i] = 0;
        let idx: number = i;
        if (k > 0) {
            for (let j: number = 0; j < k; j++) {
                idx++;
                if (idx === code.length)
                    idx = 0;
                result[i] += code[idx];
            }
        } else if (k < 0) {
            for (let j: number = 0; j > k; j--) {
                idx--;
                if (idx === -1)
                    idx = code.length - 1;
                result[i] += code[idx];
            }
        }
    }
    return result;
};
// @lc code=end


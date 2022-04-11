/*
 * @lc app=leetcode id=1417 lang=typescript
 *
 * [1417] Reformat The String
 */

// @lc code=start
function reformat(s: string): string {
    let result: string = '';

    let letters: Array<string> = new Array<string>();
    let nums: Array<string> = new Array<string>();
    for (let i: number = 0; i < s.length; i++) {
        let num: number = parseInt(s[i]);
        if (isNaN(num)) {
            letters.push(s[i]);
        } else {
            nums.push(s[i]);
        }
    }
    let diff: number = Math.abs(letters.length - nums.length);
    if (diff < 2) {
        let inputs: Array<Array<string>> = [letters, nums].sort((a, b) => b.length - a.length);
        for (let i: number = 0, current: number = 0; i < inputs[current].length;) {
            result += inputs[current][i];
            i = current === 1 ? i + 1 : i;
            current = current === 0 ? 1 : 0;
        }
    }
    return result;
};
// @lc code=end


/*
 * @lc app=leetcode id=557 lang=typescript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
function reverseWords(s: string): string {
    let arr: Array<string> = s.split(' ');
    for (let i: number = 0; i < arr.length; i++) {
        let temp: string = arr[i];
        arr[i] = '';
        for (let j: number = temp.length - 1; j > -1; j--) {
            arr[i] += temp[j];
        }
    }
    return arr.join(' ');
};
// @lc code=end


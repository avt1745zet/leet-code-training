/*
 * @lc app=leetcode id=316 lang=typescript
 *
 * [316] Remove Duplicate Letters
 */

// @lc code=start
function removeDuplicateLetters(s: string): string {
    let result: string = '';

    let lastIndices: Array<number> = new Array<number>(26);
    for (let i: number = 0; i < s.length; i++) {
        lastIndices[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] = i;
    }

    let seen: Array<boolean> = new Array<boolean>(26);

    let arr: Array<number> = new Array<number>();

    for (let i: number = 0; i < s.length; i++) {
        let num: number = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if (seen[num])
            continue;
        while (arr.length > 0 && arr[arr.length - 1] > num && i < lastIndices[arr[arr.length - 1]]) {
            seen[arr.pop()] = false;
        }
        arr.push(num);
        seen[num] = true;
    }

    while (arr.length > 0)
        result += String.fromCharCode(arr.shift() + 'a'.charCodeAt(0));

    return result;
};
// @lc code=end


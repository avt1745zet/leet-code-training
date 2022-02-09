/*
 * @lc app=leetcode id=2062 lang=typescript
 *
 * [2062] Count Vowel Substrings of a String
 */

// @lc code=start

function countVowelSubstrings(word: string): number {
    let result: number = 0;
    const requiredChars: Array<string> = ['a', 'i', 'u', 'e', 'o'];
    const arr: Array<string> = word.split(/[^?!aioue]/).filter(str => str.length >= 5);
    for (let i: number = 0; i < arr.length; i++) {
        for (let j: number = 0; j < arr[i].length - 4; j++) {
            let blockSize: number = 5;
            while (j + blockSize <= arr[i].length) {
                let isWordPass: boolean = true;
                let subWord: string = arr[i].substring(j, j + blockSize);
                for (let k: number = 0; k < requiredChars.length; k++) {
                    if (!subWord.includes(requiredChars[k])) {
                        isWordPass = false
                        break;
                    }
                }
                if (isWordPass) {
                    result++;
                    blockSize++;
                } else {
                    blockSize++;
                }
            }
        }
    }
    return result;
};
// @lc code=end


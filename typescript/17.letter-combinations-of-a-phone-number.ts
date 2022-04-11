/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
const numberLettersMap: Map<number, Array<string>> = new Map<number, Array<string>>([
    [2, ['a', 'b', 'c']],
    [3, ['d', 'e', 'f']],
    [4, ['g', 'h', 'i']],
    [5, ['j', 'k', 'l']],
    [6, ['m', 'n', 'o']],
    [7, ['p', 'q', 'r', 's']],
    [8, ['t', 'u', 'v']],
    [9, ['w', 'x', 'y', 'z']]
])

function letterCombinations(digits: string, curInput: Array<string> = []): string[] {
    if (digits.length === 0)
        return curInput;

    let arr: Array<string> = [];
    const digit: number = parseInt(digits[0]);
    const letters: Array<string> = numberLettersMap.get(digit);
    if (curInput.length === 0) {
        arr = [...letters];
    } else {
        for (let i: number = 0; i < curInput.length; i++) {
            for (let j: number = 0; j < letters.length; j++) {
                arr.push(curInput[i] + letters[j]);
            }
        }
    }
    return letterCombinations(digits.slice(1, digits.length), arr);
};
// @lc code=end


/*
 * @lc app=leetcode id=345 lang=typescript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
function reverseVowels(s: string): string {
    let result: string = s;
    let vowelsCharArray: Array<string> = new Array<string>();
    let vowelsIndexArray: Array<number> = new Array<number>();
    for (let i: number = 0; i < s.length; i++) {
        if (isVowel(s[i])) {
            vowelsCharArray.push(s[i]);
            vowelsIndexArray.push(i);
        }
    }
    vowelsCharArray.reverse();
    for (let i: number = 0; i < vowelsCharArray.length; i++) {
        result = replaceStringByIndex(result, vowelsCharArray[i], vowelsIndexArray[i]);
    }
    return result;
};

function replaceStringByIndex(str: string, replacer: string, index: number): string {
    return str.slice(0, index) + replacer + str.slice(index + 1, str.length);
}

function isVowel(char: string): boolean {
    return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(char);
}
// @lc code=end


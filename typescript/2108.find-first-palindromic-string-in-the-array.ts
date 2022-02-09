/*
 * @lc app=leetcode id=2108 lang=typescript
 *
 * [2108] Find First Palindromic String in the Array
 */

// @lc code=start
function firstPalindrome(words: string[]): string {
    let result: string = '';
    for (let i: number = 0; i < words.length; i++) {
        if (isPalindrome(words[i])) {
            result = words[i];
            break;
        }
    }
    return result;
};

function isPalindrome(str: string): boolean {
    let result: boolean = true;
    let leftIndex: number = str.length % 2 === 0 ? str.length / 2 - 1 : (str.length - 1) / 2 - 1;
    let rightIndex: number = str.length % 2 === 0 ? str.length / 2 : (str.length - 1) / 2 + 1;
    while (leftIndex >= 0 && rightIndex < str.length) {
        if (str[leftIndex] != str[rightIndex]) {
            result = false;
            break;
        }
        leftIndex--;
        rightIndex++;
    }
    return result;
}
// @lc code=end


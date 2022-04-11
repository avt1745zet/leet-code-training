/*
 * @lc app=leetcode id=1880 lang=typescript
 *
 * [1880] Check if Word Equals Summation of Two Words
 */

// @lc code=start
function isSumEqual(firstWord: string, secondWord: string, targetWord: string): boolean {
    let result: boolean = false;
    const strToNum = (str: string) => {
        let result: number = 0;
        const charNumberMap: Map<string, number> = new Map<string, number>([
            ['a', 0], ['b', 1], ['c', 2], ['d', 3], ['e', 4],
            ['f', 5], ['g', 6], ['h', 7], ['i', 8], ['j', 9]
        ]);
        for (let i: number = 0; i < str.length; i++) {
            result += charNumberMap.get(str[str.length - 1 - i]) * Math.pow(10, i);
        }
        return result;
    }
    let firstNum: number = strToNum(firstWord);
    let secondNum: number = strToNum(secondWord);
    let targetNum: number = strToNum(targetWord);
    result = firstNum + secondNum === targetNum;
    return result;
};
// @lc code=end


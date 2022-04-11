/*
 * @lc app=leetcode id=12 lang=typescript
 *
 * [12] Integer to Roman
 */

// @lc code=start
function intToRoman(num: number): string {
    let result: string = '';
    const findLargest = (num: number) => {
        let result: { symbol: string, value: number };
        const romanNumber: Array<{ symbol: string, value: number }> = [
            { symbol: 'I', value: 1 }, { symbol: 'IV', value: 4 },
            { symbol: 'V', value: 5 }, { symbol: 'IX', value: 9 },
            { symbol: 'X', value: 10 }, { symbol: 'XL', value: 40 },
            { symbol: 'L', value: 50 }, { symbol: 'XC', value: 90 },
            { symbol: 'C', value: 100 }, { symbol: 'CD', value: 400 },
            { symbol: 'D', value: 500 }, { symbol: 'CM', value: 900 },
            { symbol: 'M', value: 1000 }
        ];
        for (let i: number = romanNumber.length - 1; i >= 0; i--) {
            if (romanNumber[i].value <= num) {
                result = romanNumber[i];
                break;
            }
        }
        return result;
    }
    while (num > 0) {
        let romanNumber: { symbol: string, value: number } = findLargest(num);
        num -= romanNumber.value;
        result += romanNumber.symbol;
    }
    return result;
};
// @lc code=end


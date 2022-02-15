/*
 * @lc app=leetcode id=367 lang=typescript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
    let sqrt: number = 0;
    let arr: Array<string> = [];
    let str: string = num.toString();
    while (str.length > 0) {
        arr.push(str.slice(str.length - 2, str.length));
        str = str.slice(0, -2);
    }
    arr.reverse();

    let remainingNum: number = 0;
    arr.forEach(str => {
        let num: number = Number(str) + remainingNum;
        for (let i: number = 9; i >= 0; i--) {
            let difference: number = num - (sqrt * 20 + i) * i;
            if (difference >= 0) {
                remainingNum = difference * 100;
                sqrt = sqrt * 10 + i;
                break;
            }
        }
    });
    return sqrt * sqrt === num;
};
// @lc code=end


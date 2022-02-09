/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
//* According to https://zh.wikipedia.org/wiki/%E5%B9%B3%E6%96%B9%E6%A0%B9#%E9%95%B7%E9%99%A4%E5%BC%8F%E7%AE%97%E6%B3%95
function mySqrt(x: number): number {
    let result: number = 0;
    let arr: Array<string> = [];
    let xStr: string = x.toString();
    while (xStr.length > 0) {
        arr.push(xStr.slice(xStr.length - 2, xStr.length));
        xStr = xStr.slice(0, -2);
    }
    arr.reverse();

    let remainingNum: number = 0;
    arr.forEach(str => {
        let num: number = Number(str) + remainingNum;
        for (let i: number = 9; i >= 0; i--) {
            let difference: number = num - (result * 20 + i) * i;
            if (difference >= 0) {
                remainingNum = difference * 100;
                result = result * 10 + i;
                break;
            }
        }
    });

    return result;
};
// @lc code=end


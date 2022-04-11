/*
 * @lc app=leetcode id=728 lang=typescript
 *
 * [728] Self Dividing Numbers
 */

// @lc code=start
function selfDividingNumbers(left: number, right: number): number[] {
    let result: Array<number> = new Array<number>();
    const isSelfDivdingNumber = (num: number) => {
        let temp: number = num;
        while (temp !== 0) {
            if (num % (temp % 10) === 0) {
                temp = Math.floor(temp / 10);
            } else {
                return false;
            }
        }
        return true;
    }
    for (let i: number = left; i <= right; i++) {
        if (isSelfDivdingNumber(i)) {
            result.push(i);
        }
    }
    return result;
};
// @lc code=end


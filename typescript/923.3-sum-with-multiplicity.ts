/*
 * @lc app=leetcode id=923 lang=typescript
 *
 * [923] 3Sum With Multiplicity
 */

// @lc code=start
function threeSumMulti(arr: number[], target: number): number {
    let result: number = 0;
    const c = (a: number, b: number) => {
        let result: number = 1;
        for (let i: number = a; i > (a - b); i--) {
            result *= i;
        }
        for (let i: number = 2; i <= b; i++) {
            result /= i;
        }
        return result;
    };
    let numberAmountMap: Map<number, number> = new Map<number, number>();
    arr.forEach(val => {
        numberAmountMap.set(val,
            numberAmountMap.has(val) ? numberAmountMap.get(val) + 1 : 1);
    });
    let nums: Array<number> = [...numberAmountMap.keys()];
    let sumArr: Array<Array<number>> = new Array<Array<number>>();
    for (let i: number = 0; i < nums.length; i++) {
        let num1: number = nums[i];
        for (let j: number = i; j < nums.length; j++) {
            if (i === j && numberAmountMap.get(nums[j]) < 2) {
                continue;
            }
            let num2: number = nums[j];
            for (let k: number = j; k < nums.length; k++) {
                if ((i === j && j === k && numberAmountMap.get(nums[k]) < 3) ||
                    (j === k && numberAmountMap.get(nums[k]) < 2)) {
                    continue;
                }
                let num3: number = nums[k];
                if (num1 + num2 + num3 === target) {
                    sumArr.push([num1, num2, num3]);
                    break;
                }
            }
        }
    }
    sumArr.forEach(arr => {
        let numberAmountMap2: Map<number, number> = new Map<number, number>();
        arr.forEach(val => {
            numberAmountMap2.set(val,
                numberAmountMap2.has(val) ? numberAmountMap2.get(val) + 1 : 1);
        });
        let cMultiplicity = 1;
        numberAmountMap2.forEach((amount, num) => {
            cMultiplicity *= c(numberAmountMap.get(num), amount);
        });
        result += cMultiplicity;
    });
    result %= (Math.pow(10, 9) + 7);
    return result;
};
// @lc code=end


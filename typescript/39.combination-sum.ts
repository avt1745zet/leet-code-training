/*
 * @lc app=leetcode id=39 lang=typescript
 *
 * [39] Combination Sum
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
    let result: Array<Array<number>> = new Array<Array<number>>();

    candidates.sort((a, b) => a - b);
    candidates = candidates.filter((val, idx, arr) => (arr[idx - 1] === undefined || val !== arr[idx - 1]));

    sum(candidates, result, target, []);

    return result;
};

function sum(candidates: number[], list: Array<Array<number>>, target: number, tempList: Array<number> = []): void {
    if (target < 0)
        return;
    else if (target === 0) {
        list.push(tempList);
        return;
    }

    for (let i: number = 0; i < candidates.length; i++) {
        sum([...candidates], list, target - candidates[i], [...tempList, candidates[i]]);
        candidates.shift();
        i--;
    }
}
// @lc code=end


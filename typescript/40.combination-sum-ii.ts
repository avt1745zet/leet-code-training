/*
 * @lc app=leetcode id=40 lang=typescript
 *
 * [40] Combination Sum II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
    let result: Array<Array<number>> = new Array<Array<number>>();

    candidates.sort((a, b) => a - b);

    sum(candidates, result, target, []);

    return result;
};

function sum(candidates: number[], list: Array<Array<number>>, target: number, tempList: Array<number> = [], startIndex: number = 0): void {
    if (target < 0)
        return;
    else if (target === 0) {
        list.push(tempList);
        return;
    }

    for (let i: number = startIndex; i < candidates.length; i++) {
        if (i > startIndex && candidates[i] === candidates[i - 1]) {
            continue;
        }
        sum([...candidates], list, target - candidates[i], [...tempList, candidates[i]], i + 1);
    }
}
// @lc code=end